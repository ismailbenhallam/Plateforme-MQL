const EvenementService = function (evenementsArray) {
  this.items = [];
  for (const e of evenementsArray) {
    this.items.push(
      new Evenement(
        e.nom,
        e.genre,
        Date.parse(e.date),
        e.lieu,
        e.description,
        e.photos,
        e.photosFolder,
        e.titleColor
      )
    );
  }
};

// TODO:
// EvenementService.prototype.evenementsParGenre = function () {};
