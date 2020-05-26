const PartenaireService = function (partenairesArray) {
  this.items = [];
  partenairesArray.forEach((p) => {
    this.items.push(new Partenaire(p.name, p.website, p.logoUrl));
  });
};
