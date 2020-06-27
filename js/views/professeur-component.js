const ProfesseurComponent = function (service) {
  let id = 0;
  const wrapper = $("professeurs-wrapper");
  service.items.forEach((p) => {
    id++;
    let divPerson = create("div");
    divPerson.setAttribute("id", "professor-" + id);
    divPerson.className = "person";
    let divBioImg = create("div");
    divBioImg.className = "bio-img";
    let imgPerson = create("img");
    divBioImg.appendChild(imgPerson);
    if (p.photo) imgPerson.setAttribute("src", "images/professeurs/" + p.photo);
    else
      imgPerson.setAttribute("src", "images/professeurs/" + this.DEFAULT_PHOTO);
    imgPerson.setAttribute("alt", p.nom);
    if (p.email) {
      let divSocial = create("div");
      divSocial.setAttribute("id", "social");
      divSocial.className = "social";
      let a = create("a");
      a.setAttribute("href", "mailto:" + p.email);
      let img = create("img");
      img.setAttribute("src", "icons/email.svg");
      img.setAttribute("alt", "email");
      a.appendChild(img);
      divSocial.appendChild(a);
      divBioImg.appendChild(divSocial);
    }
    divPerson.appendChild(divBioImg);
    let divPersonContent = create("div");
    divPersonContent.className = "person-content";
    let name = create("h2");
    name.textContent = p.nom;
    let job = create("span");
    job.className = "subtitle";
    job.textContent = p.poste + " " + p.matiere;

    divPersonContent.appendChild(name);
    divPersonContent.appendChild(job);
    divPerson.appendChild(divPersonContent);
    wrapper.appendChild(divPerson);
    divPerson.addEventListener("mouseover", (ids) => {
      ids = divPerson.id;
      const bioImgChild = $(ids).getElementsByClassName("bio-img")[0]
        .firstElementChild;
      bioImgChild.classList.add("img-fluid");
      if (p.email) {
        const social = $(ids).getElementsByClassName("social")[0];
        social.classList.add("translate");
      }
    });
    divPerson.addEventListener("mouseout", (ids) => {
      ids = divPerson.id;
      const bioImgChild = $(ids).getElementsByClassName("bio-img")[0]
        .firstElementChild;
      bioImgChild.classList.remove("img-fluid");
      if (p.email) {
        const social = $(ids).getElementsByClassName("social")[0];
        social.classList.remove("translate");
      }
    });
  });
};

ProfesseurComponent.prototype.DEFAULT_PHOTO = "prof.png";
