const StageComponent = function (stageService, partenaireService) {
  this.stageService = stageService;
  this.partenaireService = partenaireService;

  this.createPromotionsDetailsTable();

  this.createCDIsDetailsTable();
};

StageComponent.prototype.createPromotionsDetailsTable = function () {
  let wrapper = document.getElementById("table-insertions-wrapper");
  let table = create("table");
  wrapper.appendChild(table);
  //   table.id = "table1";
  table.classList.add("semestre_table", "data");

  let thead = create("thead");
  table.appendChild(thead);
  let tr = create("tr");
  thead.appendChild(tr);

  // promotions
  let th = create("th");
  th.textContent = "Promotion";
  tr.appendChild(th);

  let years = [];
  for (const promo of this.stageService.promos) {
    let th = create("th");
    th.textContent = promo.annee;
    years.push(promo.annee);
    tr.appendChild(th);
  }

  // nombre d'étudiants
  tr = create("tr");
  tr.classList.add("colored_data");
  table.appendChild(tr);
  let td = create("td");
  td.classList.add("semestre_table_cell", "title_cell");
  td.innerHTML = "Nb. d'étudiants";
  tr.appendChild(td);

  for (const promo of this.stageService.promos) {
    td = create("td");
    td.classList.add("semestre_table_cell");
    td.textContent = promo.etudiants;
    tr.appendChild(td);
  }

  // insertions stage
  tr = create("tr");
  tr.classList.add("colored_data");
  table.appendChild(tr);
  td = create("td");
  td.classList.add("semestre_table_cell", "title_cell");
  td.innerHTML =
    "Insertion Stage <p>+Multinationale<br>+Rémunéré<br>+Pré-embauche</p >";
  tr.appendChild(td);

  for (const promo of this.stageService.promos) {
    td = create("td");
    td.classList.add("semestre_table_cell");
    td.textContent = promo.insertionsStage;
    tr.appendChild(td);
  }

  // Pourcentage insertions stage
  tr = create("tr");
  tr.classList.add("colored_data");
  table.appendChild(tr);
  td = create("td");
  td.classList.add("semestre_table_cell", "title_cell");
  td.textContent = "Pourcentage";
  tr.appendChild(td);

  for (const promo of this.stageService.promos) {
    td = create("td");
    td.classList.add("semestre_table_cell");
    td.textContent = Math.round(promo.getPourcentageStage()) + "%";
    tr.appendChild(td);
  }

  // contrats CDI
  tr = create("tr");
  tr.classList.add("colored_data");
  table.appendChild(tr);
  td = create("td");
  td.classList.add("semestre_table_cell", "title_cell");
  td.innerHTML = "Insertion Définitive :<p>+ Contrat CDI</p>";
  tr.appendChild(td);

  for (const promo of this.stageService.promos) {
    td = create("td");
    td.classList.add("semestre_table_cell");
    td.textContent = promo.contratsCDI;
    tr.appendChild(td);
  }

  // Pourcentage contrats CDI
  tr = create("tr");
  tr.classList.add("colored_data");
  table.appendChild(tr);
  td = create("td");
  td.classList.add("semestre_table_cell", "title_cell");
  td.textContent = "Pourcentage";
  tr.appendChild(td);

  for (const promo of this.stageService.promos) {
    td = create("td");
    td.classList.add("semestre_table_cell");
    td.textContent = Math.round(promo.getPourcentageCDI()) + "%";
    tr.appendChild(td);
  }
};

