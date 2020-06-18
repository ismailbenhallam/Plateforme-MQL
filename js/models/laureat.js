const Laureat = function (
  linkedin,
  nom,
  promotion,
  posteOccupe,
  lieu,
  ville,
  pays,
  pfe,
  cdi,
  photo
) {
  this.linkedin = linkedin;
  nom = nom.split(" ");
  this.nom = nom[0].toUpperCase() + " " + nom[1].capitalize();
  this.promotion = promotion;
  this.posteOccupe = posteOccupe;
  this.lieu = lieu;
  this.ville = ville;
  this.pays = pays;
  this.pfe = pfe;
  this.cdi = cdi;
  this.photo = photo;
};
