// Every item needs "target", "name", "id" and (an optional) "children" property
// if "name" is not present it takes the value of "target" capitalized
// if "id" is not present it takes the value of "target" + "-link" suffix
// The "children" preperty represent the sub-menus
var navbarJSON = [
  // { target: "accueil" },
  {
    target: "accueil",
    name: "Master MQL",
    children: [
      { target: "coordinateur", name: "Mot du Coordonnateur" },
      { target: "presentationMaster", name: "Présentation" },
    ],
  },
  {
    target: null,
    name: "Nous rejoindre",
    children: [{ target: "selection" }, { target: "admission" }],
  },
  { target: "activites", name: "Activités" },
  { target: "evenements", name: "Évènements" },
  { target: "stages" },
  { target: "laureats", name: "Lauréats" },
];
