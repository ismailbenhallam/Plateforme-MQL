const NavbarComponent = function (service) {
  this.service = service;
  this.navbarUl = document.querySelector("#navbar > ul");
  this.menuIcon = document.querySelector(
    ".header .nav-bar .nav-list .hamburger"
  );
  this.menu = document.querySelector(".header .nav-bar .nav-list ul");

  this.createNavbarItems();

  this.addNavbarItemsListener();

  this.addHamburgerIconListener();
};

NavbarComponent.prototype.INDEX = "accueil";
// attach this property to the constructor to access it from other components
NavbarComponent.LINKS_SUFFIX = "-link";

NavbarComponent.prototype.createNavbarItems = function () {
  // to use it in a nother component
  this.navbarItems = [];

  this.service.items.forEach((item) => {
    let li = create("li");
    let a = create("a");
    a.id = item.id;

    if (item.target) {
      a.dataset.target = item.target;
      a.href = `#${item.target}`;

      this.navbarItems.push(a);
    } else a.classList.add("shouldnt-be-active");

    a.textContent = item.name;
    li.appendChild(a);
    this.navbarUl.appendChild(li);
    if (
      item.children !== undefined &&
      item.children !== null &&
      item.children.length > 0
    ) {
      let ul = create("ul");
      li.appendChild(ul);
      item.children.forEach((child) => {
        let childLi = create("li");
        let a = create("a");
        childLi.appendChild(a);
        a.id = child.id;
        a.textContent = child.name;
        a.dataset.target = child.target;
        a.href = `#${child.target}`;
        a.dataset.parent = item.id;
        ul.appendChild(childLi);

        this.navbarItems.push(a);
      });
    }
  });
};

NavbarComponent.prototype.addHamburgerIconListener = function () {
  let hamburger = document.querySelector("#navbar .hamburger");
  hamburger.addEventListener("click", () => {
    $("toTop").classList.toggle("hamburgerToTop");
    this.menuIcon.classList.toggle("active");
    this.menu.classList.toggle("active");
  });
};

NavbarComponent.prototype.addNavbarItemsListener = function () {
  window.addEventListener("load", () => {
    let activePage = this.INDEX;

    // if the URL contains "#[pageId]"
    let hrefPage = getCurrentPageId();
    if (hrefPage && $(hrefPage)) {
      activePage = hrefPage;

      // sessionStorage.activePage = activePage;
    } else {
      // To keep the user in the last page visited
      try {
        activePage = sessionStorage.activePage;
        if (activePage == null) {
          activePage = this.INDEX;
        } else location.hash = "#" + activePage;
      } catch (err) {
        activePage = this.INDEX;
      }
    }

    $(this.INDEX).classList.remove("active");
    $(activePage).classList.add("active");
    let activeLink = $(activePage + NavbarComponent.LINKS_SUFFIX);
    activeLink.classList.add("active");

    // if the menu has a parent menu
    if (activeLink.dataset.parent)
      $(activeLink.dataset.parent).classList.add("active");

    // Select the <a> tags with "data-target" attribut
    let links = document.getElementsByTagName("a");
    let navbarLinks = [];
    for (let i = 0; i < links.length; i++) {
      if (links[i].dataset.target != null) {
        navbarLinks.push(links[i]);
      }
    }

    // To access the activePage in the HistoryComponent
    window.firstVisitedPage = activePage;
    window.toTop();

    // Add click listener to navbar links
    for (const link of navbarLinks) {
      link.addEventListener("click", (event) => {
        // Do not execute the default callback
        event.preventDefault();

        // Hide the previous page
        $(activePage).classList.remove("active");

        let activeLink = $(activePage + NavbarComponent.LINKS_SUFFIX);
        activeLink.classList.remove("active");

        // if the menu has a parent menu
        if (activeLink.dataset.parent)
          $(activeLink.dataset.parent).classList.remove("active");

        // Display the new active page
        activePage = link.dataset.target;
        sessionStorage.activePage = activePage;
        link.classList.add("active");
        $(activePage).classList.add("active");
        activeLink = $(activePage + NavbarComponent.LINKS_SUFFIX);
        activeLink.classList.add("active");

        // if the menu has a parent menu
        if (activeLink.dataset.parent)
          $(activeLink.dataset.parent).classList.add("active");

        // Close the navbar
        $("navbar").classList.remove("responsive");

        let hamburger = document.querySelector("#navbar ul");
        hamburger.classList.remove("active");

        window.toTop();
      });
    }
  });
};

NavbarComponent.prototype.getNavbarItems = function () {
  return this.navbarItems;
};
