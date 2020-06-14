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

    let annonceDetails = create("a");
    annonce.appendChild(annonceDetails);
    annonceDetails.classList.add("annonce-details");
    annonceDetails.textContent = a.genre + " - " + a.nom;
    if (a.link) {
      annonceDetails.href = a.link;
      annonceDetails.classList.add("has-link");
    }

    let annonceDate = create("span");
    annonce.appendChild(annonceDate);
    annonceDate.classList.add("annonce-date");
    annonceDate.textContent = a.date.toReadeableString();
  }

  /*
  <div class="annonce">
    <span class="annonce-details">
      Inscription - Ouverture d'inscription MQL 2020/2021</span>
    <span class="annonce-date">2020 Aout 15</span>
  </div>
  */
};
