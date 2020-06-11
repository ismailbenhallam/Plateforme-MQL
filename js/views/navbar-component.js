const NavbarComponent = function (service) {
  this.service = service;
  this.navbarUl = document.querySelector("#navbar > ul");
  this.menu_icon = document.querySelector(
    ".header .nav-bar .nav-list .hamburger"
  );
  this.menu = document.querySelector(".header .nav-bar .nav-list ul");

  this.createNavbarItems();

  this.addNavbarItemsListener();

  this.createSearchZone();

  this.addHamburgerIconListener();
};

NavbarComponent.prototype.createNavbarItems = function () {
  this.service.items.forEach((item) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.id = item.id;
    a.dataset.target = item.target;
    a.textContent = item.name;
    li.appendChild(a);
    this.navbarUl.appendChild(li);
    if (
      item.children !== undefined &&
      item.children !== null &&
      item.children.length > 0
    ) {
      delete a.dataset.target;
      let ul = document.createElement("ul");
      li.appendChild(ul);
      item.children.forEach((child) => {
        let childLi = document.createElement("li");
        let a = document.createElement("a");
        childLi.appendChild(a);
        a.id = child.id;
        a.textContent = child.name;
        a.dataset.target = child.target;
        ul.appendChild(childLi);
      });
      // <li>
      //   <a id="formation-span">Formation</a>
      //   <ul>
      //     <li>
      //       <a>Activités</a>
      //     </li>
      //     <li>
      //       <a>Programme</a>
      //     </li>
      //     <li>
      //       <span>Professeurs</span>
      //     </li>
      //   </ul>
      // <li>
    }
  });
};

NavbarComponent.prototype.createSearchZone = function () {
  let li = document.createElement("li");
  this.navbarUl.appendChild(li);
  let div = document.createElement("div");
  div.className = "search";
  li.appendChild(div);
  let input = document.createElement("input");
  div.appendChild(input);
  input.className = "searchTerm";
  input.placeholder = "Rechercher...";
  input.addEventListener("keyup", (event) => {
    search(event.target.value);
  });
  let button = document.createElement("button");
  div.appendChild(button);
  button.type = "submit";
  button.className = "searchButton";
  let img = document.createElement("img");
  button.appendChild(img);
  img.src = "icons/search_icon_white.png";
  img.alt = "search";
  /*
<li>
  <div class="search">
    <input type="text" class="searchTerm" placeholder="Rechercher..." onkeyup="search(this.value)">
    <button type="submit" class="searchButton">
      <img src="icons/search_icon_white.png" alt="search">
    </button>

  </div>
  <div class="search-res" id="search-res">
  </div>
</li>
*/
};

NavbarComponent.prototype.addHamburgerIconListener = function () {
  let hamburger = document.querySelector("#navbar .hamburger");
  hamburger.addEventListener("click", () => {
    this.menu_icon.classList.toggle("active");
    this.menu.classList.toggle("active");
  });
};

NavbarComponent.prototype.addNavbarItemsListener = function () {
  window.addEventListener("load", function () {
    const INDEX = "presentation";
    const LINKS_SUFFIX = "-link";
    let activePage = INDEX;

    // To keep the user in the last page visited
    try {
      activePage = sessionStorage.activePage;
      if (activePage == null) activePage = INDEX;
      document.getElementById(INDEX).classList.remove("active");
      document.getElementById(activePage).classList.add("active");
      document
        .getElementById(activePage + LINKS_SUFFIX)
        .classList.add("active");
    } catch (err) {
      activePage = INDEX;
    }

    // Select the <a> tags with "data-target" attribut
    let links = document.getElementsByTagName("a");
    let navbarLinks = [];
    for (const link of links) {
      if (link.dataset.target != null) {
        navbarLinks.push(link);
      }
    }

    // Add click listener to navbar links
    for (const link of navbarLinks) {
      link.addEventListener("click", function () {
        window.toTop();

        // Hide the previous page
        document.getElementById(activePage).classList.remove("active");

        document
          .getElementById(activePage + LINKS_SUFFIX)
          .classList.remove("active");

        // Display the new active page
        activePage = link.dataset.target;
        sessionStorage.activePage = activePage;
        link.classList.add("active");
        document.getElementById(activePage).classList.add("active");
        document
          .getElementById(activePage + LINKS_SUFFIX)
          .classList.add("active");

        // Close the navbar
        document.getElementById("navbar").classList.remove("responsive");
      });
    }
  });
};
