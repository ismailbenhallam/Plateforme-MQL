const ProfesseurService = function (professeursArray) {
    this.items = [];
    professeursArray.forEach((p) => {
      this.items.push(
        new Professeur(
          p.email,
          p.nom,
          p.poste,
          p.matiere,
          p.photo
        )
      );
    });
}