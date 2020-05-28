let partenaireService = new PartenaireService(partenairesJSON);
let partenaireComponent = new PartenaireComponent(partenaireService);
let navbarComponent = new NavbarComponent(new NavbarService(navbarJSON));
let stageComponent = new StageComponent(
  new StageService(promos, promosDetails),
  partenaireService
);
new LaureatComponent(new LaureatService(laureatsJSON));
new DeboucheComponent(new DeboucheService(debouchesJSON));
