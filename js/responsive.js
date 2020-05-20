const toggleResponsiveNavbar = function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("responsive");
  // if (navbar.className === "navbar") {
  //   navbar.className += " responsive";
  // } else {
  //   navbar.className = "navbar";
  // }
};

const activate = function () {
  console.log("executed");
  const elements = document.getElementById("navbar").getElementsByTagName("a");
  for (const a of elements) {
    let href = a.getAttribute("href");
    if (href === null) continue;
    if (href.startsWith(".")) href = href.substring(1);

    if (href == location.pathname) {
      a.classList.add("selected");
      return;
    }
  }
};
