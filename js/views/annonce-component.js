const AnnonceComponent = function (service) {
  let annoncesWrapper = $("annonces-wrapper");

  if (service.items.length == 0) {
    annoncesWrapper.style.display = "none";
    return;
  }

  // Annonces div
  for (let i = 0; i < service.items.length; i++) {
    let a = service.items[i];
    let annonce = create("div");
    annoncesWrapper.appendChild(annonce);
    annonce.classList.add("annonce");

    let annonceDate = create("span");
    annonce.appendChild(annonceDate);
    annonceDate.classList.add("annonce-date");
    annonceDate.textContent = a.date.toReadeableString();

    if (a.date.isLessThanNDays(this.SHOW_NEW_NBR_DAYS)) {
      let imgNew = create("img");
      imgNew.src = this.IMAGE_NEW;
      imgNew.className = "annonce-new-img";
      annonceDate.appendChild(imgNew);
    }

    let annonceDetails = create("div");
    annonce.appendChild(annonceDetails);
    annonceDetails.classList.add("annonce-details");
    let icon = create("img");
    icon.src = this.ICON_NEXT;
    annonceDetails.appendChild(icon);
    let annonceDetailsLink = create("a");
    annonceDetails.appendChild(annonceDetailsLink);
    annonceDetailsLink.textContent = a.genre + " - " + a.nom;
    if (a.link) {
      annonceDetailsLink.href = a.link;
      annonceDetailsLink.classList.add("has-link");
    }

    // Add a separator after every element except the last one
    if (i != service.items.length - 1) {
      let separator = create("div");
      separator.className = "separator";
      annonce.appendChild(separator);
    }
  }
};

AnnonceComponent.prototype.IMAGE_NEW = "images/nouveau.png";
AnnonceComponent.prototype.ICON_NEXT = "icons/next1.png";
AnnonceComponent.prototype.SHOW_NEW_NBR_DAYS = 5;
