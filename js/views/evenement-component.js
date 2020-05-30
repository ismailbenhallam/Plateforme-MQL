const c = function (tagName) {
  return document.createElement(tagName);
};

const toReadeableString = function (date) {
  let month;
  switch (date.getMonth()) {
    case 0:
      month = "Janvier";
      break;
    case 1:
      month = "Février";
      break;
    case 2:
      month = "Mars";
      break;
    case 3:
      month = "Avril";
      break;
    case 4:
      month = "Maï";
      break;
    case 5:
      month = "Juin";
      break;
    case 5:
      month = "Juin";
      break;
    case 6:
      month = "Juillet";
      break;
    case 7:
      month = "Août";
      break;
    case 8:
      month = "Septembre";
      break;
    case 9:
      month = "Octobre";
      break;
    case 10:
      month = "Novembre";
      break;
    case 11:
      month = "Décembre";
      break;

    default:
      month = NaN;
      break;
  }

  return `${date.getDate()} ${month} ${date.getFullYear()}`;
};

const EvenementComponent = function (service) {
  let wrapper = document.getElementById("evenements-wrapper");
  for (const e of service.items) {
    let event = c("div");
    wrapper.appendChild(event);
    event.classList.add("evenement");

    let title = c("h2");
    title.classList.add("evenement-title");
    if (e.titleColor !== undefined) title.style.backgroundColor = e.titleColor;
    title.textContent = e.nom;
    event.appendChild(title);

    let photoDiv = c("div");
    photoDiv.classList.add("evenement-photo");
    let photo = c("img");
    let currentPhoto = 0;
    photo.src =
      "images/evenements/" + e.photosFolder + "/" + e.photos[currentPhoto];

    /*********** Modal ***********/
    // The Modal
    // <div id="modal" class="modal">
    /* The Close Button */
    // <span id="close">&times;</span>
    // <img id="previous" src="\icons\next.png"></img>
    // <img id="modal-content"></img>
    // <img id="next" src="\icons\next.png"></img>
    // </div>;
    let modal = c("div");
    modal.classList.add("evenement-modal");

    let close = c("span");
    close.classList.add("evenement-close");
    close.innerHTML = "&times;";
    modal.appendChild(close);

    let previous = c("img");
    previous.classList.add("evenement-previous");
    previous.src = "icons/next.png";
    modal.appendChild(previous);

    let modalContent = c("img");
    modalContent.classList.add("evenement-modal-content");
    modal.appendChild(modalContent);

    let next = c("img");
    next.classList.add("evenement-next");
    next.src = "icons/next.png";
    modal.appendChild(next);

    document.body.appendChild(modal);

    photo.onclick = function () {
      modal.style.display = "flex";
      modalContent.src = photo.src;
    };

    next.onclick = (eventF) => {
      if (eventF.target.tagName != "IMG") return;
      currentPhoto++;
      console.log("currentPhoto " + currentPhoto);
      console.log("e.photos.length" + e.photos.length);
      if (currentPhoto < e.photos.length) {
        modalContent.src =
          "images/evenements/" + e.photosFolder + "/" + e.photos[currentPhoto];
      } else {
        currentPhoto--;
        alert("plus de photos");
      }
    };

    previous.onclick = (eventF) => {
      if (eventF.target.tagName != "IMG") return;
      console.log("you got here");
      "currentPhoto : " +
        currentPhoto +
        "\n" +
        "currentPhoto >= 0" +
        currentPhoto >=
        0;
      currentPhoto--;
      if (currentPhoto >= 0) {
        modalContent.src =
          "images/evenements/" + e.photosFolder + "/" + e.photos[currentPhoto];
      } else {
        currentPhoto++;
        alert("plus de photos");
      }
    };

    close.onclick = function () {
      modal.style.display = "none";
      currentPhoto = 0;
    };
    modal.onclick = function (ef) {
      if (!ef.target.classList.contains("evenement-modal")) return;
      modal.style.display = "none";
      currentPhoto = 0;
    };
    /**********************/

    photoDiv.appendChild(photo);
    event.appendChild(photoDiv);

    let content = c("div");
    content.classList.add("evenement-content");
    event.appendChild(content);

    let evenementCoordonnees = c("div");
    evenementCoordonnees.classList.add("evenement-coordonnees");
    evenementCoordonnees.textContent =
      toReadeableString(e.date) + " - " + e.lieu;
    content.appendChild(evenementCoordonnees);

    let description = c("div");
    description.classList.add("evenement-description");
    description.innerHTML = e.description;
    content.appendChild(description);
  }
};
