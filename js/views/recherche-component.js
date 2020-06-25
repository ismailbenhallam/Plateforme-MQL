let RechercheComponent = function () {
  this.navbarUl = document.querySelector("#navbar > ul");

  this.createSearchZone();

  this.addKeyUpListener();
};

// Constantes
RechercheComponent.prototype.CHARACTERS_TO_START_SEARCH = 3;

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
  input.className = "searchTerm";
  input.placeholder = "Rechercher...";

  //   input.addEventListener("keyup", (event) => {
  //     search(event.target.value);
  //   });

  // button for search
  let button = create("button");
  div1.appendChild(button);
  button.type = "submit";
  button.id = "search-button";
  button.className = "searchButton";
  let img = create("img");
  button.appendChild(img);
  img.src = "icons/search_icon_white.png";
  img.alt = "search";

  // Hide the search icon "onfocus" on search div
  // wrapper.addEventListener("focus", () => {
  input.addEventListener("focus", () => {
    button.style.display = "none";
    if (input.value.length >= this.CHARACTERS_TO_START_SEARCH) {
      input.dispatchEvent(new Event("keyup"));
    }
  });

  input.addEventListener("blur", () => {
    button.style.display = "block";
    this.result.style.display = "none";
  });

  // Search result
  let select = create("select");
  this.result = select;
  wrapper.appendChild(select);
  select.id = "search-result";
  select.className = "search-result";
};

RechercheComponent.prototype.addKeyUpListener = function () {
  this.input.addEventListener("keyup", (event) => {
    if (event.target.value.length >= this.CHARACTERS_TO_START_SEARCH)
      this.result.style.display = "block";
    //   this.input.backgroundColor = "red";
    else this.result.style.display = "none";
  });
};

RechercheComponent.prototype.addResultEntry = function () {};
