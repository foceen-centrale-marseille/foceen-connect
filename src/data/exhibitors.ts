/* ------------------------------------------------------------------ */
/*  EXHIBITORS DATA — Fichier centralisé des exposants FOCEEN          */
/* ------------------------------------------------------------------ */

export type Exposant = {
  id: number;
  name: string;
  logo?: string;
  sector: string;
  domain: string;
  yearCreated?: number;
  location: string;
  employees: string;
  website: string;
  websiteCarriere?: string;
  chiffreAffaires?: string;
  profiles: string;
  postTypes: string[];
  applicationMethod: string;
  description: string;
  highlights: string[];
};

export const DOMAINS = [
  "Tous",
  "BTP",
  "Énergie",
  "Agroalimentaire",
  "Numérique",
  "Conseil",
  "Défense",
  "Transport",
  "Environnement",
  "Industrie",
  "Finance",
  "Banque / Assurance",
  "Audit & Conseil",
];

export const parrain: Exposant = {
  id: 0,
  name: "VINCI Energies",
  logo: "/Logo_VE_bleu_Rouge.png",
  sector: "Énergie & Infrastructure",
  domain: "Énergie",
  yearCreated: 1918,
  location: "Nanterre, France",
  employees: "90 000+",
  website: "https://www.vinci-energies.com",
  profiles: "Ingénieurs, techniciens, chefs de projet",
  postTypes: ["CDI", "Alternance", "Stage"],
  applicationMethod: "Candidature en ligne via le site carrières",
  description:
    "VINCI Energies accélère les transitions énergétique et numérique. Ancrées dans les territoires, les entreprises de VINCI Energies rendent les infrastructures d'énergie, de transport et de communication, les usines ainsi que les bâtiments chaque jour plus fiables, plus sûrs et plus efficients.",
  highlights: [
    "Leader mondial des solutions multi-techniques",
    "Présence dans 57 pays",
    "Innovation au cœur de la stratégie",
    "Engagement fort en faveur du développement durable",
  ],
};

export const partenaires: Exposant[] = [
  {
    id: 100,
    name: "Métropole Aix-Marseille Provence",
    logo: "/logo-metropole-aix-marseille.png",
    sector: "Collectivité territoriale",
    domain: "Environnement",
    yearCreated: 2016,
    location: "Marseille, France",
    employees: "10 000+",
    website: "https://www.ampmetropole.fr",
    profiles: "Ingénieurs, urbanistes, gestionnaires",
    postTypes: ["CDI", "Stage", "CDD"],
    applicationMethod: "Via le portail de recrutement de la Métropole",
    description:
      "La Métropole Aix-Marseille-Provence est la plus vaste métropole de France. Elle œuvre pour le développement économique, l'aménagement du territoire et la transition écologique.",
    highlights: ["Plus grande métropole de France", "92 communes", "Acteur clé de la transition écologique"],
  },
  {
    id: 101,
    name: "Haribo",
    logo: "/png-clipart-logo-haribo-of-america-brand-bear-bear-animals-text.png",
    sector: "Agroalimentaire",
    domain: "Agroalimentaire",
    yearCreated: 1920,
    location: "Marseille, France",
    employees: "7 000+",
    website: "https://www.haribo.com/fr-fr",
    profiles: "Ingénieurs production, qualité, supply chain",
    postTypes: ["CDI", "Alternance", "Stage"],
    applicationMethod: "Candidature en ligne",
    description:
      "HARIBO est le leader mondial de la confiserie de sucre et de réglisse, offrant des produits de qualité depuis plus d'un siècle.",
    highlights: ["Leader mondial de la confiserie", "Usine à Marseille", "Marque iconique"],
  },
  {
    id: 102,
    name: "Batiactu",
    logo: "/81792a_3e8f982fc8a6497ca46a98b487517d35~mv2.png",
    sector: "Média / BTP",
    domain: "BTP",
    yearCreated: 2000,
    location: "Paris, France",
    employees: "50-200",
    website: "https://www.batiactu.com",
    profiles: "Rédacteurs, développeurs, commerciaux",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "Candidature par email",
    description:
      "Batiactu est le premier portail d'information dédié aux professionnels de la construction et du bâtiment en France.",
    highlights: ["Média de référence du BTP", "Actualités et réglementation", "Communauté de professionnels"],
  },
];

