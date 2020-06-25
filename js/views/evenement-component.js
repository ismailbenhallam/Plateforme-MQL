const EvenementComponent = function (service) {
  const charLimit = 350;
  const ALL = "all";
  // let applyButton = $("apply");
  let groupeCheckbox = $("group-checkbox");

  let labelAll = create("label");
  let inputAll = create("input");
  inputAll.setAttribute("type", "checkbox");
  inputAll.checked = true;
  inputAll.value = ALL;
  let spanAll = create("span");
  spanAll.textContent = "Tous les évènements";
  labelAll.appendChild(inputAll);
  labelAll.appendChild(spanAll);
  groupeCheckbox.appendChild(labelAll);

  for (const eventType in service.eventTypes) {
    let label = create("label");
    let input = create("input");
    input.setAttribute("type", "checkbox");
    input.value = eventType;
    let span = create("span");
    span.textContent = eventType;
    label.appendChild(input);
    label.appendChild(span);
    groupeCheckbox.appendChild(label);
  }

  let filterButton = $("filter");
  let divExpand = $("expand");
  divExpand.style.display = "none";
  filterButton.children[1].src = this.expandIconBlue;

  filterButton.addEventListener("click", () => {
    if (divExpand.style.display === "none") {
      filterButton.children[1].src = this.collapseIconBlue;
      divExpand.style.display = "block";
    } else {
      filterButton.children[1].src = this.expandIconBlue;
      divExpand.style.display = "none";
    }
    filterButton.dispatchEvent(new Event("mouseover"));
  });

  filterButton.addMultipleEventListener(
    () => {
      if (divExpand.style.display === "none") {
        filterButton.children[1].src = this.expandIconWhite;
      } else {
        filterButton.children[1].src = this.collapseIconWhite;
      }
    },
    "mouseover",
    "mouseenter"
  );

  filterButton.addEventListener("mouseout", () => {
    if (divExpand.style.display === "none") {
      filterButton.children[1].src = this.expandIconBlue;
    } else {
      filterButton.children[1].src = this.collapseIconBlue;
    }
  });

  const wrapper = $("evenements-wrapper");

  // Apply callback
  let applyCallback = function () {
    const valuesChecked = [];
    for (let i = 0; i < groupeCheckbox.children.length; i++) {
      if (groupeCheckbox.children[i].children[0].checked) {
        valuesChecked.push(groupeCheckbox.children[i].children[0].value);
      }
      for (const eventDivAndSeparator of wrapper.children) {
        if (valuesChecked.includes(ALL)) {
          eventDivAndSeparator.style.display = "block";
        } else if (valuesChecked.includes(eventDivAndSeparator.dataset.genre)) {
          eventDivAndSeparator.style.display = "block";
        } else eventDivAndSeparator.style.display = "none";
      }
    }
  };

  for (let i = 0; i < groupeCheckbox.children.length; i++) {
    groupeCheckbox.children[i].addEventListener("click", applyCallback);
  }

  // If 'All' is checked, check also all other checkboxes
  inputAll.addEventListener("click", () => {
    let checkd = inputAll.checked;
    for (let i = 1; i < groupeCheckbox.children.length; i++) {
      if (groupeCheckbox.children[i].children[0].checked != checkd) {
        groupeCheckbox.children[i].children[0].click();
      }
    }
  });

  //FIXME: Ismaïl
  // for (let i = 1; i < groupeCheckbox.children.length; i++) {
  //   groupeCheckbox.children[i].addEventListener("click", () => {
  //     console.log("executed");
  //     let allChecked = true;
  //     for (let j = 1; j < groupeCheckbox.children.length; j++) {
  //       // Uncheck 'All' if a button is unchecked
  //       if (
  //         groupeCheckbox.children[j].checked === false &&
  //         inputAll.checked === true
  //       ) {
  //         inputAll.click();
  //         return;
  //       }
  //     }
  //   });
  // }

  for (const e of service.items) {
    let eventDiv = create("div");
    let separator = create("div");
    separator.className = "separator";
    eventDiv.dataset.genre = e.genre;
    separator.dataset.genre = e.genre;
    wrapper.appendChild(separator);
    wrapper.appendChild(eventDiv);
    // applyButton.addEventListener("click", applyCallback);
    eventDiv.classList.add("evenement");
    let divG = create("div");
    divG.style.display = "flex";
    let divDate = create("div");
    divDate.classList.add("div-date");

    let spanDate = create("span");
    spanDate.classList.add("date");

    let em = create("em");
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
    if (e.photos && e.photos.length > 0) photo = e.photos[currentPhoto];

    photo.addEventListener("click", () => {
      this.showPhotosModal([photo], 0);
    });

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
      // let hideStr = e.description.slice(charLimit);

      description.innerHTML = showStr;
      let morePoints = create("span");
      morePoints.textContent = "...";
      morePoints.style.display = "inline";
      // let moreText = create("span");
      // moreText.style.display = "none";
      // moreText.innerHTML = hideStr;
      description.appendChild(morePoints);
      // description.appendChild(moreText);

      let readMore = create("div");
      readMore.className = "read-more";
      readMore.textContent = "Lire plus";
      description.appendChild(readMore);

      readMore.onclick = (ef) => {
        if (ef.target == readMore) {
          this.showEventDetails(e, eventDiv);
          // if (description.classList.contains("evenement-show-all")) {
          //   moreText.style.display = "none";
          //   morePoints.style.display = "inline";
          //   readMore.textContent = "Lire Plus";
          // } else {
          //   moreText.style.display = "inline";
          //   morePoints.style.display = "none";
          //   readMore.textContent = "Lire Moins";
          // }
          // description.classList.toggle("evenement-show-all");
          // eventDiv.classList.toggle("active");
          // ef.preventDefault();
          // scrollTo(eventDiv);
        }
      };
    }
  }
};

