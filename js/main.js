// Services
let navbarService = new NavbarService(navbarJSON);
let deboucheService = new DeboucheService(debouchesJSON);
let programmeService = new ProgrammeService(semestresJSON);
let informationService = new InformationService(informationsJSON);
let professeurService = new ProfesseurService(professeursJSON);
let partenaireService = new PartenaireService(partenairesJSON);
let annonceService = new AnnonceService(annoncesJSON);
let evenementService = new EvenementService(evenementsJSON);
let actualiteService = new ActualiteService(annoncesJSON, evenementsJSON);
let stageService = new StageService(promos, promosDetails);
let laureatService = new LaureatService(laureatsJSON);

// Components
let navbarComponent = new NavbarComponent(navbarService);
new RechercheComponent(navbarComponent.getNavbarItems());
new HistoryComponent();
new DeboucheComponent(deboucheService);
new ProgrammeComponent(programmeService);
new InformationComponent(informationService);
new ProfesseurComponent(professeurService);
new PartenaireComponent(partenaireService);
new AnnonceComponent(annonceService);
new EvenementComponent(evenementService);
new ActualiteComponent(actualiteService);
new StageComponent(stageService, partenaireService);
new LaureatComponent(laureatService);
new QuoteComponent(laureatService);
new SelectComponent();