export const exposantsList: Exposant[] = [
  // ── Fiches intégrées depuis les documents reçus ──
  {
    id: 5,
    name: "CEA",
    sector: "Transition énergétique, transition numérique, médecine du futur, défense et sécurité, assainissement démantèlement",
    domain: "Énergie",
    yearCreated: 1945,
    location: "Centre de CADARACHE – 13108 Saint Paul Lez Durance",
    employees: "21 500",
    website: "https://www.cea.fr",
    websiteCarriere: "https://www.emploi.cea.fr",
    profiles: "Ingénieurs et techniciens",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod:
      "Dépôt de candidatures spontanées ou réponses des offres via le site de recrutements (CV+LM). Entretiens internes et externes (dont cabinets de recrutements).",
    description:
      "Le CEA est un acteur majeur de la recherche, au service de l'État, de l'économie et des citoyens. S'appuyant sur une recherche fondamentale d'excellence, il apporte des solutions concrètes à leurs besoins dans quatre domaines principaux :",
    highlights: [
      "Les énergies bas carbone (nucléaire et renouvelables)",
      "Le numérique",
      "Les technologies pour la médecine du futur",
      "La défense et la sécurité",
    ],
  },
  {
    id: 50,
    name: "Groupe ADF",
    sector: "Industrie",
    domain: "Industrie",
    yearCreated: 1962,
    location: "Echelle internationale",
    employees: "4 900",
    chiffreAffaires: "640 millions d'euros",
    website: "https://www.groupeadf.com/fr/groupe/groupe-adf",
    websiteCarriere: "https://careers.groupeadf.com/",
    profiles: "Esprit d'équipe et coopération, Rigueur et sens des responsabilités, Réactivité et adaptabilité, Culture sécurité, Orientation client, Leadership terrain",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod:
      "Entretien téléphonique RH après sélection du CV et de la lettre de motivation, un entretien avec le responsable opérationnel par la suite.",
    description:
      "Nos équipes répondent aux besoins d'ingénierie pour imaginer et concevoir les solutions du futur, réaliser des projets et des équipements innovants, et assurer un support quotidien à la production et à la maintenance tout en relevant les défis de la transition énergétique et de la digitalisation des opérations.",
    highlights: [
      "Solutions d'ingénierie innovantes",
      "Présence internationale",
      "Transition énergétique et digitalisation",
    ],
  },
  {
    id: 51,
    name: "ACCEO",
    sector: "Ingénierie du bâtiment",
    domain: "BTP",
    yearCreated: 2003,
    location: "Échelle nationale",
    employees: "554",
    chiffreAffaires: "39 millions d'euros",
    website: "https://www.acceo.eu/fr/",
    websiteCarriere: "https://talent.acceo.eu/nos-offres-demploi/",
    profiles: "Ingénieurs génie Civil, Energie, Commerce, Assistants, Développeur informatique",
    postTypes: ["CDI"],
    applicationMethod: "CV",
    description:
      "ACCEO, Bureau d'Études et d'Ingénierie en bâtiment, est un acteur indépendant et engagé sur son marché. Représenté par 15 agences et 5 antennes en France, ACCEO réalise un chiffre d'affaires de 56 millions d'euros pour plus de 550 collaborateurs. ACCEO se structure autour d'une vision innovante : ACCEO'RIZON 2028, portée par des équipes investies et passionnées. Notre mission : apporter l'expertise et la sérénité dans l'optimisation technique et environnementale des bâtiments.",
    highlights: [
      "4 domaines : Environnement, Ascenseur, Énergie, Accessibilité-Maîtrise d'œuvre",
      "Engagement RSE fort",
      "15 agences et 5 antennes en France",
    ],
  },
  {
    id: 52,
    name: "AptiSkills",
    sector: "Bâtiment, TP, Transport et Environnement. ENR, Nucléaire, Oil&Gas, Naval, Ferroviaire et Aéronautique",
    domain: "Conseil",
    yearCreated: 2013,
    location: "9 agences en France (Lyon, Lille, Nantes, Strasbourg, Bordeaux, Toulouse, Paris, Marseille, Grenoble)",
    employees: "1 000",
    chiffreAffaires: "79,9 millions d'euros",
    website: "https://www.aptiskills.fr/",
    profiles:
      "Ingénieurs Consultants (Structure, CVC, Elec, Efficacité Énergétique, VRD, Environnement, etc.), Ingénieurs en Management de projet (MOA, AMO, MOE, Promotion Immobilière, etc.), Ingénieurs d'Affaires, rôle d'Intrapreneur (Business, Management, Recrutement)",
    postTypes: ["CDI", "Stage"],
    applicationMethod:
      "Nous cherchons à comprendre les souhaits de carrière de chacun lors d'un processus rapide de 3 étapes. Notre priorité : dénicher la mission idéale pour nos futurs AptiSkilliens !",
    description:
      "Si on partait de l'ambition et de la carrière de nos collaborateurs, pour construire une société ? D'une utopie, AptiSkills en a fait son modèle d'entreprise. 11 ans après sa création, ce sont 9 agences réparties sur la France, plus de 1 000 talents mais une seule idée : donner vie à vos aspirations ! Entreprise spécialisée dans les métiers de l'industrie et du BTP, nous accompagnons nos équipes dans leur épanouissement personnel et professionnel, en construisant la carrière de chacun.",
    highlights: [
      "9 agences en France, plus de 1 000 talents",
      "Spécialisée dans l'industrie et le BTP",
      "Accompagnement personnalisé de carrière",
    ],
  },
  {
    id: 53,
    name: "Bee Engineering",
    sector: "Conseil en ingénierie (énergie, industrie, procédés, infrastructures, transports)",
    domain: "Conseil",
    yearCreated: 2010,
    location: "11 villes : Annecy, Aix-en-Provence, Bordeaux, Grenoble, Lyon, Mulhouse, Nantes, Paris, Rennes, Rouen et Toulouse",
    employees: "1 000",
    chiffreAffaires: "80 millions d'euros",
    website: "https://bee-eng.com/",
    websiteCarriere: "https://bee-eng.com/rejoignez-nous/",
    profiles:
      "Le candidat idéal : doté de solides bases techniques dans son métier, mobile intellectuellement, curieux, dynamique",
    postTypes: ["CDI"],
    applicationMethod:
      "Après l'envoi d'un CV ou la réponse à une offre, processus en 5 étapes : 1/ Pré-sélection téléphonique 2/ Premier entretien 3/ Deuxième entretien 4/ Entretien technique 5/ Entretien final de motivation.",
    description:
      "Bee Engineering, société de conseil en ingénierie, accompagne depuis plus de 10 ans les acteurs des secteurs de l'énergie, de l'industrie et des infrastructures dans leurs projets techniques. Grâce à l'expertise de nos consultants nous proposons des solutions adaptées aux enjeux de nos clients.",
    highlights: [
      "Plus de 10 ans d'expertise en ingénierie",
      "Présence dans 11 grandes villes françaises",
      "Secteurs énergie, industrie et infrastructures",
    ],
  },
  {
    id: 54,
    name: "BPCE Solutions Informatiques",
    sector: "Conseil en systèmes et logiciels informatiques",
    domain: "Numérique",
    yearCreated: 2022,
    location: "Toulouse, Aix-en-Provence, Bordeaux, Nantes, Paris, Lyon, Lille...",
    employees: "2 400",
    website: "https://www.bpce-si.fr/",
    websiteCarriere: "https://www.bpce-si.fr/nous-rejoindre/",
    profiles:
      "Développeurs front-end, Développeurs back-end, Développeurs full stack, Business analyst, Data analyst, Data ingénieur, Data scientist, Chef de projet SI",
    postTypes: ["CDD", "CDI", "Stage"],
    applicationMethod:
      "Candidature sur notre site de recrutement avec CV, 1 entretien RH et 1 entretien opérationnel avec l'équipe à distance ou en présentiel.",
    description:
      "Chez BPCE Solutions informatiques, nous pilotons quotidiennement les évolutions des systèmes d'information dédiés à la banque de détail du Groupe BPCE. Nos équipes conçoivent, développent et maintiennent des solutions innovantes pour répondre aux attentes des Banques Populaires, des Caisses d'Épargne et de leurs clients. Nous sommes au cœur de la mobilité, de la digitalisation de la relation bancaire, du traitement des données clients et de l'amélioration des expériences utilisateurs.",
    highlights: [
      "Technologies : Java, Angular, JavaScript, iOS, Android, .NET, PHP",
      "Digitalisation bancaire et expérience utilisateur",
      "Recrutement en CDI envisageable pour les postes en stage et alternance",
    ],
  },
  {
    id: 4,
    name: "Capgemini",
    sector: "Consulting, Services de technologie et d'ingénierie",
    domain: "Conseil",
    yearCreated: 1967,
    location: "50 pays, plus de 20 villes en France",
    employees: "340 000",
    chiffreAffaires: "22 milliards d'euros",
    website: "https://www.capgemini.com/fr",
    profiles:
      "Niveau Bac +4 et Bac +5 (+ Bac +2/3 pour forums alternance). Formation : école d'ingénieur, école de commerce, master universitaire. Spécialisations : Conseil, Management des SI, Informatique, Sécurité/Cybersécurité, Mathématiques/statistiques, Génie mécanique & systèmes embarqués",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod:
      "CV obligatoire, lettre de motivation (facultatif), langues : français et anglais. Entretiens : un ou deux RH (sur le lieu du forum puis en visio TEAMS) puis un entretien opérationnel (en visio TEAMS).",
    description:
      "Capgemini, partenaire de la transformation business et technologique de ses clients, les accompagne dans leur transition vers un monde plus digital et durable, tout en créant un impact positif pour la société. Le Groupe, responsable et multiculturel, rassemble 340 000 collaborateurs dans plus de 50 pays. Depuis plus de 55 ans, ses clients lui font confiance pour répondre à l'ensemble de leurs besoins grâce à la technologie. Capgemini propose des services et solutions de bout en bout, allant de la stratégie et du design jusqu'à l'ingénierie, en tirant parti de ses compétences de pointe en intelligence artificielle, en cloud, et en data.",
    highlights: [
      "Leader mondial du conseil et de la technologie",
      "340 000 collaborateurs dans 50+ pays",
      "IA, Cloud & Data au cœur de la stratégie",
      "22,5 milliards d'euros de CA en 2023",
    ],
  },
  {
    id: 55,
    name: "CGI France SAS",
    sector: "Leader mondial du conseil et des services numériques (Business consulting, Intégration de systèmes, Business solutions, Managed IT services)",
    domain: "Conseil",
    yearCreated: undefined,
    location: "Puteaux – La Défense",
    employees: "104 500",
    chiffreAffaires: "9,9 milliards d'euros (2023)",
    website: "https://www.cgi.com",
    websiteCarriere: "https://www.cgi.com/france/fr-fr/recrute",
    profiles:
      "Talents juniors et expérimentés, curieux, possédant une grande capacité d'adaptation, très bon sens du relationnel, initiative et sens du service",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod:
      "Candidature, tests en ligne, entretien RH et entretien manager.",
    description:
      "CGI est déterminée à répondre aux besoins des consommateurs, des citoyens et des communautés. Qu'il s'agisse de la mise en œuvre et du développement des usages numériques en milieu scolaire, de l'utilisation de la navigation par satellite sécurisée pour protéger les individus de la fraude, de l'accompagnement de ses clients en matière de transition écologique pour réduire les émissions de carbone, CGI mise sur la technologie pour soutenir les rouages vitaux de la société et créer un avenir meilleur pour toutes et tous.",
    highlights: [
      "Employeur inclusif (handicap, diversité, LGBT+)",
      "4 métiers : Business consulting, Intégration, Solutions, Services managés",
      "Évolution de carrière en entreprise",
    ],
  },
  {
    id: 56,
    name: "Deloitte",
    sector: "Audit & Conseil",
    domain: "Audit & Conseil",
    yearCreated: 1845,
    location: "Internationale",
    employees: "8 000",
    chiffreAffaires: "1 milliard d'euros",
    website: "https://www.deloitte.com/fr/fr.html",
    websiteCarriere: "https://www.deloitte.com/fr/fr/careers.html",
    profiles:
      "Profils diversifiés, adaptables, ouverts d'esprit, bonne capacité à travailler en équipe. La curiosité, l'orientation client et la rigueur sont des compétences clés.",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod:
      "CV, entretiens (nombre en fonction de l'activité).",
    description:
      "Leader mondial en Conseil & Audit, Deloitte propose l'offre de service pluridisciplinaire la plus complète du marché. Fort d'un réseau mondial implanté dans plus de 150 pays, notre firme allie des compétences de niveau international à un service de grande qualité afin d'aider nos clients à répondre à leurs problématiques les plus complexes. Véritable partenaire de confiance, nous accompagnons les entreprises de toutes tailles et de tous secteurs d'activités dans leurs enjeux de croissance et de transformation.",
    highlights: [
      "Présence dans plus de 150 pays",
      "Great Place To Work",
      "Offre pluridisciplinaire la plus complète du marché",
    ],
  },
  {
    id: 57,
    name: "Exiom Partners",
    sector: "Conseil en banque / assurance",
    domain: "Banque / Assurance",
    yearCreated: 2019,
    location: "France",
    employees: "200",
    chiffreAffaires: "29 millions d'euros",
    website: "https://www.exiompartners.com/",
    profiles: "Actuaires / quant / ingénieurs",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod:
      "CV, 3 entretiens (1 de motivation, 1 technique, 1 avec un associé) en Teams ou en présentiel.",
    description:
      "Cabinet de conseil créé en 2019, Exiom Partners est spécialisé dans le conseil en management auprès des acteurs des services financiers, des établissements bancaires et des organismes d'assurance. Nous visons à répondre aux problématiques de nos clients en leur apportant un conseil sur-mesure et d'excellence. Nos valeurs sont garantes de la qualité et de la pérennité de notre service et participent au développement de nos talents. Nous portons un modèle de management innovant qui met l'accent sur la confiance et l'esprit entrepreneurial.",
    highlights: [
      "Conseil sur-mesure en services financiers",
      "Management innovant basé sur la confiance",
      "Approche inédite des plans de carrière",
    ],
  },

  // ── Exposants existants (non encore mis à jour via fiches) ──
  { id: 1, name: "Accenture", sector: "Conseil & Technologie", domain: "Conseil", yearCreated: 1989, location: "Paris, France", employees: "738 000+", website: "https://www.accenture.com", profiles: "Consultants, ingénieurs IT", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Candidature en ligne", description: "Accenture est une entreprise mondiale de services professionnels, spécialisée dans le conseil, la technologie et l'externalisation.", highlights: ["Fortune Global 500", "Présence mondiale", "Innovation digitale"] },
  { id: 2, name: "Airbus", sector: "Aéronautique & Défense", domain: "Industrie", yearCreated: 1970, location: "Toulouse, France", employees: "130 000+", website: "https://www.airbus.com", profiles: "Ingénieurs aéronautique, mécanique", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Portail carrières Airbus", description: "Airbus est un leader mondial de l'aéronautique, de l'espace et de la défense.", highlights: ["Leader mondial aéronautique", "Innovation durable", "Programmes spatiaux"] },
  { id: 3, name: "Bouygues Construction", sector: "BTP", domain: "BTP", yearCreated: 1952, location: "Guyancourt, France", employees: "32 000+", website: "https://www.bouygues-construction.com", profiles: "Ingénieurs génie civil, conducteurs de travaux", postTypes: ["CDI", "Alternance", "Stage"], applicationMethod: "Site carrières Bouygues", description: "Bouygues Construction est un acteur mondial de la construction responsable, présent dans plus de 60 pays.", highlights: ["60+ pays", "Construction durable", "Projets emblématiques"] },
  { id: 6, name: "Dassault Systèmes", sector: "Logiciels & Ingénierie", domain: "Numérique", yearCreated: 1981, location: "Vélizy, France", employees: "23 000+", website: "https://www.3ds.com", profiles: "Ingénieurs logiciel, R&D", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Candidature en ligne", description: "Dassault Systèmes développe des logiciels de conception 3D, de simulation et de gestion du cycle de vie des produits.", highlights: ["Leader du PLM", "Jumeaux numériques", "Industrie 4.0"] },
  { id: 7, name: "EDF", sector: "Énergie", domain: "Énergie", yearCreated: 1946, location: "Paris, France", employees: "165 000+", website: "https://www.edf.fr", profiles: "Ingénieurs énergie, maintenance", postTypes: ["CDI", "Alternance", "Stage"], applicationMethod: "Site carrières EDF", description: "EDF est le premier producteur et fournisseur d'électricité en France et en Europe.", highlights: ["1er producteur d'électricité en Europe", "Énergies bas carbone", "Nucléaire & renouvelable"] },
  { id: 8, name: "Engie", sector: "Énergie & Services", domain: "Énergie", yearCreated: 2008, location: "La Défense, France", employees: "96 000+", website: "https://www.engie.com", profiles: "Ingénieurs énergie, environnement", postTypes: ["CDI", "Alternance", "Stage"], applicationMethod: "Portail carrières Engie", description: "ENGIE est un groupe mondial de référence dans l'énergie bas carbone et les services.", highlights: ["Transition énergétique", "Énergies renouvelables", "Hydrogène vert"] },
  { id: 9, name: "Framatome", sector: "Nucléaire", domain: "Énergie", yearCreated: 2018, location: "Paris, France", employees: "18 000+", website: "https://www.framatome.com", profiles: "Ingénieurs nucléaire, sûreté", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Site carrières Framatome", description: "Framatome conçoit et fournit des composants, du combustible et des systèmes pour les centrales nucléaires.", highlights: ["Expertise nucléaire", "Sûreté", "Innovation"] },
  { id: 10, name: "Naval Group", sector: "Défense navale", domain: "Défense", yearCreated: 2017, location: "Paris & Toulon, France", employees: "17 000+", website: "https://www.naval-group.com", profiles: "Ingénieurs naval, systèmes embarqués", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Site carrières Naval Group", description: "Naval Group est un leader européen du naval de défense et un innovateur dans l'énergie marine.", highlights: ["Sous-marins & frégates", "Cyber-sécurité navale", "Énergie marine renouvelable"] },
  { id: 11, name: "Onet", sector: "Services aux entreprises", domain: "Industrie", yearCreated: 1860, location: "Marseille, France", employees: "75 000+", website: "https://www.onet.com", profiles: "Ingénieurs, techniciens, managers", postTypes: ["CDI", "CDD", "Stage"], applicationMethod: "Candidature en ligne", description: "Onet est un groupe français de services aux entreprises : propreté, sécurité, ingénierie nucléaire.", highlights: ["Entreprise marseillaise", "Leader de la propreté", "Ingénierie nucléaire"] },
  { id: 12, name: "Safran", sector: "Aéronautique & Défense", domain: "Industrie", yearCreated: 2005, location: "Paris, France", employees: "83 000+", website: "https://www.safran-group.com", profiles: "Ingénieurs aéronautique, mécanique", postTypes: ["CDI", "Alternance", "Stage"], applicationMethod: "Portail carrières Safran", description: "Safran est un groupe international de haute technologie opérant dans les domaines de l'aéronautique, de l'espace et de la défense.", highlights: ["Moteurs d'avion", "Équipements aéronautiques", "Innovation technologique"] },
  { id: 13, name: "Schneider Electric", sector: "Énergie & Automatisation", domain: "Énergie", yearCreated: 1836, location: "Rueil-Malmaison, France", employees: "135 000+", website: "https://www.se.com", profiles: "Ingénieurs électrique, automatisme", postTypes: ["CDI", "Alternance", "Stage"], applicationMethod: "Site carrières Schneider Electric", description: "Schneider Electric est le leader de la transformation numérique de la gestion de l'énergie et des automatismes.", highlights: ["Gestion de l'énergie", "Automatisation", "Développement durable"] },
  { id: 14, name: "Sopra Steria", sector: "Services numériques", domain: "Numérique", yearCreated: 1968, location: "Paris, France", employees: "56 000+", website: "https://www.soprasteria.com", profiles: "Consultants, développeurs, data engineers", postTypes: ["CDI", "Alternance", "Stage"], applicationMethod: "Candidature en ligne", description: "Sopra Steria est un leader européen du conseil, des services numériques et de l'édition de logiciels.", highlights: ["Leader européen ESN", "Cloud & cybersécurité", "Secteur public & privé"] },
  { id: 15, name: "Thales", sector: "Défense & Technologie", domain: "Défense", yearCreated: 2000, location: "Paris, France", employees: "81 000+", website: "https://www.thalesgroup.com", profiles: "Ingénieurs systèmes, cybersécurité", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Portail carrières Thales", description: "Thales est un leader mondial des hautes technologies pour les marchés de la Défense, de l'Aéronautique et du Spatial.", highlights: ["Cybersécurité", "Identité numérique", "Spatial & défense"] },
  { id: 16, name: "TotalEnergies", sector: "Énergie", domain: "Énergie", yearCreated: 1924, location: "La Défense, France", employees: "100 000+", website: "https://www.totalenergies.fr", profiles: "Ingénieurs procédés, énergie", postTypes: ["CDI", "Alternance", "Stage"], applicationMethod: "Site carrières TotalEnergies", description: "TotalEnergies est une compagnie multi-énergies mondiale de production et de fourniture d'énergies.", highlights: ["Multi-énergies", "Transition énergétique", "Innovation R&D"] },
  { id: 17, name: "Veolia", sector: "Environnement", domain: "Environnement", yearCreated: 1853, location: "Paris, France", employees: "220 000+", website: "https://www.veolia.com", profiles: "Ingénieurs environnement, eau, déchets", postTypes: ["CDI", "CDD", "Stage", "Alternance"], applicationMethod: "Portail carrières Veolia", description: "Veolia est le leader mondial de la gestion optimisée des ressources : eau, déchets et énergie.", highlights: ["Leader mondial de l'eau", "Économie circulaire", "Dépollution"] },
  { id: 18, name: "Alstom", sector: "Transport ferroviaire", domain: "Transport", yearCreated: 1928, location: "Saint-Ouen, France", employees: "80 000+", website: "https://www.alstom.com", profiles: "Ingénieurs ferroviaire, systèmes", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Site carrières Alstom", description: "Alstom est un leader mondial de la mobilité intelligente et durable, proposant des systèmes intégrés de transport ferroviaire.", highlights: ["TGV & trains régionaux", "Mobilité durable", "Signalisation ferroviaire"] },
  { id: 19, name: "BNP Paribas", sector: "Banque & Finance", domain: "Finance", yearCreated: 2000, location: "Paris, France", employees: "190 000+", website: "https://www.bnpparibas.com", profiles: "Ingénieurs financiers, data analysts", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Portail carrières BNP Paribas", description: "BNP Paribas est l'une des premières banques européennes avec une présence internationale.", highlights: ["Banque universelle", "Innovation fintech", "Finance durable"] },
  { id: 20, name: "CMA CGM", sector: "Transport maritime", domain: "Transport", yearCreated: 1978, location: "Marseille, France", employees: "155 000+", website: "https://www.cmacgm.com", profiles: "Ingénieurs logistique, supply chain", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Site carrières CMA CGM", description: "CMA CGM est un leader mondial du transport maritime et de la logistique, basé à Marseille.", highlights: ["3e armateur mondial", "Siège à Marseille", "Innovation logistique"] },
];

export const allExposants = [parrain, ...partenaires, ...exposantsList].sort((a, b) =>
  a.name.localeCompare(b.name, "fr")
);
