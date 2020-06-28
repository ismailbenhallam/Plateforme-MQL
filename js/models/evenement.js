const Evenement = function (
  id,
  nom,
  genre,
  date,
  lieu,
  description,
  photos,
  photosFolder,
  titleColor
) {
  this.id = id;
  this.nom = nom;
  this.genre = genre;
  this.date = new Date(date);
  this.lieu = lieu;
  this.description = description;
  this.photos = [];
  photos.forEach((ph) => {
    let i = new Image();
    i.src = "images/evenements/" + photosFolder + "/" + ph;
    this.photos.push(i);
  });
  this.photosFolder = photosFolder;
  this.titleColor = titleColor;
};
