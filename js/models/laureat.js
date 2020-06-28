const Laureat = function (
  linkedin,
  nom,
  prenom,
  promotion,
  posteOccupe,
  lieu,
  ville,
  pays,
  pfe,
  cdi,
  photo,
  quote
) {
  this.linkedin = linkedin;
  this.nom = nom.trim().toUpperCase();
  this.prenom = prenom.trim().capitalize();
  this.promotion = promotion;
  this.posteOccupe = posteOccupe;
  this.lieu = lieu;
  this.ville = ville;
  this.pays = pays;
  this.pfe = pfe;
  this.cdi = cdi;
  this.photo = photo;
  this.quote = quote;
};
