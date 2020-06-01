const Promo = function (annee, etudiants, insertionsStage, contratsCDI) {
  this.annee = annee;
  this.etudiants = etudiants;
  this.insertionsStage = insertionsStage;
  this.contratsCDI = contratsCDI;
};

Promo.prototype.getPourcentageStage = function () {
  return (this.insertionsStage / this.etudiants) * 100;
};

Promo.prototype.getPourcentageCDI = function () {
  return (this.contratsCDI / this.etudiants) * 100;
};
