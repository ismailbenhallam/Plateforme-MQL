const PresentationComponent = function (service) {
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
      let tdModuleNom = document.createElement("td");

      if (module.num == null) {
        // tdModuleNum.textContent = module.nom;
        // tdModuleNum["colspan"] = 2;
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

  window.displayProgram = function (e) {
    const id = e.target.id;
    let tableId;
    switch (id) {
      case "semestrHehead1":
        tableId = "table1";
        break;
      case "semestrHehead2":
        tableId = "table2";
        break;
      case "semestrHehead3":
        tableId = "table3";
        break;
      case "semestrHehead4":
        tableId = "table4";
        break;
    }
    const table = document.getElementById(tableId);
    if (window.getComputedStyle(table).display === "table") {
      table.style["display"] = "none";
    } else {
      table.style["display"] = "table";
    }
  };
};
