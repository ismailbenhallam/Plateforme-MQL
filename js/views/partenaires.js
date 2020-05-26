import { partenaires } from "../data/partenaires.js";

window.addEventListener("load", () => {
  const wrapper = document.getElementById("partenaires-wrapper");

  partenaires.forEach((p) => {
    let div = document.createElement("div");
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.setAttribute("title", p.name);
    a.setAttribute("href", p.website);
    img.setAttribute("src", p.imgSrc);
    a.appendChild(img);
    div.appendChild(a);
    wrapper.appendChild(div);
  });
});
