let RechercheComponent = function (navbarItems) {
  // If the Window API: find, is not supported
  if (!window.find || typeof window.find !== "function") {
    return;
  }

  this.navbarUl = document.querySelector("#navbar > ul");

  this.createSearchZone();

  this.addListener(navbarItems);
};

// Constantes
RechercheComponent.prototype.CHARACTERS_TO_START_SEARCH = 3;
RechercheComponent.prototype.SEARCH_ICON = "icons/search_icon_white.png";

RechercheComponent.prototype.createSearchZone = function () {
  let li = create("li");
  this.navbarUl.appendChild(li);
  let wrapper = create("div");
  wrapper.id = "search-wrapper";
  wrapper.className = "search";
  li.appendChild(wrapper);

  let div1 = create("div");
  div1.className = "search-input-wrapper";
  wrapper.appendChild(div1);

  // input for search
  let input = create("input");
  this.input = input;
  div1.appendChild(input);
  input.id = "search-input";
  input.className = "search-term";
  input.placeholder = "Rechercher...";

  // button for search
  let button = create("button");
  this.button = button;
  div1.appendChild(button);
  button.type = "submit";
  button.id = "search-button";
  button.className = "searchButton";
  let img = create("img");
  button.appendChild(img);
  img.src = this.SEARCH_ICON;
  img.alt = "search";
};

RechercheComponent.prototype.getActivePage = function (navbarItems) {
  for (let index = 0; index < navbarItems.length; index++) {
    if (navbarItems[index].classList.contains("active")) {
      return navbarItems[index];
    }
  }

  return false;
};

RechercheComponent.prototype.addListener = function (navbarItems) {
  this.index = 0;
  this.everFound = false;
  this.lastPageFoundIn;

  // To Search from the beginning
  this.input.addEventListener("keyup", (event) => {
    this.index = 0;
    this.everFound = false;
    this.lastPageFoundIn = null;
    this.initPage = null;
  });
  this.button.addEventListener("blur", (event) => {
    this.index = 0;
    this.everFound = false;
    this.lastPageFoundIn = null;
    this.initPage = null;
  });

  this.button.addEventListener("click", (event) => {
    // If the minimum number of characters is entered
    if (this.input.value.length >= this.CHARACTERS_TO_START_SEARCH) {
      event.preventDefault();
      this.initPage = this.getActivePage(navbarItems);

      let found = false;

      if (this.index < navbarItems.length) {
        let event = new Event("click");
        // used in HistoryComponent, to not save it in the stack history
        event.fromSearch = true;

        // Go to the target page
        navbarItems[this.index].dispatchEvent(event);

        do {
          // Search in the page
          found = window.find(
            this.input.value,
            false,
            false,
            false,
            false,
            false
          );

          // If we found a result
          if (found) {
            this.everFound = true;
            this.lastPageFoundIn = navbarItems[this.index];
            break;
          } else {
            // Try in the nextPage
            this.index++;

            // No next page
            if (this.index == navbarItems.length) break;

            let event = new Event("click");
            // used in HistoryComponent, to not save it in the stack history
            event.fromSearch = true;

            // Go to the target page
            navbarItems[this.index].dispatchEvent(event);
          }
        } while (
          // While there is no result, and there are other pages to search in : repeat
          this.index < navbarItems.length
        );
      }

      // If no result if found
      if (!found) {
        // If we ever found a result before this search
        if (this.everFound) {
          let event = new Event("click");
          // used in HistoryComponent
          event.fromSearch = true;
          try {
            // Return to the last page in which we found a result
            this.lastPageFoundIn.dispatchEvent(event);
          } catch (e) {}
          showNotif(`Pas d'autre résultat`, null, "icons/not-found.png");
        }
        // If never a result was found
        else {
          showNotif(`Aucun résultat trouvé`, null, "icons/not-found.png");
          let event = new Event("click");
          // used in HistoryComponent
          event.fromSearch = true;
          try {
            // Return to the first page, in which the user was located before starting search
            this.initPage.dispatchEvent(event);
          } catch (e) {}
        }
      }

      // Search just in the current page
      // if (!window.find(this.input.value, false, false, null, false, false)) {
      //   showNotif("Aucun résultat trouvé", null, "icons/not-found.png");
      // }

      // If the minimum number of characters is not reached yet and the user try to search
    } else {
      showNotif(
        `Veuillez saisir au moins ${this.CHARACTERS_TO_START_SEARCH} caractère${
          this.CHARACTERS_TO_START_SEARCH > 1 ? "s" : ""
        }`,
        null,
        "icons/not-found.png"
      );
    }
  });
};
