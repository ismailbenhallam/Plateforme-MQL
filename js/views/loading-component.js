const LoadingComponent = function () {
  const loadingPage = document.createElement("div");
  loadingPage.id = "loadingPage";

  let logo = document.createElement("img");
  logo.src = "images/logo-mql-cropped.png";
  loadingPage.appendChild(logo);

  loadingPage.style["text-align"] = "center";
  loadingPage.style["vertical-align"] = "middle";
  loadingPage.style["line-height"] = "90px";

  document.body.appendChild(loadingPage);

  window.addEventListener("load", () => {
    loadingPage.style.display = "none";
  });
};

new LoadingComponent();
