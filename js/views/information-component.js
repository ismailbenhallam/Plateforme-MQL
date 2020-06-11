const InformationComponent = function (service) {
    this.service = service;
    this.addInformation(service.informations);
}

InformationComponent.prototype.get = function (id) {
    return document.getElementById(id);
}

InformationComponent.prototype.addInformation = function (infos) {
    infos.forEach(info => {
        let infoContainer = this.get("informations");
        let newInfo = document.createElement('div');
        newInfo.className = "mql-info-text";
        let iconInfo = document.createElement("img");
        iconInfo.setAttribute("src", "icons/" + info.icon);
        let descInfo = document.createElement("p");
        let description = document.createTextNode(info.description);
        descInfo.appendChild(description);/* */
        newInfo.appendChild(iconInfo);/* */
        newInfo.appendChild(descInfo);/* */
        infoContainer.appendChild(newInfo);
    });
}

