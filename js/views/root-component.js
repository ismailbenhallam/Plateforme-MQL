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
// window.onscroll = function () {
//   const toTopBtn = document.getElementById("toTop");
//   if (
//     document.body.scrollTop > HEADER_HEIGHT ||
//     document.documentElement.scrollTop > HEADER_HEIGHT
//   ) {
//     alert("scroll");
//     toTopBtn.style.display = "block";
//   } else {
//     toTopBtn.style.display = "none";
//   }
// };

/********** Scroll To Top Button **********/
document.getElementById("toTop").addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
