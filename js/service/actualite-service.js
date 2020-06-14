const ActualiteService = function (annoncesJSON, evenementsJSON) {
  this.items = [];
  // items contains both 'Annonces' and 'Evénements'
  annoncesJSON.forEach((a) => {
    this.items.push(new Actualite(a.nom, a.genre, a.date));
  });
  evenementsJSON.forEach((a) => {
    this.items.push(new Actualite(a.nom, a.genre, a.date));
  });
  this.items.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });
};
