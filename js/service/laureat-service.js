const LaureatService = function (laureatsArray) {
  this.items = [];
  this.promos = {};
  this.promoYears = [];

  laureatsArray.forEach((l) => {
    this.items.push(
      new Laureat(
        l.linkedin,
        l.nom,
        l.prenom,
        l.promotion,
        l.posteOccupe,
        l.lieu,
        l.ville,
        l.pays,
        l.pfe,
        l.cdi,
        l.photo,
        l.quote
      )
    );
  });
  this.items.sort((a, b) => this.sortByName(a, b));

  this.items.forEach((l) => {
    if (!this.promos.hasOwnProperty(l.promotion)) {
      this.promos[l.promotion] = [];
      this.promoYears.push(l.promotion);
    }
    this.promos[l.promotion].push(l);
  });

  for (const promo in this.promos) {
    this.promos[promo].sort((a, b) => this.sortByPromoThenByName(a, b));
  }

  this.promoYears.sort((a, b) => b.localeCompare(a));
};

LaureatService.prototype.sortByName = (a, b) => {
  let c = a.nom.localeCompare(b.nom);
  if (c != 0) return c;
  return a.prenom.localeCompare(b.prenom);
};

LaureatService.prototype.sortByPromoThenByName = function (a, b) {
  let comparePromos = b.promotion.substr(0, 4) - a.promotion.substr(0, 4);
  if (comparePromos == 0) return this.sortByName(a, b);
  return comparePromos;
};
