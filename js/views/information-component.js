const InformationComponent = function (service) {
  this.service = service;
  this.addInformation(service.items);
};

InformationComponent.prototype.addInformation = function (infos) {
  infos.forEach((info) => {
    let infoContainer = $("informations");
    let newInfo = create("div");
    newInfo.className = "mql-info-text";
    let iconInfo = create("img");
    iconInfo.setAttribute("src", "icons/" + info.icon);
    let descInfo = create("p");
    let description = document.createTextNode(info.description);
    descInfo.appendChild(description);
    newInfo.appendChild(iconInfo);
    newInfo.appendChild(descInfo);
    infoContainer.appendChild(newInfo);
  });
};
