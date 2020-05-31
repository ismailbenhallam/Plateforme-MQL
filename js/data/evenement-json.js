const evenementsJSON = [
  // {
  //   nom: "Cérémonie de remise des diplomes 2019",
  //   genre: "Cérémonie de remise des diplomes",
  //   date: "2019-10-21",
  //   lieu: "Fès",
  //   description:
  //     "Cérémonie de remise des diplomes Comme chaque année les étudiants de la première année MQL organisent en fin de cycle de formation une cérémonie de remise des diplomes des lauréats du master MQL promotion 2019. Cette cérémonie à caractère festif a regroupé le corps professoral de la formation, le Conseil des étudiants, et familles des lauréats et leurs amis. La cérémonie a été initié par un mot d'ouverture de M. Mohammed BELLAMLIH le Doyen de la faculté, où il a félicité les lauréats d'avoir réussis leur formation avec brio, et l'ensemble des enseignents pour avoir assuré une formation de haut niveau permettant ainsi aux lauréats une insertion professionnelle évidente, se joint à lui dans une parole élogieuse, le coordinateur du master M. Noureddine CHENFOUR pour féliciter ses étudiants qu'il a guidés jusqu'au bout avec bienveillance et dévouement. En marge de cette manifestation, c'est tenu la présentation du master et des différents activités et évènements organisés durant ces deux années de formation, suivi par le témoignage de quelques lauréats.<br/><br/> Au cours de cette cérémonie, 32 lauréats de la promotion 2019, ont obtenus leurs diplômes, ce qui fait un total de 350 lauréats diplômés relevant du master MQL depuis sa création en 2007.",
  //   photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"],
  //   photosFolder: "remise-diplomes/",
  //   titleColor: "#d9323a",
  // },
  // Red Hope
  // Dans le cadre de la compétition nationale Company Program d'injaz al maghreb qui s'est déroulée à Casablanca le 19 Septembre 2018, les étudiants du Master MQL ont remporté le prix de l'innovation de Boeing attribué au projet "Red Hope"sous la direction du Pr. CHENFOUR Nourreddine, RedHope est une plateforme Web dont le but principal est de simplifier la collecte du sang pour les Centres Régionaux de Transfusion Sanguine ainsi que faciliter le don du sang pour les citoyens.

  // Journée de l'entreprenariat
  // Dans le cadre des activités parascolaires, les étudiants du Master MQL ont organisé en coordination avec le professeur Mme.X, une journée d'entreprenariat le X/X/2020 au centre de conférence de la FSDM  dans laquelle est organisé une compétition dont chaque équipe est supposé pitcher l'idée de sa futur potentielle entreprise. Cette journée a connu la participation de XX etudiants des différents master de la FSDM, et à l'issu de cet évènement parmi les projets présentés trois d'entre eux ont été primé comme étant les meilleurs projets à concrétiser en bénéficiant comme prix d'une assistance financière et d'un bon coaching tout au long de la réalisaton de ces projets.

  {
    nom: "Campagne de stages CGI 2019",
    genre: "Campagne de stages",
    date: "2019-11-11",
    lieu: "FSDM Fès",
    description:
      "Dans le cadre du partenariat des multinationales et le master MQL, se tiennent au sein de la FSDM, des campagnes de prospéctions de futurs jeunes diplomés en voie de réalisation du PFE. Ces campagnes de stages, qui ont pour objet d'informer les étudiants sur des offre de stages PFE rémunérés de 4 à 6 mois d'une part, et d'une autre part d'effectuer des tests psychotechniques et techniques ainsi que des entretiens RH durant la journée. Sur ce, Umanis organisa une campagne de recrutement de stagiaires PFE pour l’année 2019 au profit des étudiants du master MQL. Créée il y a 27 ans par son actuel Président Directeur Général, Umanis c’est aujourd’hui 2500 consultants et experts spécialisés en Business Intelligence, en CRM et en Web/IT qui délivrent des prestations de qualité en conseil et en ingénierie auprès des grands comptes (80% des sociétés du CAC 40 lui font confiance). Dans le cadre du développement de nos activités, Umanis Casablanca Services, filiale 100% d’Umanis, s’étend et recrute des talents pour l’accompagner dans son expansion du service Sourcing BPO pour le compte des Business Unit en France. Vous souhaitez donner corps à vos ambitions et prendre en main votre carrière? Nous croyons à l'esprit d'aventure et la richesse qu'apporte la pluralité des expériences. Notre politique de gestion des carrières est basée sur l'ouverture et la diversité des missions car chez Umanis, au- delà de vos compétences d'aujourd'hui, nous apprécions les hauts potentiels qui seront nos experts de demain.",
    photos: [
      "photo2.jpg",
      "photo1.jpg",
      "photo3.jpg",
      "photo4.jpg",
      "photo5.jpg",
    ],
    photosFolder: "campagnes-stages/CGI-2019",
    titleColor: "rgb(225, 25, 55)",
  },
  {
    nom: "Campagne de stages Umanis 2019",
    genre: "Campagne de stages",
    date: "2019-11-11",
    lieu: "FSDM Fès",
    description:
      "Dans le cadre du partenariat des multinationales et le master MQL, se tiennent au sein de la FSDM, des campagnes de prospéctions de futurs jeunes diplomés en voie de réalisation du PFE. Ces campagnes de stages, qui ont pour objet d'informer les étudiants sur des offre de stages PFE rémunérés de 4 à 6 mois d'une part, et d'une autre part d'effectuer des tests psychotechniques et techniques ainsi que des entretiens RH durant la journée. Sur ce, Umanis organisa une campagne de recrutement de stagiaires PFE pour l’année 2019 au profit des étudiants du master MQL. Créée il y a 27 ans par son actuel Président Directeur Général, Umanis c’est aujourd’hui 2500 consultants et experts spécialisés en Business Intelligence, en CRM et en Web/IT qui délivrent des prestations de qualité en conseil et en ingénierie auprès des grands comptes (80% des sociétés du CAC 40 lui font confiance). Dans le cadre du développement de nos activités, Umanis Casablanca Services, filiale 100% d’Umanis, s’étend et recrute des talents pour l’accompagner dans son expansion du service Sourcing BPO pour le compte des Business Unit en France. Vous souhaitez donner corps à vos ambitions et prendre en main votre carrière? Nous croyons à l'esprit d'aventure et la richesse qu'apporte la pluralité des expériences. Notre politique de gestion des carrières est basée sur l'ouverture et la diversité des missions car chez Umanis, au- delà de vos compétences d'aujourd'hui, nous apprécions les hauts potentiels qui seront nos experts de demain.",
    photos: [
      "photo1.jpg",
      "photo2.jpg",
      "photo3.jpg",
      "photo4.jpg",
      "photo5.jpg",
    ],
    photosFolder: "campagnes-stages/Umanis-2019",
    titleColor: "rgb(213,8,19)",
  },
  {
    nom: "Campagne de stages Capgemini 2019",
    genre: "Campagne de stages",
    date: "2019-10-21",
    lieu: "FSDM Fès",
    description:
      "Dans le cadre du partenariat des multinationales et le master MQL, se tiennent au sein de la FSDM, des campagnes de prospéctions de futurs jeunes diplomés en voie de réalisation du PFE. Ces campagnes de stages, qui ont pour objet d'informer les étudiants sur des offre de stages PFE rémunérés de 4 à 6 mois d'une part, et d'une autre part d'effectuer des tests psychotechniques et techniques ainsi que des entretiens RH durant la journée. Sur ce, Capgemini organisa une campagne de recrutement de stagiaires PFE pour l’année 2019 au profit des étudiants du master MQL. Avec plus de 190 000 collaborateurs, Capgemini est présent dans plus de 40 pays et célèbre son cinquantième anniversaire en 2017. Le Groupe est l’un des leaders mondiaux du conseil, des services informatiques et de l’infogérance et a réalisé en 2016 un chiffre d’affaires de 12, 5 milliards d’euros. Capgemini se positionne comme le partenaire de référence de ses clients pour les accompagner dans le programme de transformation de leur système d’information.Tout à la fois maître d’œuvre et architecte de projets d’intégration de systèmes, conseil indépendant en technologies de l’information, fabricant d’application et créateur de solutions technologiques innovantes, il apporte à ses clients une offre de services globale. Capgemini assure la conduite de grands projets complexes, allant de la conception à l’intégration et la mise en œuvre de solutions technologiques, garantit des engagements de bout en bout, en s’appuyant sur une démarche d’industrialisation éprouvée.",
    photos: [
      "photo3.jpg",
      "photo1.jpg",
      "photo2.jpg",
      "photo4.jpg",
      "photo5.jpg",
      "photo6.jpg",
    ],
    photosFolder: "campagnes-stages/Capgemini-2019",
    titleColor: "#0572AE",
  },
  // {
  //   nom: "Session de recrutement Umanis 2020",
  //   genre: "Session de recrutement",
  //   date: "2019-1-22",
  //   lieu: "Fès",
  //   description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ut reprehenderit eos modi magnam tempore enim autem exercitationem, similique officia assumenda porro, numquam dolorem alias architecto vel esse id quasi?",
  //   photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
  //   photosFolder: "SRU2019",
  //   titleColor: "rgb(213,5,16)",
  // },
];
