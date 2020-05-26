const PartenaireComponent = function (service) {
  this.service = service;

  window.addEventListener("load", function () {
    const wrapper = document.getElementById("partenaires-wrapper");

    for (const p of service.items) {
      let div = document.createElement("div");
      let a = document.createElement("a");
      let img = document.createElement("img");
      a.setAttribute("title", p.name);
      a.setAttribute("href", p.website);
      img.setAttribute("src", p.logoUrl);
      a.appendChild(img);
      div.appendChild(a);
      wrapper.appendChild(div);

      /* Template :
      <div>
        <a title="name" href="website"><img src="imgSrc" /></a>
      </div>
      */
    }
  });
};
