/********** Listener for displaying the Top Button **********/
const HEADER_HEIGHT = 225;
window.addEventListener("scroll", function () {
  const toTopBtn = document.getElementById("toTop");
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
document.getElementById("toTop").addEventListener("click", () => {
  window.toTop();
});
