const toggleResponsiveNavbar = function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("responsive");
};

/********** Listeners for Navbar **********/
window.addEventListener("load", function () {
  console.log("executed");

  const INDEX = "presentation";
  const LINKS_SUFFIX = "-link";
  let activePage;

  // To keep the user in the last page visited
  try {
    activePage = localStorage.page;
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

      // If a link was highlighted, make it inactive
      if (activePage != INDEX)
        document
          .getElementById(activePage + LINKS_SUFFIX)
          .classList.remove("active");

      // Display the new active page
      activePage = link.dataset.target;
      localStorage.page = activePage;
      link.classList.add("active");
      document.getElementById(activePage).classList.add("active");

      // Close the navbar
      document.getElementById("navbar").classList.remove("responsive");
    });
  }
});

/********** Scroll To Top Button **********/
window.onscroll = function () {
  const toTopBtn = document.getElementById("toTop");
  if (
    document.body.scrollTop > 225 ||
    document.documentElement.scrollTop > 225
  ) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

const topFunction = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
