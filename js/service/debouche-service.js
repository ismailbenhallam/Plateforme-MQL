const DeboucheService = function (debouchesArray) {
  this.items = [];
  for (const debouche of debouchesArray) {
    this.items.push(new Debouche(debouche));
  }
};
