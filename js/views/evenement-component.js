const EvenementComponent = function (service) {
  const charLimit = 450;
  const ALL = "all";  
  let applyButton = $("apply");
  let groupeCheckbox = $("group-checkbox");

  let labelAll = create("LABEL");
  let inputAll = create("INPUT");
  inputAll.setAttribute("type", "checkbox");
  inputAll.checked = true;
  inputAll.value = ALL;
  let spanAll = create("SPAN");
  spanAll.textContent = "Tout les évènements";
  labelAll.appendChild(inputAll);
  labelAll.appendChild(spanAll);
  groupeCheckbox.appendChild(labelAll);

  for (const event in service.eventTypes) {
      let label = create("LABEL");
      let input = create("INPUT");
      input.setAttribute("type", "checkbox");
      input.value = event;
      let span = create("SPAN");
      span.textContent = event;
      label.appendChild(input);
      label.appendChild(span);
      groupeCheckbox.appendChild(label);
    }

  let filterButton = $("filter");
  let divExpand = $("expand");
  filterButton.addEventListener("click", function() {
    if (divExpand.style.display === "none") {
      filterButton.children[1].setAttribute("src", "icons/collapse-arrow.png");
      divExpand.style.display = "block";
    } else {
      filterButton.children[1].setAttribute("src", "icons/expand-arrow.png");
      divExpand.style.display = "none";
    }
  });


  const wrapper = $("evenements-wrapper");
  for (const e of service.items) {
    let eventDiv = create("div");
    let separator = create("div");
    separator.className = "separator";
    eventDiv.dataset.genre = e.genre;
    wrapper.appendChild(separator);
    wrapper.appendChild(eventDiv);
    applyButton.addEventListener("click", function() {
      const valuesChecked = [];
      for (let i=0; i < groupeCheckbox.children.length; i++) {
        if(groupeCheckbox.children[i].children[0].checked){
          valuesChecked.push(groupeCheckbox.children[i].children[0].value);
        }
        for (const eventDiv of wrapper.children) {
          if(valuesChecked.includes(ALL)){
            eventDiv.style.display = "block";
          } 
          else if (valuesChecked.includes(eventDiv.dataset.genre)){
            eventDiv.style.display = "block";
          } else eventDiv.style.display = "none";
        }
      }
    });
    eventDiv.classList.add("evenement");
    let divG = create("div");
    divG.style.display = "flex";
    let divDate = create("div");
    divDate.classList.add("div-date");

    let spanDate = create("SPAN");
    spanDate.classList.add("date");

    let em = create("EM");
    em.textContent = e.date.toReadeableString().slice(0, 2);
    strArray = e.date.toReadeableString().split(" ");
    spanDate.textContent = strArray[1];
    spanDate.appendChild(em);
    divDate.appendChild(spanDate);
    divG.appendChild(divDate);

    let body = create("div");
    body.classList.add("evenement-body");
    divG.appendChild(body);
    eventDiv.appendChild(divG);

    let photoDiv = create("div");
    photoDiv.classList.add("evenement-photo");
    let photo = create("img");
    let currentPhoto = 0;
    photo = e.photos[currentPhoto];

    /*********** Modal ***********/
    let modal = create("div");
    modal.classList.add("evenement-modal");
    document.body.appendChild(modal);

    let close = create("span");
    close.classList.add("evenement-close");
    close.innerHTML = "&times;";
    modal.appendChild(close);

    let modalContent = create("img");
    modalContent.classList.add("evenement-modal-content");

    photo.onclick = function () {
      modal.style.display = "flex";
      modalContent.src = photo.src;
    };

    let previous;
    if (e.photos.length > 1) {
      previous = create("img");
      previous.classList.add("evenement-previous");
      previous.src = "icons/next.png";
      modal.appendChild(previous);

      previous.onclick = (eventF) => {
        if (eventF.target.tagName != "IMG") return;
        currentPhoto--;
        this.showNextAndPrevious(e.photos.length, currentPhoto, previous, next);
        if (currentPhoto >= 0) {
          modalContent.src = e.photos[currentPhoto].src;
        }
      };
    }

    modal.appendChild(modalContent);

    let next;
    if (e.photos.length > 1) {
      next = create("img");
      next.classList.add("evenement-next");
      next.src = "icons/next.png";
      modal.appendChild(next);

      next.onclick = (eventF) => {
        if (eventF.target.tagName != "IMG") return;
        currentPhoto++;
        this.showNextAndPrevious(e.photos.length, currentPhoto, previous, next);
        if (currentPhoto < e.photos.length) {
          modalContent.src = e.photos[currentPhoto].src;
        }
      };
      this.showNextAndPrevious(e.photos.length, currentPhoto, previous, next);
    }

    close.onclick = () => {
      modal.style.display = "none";
      currentPhoto = 0;
      if (e.photos.length > 1) {
        this.showNextAndPrevious(e.photos.length, currentPhoto, previous, next);
      }
    };

    modal.onclick = (ef) => {
      if (!ef.target.classList.contains("evenement-modal")) return;
      modal.style.display = "none";
      currentPhoto = 0;
      if (e.photos.length > 1) {
        this.showNextAndPrevious(e.photos.length, currentPhoto, previous, next);
      }
    };

    /**********************/

    photoDiv.appendChild(photo);
    body.appendChild(photoDiv);

    let content = create("div");
    content.classList.add("evenement-content");
    body.appendChild(content);

    let title = create("h3");
    title.classList.add("title-default-left");
    title.style.margin = 0;
    title.textContent = e.nom;
    content.appendChild(title);

    let evenementCoordonnees = create("div");
    evenementCoordonnees.classList.add("evenement-coordonnees");
    evenementCoordonnees.textContent = `${e.date.toReadeableString()} - ${
      e.lieu
    }`;
    content.appendChild(evenementCoordonnees);

    let description = create("div");
    description.classList.add("evenement-description");
    content.appendChild(description);

    /************************/
    if (e.description.length <= charLimit)
      description.innerHTML = e.description;
    else {
      let showStr = e.description.slice(0, charLimit);
      let hideStr = e.description.slice(charLimit);

      description.innerHTML = showStr;
      let morePoints = create("span");
      morePoints.textContent = "...";
      morePoints.style.display = "inline";
      let moreText = create("span");
      moreText.style.display = "none";
      moreText.innerHTML = hideStr;
      description.appendChild(morePoints);
      description.appendChild(moreText);

      let readMore = create("div");
      readMore.style.cursor = "pointer";
      readMore.textContent = "Lire plus";
      readMore.style.color = "black";
      readMore.style.textDecoration = "underline";
      description.appendChild(readMore);

      readMore.onclick = (ef) => {
        if (ef.target == readMore) {
          // this.showEventDetails(e, eventDiv);
          if (description.classList.contains("evenement-show-all")) {
            moreText.style.display = "none";
            morePoints.style.display = "inline";
            readMore.textContent = "Lire Plus";
          } else {
            moreText.style.display = "inline";
            morePoints.style.display = "none";
            readMore.textContent = "Lire Moins";
          }
          description.classList.toggle("evenement-show-all");
          eventDiv.classList.toggle("active");
          ef.preventDefault();
          scrollTo(eventDiv);
        }
      };
    }
  }
};

EvenementComponent.prototype.showNextAndPrevious = function (
  length,
  currentPhotoIndex,
  previous,
  next
) {
  if (length == 1) {
    previous.style.visibility = "hidden";
    next.style.visibility = "hidden";
    return;
  }
  if (currentPhotoIndex == 0) {
    previous.style.visibility = "hidden";
  } else previous.style.visibility = "visible";
  if (currentPhotoIndex == length - 1) {
    next.style.visibility = "hidden";
  } else next.style.visibility = "visible";
};

EvenementComponent.prototype.showEventDetails = function (event, eventDiv) {
  wrapper.style.display = "none";
  let eventDetails = $("evenement-details");
  eventDetails.style.display = "block";
  // TODO: Ismaïl
  eventDetails.innerHTML = event.description;
  let span = create("span");
  span.textContent = "Lire moins";
  span.style.textDecoration = "underline";
  eventDetails.appendChild(span);

  span.addEventListener("click", (e) => {
    eventDetails.style.display = "none";
    wrapper.style.display = "flex";
    scrollTo(eventDiv);
    // event.scrollIntoView({ behavior: "auto", block: "start" });
  });

  eventDetails.scrollIntoView({ behavior: "auto", block: "start" });
};