StageComponent.prototype.createCDIsDetailsTable = function () {
  let wrapper = document.getElementById("table-CDIs-wrapper");
  let table = create("table");
  wrapper.appendChild(table);
  //   table.id = "table1";
  table.classList.add("semestre_table", "data", "highlight");

  let thead = create("thead");
  table.appendChild(thead);
  let tr = create("tr");
  thead.appendChild(tr);

  // Years
  let th = create("th");
  //   th.innerHTML = "<span></span>";
  tr.appendChild(th);
  thead.appendChild(tr);

  let years = [];
  for (const promo of this.stageService.promosDetails) {
    let th = create("th");
    th.textContent = promo.promo;
    years.push(promo.promo);
    tr.appendChild(th);
  }
  th = create("th");
  th.textContent = "Total";
  tr.appendChild(th);

  let partenaires = [];
  for (const detail of this.stageService.promosDetails[0].details) {
    partenaires.push(detail.partenaire);
  }

  let tbody = create("tbody");
  table.appendChild(tbody);

  let total = 0;
  let totalCDI = 0;
  for (const p of partenaires) {
    tr = create("tr");
    td = create("td");
    td.classList.add("semestre_table_cell_title");
    td.textContent = p;
    tr.appendChild(td);
    for (const y of years) {
      td = create("td");
      td.classList.add("semestre_table_cell");
      let nbr = this.stageService.getContratsPartenaire(y, p);
      total += nbr;
      td.textContent = nbr == 0 ? "" : nbr;
      tr.appendChild(td);
    }
    td = create("td");
    td.classList.add("semestre_table_cell");
    td.textContent = total;
    tr.appendChild(td);
    tbody.appendChild(tr);
    total = 0;
  }

  tr = create("tr");
  td = create("td");
  td.classList.add("semestre_table_cell_title");
  td.textContent = "Contrat CDI";
  tr.appendChild(td);
  tbody.appendChild(tr);

  for (const y of years) {
    let nbr = this.stageService.getNbrCDI(y);
    totalCDI += nbr;
    td = create("td");
    td.classList.add("semestre_table_cell");
    td.textContent = nbr;
    tr.appendChild(td);
  }

  td = create("td");
  td.classList.add("semestre_table_cell");
  td.textContent = totalCDI;
  tr.appendChild(td);

  /*
  - promo
  - details
    - partenaire
    - contratsCDI


    <table class="semestre_table data" id="table1">
              <tbody>
                <tr>
                  <td class="semestre_table_cell_title">CAPGEMENI</td>
                  <td class="semestre_table_cell">15</td>
                  <td class="semestre_table_cell">17</td>
                  <td class="semestre_table_cell">15</td>
                  <td class="semestre_table_cell">5</td>
                  <td class="semestre_table_cell">19</td>
                  <td class="semestre_table_cell highlight">71</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">CGI</td>
                  <td class="semestre_table_cell">5</td>
                  <td class="semestre_table_cell">9</td>
                  <td class="semestre_table_cell">13</td>
                  <td class="semestre_table_cell">15</td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell highlight">44</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">CEGEDIM</td>
                  <td class="semestre_table_cell">3</td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell">2</td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell total">7</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">UMANIS</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell">2</td>
                  <td class="semestre_table_cell">5</td>
                  <td class="semestre_table_cell total">7</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">ATOS</td>
                  <td class="semestre_table_cell">2</td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell">2</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell total">6</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">S2M</td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell">2</td>
                  <td class="semestre_table_cell total">3</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">SG ATS</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell total">1</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">ACCENTURE</td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell total">1</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">SQLi</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell total">1</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">HPS</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell total">1</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">LNet Communication</td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell total">1</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">Logic Group</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell total">1</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">Sopra Steria</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell total">1</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">BDSI Maroc</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell total">1</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title">FEDASO</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell">1</td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell"></td>
                  <td class="semestre_table_cell total">1</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title numbers">Contrat CDI</td>
                  <td class="semestre_table_cell">28</td>
                  <td class="semestre_table_cell">31</td>
                  <td class="semestre_table_cell">31</td>
                  <td class="semestre_table_cell">26</td>
                  <td class="semestre_table_cell highlight">31</td>
                  <td class="semestre_table_cell highlight">147</td>
                </tr>
                <tr>
                  <td class="semestre_table_cell_title numbers">Effectif</td>
                  <td class="semestre_table_cell">30</td>
                  <td class="semestre_table_cell">35</td>
                  <td class="semestre_table_cell">34</td>
                  <td class="semestre_table_cell">30</td>
                  <td class="semestre_table_cell">31</td>
                  <td class="semestre_table_cell">160</td>
                </tr>
              </tbody>
            </table>
    */
};
