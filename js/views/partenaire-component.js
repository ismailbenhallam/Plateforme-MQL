const PartenaireComponent = function (service) {
  this.service = service;

  window.addEventListener("load", function () {
    const wrapper = $("partenaires-wrapper");

    for (const p of service.items) {
      let div = create("div");
      let a = create("a");
      let img = create("img");
      img.classList.add("moveOnHover");
      a.setAttribute("title", p.name);
      a.setAttribute("href", p.website);
      img.setAttribute("src", p.logoUrl);
      a.appendChild(img);
      div.appendChild(a);
      wrapper.appendChild(div);
    }
  });
};