// Constantes
EvenementComponent.prototype.collapseIconWhite = "icons/collapse-arrow.png";
EvenementComponent.prototype.expandIconWhite = "icons/expand-arrow.png";
EvenementComponent.prototype.collapseIconBlue = "icons/collapse-arrow-blue.png";
EvenementComponent.prototype.expandIconBlue = "icons/expand-arrow-blue.png";

// Méthodes
EvenementComponent.prototype.showEventDetails = function (event, eventDiv) {
  // Hide evenements
  const eventsDiv = $("evenements");
  const wrapper = $("evenements-wrapper");
  const filter = $("evenements-filter-wrapper");
  const wrapperDisplay = wrapper.style.display;
  const filterDisplay = wrapper.style.display;
  wrapper.style.display = "none";
  filter.style.display = "none";

  // Callback to return
  const back = () => {
    eventsDiv.removeChild(eventDetails);
    wrapper.style.display = wrapperDisplay;
    filter.style.display = filterDisplay;
    scrollTo(eventDiv);
  };

  // Create a new div for the event details
  let eventDetails = create("div");
  eventsDiv.appendChild(eventDetails);
  eventDetails.style.display = "block";
  eventDetails.classList.add("evenement-details", "top-content");

  // Back button
  let backBtn = create("button");
  eventDetails.appendChild(backBtn);
  backBtn.className = "btn";
  backBtn.textContent = "Retour";
  backBtn.addEventListener("click", back);

  // Title
  let title = create("h3");
  title.textContent = event.nom;
  title.classList.add("title-default-left", "evenement-title");
  eventDetails.appendChild(title);

  // Content = Title + Date + Picture + Description
  let content = create("div");
  eventDetails.appendChild(content);
  content.classList.add("evenement-content");

  // If there is at least one picture of the event, add it to 'Content' div
  if (event.photos && event.photos.length > 0) {
    let img = create("img");
    img.dataset.i = 0;
    img.src = event.photos[0].src;
    img.addEventListener("click", () => {
      this.showPhotosModal(event.photos, 0);
    });
    content.appendChild(img);
  }

  // Date
  let dateDiv = create("div");
  dateDiv.className = "evenement-coordonnees";
  dateDiv.textContent = `${event.date.toReadeableString()} - ${event.lieu}`;
  content.appendChild(dateDiv);

  // Description
  let description = create("div");
  description.innerHTML = event.description;
  content.appendChild(description);

  // Gallery
  if (event.photos && event.photos.length > 1) {
    let galleryTitle = create("h3");
    galleryTitle.textContent = "Galeries photos";
    galleryTitle.classList.add("title-default-left", "evenement-gallery-title");
    eventDetails.appendChild(galleryTitle);

    let gallery = create("gallery");
    gallery.className = "gallery";
    eventDetails.appendChild(gallery);
    for (let index = 1; index < event.photos.length; index++) {
      let img = create("img");
      img.dataset.i = index;
      img.src = event.photos[index].src;
      img.addEventListener("click", () => {
        this.showPhotosModal(event.photos, index);
      });
      gallery.appendChild(img);
    }
  }

  scrollTo(eventDetails);
};

