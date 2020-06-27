const LaureatComponent = function (service) {
  const ALL = "all";
  let select = $("laureats-select-promo");

  let optionAll = create("option");
  optionAll.classList.add("option");
  optionAll.selected = true;
  optionAll.value = ALL;
  optionAll.textContent = "Toutes les promotions";
  select.appendChild(optionAll);

  for (const promo of service.promoYears) {
    let option = create("option");
    option.classList.add("option");
    option.value = promo;
    option.textContent = promo;
    select.appendChild(option);
  }

  let id = 0;
  const wrapper = $("laureats-wrapper");
  service.items.forEach((l) => {
    id++;
    let divPerson = create("div");
    divPerson.dataset.promotion = l.promotion;
    divPerson.setAttribute("id", "person-" + id);
    divPerson.className = "person";
    let divBioImg = create("div");
    divBioImg.className = "bio-img";
    let imgPerson = create("img");
    if (l.photo) imgPerson.setAttribute("src", "images/laureats/" + l.photo);
    else imgPerson.setAttribute("src", "images/laureats/" + this.DEFAULT_PHOTO);
    imgPerson.setAttribute("alt", l.nom + " " + l.prenom);
    divBioImg.appendChild(imgPerson);
    let divSocial = create("div");
    divSocial.setAttribute("id", "social");
    divSocial.className = "social";
    if (l.linkedin) {
      let a = create("a");
      a.setAttribute("href", l.linkedin);
      a.target = "_blank";
      let img = create("img");
      img.setAttribute("src", "icons/linkedin.svg");
      img.setAttribute("alt", "linkedin");
      a.appendChild(img);
      divSocial.appendChild(a);
      divBioImg.appendChild(divSocial);
    }
    divPerson.appendChild(divBioImg);
    let divPersonContent = create("div");
    divPersonContent.className = "person-content";
    let name = create("h2");
    name.textContent = `${l.nom} ${l.prenom} (${l.promotion})`;
    let job = create("SPAN");
    job.className = "subtitle";
    if (l.ville == "") {
      job.textContent = l.posteOccupe + " à " + l.lieu + ", " + l.pays + ".";
    } else
      job.textContent =
        l.posteOccupe + " à " + l.lieu + ", " + l.ville + ", " + l.pays + ".";
    let divWrap = create("div");
    divWrap.className = "wrap";
    let divTruncate = create("div");
    divTruncate.className = "truncate";
    let toggledText = create("p");
    toggledText.className = "toggledText";
    if (l.pfe) {
      let spanPFE = create("SPAN");
      spanPFE.textContent = "Stage pré-embauche : " + l.pfe;
      divTruncate.appendChild(spanPFE);
    }
    let spanCDI = create("SPAN");
    if (l.cdi) {
      spanCDI.textContent = "Premier CDI : " + l.cdi;
      divTruncate.appendChild(spanCDI);
    }
    divTruncate.appendChild(toggledText);
    divWrap.appendChild(divTruncate);
    divPersonContent.appendChild(name);
    divPersonContent.appendChild(job);
    divPersonContent.appendChild(divWrap);
    divPerson.appendChild(divPersonContent);
    wrapper.appendChild(divPerson);

    divPerson.addEventListener("mouseover", (ids) => {
      ids = divPerson.id;
      const bioImgChild = $(ids).getElementsByClassName("bio-img")[0]
        .firstElementChild;
      bioImgChild.classList.add("img-fluid");
      if (l.linkedin) {
        const social = $(ids).getElementsByClassName("social")[0];
        social.classList.add("translate");
      }
    });
    divPerson.addEventListener("mouseout", (ids) => {
      ids = divPerson.id;
      const bioImgChild = $(ids).getElementsByClassName("bio-img")[0]
        .firstElementChild;
      bioImgChild.classList.remove("img-fluid");
      if (l.linkedin) {
        const social = $(ids).getElementsByClassName("social")[0];
        social.classList.remove("translate");
      }
    });
  });

  select.addEventListener("change", function () {
    if (select.value == ALL) {
      for (const divPerson of wrapper.children) {
        divPerson.style.display = "block";
      }
    } else {
      for (const divPerson of wrapper.children) {
        if (divPerson.dataset.promotion == select.value)
          divPerson.style.display = "block";
        else divPerson.style.display = "none";
      }
    }
  });
};

LaureatComponent.prototype.DEFAULT_PHOTO = "laureat.png";
