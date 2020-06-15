const EvenementComponent = function (service) {
  const charLimit = 450;

  this.wrapper = $("evenements-wrapper");
  for (const e of service.items) {
    let eventDiv = create("div");
    this.wrapper.appendChild(eventDiv);
    eventDiv.classList.add("evenement");

    let title = create("h2");
    let body = create("div");
    body.classList.add("evenement-body");

    title.classList.add("evenement-title");
    title.textContent = e.nom;
    eventDiv.appendChild(title);
    eventDiv.appendChild(body);

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
  this.wrapper.style.display = "none";
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
    this.wrapper.style.display = "flex";
    scrollTo(eventDiv);
    // event.scrollIntoView({ behavior: "auto", block: "start" });
  });

  eventDetails.scrollIntoView({ behavior: "auto", block: "start" });
};
