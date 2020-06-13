const AnnonceComponent = function (service) {
  const NBR_ANNONCES = Math.min(100, service.items.length);
  let wrapper = $("ticker-wrapper");
  for (let i = 0; i < NBR_ANNONCES; i++) {
    let a = service.items[i];
    let annonce = create("a");
    wrapper.appendChild(annonce);
    annonce.classList.add("ticker-item");
    annonce.textContent = a.genre + " - " + a.nom;
    annonce.href = a.link;
  }
};
