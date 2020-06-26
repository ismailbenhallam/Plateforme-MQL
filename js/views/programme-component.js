const ProgrammeComponent = function (service) {
  for (const semestre of service.items) {
    /*pour regrouper le div de title et le div de table */
    let semestreDivGlobal = create("div");
    semestreDivGlobal.classList.add("semestre-wrapper");
    $("programme").appendChild(semestreDivGlobal);

     /*div de title */
    let semestreTitle = create("div");
    semestreTitle.classList.add("semestre-title");
    let h4 = create("h4");
    h4.classList.add("semestre_header");
    h4.textContent = "Semestre " + semestre.num;
    semestreTitle.appendChild(h4);
    semestreDivGlobal.appendChild(semestreTitle);

    /*div de table */
    let semestreDiv = create("div");
    semestreDiv.classList.add("table", "semestre");
    semestreDivGlobal.appendChild(semestreDiv);
    
    /*table */
    let table = create("table");
    semestreDiv.appendChild(table);

    let thead = create("thead");
    thead.classList.add("table-head");
    let trHead = create("tr");
    let trHeadModule = create("th");
    trHeadModule.classList.add("column1");
    trHeadModule.textContent = "Module";
    trHead.appendChild(trHeadModule);
    let thHeadIntu = create("th");
    thHeadIntu.classList.add("column2")
    thHeadIntu.textContent = "Intitulé de module";
    trHead.appendChild(thHeadIntu);
    thead.appendChild(trHead);
    table.appendChild(thead);
    let tbody = create("tbody");
    tbody.classList.add("table-body");
    for (const module of semestre.modules) {
      let trModule = create("tr");
      let tdModuleNum = create("td");
      tdModuleNum.classList.add("column1");
      let tdModuleNom = create("td");
      tdModuleNom.classList.add("column2");

      if (module.num == null) {
        tdModuleNum.textContent = "";
      } else {
        tdModuleNum.textContent = "M" + module.num;
      }

      trModule.appendChild(tdModuleNum);
      trModule.appendChild(tdModuleNom);
      tbody.appendChild(trModule);
      table.appendChild(tbody);

      tdModuleNom.textContent = module.nom;
    }
  }
};
