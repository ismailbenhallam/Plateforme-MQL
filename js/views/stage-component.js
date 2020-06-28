const StageComponent = function (stageService, partenaireService) {
  this.stageService = stageService;
  this.partenaireService = partenaireService;

  let div = $("choose-year-stage");
  let annee;
  stageService.promosDetails.forEach((pd) => {
    div.appendChild(document.createTextNode(pd.promo));
    let input = create("input");
    input.name = "year";
    input.type = "radio";
    input.value = pd.promo;
    div.appendChild(input);
    let span = create("span");
    span.innerHTML = "&nbsp;&nbsp; ";
    div.appendChild(span);
    annee = pd.promo;
  });

  let inputs = document.querySelectorAll("#choose-year-stage > input");

  for (index in inputs) {
    inputs[index].onclick = function () {
      let pie = $("pie");

      let parent = pie.parentNode;
      parent.removeChild(pie);
      pie = create("canvas");
      pie.id = "pie";
      parent.appendChild(pie);

      buildPieChart(stageService, partenaireService, this.value, $("pie"));
    };
  }

  this.buildBarChart(stageService, $("bar"));
  inputs[inputs.length - 1].click();
};

StageComponent.prototype.buildBarChart = function (service, canvas) {
  // 2015, 2016...
  let labels = [];
  service.promos.forEach((promo) => {
    labels.push(promo.annee);
  });

  // Nombre d'étudiant
  let nrbEtudiantPromos = [];
  service.promos.forEach((promo) => {
    nrbEtudiantPromos.push(promo.etudiants);
  });

  // Insertions stage
  let nrbInsertionsStage = [];
  service.promos.forEach((promo) => {
    nrbInsertionsStage.push(promo.insertionsStage);
  });

  // Contrats CDI
  let nrbContratsCDI = [];
  service.promos.forEach((promo) => {
    nrbContratsCDI.push(promo.contratsCDI);
  });

  let datasets = [];

  datasets.push({
    label: "Nombre d'étudiants",
    data: nrbEtudiantPromos,
    backgroundColor: "rgb(85,23,67)",
    borderWidth: 1,
  });

  datasets.push({
    label: "Insertions stage",
    data: nrbInsertionsStage,
    backgroundColor: "rgb(194,0,55)",
    borderWidth: 1,
  });

  datasets.push({
    label: "Contrats CDI",
    data: nrbContratsCDI,
    backgroundColor: "rgb(248,190,0)",
    borderWidth: 1,
  });

  let chart = new Chart(canvas, {
    type: "bar",
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: {
      tooltips: {
        cornerRadius: 0,
        caretSize: 0,
        xPadding: 8,
        yPadding: 8,
        titleFontStyle: "normal",
        titleMarginBottom: 10,
        titleFontFamily:
          "Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        bodyFontFamily:
          "Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      },
      responsive: true,
      maintainAspectRatio: false,
      data: {
        labels: {
          fontFamily:
            "Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
          fontColor: "black",
        },
      },
      legend: {
        labels: {
          fontFamily:
            "Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
          fontColor: "black",
        },
      },
      title: {
        display: true,
        fontFamily:
          "Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        fontColor: "black",
        fontSize: "20",
        text: `Insertion Multinationales ${service.premiereAnnee()} - ${service.derniereAnnee()}`,
      },
      responsiveAnimationDuration: 500, // animation duration after a resize
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Etudiants",
              fontFamily:
                "Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Promotions",
              fontFamily:
                "Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
            },
          },
        ],
      },
    },
  });
};

StageComponent.prototype.buildPieChart = buildPieChart = function (
  stageService,
  partenaireService,
  annee,
  canvas
) {
  let partenaires = [];
  // CGI, Capgemini...
  for (const pd of stageService.promosDetails) {
    if (pd.promo == annee) {
      for (const d of pd.details) {
        partenaires.push(d.partenaire);
      }
    }
  }

  let labels = [];
  // Contrats CDI
  let nrbCDIPartenaire = [];
  partenaires.forEach((partenaire) => {
    let n = stageService.getContratsPartenaire(annee, partenaire);
    if (n > 0) {
      nrbCDIPartenaire.push(n);
      labels.push(partenaire);
    }
  });
  let datasets = [];

  datasets.push({
    label: "Nombre de contrats CDI",
    data: nrbCDIPartenaire,
    borderWidth: 1,
  });

  let chart = new Chart(canvas, {
    type: "pie",
    data: {
      datasets: [
        {
          label: "Nombre de contrats CDI",
          data: nrbCDIPartenaire,
          backgroundColor: [
            "#0074D9",
            "#FF4136",
            "#2ECC40",
            "#FF851B",
            "#7FDBFF",
            "#B10DC9",
            "#FFDC00",
            "#001f3f",
            "#39CCCC",
            "#01FF70",
            "#85144b",
            "#F012BE",
            "#3D9970",
            "#111111",
            "#AAAAAA",
          ],
        },
      ],
      labels: labels,
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        cornerRadius: 0,
        caretSize: 0,
        xPadding: 8,
        yPadding: 8,
        titleFontStyle: "normal",
        titleMarginBottom: 15,
        titleFontFamily:
          "Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        bodyFontFamily:
          "Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      },
      legend: {
        labels: {
          fontFamily:
            "Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
          fontColor: "black",
        },
        position: "top",
      },
      title: {
        display: true,
        fontFamily:
          "Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        fontColor: "black",
        fontSize: "20",
        text: `Pourcentage Insertion Multinationales ${annee}`,
      },
      responsiveAnimationDuration: 500,
    },
  });
};
