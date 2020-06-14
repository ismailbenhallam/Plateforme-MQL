const PresentationComponent = function (service) {
  for (const semestre of service.items) {
    let semestreDiv = create("div");
    $("programme").appendChild(semestreDiv);
    semestreDiv.classList.add("semestre");
    let semestreTitle = create("div");
    let h4 = create("h4");
    h4.classList.add("semestre_header");
    h4.textContent = "Semestre " + semestre.num;
    semestreDiv.appendChild(h4);

    let table = create("table");
    table.classList.add("semestre_table");
    semestreDiv.appendChild(table);

    let thead = create("thead");
    let trHead = create("tr");
    let trHeadModule = create("th");
    trHeadModule.textContent = "Module";
    trHead.appendChild(trHeadModule);
    let thHeadIntu = create("th");
    thHeadIntu.textContent = "Intitulé de module";
    trHead.appendChild(thHeadIntu);
    thead.appendChild(trHead);
    table.appendChild(thead);

    for (const module of semestre.modules) {
      let trModule = create("tr");
      let tdModuleNum = create("td");
      tdModuleNum.classList.add("semestre_table_cell");
      let tdModuleNom = create("td");
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
};
