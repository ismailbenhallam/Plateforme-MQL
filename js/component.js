const toggleResponsiveNavbar = function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("responsive");
};

const SLOGAN =
  "Première passerelle d’Insertion Professionnelle en Informatique au Maroc";

/********** Listeners for Navbar **********/
window.addEventListener("load", function () {
  addContentCharByChar(document.getElementById("slogan"), SLOGAN);

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

/********** **********/
const displayProgram = function (e) {
  const id = e.target.id;
  let tableId;
  switch (id) {
    case "semestrHehead1":
      tableId = "table1";
      break;
    case "semestrHehead2":
      tableId = "table2";
      break;
    case "semestrHehead3":
      tableId = "table3";
      break;
    case "semestrHehead4":
      tableId = "table4";
      break;
  }
  const table = document.getElementById(tableId);
  if (window.getComputedStyle(table).display === "table") {
    table.style["display"] = "none";
  } else {
    table.style["display"] = "table";
  }
};

const addContentCharByChar = function (
  HTMLElement,
  content,
  delayBetweenCharacters = 35
) {
  HTMLElement.contentText = "";
  for (const index in content) {
    setTimeout(function () {
      HTMLElement.insertAdjacentText("beforeend", content[index]);
    }, delayBetweenCharacters * index);
  }
};

console.log(localStorage);
