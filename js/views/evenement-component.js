const EvenementComponent = function (service) {
  const charLimit = 200;
  const showNextAndPrevious = function (
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

  let wrapper = document.getElementById("evenements-wrapper");
  for (const e of service.items) {
    let event = document.createElement("div");
    wrapper.appendChild(event);
    event.classList.add("evenement");

    // Scroll to the event
    new ResizeObserver(function () {
      event.scrollIntoView({ behavior: "smoth", block: "start" });
    }).observe(event);

    let title = document.createElement("h2");
    let body = document.createElement("div");
    body.classList.add("evenement-body");

    title.classList.add("evenement-title");
    title.textContent = e.nom;
    event.appendChild(title);
    event.appendChild(body);

    let photoDiv = document.createElement("div");
    photoDiv.classList.add("evenement-photo");
    let photo = document.createElement("img");
    let currentPhoto = 0;
    photo = e.photos[currentPhoto];

    /*********** Modal ***********/
    // The Modal
    // <div id="modal" class="modal">
    /* The Close Button */
    // <span id="close">&times;</span>
    // <img id="previous" src="\icons\next.png"></img>
    // <img id="modal-content"></img>
    // <img id="next" src="\icons\next.png"></img>
    // </div>;
    let modal = document.createElement("div");
    modal.classList.add("evenement-modal");
    document.body.appendChild(modal);

    let close = document.createElement("span");
    close.classList.add("evenement-close");
    close.innerHTML = "&times;";
    modal.appendChild(close);

    let modalContent = document.createElement("img");
    modalContent.classList.add("evenement-modal-content");

    photo.onclick = function () {
      modal.style.display = "flex";
      modalContent.src = photo.src;
    };

    let previous;
    if (e.photos.length > 1) {
      previous = document.createElement("img");
      previous.classList.add("evenement-previous");
      previous.src = "icons/next.png";
      modal.appendChild(previous);

      previous.onclick = (eventF) => {
        if (eventF.target.tagName != "IMG") return;
        currentPhoto--;
        showNextAndPrevious(e.photos.length, currentPhoto, previous, next);
        if (currentPhoto >= 0) {
          modalContent.src = e.photos[currentPhoto].src;
        }
      };
    }

    modal.appendChild(modalContent);

    let next;
    if (e.photos.length > 1) {
      next = document.createElement("img");
      next.classList.add("evenement-next");
      next.src = "icons/next.png";
      modal.appendChild(next);

      next.onclick = (eventF) => {
        if (eventF.target.tagName != "IMG") return;
        currentPhoto++;
        showNextAndPrevious(e.photos.length, currentPhoto, previous, next);
        if (currentPhoto < e.photos.length) {
          modalContent.src = e.photos[currentPhoto].src;
        }
      };
      showNextAndPrevious(e.photos.length, currentPhoto, previous, next);
    }

    close.onclick = function () {
      modal.style.display = "none";
      currentPhoto = 0;
      if (e.photos.length > 1) {
        showNextAndPrevious(e.photos.length, currentPhoto, previous, next);
      }
    };
    modal.onclick = function (ef) {
      if (!ef.target.classList.contains("evenement-modal")) return;
      modal.style.display = "none";
      currentPhoto = 0;
      if (e.photos.length > 1) {
        showNextAndPrevious(e.photos.length, currentPhoto, previous, next);
      }
    };

    /**********************/

    photoDiv.appendChild(photo);
    body.appendChild(photoDiv);

    let content = document.createElement("div");
    content.classList.add("evenement-content");
    body.appendChild(content);

    let evenementCoordonnees = document.createElement("div");
    evenementCoordonnees.classList.add("evenement-coordonnees");
    evenementCoordonnees.textContent =
      toReadeableString(e.date) + " - " + e.lieu;
    content.appendChild(evenementCoordonnees);

    let description = document.createElement("div");
    description.classList.add("evenement-description");
    content.appendChild(description);

    /************************/
    if (e.description.length <= charLimit)
      description.innerHTML = e.description;
    else {
      let showStr = e.description.slice(0, charLimit);
      let hideStr = e.description.slice(charLimit);

      description.innerHTML = showStr;
      let morePoints = document.createElement("span");
      morePoints.textContent = "...";
      morePoints.style.display = "inline";
      let moreText = document.createElement("span");
      moreText.style.display = "none";
      moreText.textContent = hideStr;
      description.appendChild(morePoints);
      description.appendChild(moreText);

      let readMore = document.createElement("div");
      readMore.style.cursor = "pointer";
      readMore.textContent = "Lire plus";
      readMore.style.color = "black";
      readMore.style.textDecoration = "underline";
      description.appendChild(readMore);

      readMore.onclick = function (ef) {
        if (ef.target == readMore) {
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
          event.classList.toggle("active");

          ef.preventDefault();
        }
      };
    }
    new ResizeObserver(function () {
      event.scrollIntoView({ behavior: "auto", block: "start" });
    }).observe(event);
  }
};
