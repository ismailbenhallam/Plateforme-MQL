/********** Listener for displaying the Top Button **********/
const HEADER_HEIGHT = 225;
window.addEventListener("scroll", function () {
  const toTopBtn = $("toTop");
  if (
    document.body.scrollTop > HEADER_HEIGHT ||
    document.documentElement.scrollTop > HEADER_HEIGHT
  ) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
});

/********** Scroll To Top Button **********/
window.toTop = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

$("toTop").addEventListener("click", () => {
  window.toTop();
});
