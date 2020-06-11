const PresentationComponent = function (service) {
  /*
  for (const semestre of service.items) {
    let semestreDiv = document.createElement("div");
    document.getElementById("programme").appendChild(semestreDiv);
    semestreDiv.classList.add("semestre");
    let semestreTitle = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.classList.add("semestre_header");
    h4.textContent = "Semestre " + semestre.num;
    semestreDiv.appendChild(h4);

    let table = document.createElement("table");
    table.classList.add("semestre_table");
    semestreDiv.appendChild(table);

    let thead = document.createElement("thead");
    let trHead = document.createElement("tr");
    let trHeadModule = document.createElement("th");
    trHeadModule.textContent = "Module";
    trHead.appendChild(trHeadModule);
    let thHeadIntu = document.createElement("th");
    thHeadIntu.textContent = "Intitulé de module";
    trHead.appendChild(thHeadIntu);
    thead.appendChild(trHead);
    table.appendChild(thead);

    for (const module of semestre.modules) {
      let trModule = document.createElement("tr");
      let tdModuleNum = document.createElement("td");
      tdModuleNum.classList.add("semestre_table_cell");
      let tdModuleNom = document.createElement("td");
      tdModuleNom.classList.add("semestre_table_cell");

      if (module.num == null) {
        tdModuleNum.textContent = "";
      } else {
        tdModuleNum.textContent = "M" + module.num;
      }

      trModule.appendChild(tdModuleNum);
      trModule.appendChild(tdModuleNom);
      table.appendChild(trModule);

      tdModuleNom.textContent = module.nom;
    }
  }
  */
};
