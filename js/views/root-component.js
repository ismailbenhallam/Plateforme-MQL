const HEADER_HEIGHT = 225;

// Scroll To Top Button
window.toTop = function () {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.body.scrollTop = 0; // For Safari
};

$("toTop").addEventListener("click", () => {
  window.toTop();
});

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

// To display the message to user again, after a page loading
delete sessionStorage.tellUserArrowsCanPassPhotos;
