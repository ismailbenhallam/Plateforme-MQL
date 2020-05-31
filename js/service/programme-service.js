const ProgrammeService = function (semestresArray) {
  this.items = [];
  let moduleNum = 1;
  let semestreNum = 1;
  for (const s of semestresArray) {
    let modules = [];
    if (s.length == 1) {
      modules.push(new Module(null, s[0]));
      moduleNum++;
    } else
      for (const m of s) {
        modules.push(new Module(moduleNum++, m));
      }
    this.items.push(new Semestre(semestreNum++, modules));
  }
};
