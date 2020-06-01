const LaureatComponent = function(service) {
  const expr = document.choix.promotion.selectedIndex;
  switch (expr) {
    case 0:
      this.service = service.items.filter( p => p.promotion == "2013-2015");
      console.log("0 :" + this.service);
      //window.dispatchEvent(new Event('load')); for triggering the load event once again
      break;
    case 1:
        this.service = service.items.filter(p => p.promotion == "2014-2016");
        console.log("1 :" + this.service);
      break;
    case 2:
        this.service = service.items.filter(p => p.promotion == "2015-2017");
        console.log("2 :" + this.service);
      break;
    case 3:
        this.service = service.items.filter(p => p.promotion == "2016-2018");
        console.log("3 :" + this.service);
      break;
    case 4:
        this.service = service.items.filter(p => p.promotion == "2017-2019");
        console.log("4 :" + this.service);
      break;
    case 5:
        this.service = service.items.filter(p => p.promotion == "2018-2020");
        console.log("5 :" + this.service);
      break;
    default:
        this.service = service.items;
  } 
  let id = 0;
  window.addEventListener("load", () => {
    const wrapper = document.getElementById("laureats-wrapper");
    console.log("load" + this.service);
    this.service.forEach(l => {
      id++;
      let divPerson = document.createElement("div");
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
      divPerson.addEventListener("mouseover", ids => {
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
      divPerson.addEventListener("mouseout", ids => {
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

      window.onscroll = function() {
        const people = document.getElementsByClassName("person");
        for (let i = 0; i < people.length; i++) {
          window.scrollY > people[i].offsetHeight - 520
            ? people[i].classList.add("animate")
            : people[i].classList.remove("animate");
        }
      };
    });

    /* Template :
        <div id="laureats-wrapper" class="boxing">
          <div id="person-1" class="person" onmouseover="showBar('person-1')" onmouseout="hideBar('person-1')">
            <div class="bio-img">
                <img src="images/yousra.jpg" alt="person">
                <div id="social" class="social">
                  <a href="#"><img src="icons/linkedin.svg" alt="linkedin"></a>
                </div>
            </div>

            <div class="person-content">
              <h2>YOUSRA MEKKAOUI (2019/2021)</h2>
              <span class="subtitle">FrontEnd Developer à Lunorsys GMBH, Berlin, Deutschland.</span>
              <div class="wrap">
                  <div class="truncate">
                    <span>PFE : Lunorsys GMBH</span>
                    <span>Premier CDI : Lunorsys GMBH</span>
                    <p class="toggledText">
                      <span>Expérience Précedentes : </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        */
  });
};
