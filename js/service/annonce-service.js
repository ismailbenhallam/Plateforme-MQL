const AnnonceService = function (annoncesJSON) {
  this.items = [];
  annoncesJSON.forEach((a) => {
    this.items.push(
      new Annonce(
        a.nom,
        a.genre,
        a.date,
        // a.date_debut,
        // a.date_fin,
        a.description,
        a.link
      )
    );
  });
  this.items.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });
};
