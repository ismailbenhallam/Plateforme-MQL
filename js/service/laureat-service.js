const LaureatService = function (laureatsArray) {
  this.items = [];
  laureatsArray.forEach((l) => {
    this.items.push(
      new Laureat(
        l.email,
        l.linkedin,
        l.nom,
        l.promotion,
        l.posteOccupe,
        l.lieu,
        l.ville,
        l.pays,
        l.pfe,
        l.cdi,
        l.photo
      )
    );
  });

  this.items.sort((a, b) => this.sortByPromoThenByName(a, b));

  this.promos = {};
  this.items.forEach((l) => {
    if (!this.promos.hasOwnProperty(l.promotion)) this.promos[l.promotion] = [];
    this.promos[l.promotion].push(l);
  });

  for (const promo in this.promos) {
    this.promos[promo].sort((a, b) => this.sortByPromoThenByName(a, b));
  }
};

LaureatService.prototype.sortByPromoThenByName = (a, b) => {
  let comparePromos = b.promotion.substr(0, 4) - a.promotion.substr(0, 4);
  if (comparePromos == 0) return a.nom.localeCompare(b.nom);
  return comparePromos;
};
