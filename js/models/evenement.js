const Evenement = function (
  nom,
  genre,
  date,
  lieu,
  description,
  photos,
  photosFolder,
  titleColor
) {
  this.nom = nom;
  this.genre = genre;
  this.date = new Date(date);
  this.lieu = lieu;
  this.description = description;
  this.photos = photos;
  this.photosFolder = photosFolder;
  this.titleColor = titleColor;
};
