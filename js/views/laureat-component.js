const LaureatComponent = function (service) {
  this.service = service;
  let id = 0;
  let i = 0;
  window.addEventListener("load", () => {
    const wrapper = document.getElementById("laureats-wrapper");
    service.items.forEach((l) => {
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
      let a2 = document.createElement("a");
      a2.setAttribute("href", "mailto:"+l.email);
      let img2 = document.createElement("img");
      img2.setAttribute("src", "icons/email.svg");
      img2.setAttribute("alt", "email");
      a2.appendChild(img2);
      divSocial.appendChild(a2);
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
        job.textContent =
        l.posteOccupe + " à " + l.lieu + ", " + l.pays + ".";
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
      spanPFE.textContent = "PFE : " + l.pfe;
      let spanCDI = document.createElement("SPAN");
      spanCDI.textContent = "Premier CDI : " + l.cdi;
      if(l.cdi == "") {
        spanCDI.textContent = "";
      }
      let spanExp = document.createElement("SPAN");
      spanExp.textContent = "Expérience Précedentes : ";
      if(l.experiences == "") {
        spanExp.textContent = "";
      } 
      toggledText.appendChild(spanExp);
      toggledText.append(l.experiences);
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

      const charLimit = 100;
      var numberOfToggled = document.getElementsByClassName("toggledText");
      var el = numberOfToggled[i];
      i++;
      var elText = el.innerHTML.trim();

      if (elText.length > charLimit) {
        var showStr = elText.slice(0, charLimit);
        var hideStr = elText.slice(charLimit);
        el.innerHTML =
          showStr +
          '<span class="morePoints">...</span> <span class="trimmed">' +
          hideStr +
          "</span>";
        el.parentElement.innerHTML =
          el.parentElement.innerHTML +
          "<div class='read-more'><a href='#' class='more'></a>";
      }

      window.onclick = function (event) {
        if (event.target.className == "more") {
          event.preventDefault();
          event.target.parentElement.parentElement.classList.toggle("showAll");
        }
      };

      window.onscroll = function () {
        const people = document.getElementsByClassName("person");
        const heading = document.getElementsByClassName("heading-laureat")[0];
        window.scrollY > heading.offsetHeight - 250 && window.scrollY !== 0
          ? heading.classList.add("animate")
          : heading.classList.remove("animate");
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
