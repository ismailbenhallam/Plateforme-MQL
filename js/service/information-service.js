const InformationService = function (infos) {
  this.items = [];
  this.loadInformation(infos);
};
InformationService.prototype.loadInformation = function (infos) {
  infos.forEach((info) => {
    this.items.push(new Information(info.icon, info.description));
  });
};
