let RechercheComponent = function () {
  // If the Window API: find, is not supported
  if (!window.find || typeof window.find !== "function") {
    return;
  }

  this.navbarUl = document.querySelector("#navbar > ul");

  this.createSearchZone();

  this.addKeyUpListener();
};

// Constantes
RechercheComponent.prototype.CHARACTERS_TO_START_SEARCH = 2;
RechercheComponent.prototype.SEARCH_ICON = "icons/search_icon_white.png";

// Methods
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

RechercheComponent.prototype.addKeyUpListener = function () {
  this.button.addEventListener("click", (event) => {
    if (this.input.value.length >= this.CHARACTERS_TO_START_SEARCH) {
      if (!window.find(this.input.value, false, false, null, false, false)) {
        showNotif("Aucun résultat trouvé");
      }
    } else {
      showNotif(
        `Veuillez saisir au moins ${this.CHARACTERS_TO_START_SEARCH} caractère${
          this.CHARACTERS_TO_START_SEARCH > 1 ? "s" : ""
        }`
      );
    }
  });
};

RechercheComponent.prototype.addResultEntry = function () {};
