const Annonce = function (
  nom,
  genre,
  date,
  // date_debut,
  // date_fin,
  description,
  link
) {
  this.nom = nom;
  this.genre = genre;
  this.date = new Date(date);
  // this.dateDebut = date_debut;
  // this.dateFin = date_fin;
  this.description = description;
  this.link = link;
};
