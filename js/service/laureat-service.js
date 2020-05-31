const LaureatService = function(laureatsArray) {
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
        l.experiences,
        l.photo 
      )
    );
  });
};
