const toggleResponsiveNavbar = function() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("responsive");
  // if (navbar.className === "navbar") {
  //   navbar.className += " responsive";
  // } else {
  //   navbar.className = "navbar";
  // }
};

const loadHeader = function() {
  fetch("./header.html")
    .then(function(data) {
      return data.text();
    })
    .then(function(html) {
      document.getElementById("header").innerHTML = html;
    });
};

const loadFooter = function() {
  fetch("./footer.html")
    .then(function(data) {
      return data.text();
    })
    .then(function(html) {
      document.getElementById("footer").innerHTML = html;
    });
};

// TODO: does'nt work cause header and footer are still not loaded in order to execute it 
const activate = function() {
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
