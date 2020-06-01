const LaureatComponent = function (service) {
  const ALL = "all";

  let select = document.getElementById("laureats-select-promo");

  let optionAll = document.createElement("option");
  optionAll.selected = true;
  optionAll.value = ALL;
  optionAll.textContent = "Toutes les promotions";
  select.appendChild(optionAll);

  for (const promo in service.promos) {
    let option = document.createElement("option");
    option.value = promo;
    option.textContent = promo;
    select.appendChild(option);
  }

  let id = 0;
  const wrapper = document.getElementById("laureats-wrapper");
  service.items.forEach((l) => {
    id++;
    let divPerson = document.createElement("div");
    divPerson.dataset.promotion = l.promotion;
    divPerson.setAttribute("id", "person-" + id);
    divPerson.className = "person";
    // divPerson.classList.add("grow-shadow");
    let divBioImg = document.createElement("div");
    divBioImg.className = "bio-img";
    let imgPerson = document.createElement("img");
    imgPerson.setAttribute("src", "images/laureats/" + l.photo);
    imgPerson.setAttribute("alt", l.nom);
    let divSocial = document.createElement("div");
    divSocial.setAttribute("id", "social");
    divSocial.className = "social";
    let a = document.createElement("a");
    a.setAttribute("href", l.linkedin);
    let img = document.createElement("img");
    img.setAttribute("src", "icons/linkedin.svg");
    img.setAttribute("alt", "linkedin");
    a.appendChild(img);
    divSocial.appendChild(a);
    divBioImg.appendChild(imgPerson);
    divBioImg.appendChild(divSocial);
    divPerson.appendChild(divBioImg);
    let divPersonContent = document.createElement("div");
    divPersonContent.className = "person-content";
    let name = document.createElement("h2");
    name.textContent = l.nom + " (" + l.promotion + ")";
    let job = document.createElement("SPAN");
    job.className = "subtitle";
    if (l.ville == "") {
      job.textContent = l.posteOccupe + " à " + l.lieu + ", " + l.pays + ".";
    }
    job.textContent =
      l.posteOccupe + " à " + l.lieu + ", " + l.ville + ", " + l.pays + ".";
    let divWrap = document.createElement("div");
    divWrap.className = "wrap";
    let divTruncate = document.createElement("div");
    divTruncate.className = "truncate";
    let toggledText = document.createElement("p");
    toggledText.className = "toggledText";
    let spanPFE = document.createElement("SPAN");
    spanPFE.textContent = "Stage pré-embauche : " + l.pfe;
    let spanCDI = document.createElement("SPAN");
    spanCDI.textContent = "Premier CDI : " + l.cdi;
    if (l.cdi == "") {
      spanCDI.textContent = "";
    }
    divTruncate.appendChild(spanPFE);
    divTruncate.appendChild(spanCDI);
    divTruncate.appendChild(toggledText);
    divWrap.appendChild(divTruncate);
    divPersonContent.appendChild(name);
    divPersonContent.appendChild(job);
    divPersonContent.appendChild(divWrap);
    divPerson.appendChild(divPersonContent);
    wrapper.appendChild(divPerson);
    divPerson.addEventListener("mouseover", (ids) => {
      ids = divPerson.id;
      const bioImgChild = document
        .getElementById(ids)
        .getElementsByClassName("bio-img")[0].firstElementChild;
      bioImgChild.classList.add("img-fluid");
      const social = document
        .getElementById(ids)
        .getElementsByClassName("social")[0];
      social.classList.add("translate");
    });
    divPerson.addEventListener("mouseout", (ids) => {
      ids = divPerson.id;
      const bioImgChild = document
        .getElementById(ids)
        .getElementsByClassName("bio-img")[0].firstElementChild;
      bioImgChild.classList.remove("img-fluid");
      const social = document
        .getElementById(ids)
        .getElementsByClassName("social")[0];
      social.classList.remove("translate");
    });
  });

  window.addEventListener("scroll", function () {
    const people = document.getElementsByClassName("person");
    for (let i = 0; i < people.length; i++) {
      window.scrollY > people[i].offsetHeight - 520
        ? people[i].classList.add("animate")
        : people[i].classList.remove("animate");
    }
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
