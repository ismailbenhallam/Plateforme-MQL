const toggleResponsiveNavbar = function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("responsive");
  // if (navbar.className === "navbar") {
  //   navbar.className += " responsive";
  // } else {
  //   navbar.className = "navbar";
  // }
};

// const activate = function () {
//   console.log("executed");
//   const elements = document.getElementById("navbar").getElementsByTagName("a");
//   for (const a of elements) {
//     let href = a.getAttribute("href");
//     if (href === null) continue;
//     if (href.startsWith(".")) href = href.substring(1);

//     if (href == location.pathname) {
//       a.classList.add("selected");
//       return;
//     }
// };

const loadContent = function( e ) {
  const id = e.target.id;
  console.log(e.target);
  fetch('./' + id + '.html')
.then(function (data) {
  return data.text();
})
.then(function (html) {
  document.getElementById('main').innerHTML = html;
  var scripts = document.getElementById("main").querySelectorAll("script");
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].innerText) {
      eval(scripts[i].innerText);
    } else {
      fetch(scripts[i].src).then(function (data) {
        data.text().then(function (r) {
          eval(r);
        })
      });

    }
    scripts[i].parentNode.removeChild(scripts[i]);
  }
});
};