EvenementComponent.prototype.showPhotosModal = function (
  photoArray,
  currentIndex
) {
  let currentPhoto = photoArray[currentIndex];
  let modal = create("div");
  modal.tabindex = 0;
  modal.contenteditable = "true";
  modal.classList.add("evenement-modal");
  document.body.appendChild(modal);

  let close = create("span");
  close.classList.add("evenement-close");
  close.innerHTML = "&times;";
  modal.appendChild(close);

  let modalContent = create("img");
  modalContent.classList.add("evenement-modal-content");

  // photo.onclick = function () {
  //   modal.style.display = "flex";
  //   modalContent.src = photo.src;
  // };

  modalContent.src = currentPhoto.src;

  let previous, next;
  if (photoArray.length > 1) {
    previous = create("img");
    previous.classList.add("evenement-previous");
    previous.src = "icons/next.png";
    modal.appendChild(previous);

    previous.onclick = (eventF) => {
      // TODO: Ismail
      // if (eventF.target.tagName != "IMG") return;
      currentIndex--;
      currentPhoto = photoArray[currentIndex];
      this.showNextAndPrevious(photoArray.length, currentIndex, previous, next);
      if (currentIndex >= 0) {
        modalContent.src = photoArray[currentIndex].src;
      } else currentIndex = 0;
    };
  }

  modal.appendChild(modalContent);

  if (photoArray.length > 1) {
    next = create("img");
    next.classList.add("evenement-next");
    next.src = "icons/next.png";
    modal.appendChild(next);

    next.onclick = (eventF) => {
      // TODO: Ismail
      // if (eventF.target.tagName != "IMG") return;
      currentIndex++;
      this.showNextAndPrevious(photoArray.length, currentIndex, previous, next);
      if (currentIndex < photoArray.length) {
        modalContent.src = photoArray[currentIndex].src;
      } else currentIndex = photoArray.length - 1;
    };
    this.showNextAndPrevious(photoArray.length, currentIndex, previous, next);
  }

  close.onclick = () => {
    document.body.removeChild(modal);
    // modal.style.display = "none";
    // currentIndex = 0;
    // if (photoArray.length > 1) {
    //   this.showNextAndPrevious(photoArray.length, currentIndex, previous, next);
    // }
  };

  modal.addEventListener("click", (ef) => {
    if (!ef.target.classList.contains("evenement-modal")) return;
    close.dispatchEvent(new Event("click"));
    // modal.style.display = "none";
    // currentIndex = 0;
    // if (photoArray.length > 1) {
    //   this.showNextAndPrevious(photoArray.length, currentIndex, previous, next);
    // }
  });

  // window.addEventListener("keyup", function (ef) {
  //   if (modal.style.display == "none") return;
  //   ef.preventDefault();
  //   modal.focus();
  //   console.log("codeKey " + ef.codeKey);
  //   console.log("key " + ef.key);
  //   console.log("code " + ef.code);
  //   console.log("location " + ef.location);
  //   console.log("___________________");

  //   if (ef.code === "ArrowRight") {
  //     next.dispatchEvent(new Event("click"));
  //   } else if (ef.code === "ArrowLeft") {
  //     previous.dispatchEvent(new Event("click"));
  //   } else if (ef.code === "Escape") close.dispatchEvent(new Event("click"));
  // });
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
