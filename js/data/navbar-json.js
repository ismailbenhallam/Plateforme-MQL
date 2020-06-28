// Every item needs "target", "name", "id" and (an optional) "children" property
// if "name" is not present it takes the value of "target" capitalized
// if "id" is not present it takes the value of "target" + "-link" suffix
// The "children" preperty represent the sub-menus
var navbarJSON = [
  {
    target: "accueil",
    name: "Master MQL",
  },
  { target: "presentationMaster", name: "Présentation" },
  {
    name: "Nous rejoindre",
    id: "nous-rejoindre",
    children: [{ target: "selection" }, { target: "admission" }],
  },
  { target: "activites", name: "Activités" },
  { target: "evenements", name: "Évènements" },
  { target: "stages" },
  { target: "laureats", name: "Lauréats" },
];
