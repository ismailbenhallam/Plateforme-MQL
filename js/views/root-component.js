const HEADER_HEIGHT = 225;

/********** Scroll To Top Button **********/
window.toTop = function () {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.body.scrollTop = 0; // For Safari
};

$("toTop").addEventListener("click", () => {
  window.toTop();
});

// const progressBar = function () {
//   let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   let height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   let scrolled = (winScroll / height) * 100;
//   $("myBar").style.width = scrolled + "%";
// };

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

  // progressBar();
});
