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
  this.items.sort((a, b) => {
    console.log(a.date.getTime() > b.date.getTime());
    return b.date.getTime() - a.date.getTime();
  });
};
