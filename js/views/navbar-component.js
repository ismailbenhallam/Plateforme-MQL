const NavbarComponent = function (service) {
  /********** Load navbar items **********/
  let navbarUl = document.querySelector("#navbar > ul");
  service.items.forEach((item) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    // a.classList.add("grow-shadow");
    a.dataset.target = item.target;
    a.id = item.id;
    a.textContent = item.name;
    li.appendChild(a);
    navbarUl.appendChild(li);

    /* Template :
    <li>
      <a id="id" data-target="target">name</a>
    </li>
    */
  });
};

/********** Listeners for Navbar **********/
window.toggleResponsiveNavbar = function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("responsive");
};

window.addEventListener("load", function () {
  // addContentCharByChar(document.getElementById("slogan"), SLOGAN);

  const INDEX = "presentation";
  const LINKS_SUFFIX = "-link";
  let activePage = INDEX;

  // To keep the user in the last page visited
  try {
    activePage = sessionStorage.page;
    if (activePage == null) activePage = INDEX;
    document.getElementById(INDEX).classList.remove("active");
    document.getElementById(activePage).classList.add("active");
    document.getElementById(activePage + LINKS_SUFFIX).classList.add("active");
  } catch (err) {
    console.log("catch");
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
      // Hide the previous page
      document.getElementById(activePage).classList.remove("active");

      document
        .getElementById(activePage + LINKS_SUFFIX)
        .classList.remove("active");

      // Display the new active page
      activePage = link.dataset.target;
      sessionStorage.page = activePage;
      link.classList.add("active");
      document.getElementById(activePage).classList.add("active");

      // Close the navbar
      document.getElementById("navbar").classList.remove("responsive");
    });
  }
});
