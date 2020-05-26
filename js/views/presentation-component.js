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
