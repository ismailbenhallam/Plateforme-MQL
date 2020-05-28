const PromoDetail = function (promo, details = []) {
  this.promo = promo;
  this.details = details;
};

PromoDetail.prototype.addDetail = function (partenaire, contratsCDI = 0) {
  details.forEach((d) => {
    if (d.partenaire === partenaire) {
      throw "Details for this Partner aleady supplied";
    }
  });
  let detail = {
    partenaire: partenaire,
    contratsCDI: contratsCDI,
  };
  this.details.push(detail);
};
