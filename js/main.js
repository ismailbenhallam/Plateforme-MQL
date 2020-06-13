let partenaireService = new PartenaireService(partenairesJSON);
let partenaireComponent = new PartenaireComponent(partenaireService);
let navbarComponent = new NavbarComponent(new NavbarService(navbarJSON));
let stageComponent = new StageComponent(
  new StageService(promos, promosDetails),
  partenaireService
);
new DeboucheComponent(new DeboucheService(debouchesJSON));
new EvenementComponent(new EvenementService(evenementsJSON));
new PresentationComponent(new ProgrammeService(semestresJSON));
new LaureatComponent(new LaureatService(laureatsJSON));
let informationService = new InformationService(informationsJSON);
let informationComponent = new InformationComponent(informationService);
new AnnonceComponent(new AnnonceService(annoncesJSON));
