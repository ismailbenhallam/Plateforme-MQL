const StageService = function (promosArray, promosDetailsArray) {
  this.promos = [];
  for (const p of promosArray) {
    this.promos.push(
      new Promo(p.annee, p.etudiants, p.insertionsStage, p.contratsCDI)
    );
  }

  this.promosDetails = [];
  for (const _promoDetail of promosDetailsArray) {
    this.promosDetails.push(
      new PromoDetail(_promoDetail.annee, _promoDetail.details)
    );
  }
};

StageService.prototype.getNbrCDI = function (annee) {
  let total = 0;
  for (const ds of this.promosDetails) {
    if (ds.promo == annee) {
      for (const d of ds.details) {
        total += d.contratsCDI;
      }
    }
  }
  return total;
};

StageService.prototype.getPromo = function (annee) {
  for (const p of this.promos) {
    if (p.annee == annee) return p;
  }
  return null;
};

StageService.prototype.getContratsPartenaire = function (
  anneePromo,
  partenaireName
) {
  partenaireName = partenaireName.toUpperCase();
  let contrats;
  for (const ds of this.promosDetails) {
    if (ds.promo == anneePromo) {
      for (const d of ds.details) {
        if (d.partenaire.toUpperCase() == partenaireName) {
          return d.contratsCDI;
        }
      }
    }
  }
  return 0;
};

StageService.prototype.getPourcentagePartenaire = function (
  anneePromo,
  partenaireName
) {
  partenaireName = partenaireName.toUpperCase();
  let contrats;
  for (const ds of this.promosDetails) {
    if (ds.promo == anneePromo) {
      for (const d of ds.details) {
        if (d.partenaire.toUpperCase() == partenaireName) {
          contrats = d.contratsCDI;
          break;
        }
      }
      break;
    }
  }
  return (contrats / this.getNbrCDI(anneePromo)) * 100;
};

StageService.prototype.premiereAnnee = function () {
  let annee = Infinity;
  for (const p of this.promos) {
    if (p.annee < annee) annee = p.annee;
  }
  return annee;
};

StageService.prototype.derniereAnnee = function () {
  let annee = -Infinity;
  for (const p of this.promos) {
    if (p.annee > annee) annee = p.annee;
  }
  return annee;
};
