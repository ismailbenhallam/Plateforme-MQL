const Annonce = function (nom, genre, date, description, link) {
  this.nom = nom;
  this.genre = genre;
  this.date = new Date(date);
  this.description = description;
  this.link = link;
};
