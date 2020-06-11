const InformationService = function (infos) {
    this.informations = [];
    this.loadInformation(infos);
}
InformationService.prototype.loadInformation = function (infos) {
    infos.forEach(info => {
        this.informations.push(
            new Information(
                info.icon,
                info.description
            )
        )
    });
}