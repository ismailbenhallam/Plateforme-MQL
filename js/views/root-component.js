/********** Listener for displaying the Top Button **********/
window.onscroll = function () {
  const HEADER_HEIGHT = 225;
  const toTopBtn = document.getElementById("toTop");
  if (
    document.body.scrollTop > HEADER_HEIGHT ||
    document.documentElement.scrollTop > HEADER_HEIGHT
  ) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

/********** Scroll To Top Button **********/
window.topFunction = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
