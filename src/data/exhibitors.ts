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
  sector: "Acteur clé en matière d'efficacité énergétique et d'énergies renouvelables",
  domain: "Énergie",
  yearCreated: 1918,
  location: "61 pays",
  employees: "102 600 collaborateurs, 2 100 entreprises",
  chiffreAffaires: "20,4 milliards d'euros (2024)",
  website: "https://www.vinci-energies.com",
  profiles: "Tous les profils techniques ou commerciaux nous intéressent : Ingénieurs d'affaires, Ingénieurs d'études, Ingénieurs projets, Responsable d'Affaires… Au-delà des diplômes, VINCI Energies recherche des tempéraments d'entrepreneurs en adéquation avec ses métiers et sa culture fondée sur l'autonomie et la responsabilité.",
  postTypes: ["CDI", "Alternance", "Stage"],
  applicationMethod: "Chaque année VINCI Energies accueille en France plus de 5000 stagiaires et alternants. recrutement.vefimce@vinci-energies.com",
  description:
    "VINCI Energies nourrit l'offre globale du Groupe VINCI dans le domaine de l'efficacité énergétique et des énergies renouvelables et dans l'intégration de systèmes complexes. Présent dans 61 pays avec 102 600 collaborateurs et 2 100 entreprises, VINCI Energies accélère les transitions énergétique et numérique.",
  highlights: [
    "Leader mondial des solutions multi-techniques",
    "Présence dans 61 pays",
    "Programme Pépinière d'intégration des jeunes diplômés",
    "Valeurs CESAR : Confiance, Esprit d'entreprendre, Solidarité, Autonomie, Responsabilité",
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
    logo: "/logos/cea.png",
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
    logo: "/logos/groupe-adf.png",
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
    logo: "/logos/acceo.webp",
    sector: "Ingénierie du bâtiment",
    domain: "Conseil",
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
    logo: "/logos/aptiskills.png",
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
    logo: "/logos/bee-engineering.jpg",
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
    logo: "/logos/bpce.png",
    sector: "Conseil en systèmes et logiciels informatiques",
    domain: "Conseil",
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
    logo: "/logos/capgemini.png",
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
    logo: "/logos/cgi.png",
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
    logo: "/logos/deloitte.png",
    sector: "Audit & Conseil",
    domain: "Conseil",
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
    logo: "/logos/exiom.png",
    sector: "Conseil en banque / assurance",
    domain: "Conseil",
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

  // ── EY ──
  {
    id: 58, name: "EY", logo: "/logos/ey.png", sector: "Audit et Conseil", domain: "Conseil", yearCreated: 1989,
    location: "Paris, Lyon, Marseille, Toulouse, Lille, Strasbourg, Bordeaux, Nantes, Rennes, Nice, Rouen, Nancy, Montpellier",
    employees: "7 000", chiffreAffaires: "1,499 milliards d'euros",
    website: "https://www.ey.com/fr_fr", websiteCarriere: "https://www.ey.com/fr_fr/careers",
    profiles: "Profils Bac+5 issus de grandes écoles d'ingénieurs. Expérience à l'international est un plus. Maîtrise de l'anglais nécessaire.",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "CV et lettre de motivation à stephane.rebecca@fr.ey.com. Participation à l'assessment center, rencontre un.e associé.e.",
    description: "EY rassemble plus de 300 000 associés et collaborateurs à travers le monde, dans plus de 152 pays. EY renforce sa position de leader mondial de l'Audit, du Conseil, des Transactions, de la Fiscalité et du Droit.",
    highlights: ["Leader mondial de l'Audit, du Conseil et de la Fiscalité", "300 000+ collaborateurs dans 152 pays", "Métiers de la finance, du conseil, du digital et de la data", "Nombreuses formations et suivi individualisé de carrière"],
  },
  // ── Forvis Mazars ──
  {
    id: 59, name: "Forvis Mazars", logo: "/logos/forvis-mazars.jpg", sector: "Audit / Conseil", domain: "Conseil", yearCreated: 1945,
    location: "31 bureaux en France, +100 pays", employees: "45 000", chiffreAffaires: "5,2 milliards d'euros",
    website: "https://www.forvismazars.com/fr/fr", websiteCarriere: "https://recrutement-fr.forvismazars.com/offres-emploi",
    profiles: "Stages de césure, stages de fin d'études, apprentissage et CDI. Plus de 1000 stagiaires et jeunes diplômés recrutés chaque année.",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Stages de césure : entretien avec un Auditeur. Stages de fin d'études : deux entretiens. CDI : trois entretiens ou sessions Job@ForvisMazars.",
    description: "Forvis Mazars est un groupe international d'audit, de fiscalité et de conseil. Avec + de 40 000 collaborateurs présents dans une centaine de pays, nous faisons partie du Top 10 des cabinets mondiaux.",
    highlights: ["Top 10 des cabinets mondiaux d'audit et conseil", "40 000+ collaborateurs dans 100+ pays", "Domaines : Audit financier, Conseil, Digital, Sustainability, Fiscalité"],
  },
  // ── KPMG ──
  {
    id: 60, name: "KPMG", logo: "/logos/kpmg.jpg", sector: "Audit & Conseil", domain: "Conseil", yearCreated: 1922,
    location: "190 bureaux en France", employees: "11 000", chiffreAffaires: "1,47 milliard d'euros",
    website: "https://kpmg.com/fr/fr.html", websiteCarriere: "https://kpmg.com/fr/fr/carrieres.html",
    profiles: "Jeune diplômé ou diplômé d'une école d'ingénieurs. Métiers innovants : D&A, cybersécurité, deal advisory, transformation digitale.",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Tests (personnalité, langue, techniques ou cognitifs). Deux entretiens avec managers opérationnels, étude de cas et entretien avec un associé.",
    description: "Audit, Conseil, Expertise Services Conseil & Droit & Fiscalité : rejoignez un cabinet leader aux 100 ans d'existence ! Comme nos 11 000 collaborateurs, faites le choix d'une Entreprise à Mission.",
    highlights: ["Entreprise à Mission avec 100 ans d'existence", "11 000 collaborateurs, 190 bureaux en France", "Secteurs : Industrie, Énergie, Télécommunications, Services Financiers, Technologie"],
  },
  // ── Mantu Group ──
  {
    id: 61, name: "Mantu Group", logo: "/logos/mantu.png", sector: "Conseil", domain: "Conseil", yearCreated: 2007,
    location: "Siège social à Genève, bureaux dans 60 pays", employees: "12 000", chiffreAffaires: "1,01 milliard d'euros",
    website: "https://mantu.com/", websiteCarriere: "https://careers.mantu.com/jobs",
    profiles: "Profils business et Data/IT/IA intéressés par la transformation digitale",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Premier contact par conversation virtuelle/téléphonique. En moyenne 3 entretiens.",
    description: "Mantu est un groupe international de conseil indépendant qui accompagne les entreprises dans leurs projets de transformation et d'innovation. Présent dans plus de 60 pays, avec plus de 12 000 talents.",
    highlights: ["Groupe indépendant présent dans 60+ pays", "12 000 talents de 100+ nationalités", "Indépendance financière (non coté en bourse)", "Moyenne d'âge de 33 ans"],
  },
  // ── Onepoint ──
  {
    id: 62, name: "Onepoint", logo: "/logos/onepoint.jpg", sector: "Conseil", domain: "Conseil", yearCreated: 2002,
    location: "France : Paris, Bordeaux, Toulouse, Nantes, Rennes, Lyon, Aix-en-Provence, Strasbourg. Monde : Australie, Belgique, Canada, Malaisie, Maroc, Singapour",
    employees: "3 500", chiffreAffaires: "500 millions d'euros",
    website: "https://www.groupeonepoint.com/fr/", websiteCarriere: "https://www.groupeonepoint.com/fr/nous-rejoindre/",
    profiles: "1 500 talents recrutés par an dont 250 étudiants. Personnes motivées, créatives, dotées d'une grande curiosité.",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Processus basé sur vos compétences et expériences. Deux à trois entretiens.",
    description: "Depuis plus de 20 ans, Onepoint accompagne les grandes transformations des entreprises et des acteurs publics. Notre ambition est de construire ensemble un futur durable qui bénéficie à tous.",
    highlights: ["20+ ans d'accompagnement en transformation", "Chiffre d'affaires multiplié par 10 en 10 ans", "Ambition : atteindre le milliard d'euros d'ici 4 ans"],
  },
  // ── Oresys ──
  {
    id: 63, name: "Oresys", logo: "/logos/oresys.png", sector: "Conseil en management, organisation et transformation", domain: "Conseil", yearCreated: 1981,
    location: "Paris, Lille, Lyon, Marseille, Nantes, Toulouse, Lausanne",
    employees: "370", chiffreAffaires: "67 millions d'euros",
    website: "https://www.oresys.eu/", websiteCarriere: "https://www.oresys-recrute.eu/",
    profiles: "Jeune diplômé(e) d'une grande école d'ingénieur. Bon niveau d'anglais souhaité.",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "CV + Lettre de motivation, 3 entretiens de motivation avec des consultants, 1er en visio, les deux suivants en présentiel.",
    description: "Société de conseil indépendante créée en 1981, Oresys est un acteur majeur du conseil en transformation, organisation et systèmes d'information. Première société de conseil certifiée ISO 9001 depuis 1995.",
    highlights: ["Première société de conseil certifiée ISO 9001", "Turn over 2 fois inférieur aux autres cabinets", "Expertise multisectorielle et multispécialiste"],
  },
  // ── PwC ──
  {
    id: 64, name: "PwC", logo: "/logos/pwc.png", sector: "Audit, conseil", domain: "Conseil", yearCreated: 1998,
    location: "Internationale", employees: "+3 000", chiffreAffaires: "US$55.4 billion",
    website: "https://carrieres.pwc.fr/fr/",
    profiles: "Ingénieurs",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "CV, lettre de motivation",
    description: "En France et au Maghreb, PwC développe des missions de conseil, d'audit et d'expertise juridique et fiscale. Fortes de 6750 collaborateurs, ses équipes pluridisciplinaires conjuguent leurs savoir-faire au sein d'un réseau international de plus de 364 000 personnes dans 151 pays.",
    highlights: ["364 000 personnes dans 151 pays", "Acteur de référence de la transformation durable", "Équipes pluridisciplinaires"],
  },
  // ── Randstad Digital ──
  {
    id: 65, name: "Randstad Digital", logo: "/logos/randstad-digital.png", sector: "Conseil Engineering et IT", domain: "Conseil", yearCreated: 1989,
    location: "Présente sur tous les continents, toutes les grandes villes de France",
    employees: "25 000", chiffreAffaires: "24,1 milliards d'euros",
    website: "https://www.randstaddigital.fr/fr/",
    profiles: "Avionic System Engineer, Quality Engineer, Export Control, Embedded Software Engineer, Software Engineer, Devops Engineer",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "CV, 2/3 entretiens",
    description: "Chez Randstad Digital, nous façonnons le changement technologique. En tant que partenaire technologique du Groupe Randstad, notre mission est d'accélérer la transformation digitale de nos clients. 5 piliers : Engineering, Produit & digital, Data, Cloud & Infrastructure, Expérience client (UX).",
    highlights: ["35+ ans d'ingénierie et conseil en haute technologie", "25 000 ingénieurs et experts digitaux dans le monde", "5 piliers : Engineering, Produit & digital, Data, Cloud, UX"],
  },
  // ── Sopra Steria (mise à jour complète) ──
  {
    id: 14, name: "Sopra Steria", logo: "/logos/sopra-steria.png",
    sector: "Conseil en transformation digitale, Intégration de systèmes, Cybersécurité, Infrastructure management, PLM",
    domain: "Conseil", yearCreated: 1968,
    location: "Europe, près de 30 pays", employees: "50 000", chiffreAffaires: "5,8 milliards d'euros",
    website: "https://www.soprasteria.com/fr",
    profiles: "Consultants, Développeurs...",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Process de recrutement via Smartrecruiters",
    description: "Sopra Steria, acteur majeur de la Tech en Europe, avec 50 000 collaborateurs dans près de 30 pays, est reconnu pour ses activités de conseil, de services et solutions numériques.",
    highlights: ["Acteur majeur de la Tech en Europe", "50 000 collaborateurs dans 30 pays", "CA de 5,8 milliards d'euros en 2024"],
  },
  // ── Viveris ──
  {
    id: 66, name: "Viveris", logo: "/logos/viveris.png", sector: "Conseil et Ingénierie Informatique", domain: "Conseil", yearCreated: 1986,
    location: "Montpellier, Aix-en-Provence, Lyon, Grenoble, Toulouse, Paris, Strasbourg, Lille, Bruxelles, Casablanca",
    employees: "930", chiffreAffaires: "97 millions d'euros",
    website: "https://www.viveris.fr/", websiteCarriere: "https://www.viveris.fr/nous-rejoindre/",
    profiles: "Ingénieur Systèmes embarqués, Dév FullStack Java/Node/React/Angular, Data, Cloud, Ingénieur Infrastructures, DevOps, DevSecOps",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "CV, Entretien visio",
    description: "VIVERIS est un groupe de conseil et d'ingénierie indépendant qui accompagne depuis plus de 30 ans la transformation numérique des entreprises (Systèmes embarqués, Informatique scientifique et technique, Systèmes d'information, Infrastructures).",
    highlights: ["30+ ans d'expertise en transformation numérique", "Systèmes embarqués, SI, Infrastructures", "Présence en France, Belgique et Maroc"],
  },

  // ── Yélé ──
  {
    id: 67, name: "Yélé Consulting", logo: "/logos/yele.png", sector: "Conseil dans la transition énergétique et environnementale et en transformation digitale", domain: "Conseil", yearCreated: 2010,
    location: "Paris et Lyon", employees: "130", chiffreAffaires: "16 millions d'euros",
    website: "https://www.yele.fr/", websiteCarriere: "https://carrieres.yele.fr/",
    profiles: "Profils motivés et curieux intéressés par les métiers du conseil. Stages de fin d'études (6 mois) – Conseil en transformation digitale, transition énergétique & environnementale. Jeunes diplômés – Consultants juniors. Alternances (selon les besoins des missions).",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Rencontre sur stand : échanges informels (pensez à venir avec un CV à jour). Les candidatures retenues seront contactées pour un process en 2 à 3 étapes (préqualification téléphonique, entretien RH et opérationnel).",
    description: "Yélé Consulting est un cabinet de conseil et d'ingénierie indépendant, spécialiste de la transition énergétique et environnementale. Nous intervenons dans les domaines de l'Énergie & Utilities, du Transport & Mobilité et de l'Industrie. Nos clients sont RTE, Enedis, TotalEnergies, RATP, SNCF… Créé en 2010, Yélé Consulting fait partie du groupe JAD.",
    highlights: [
      "Missions de mécénat de compétences ouvertes à tous",
      "Actions citoyennes",
      "Activités FunY pour la convivialité et l'esprit d'équipe",
      "Valeurs : Audacieux, accessibles, éclairants et engagés",
    ],
  },
  // ── Bouygues Bâtiment Sud-Est ──
  {
    id: 68, name: "Bouygues Bâtiment Sud-Est", logo: "/logos/bouygues-batiment.jpg", sector: "Construction", domain: "BTP", yearCreated: 1973,
    location: "Sud-Est de la France", employees: "950", chiffreAffaires: "380 millions d'euros",
    website: "https://www.bouygues-batiment-sud-est.fr/",
    profiles: "Dynamisme, curiosité, envie d'apprendre, esprit d'équipe",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "CV",
    description: "Bouygues Bâtiment Sud-Est exerce son activité en développement, conception, construction et rénovation dans tous les domaines de l'habitat, des ouvrages fonctionnels et tertiaires, des opérations multi-produits, de l'industrie et de la logistique. Nous sommes engagés en faveur de la diversité et ouverts à tous les talents.",
    highlights: [
      "Filiale de Bouygues Construction",
      "Habitat, tertiaire, industrie et logistique",
      "Engagement en faveur de la diversité",
    ],
  },
  // ── Colas ──
  {
    id: 69, name: "Colas", logo: "/logos/colas.png", sector: "BTP", domain: "BTP", yearCreated: 1929,
    location: "Internationale", employees: "70 000", chiffreAffaires: "16 milliards d'euros",
    website: "https://careers.colasjobs.com/",
    profiles: "Ingénieurs travaux : responsables de la planification et de la supervision des chantiers. Conducteurs de travaux : chargés de la gestion opérationnelle des projets sur le terrain. Techniciens de laboratoire : effectuent des tests sur les matériaux utilisés dans la construction.",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "Préqualification téléphonique / entretien",
    description: "Colas, filiale du groupe Bouygues, a pour mission d'imaginer, de construire et d'entretenir des infrastructures de transport de façon responsable. Implanté dans plus de 50 pays sur les cinq continents, à travers un réseau de 800 entités locales et 3 000 unités de production et de recyclage de matériaux, Colas rassemble 70 000 collaborateurs engagés dans leur territoire.",
    highlights: [
      "Présence dans plus de 50 pays",
      "800 entités locales",
      "Leader mondial des solutions de mobilité",
    ],
  },
  // ── EDF ──
  {
    id: 70, name: "EDF", logo: "/logos/edf.png", sector: "Énergie", domain: "Énergie", yearCreated: 1949,
    location: "Internationale", employees: "191 000", chiffreAffaires: "118,7 milliards d'euros",
    website: "https://www.edf.fr", websiteCarriere: "https://www.edf.fr/edf-recrute",
    profiles: "Tous profils d'ingénierie",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "Site https://www.edf.fr/edf-recrute",
    description: "Le Groupe EDF, acteur majeur de la transition énergétique est un énergéticien intégré, présent sur l'ensemble des métiers : la production, le transport, la distribution, le négoce, la vente d'énergies et les services énergétiques. De par sa position de référent sur le marché de l'énergie et des services énergétiques, le groupe EDF offre un large panel de métiers et des parcours de carrière variés en France et à l'international. 230 métiers sont exercés chez EDF.",
    highlights: [
      "Acteur majeur de la transition énergétique",
      "191 000 salariés dans le monde",
      "230 métiers exercés",
      "Évolution vers des postes d'expertise ou de management",
    ],
  },
  // ── Eiffage ──
  {
    id: 71, name: "Eiffage", logo: "/logos/eiffage.png", sector: "BTP, Énergie et Systèmes et Concessions", domain: "BTP", yearCreated: 1884,
    location: "Présent dans 50 pays sur les 5 continents", employees: "84 400", chiffreAffaires: "23,4 milliards d'euros",
    website: "https://www.eiffage.com/", websiteCarriere: "https://www.eiffage.com/carrieres",
    profiles: "Travaux (Bâtiment, Génie Civil, Route, Rail, Métal), Études (Prix, Méthodes et/ou Structures), Gestion de Projets, Prévention, Affaires. Candidats motivés ayant une réelle appétence pour le BTP, les Énergies et Systèmes et/ou des Concessions.",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "Sélection des CV par les RH et échange téléphonique suivi d'une rencontre avec l'opérationnel qui est amené à recruter.",
    description: "Acteur de référence d'une Europe bas carbone, Eiffage est l'un des leaders européens du BTP et des concessions. Nous exerçons nos activités au travers de 8 métiers (construction, immobilier, aménagement, route, génie civil, métal, énergie systèmes et concessions) répartis au sein de 4 branches. Les 84 400 collaborateurs du groupe sont pleinement engagés pour innover, concevoir, construire, maintenir et rénover les villes et les infrastructures de demain.",
    highlights: [
      "Leader européen du BTP et des concessions",
      "Plus de 100 000 chantiers par an",
      "8 métiers répartis en 4 branches",
      "Engagement dans la transition écologique et digitale",
    ],
  },
  // ── Fauché ──
  {
    id: 72, name: "Fauché", logo: "/logos/fauche.png", sector: "Solutions et services à l'énergie", domain: "Énergie", yearCreated: 1963,
    location: "Marseille, Vitrolles, Avignon, Aix en Provence, Nice, Fos sur mer, Bagnols-sur-Cèze", employees: "3 200", chiffreAffaires: "400 millions d'euros (2023)",
    website: "https://www.fauche.com", websiteCarriere: "https://groupefauche-career.talent-soft.com",
    profiles: "Softskills : Travail en équipe, Sens de l'organisation. Hardskills : Électricité, Plomberie, CVC.",
    postTypes: ["CDI", "Alternance", "Stage"],
    applicationMethod: "CV et entretiens",
    description: "Fauché est n°1 français indépendant des solutions et services à l'énergie. Ses 3 200 collaborateurs imaginent, réalisent et assurent la maintenance de vos projets électriques dans les domaines tertiaires, industriels et les infrastructures de transport.",
    highlights: [
      "N°1 français indépendant des solutions et services à l'énergie",
      "Évolution de carrière : Assistant chargé d'affaires, Chargé d'affaires, Responsable d'activités",
    ],
  },
  // ── GCC ──
  {
    id: 73, name: "GCC", logo: "/logos/gcc.png", sector: "Construction", domain: "BTP", yearCreated: 1921,
    location: "Nationale", employees: "3 000", chiffreAffaires: "1,2 milliards d'euros",
    website: "https://www.gcc-groupe.com/",
    profiles: "Conducteur de travaux, Études de prix",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "CV, moins de 3 entretiens",
    description: "GCC est un Groupe de BTP indépendant à taille humaine. Salaire selon profil et expérience. Prime Intéressement & Participation, Prime Vacances, Mutuelle avec options complémentaires de couverture PEG avec abondement. Engagements RSE répartis sur 4 domaines : offrir des solutions sobres et durables, garantir de bonnes conditions de travail en toute sécurité, limiter l'empreinte environnementale, fédérer autour des engagements RSE.",
    highlights: [
      "Partenariat avec Hoffman pour un béton bas carbone",
      "50% du CA en réhabilitation/rénovation d'ici 2028",
      "Programme intrapreneuriat « Licorne »",
      "100% du personnel encadrant formé à la RSE",
    ],
  },
  // ── NGE ──
  {
    id: 74, name: "NGE", logo: "/logos/nge.png", sector: "Travaux Publics", domain: "BTP", yearCreated: 2002,
    location: "Échelle Internationale", employees: "23 000", chiffreAffaires: "4,3 millions d'euros",
    website: "https://www.nge.fr/", websiteCarriere: "https://www.nge-recrute.fr/",
    profiles: "Conducteur de travaux, Chef de chantier, Géomètre, Ingénieur études de prix",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "CV + 2 entretiens (RH + Opérationnels)",
    description: "S'appeler NGE, Nouvelles Générations d'Entrepreneurs, c'est avoir l'audace nécessaire à la prise de risques. Nous sommes cette entreprise de BTP. Chaque jour, nous réinventons nos métiers pour concevoir, réaliser et rénover des projets d'envergure et des ouvrages de proximité. Nos équipes sont engagées aux côtés des territoires et des communautés pour créer des ponts, des routes, des voies ferrées, des réseaux de fibre optique, des espaces de vie culturels, sociaux, éducatifs…",
    highlights: [
      "Nouvelles Générations d'Entrepreneurs",
      "Construire ENSEMBLE est la marque de fabrique de NGE",
      "Transition écologique au cœur des projets",
      "L'humain au cœur de chacun des projets",
    ],
  },
  // ── Orano Support ──
  {
    id: 75, name: "Orano Support", logo: "/logos/orano.png", sector: "Secteur de l'énergie nucléaire", domain: "Énergie", yearCreated: 2018,
    location: "Internationale", employees: "17 500", chiffreAffaires: "4,7 milliards d'euros",
    website: "https://www.orano.group/fr", websiteCarriere: "https://www.orano.group/jobs/fr",
    profiles: "Soft Skills : Gestion du temps, Communication, Adaptabilité, Initiative, Organisation, Curiosité, Polyvalence, Autonomie",
    postTypes: ["Alternance", "Stage"],
    applicationMethod: "1. Dépôt de candidature : envoi du CV et parfois d'une lettre de motivation. 2. Entretien avec un recruteur. 3. Entretien avec un manager.",
    description: "Groupe international de référence, Orano est un acteur majeur de l'énergie nucléaire. Avec 17 500 collaborateurs dans le monde, le groupe s'engage au quotidien pour répondre aux enjeux énergétiques mondiaux et fournir une électricité puissante, sécurisée, bas carbone et compétitive. Chez Orano, nous sommes engagés pour le climat, pour l'économie des ressources et la santé.",
    highlights: [
      "Acteur majeur de l'énergie nucléaire",
      "17 sites en France et forte culture de mobilité professionnelle",
      "Métiers : Maintenance, Data, Santé et médecine, Exploitation, R&D et innovation",
      "Nombreuses possibilités d'évolution via écoles des métiers et formations",
    ],
  },
  // ── Paprec ──
  {
    id: 76, name: "Paprec", logo: "/logos/paprec.png", sector: "Recyclage et valorisation énergétique des déchets", domain: "Environnement", yearCreated: 1994,
    location: "La Seyne sur Mer, Paris, Nantes, Toulouse, Lyon", employees: "16 000", chiffreAffaires: "3 milliards d'euros",
    website: "http://www.paprec.com", websiteCarriere: "https://recrutement.paprec.com/fr",
    profiles: "Ingénieurs (process, calcul, chaudière, planning, électricité, génie civil…)",
    postTypes: ["Alternance", "CDI", "Stage"],
    applicationMethod: "CV + LM + 2 voire 3 entretiens - Anglais professionnel. Entretiens en visio ou à la Seyne sur Mer.",
    description: "En Juillet 2021, le groupe PAPREC crée sa division Energies dédiée à la valorisation énergétique des déchets à la suite des acquisitions de Dalkia Wastenergy, CNIM E&E O&M, Inova Opérations et en avril 2022 la Division EPC du Secteur Environnement & Énergie du Groupe CNIM. Paprec Energies détient à présent toutes les ressources nécessaires pour concevoir, construire et/ou exploiter des usines de valorisation énergétique et organique.",
    highlights: [
      "30 Usines et projets en France et à l'international",
      "Division Energies dédiée à la valorisation énergétique",
      "Évolution de carrière en entreprise",
    ],
  },

  // ── Razel-Bec ──
  {
    id: 77, name: "Razel-Bec", logo: "/logos/razel-bec.jpg", sector: "Construction - Travaux Publics", domain: "BTP", yearCreated: 1880,
    location: "9 implantations dans le monde", employees: "4 500", chiffreAffaires: "1 milliard d'euros",
    website: "https://razel-bec.fayat.com/",
    profiles: "Nombreux profils en stage dans nos principaux domaines : travaux, études, matériel, qualité, santé et environnement. Offres de CDI pour les jeunes diplômés.",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "CV et lettre de motivation - Process de recrutement en deux étapes : préqualification téléphonique RH puis entretien opérationnel avec le manager ou futur tuteur.",
    description: "Razel-Bec est un expert reconnu dans tous les domaines des travaux publics : génie civil et ouvrages d'art, travaux souterrains, barrages, nucléaire, infrastructures linéaires, génie urbain et écologique. Véritable partenaire de proximité reconnu pour ses expertises techniques, Razel-Bec répond aux attentes de ses clients avec des solutions inventives et fiables.",
    highlights: ["Expert en génie civil et ouvrages d'art", "Présent sur le chantier du Grand Paris", "9 implantations dans le monde"],
  },
  // ── SADE CGTH ──
  {
    id: 78, name: "SADE CGTH", logo: "/logos/sade-cgth.webp", sector: "Travaux publics", domain: "BTP", yearCreated: 1918,
    location: "Marseille et dans toute la France", employees: "350", chiffreAffaires: "82 870 euros",
    website: "https://www.sade-cgth.fr/",
    profiles: "Conducteur de travaux, Chef de chantier, Chef d'équipe, Canalisateur",
    postTypes: ["Alternance", "CDI"],
    applicationMethod: "CV et lettre de motivation",
    description: "Entreprise plus que centenaire, la SADE est spécialiste de la conception, la construction, la réhabilitation et l'entretien des réseaux (eau et énergie) et des infrastructures (génie civil et travaux souterrains) en France et à l'international. Entrepreneur de la transformation écologique, elle promeut des solutions techniques sobres et innovantes pour des réseaux vertueux et des infrastructures décarbonées.",
    highlights: ["Plus de 100 ans d'expertise", "Spécialiste des réseaux eau et énergie", "Transformation écologique"],
  },
  // ── Setec ──
  {
    id: 79, name: "Setec", logo: "/logos/setec.jpg", sector: "Ingénierie multisectorielle", domain: "Conseil", yearCreated: 1957,
    location: "France : Paris, Lyon, Vitrolles, Bordeaux, Toulouse et Nantes. Monde : Europe, Afrique, Amérique latine, Amérique du Nord et Arabie Saoudite",
    employees: "4 000", chiffreAffaires: "547 millions d'euros (2024)",
    website: "https://www.setec.fr/", websiteCarriere: "https://setec.nous-recrutons.fr/offres-emploi/",
    profiles: "Ingénieurs, techniciens et universitaires : Chef de projet, Chargé d'opérations / Pilote OPC, Ingénieur structure, ouvrage d'art, Ingénieur génie civil, Ingénieur offres et services de mobilités, Attaché et chargé d'étude environnement, Ingénieur aménagement urbain, Ingénieur systèmes d'information et réseaux de télécommunication, Ingénieur systèmes embarqués",
    postTypes: ["Stage"],
    applicationMethod: "Sur la base des candidatures reçues, nous identifions les profils dont les compétences correspondent à nos besoins. Un premier échange téléphonique permet d'évaluer les qualifications et de mieux comprendre les attentes du candidat. Si l'adéquation est confirmée, le processus se poursuit par des entretiens approfondis avec nos managers et nos équipes RH.",
    description: "Le Groupe setec, c'est aujourd'hui 4 000 collègues répartis dans 40 sociétés, dans de nombreux pays. Ce qui nous unit, c'est notre attachement au travail en équipe, au travail bien fait, sérieux, audacieux quand il le faut, qui fait sens pour la société. Nous intervenons dans plusieurs grands secteurs d'activité : l'industrie, les transports et les mobilités, le conseil et le management de projet, les infrastructures, l'environnement, l'énergie, la ville et les bâtiments.",
    highlights: ["40 sociétés dans de nombreux pays", "6 sociétés représentées au FOCEEN", "Près de 250 stagiaires accueillis chaque année", "Culture managériale participative et responsabilisante"],
  },
  // ── SMAC ──
  {
    id: 80, name: "SMAC", logo: "/logos/smac.webp", sector: "BTP", domain: "BTP", yearCreated: 1884,
    location: "Nationale et internationale", employees: "2 400", chiffreAffaires: "450 millions d'euros",
    website: "https://www.smac-sa.com", websiteCarriere: "https://www.smac-sa.com/carriere/",
    profiles: "Conducteur de travaux H/F, Chargé d'affaires H/F, Chargé études de prix H/F, Chargé étude méthodes H/F",
    postTypes: ["Alternance", "Stage"],
    applicationMethod: "CV",
    description: "SMAC, c'est un collectif de plus de 2 000 collaborateurs prêts à relever les défis les plus techniques en matière d'enveloppe du bâtiment. Avec son réseau de 60 agences, SMAC est un des leaders dans son domaine, présent en France métropolitaine, en outre-mer (Martinique, Guadeloupe, La Réunion et Mayotte) ainsi qu'à l'international (Maroc, Chili, Pérou et Espagne).",
    highlights: ["Leader en enveloppe du bâtiment", "60 agences en France et à l'international", "Plus de 10 000 challenges différents chaque année", "SMAC Red Spirit : solidarité, performance, envie de progresser"],
  },
  // ── TechnicAtome ──
  {
    id: 81, name: "TechnicAtome", logo: "/logos/technicatome.jpg", sector: "Défense / Nucléaire", domain: "Défense", yearCreated: 1972,
    location: "Nationale : Aix-en Provence, Cadarache, Saclay, Toulon, Bordeaux, Nantes, Brest et Cherbourg",
    employees: "2 100", chiffreAffaires: "633 millions d'euros",
    website: "https://www.technicatome.com", websiteCarriere: "https://technicatome.beekome.com/fr",
    profiles: "Maîtrise de méthodologies et de technologies-clés comme l'architecture système, le management de projets, le numérique sécuritaire, les analyses de sûreté, la thermo-hydraulique et la neutronique, le soutien logistique intégré…",
    postTypes: ["CDI", "Stage"],
    applicationMethod: "Réception de candidature via CV suivi de 3 entretiens (Projet, Métier et RH)",
    description: "Vous avez le souhait de travailler au sein d'un collectif, dans une entreprise française à taille humaine, à la pointe des technologies ? Portée par plus de 2100 collaborateurs répartis sur 8 sites implantés dans tout l'hexagone, TechnicAtome conçoit les réacteurs nucléaires compacts des sous-marins et porte-avions de la Marine Française, tout en œuvrant dans le domaine du nucléaire civil sur des projets innovants tels que le Réacteur Jules Horowitz.",
    highlights: ["Réacteurs nucléaires compacts pour la Marine Française", "8 sites en France", "Projets d'envergures et uniques en leur genre"],
  },
  // ── Technip Energies ──
  {
    id: 82, name: "Technip Energies", logo: "/logos/technip-energies.png", sector: "Ingénierie, études techniques", domain: "Énergie", yearCreated: 1967,
    location: "34 pays", employees: "17 000", chiffreAffaires: "7 milliards d'euros",
    website: "https://www.ten.com/en", websiteCarriere: "https://www.ten.com/en/careers",
    profiles: "Tous types de profils.",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "Retrouvez toutes nos offres sur : https://careers.hr.technipenergies.com/",
    description: "Technip Energies est une entreprise leader dans le management de projets et l'ingénierie pour l'industrie de l'énergie (pétrole, gaz et éolien) et au service de la transition énergétique, avec des positions de leader dans le Gaz Naturel Liquéfié (GNL), l'hydrogène et l'éthylène et avec une présence forte sur les marchés en croissance de l'hydrogène bleu et vert, la chimie durable, les éoliennes marines flottantes et la capture et stockage du CO2.",
    highlights: ["Leader dans le management de projets énergétiques", "Présence dans 34 pays", "15 000 collaborateurs engagés dans la transition énergétique"],
  },
  // ── VINCI Construction ──
  {
    id: 83, name: "VINCI Construction", logo: "/logos/vinci-construction.png", sector: "BTP Construction", domain: "BTP", yearCreated: 2000,
    location: "Régionale, Nationale et Internationale", employees: "117 000", chiffreAffaires: "31,8 milliards d'euros",
    website: "https://vinci-construction.com/fr/", websiteCarriere: "https://jobs.vinci.com/fr",
    profiles: "Valeurs : Engager pour la sécurité, Engager pour l'environnement, Engagés pour l'exemplarité",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "1) Si votre profil nous intéresse, il sera transmis à nos opérationnels pour sélection des CV répondant au mieux aux besoins des services. 2) Si votre candidature est retenue, vous serez ensuite contactés pour un entretien.",
    description: "VINCI Construction est l'un des principaux acteurs mondiaux de la construction, dans le domaine des infrastructures de transport, des bâtiments, des réseaux et des aménagements urbains. VINCI Construction s'appuie sur un réseau d'entreprises de proximité, des réseaux de spécialité et une expertise spécifique sur les grands projets d'infrastructures. Présentes dans plus de 100 pays, ses 1 300 entreprises emploient plus de 117 000 collaborateurs.",
    highlights: ["Principaux acteurs mondiaux de la construction", "1 300 entreprises dans 100+ pays", "117 000 collaborateurs"],
  },
  // ── Voltalia ──
  {
    id: 84, name: "Voltalia", logo: "/logos/voltalia.png", sector: "Énergies renouvelables", domain: "Énergie", yearCreated: 2005,
    location: "Internationale", employees: "1 700", chiffreAffaires: "546 millions d'euros",
    website: "https://www.voltalia.com/fr", websiteCarriere: "https://www.voltalia.com/fr/careers",
    profiles: "Ingénieurs : électricité, énergie, construction, génie civil, matériaux…",
    postTypes: ["Alternance", "CDD", "CDI", "Stage"],
    applicationMethod: "CV, LM - anglais très fortement apprécié.",
    description: "Fondée en France en 2005, Voltalia s'est développée pour devenir un producteur d'énergie et un fournisseur de services international. Nous sommes spécialisés dans les solutions d'énergies renouvelables qui permettent à nos clients de s'inscrire dans le mouvement mondial de la transition énergétique et écologique.",
    highlights: ["Producteur d'énergie renouvelable international", "Transition énergétique et écologique", "Présence internationale"],
  },

  // ── Exposants existants (non encore mis à jour via fiches) ──
  { id: 1, name: "Accenture", sector: "Conseil & Technologie", domain: "Conseil", yearCreated: 1989, location: "Paris, France", employees: "738 000+", website: "https://www.accenture.com", profiles: "Consultants, ingénieurs IT", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Candidature en ligne", description: "Accenture est une entreprise mondiale de services professionnels, spécialisée dans le conseil, la technologie et l'externalisation.", highlights: ["Fortune Global 500", "Présence mondiale", "Innovation digitale"] },
  { id: 15, name: "Thales", sector: "Défense & Technologie", domain: "Défense", yearCreated: 2000, location: "Paris, France", employees: "81 000+", website: "https://www.thalesgroup.com", profiles: "Ingénieurs systèmes, cybersécurité", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Portail carrières Thales", description: "Thales est un leader mondial des hautes technologies pour les marchés de la Défense, de l'Aéronautique et du Spatial.", highlights: ["Cybersécurité", "Identité numérique", "Spatial & défense"] },
  { id: 16, name: "TotalEnergies", sector: "Énergie", domain: "Énergie", yearCreated: 1924, location: "La Défense, France", employees: "100 000+", website: "https://www.totalenergies.fr", profiles: "Ingénieurs procédés, énergie", postTypes: ["CDI", "Alternance", "Stage"], applicationMethod: "Site carrières TotalEnergies", description: "TotalEnergies est une compagnie multi-énergies mondiale de production et de fourniture d'énergies.", highlights: ["Multi-énergies", "Transition énergétique", "Innovation R&D"] },
  {
    id: 17, name: "Veolia", sector: "Gestion des services à l'environnement", domain: "Environnement", yearCreated: 1853,
    location: "Présent sur les 5 continents", employees: "215 000", chiffreAffaires: "44,7 milliards d'euros",
    website: "https://www.veolia.com/fr",
    profiles: "Quelle que soit votre expérience ou votre pays d'origine, nous vous offrons l'opportunité de travailler dans un contexte professionnel innovant et multiculturel. Nous attachons une grande importance à votre personnalité, vos ambitions, votre créativité, votre enthousiasme et votre capacité à entreprendre.",
    postTypes: ["CDD", "CDI", "Stage"],
    applicationMethod: "Veolia vous accompagne dans votre projet professionnel ! Que vous soyez étudiant en recherche de stage ou d'alternance, jeune diplômé visant un VIE ou une première expérience professionnelle, rejoignez un leader mondial de la transformation écologique.",
    description: "Le groupe Veolia a pour ambition de devenir l'entreprise de référence de la transformation écologique. Présent sur les cinq continents avec 215 000 salariés, le Groupe conçoit et déploie des solutions utiles et concrètes pour la gestion de l'eau, des déchets et de l'énergie. En 2024, le Groupe a servi 111 millions d'habitants en eau potable, 98 millions en assainissement, a produit 42 térawattheures d'énergie et traité 65 millions de tonnes de déchets.",
    highlights: ["Leader mondial de la transformation écologique", "215 000 salariés sur 5 continents", "Gestion de l'eau, des déchets et de l'énergie", "Évolution de carrière : mobilité, développement des expertises"],
  },
  { id: 18, name: "Alstom", sector: "Transport ferroviaire", domain: "Transport", yearCreated: 1928, location: "Saint-Ouen, France", employees: "80 000+", website: "https://www.alstom.com", profiles: "Ingénieurs ferroviaire, systèmes", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Site carrières Alstom", description: "Alstom est un leader mondial de la mobilité intelligente et durable, proposant des systèmes intégrés de transport ferroviaire.", highlights: ["TGV & trains régionaux", "Mobilité durable", "Signalisation ferroviaire"] },
  { id: 19, name: "BNP Paribas", sector: "Banque & Finance", domain: "Finance", yearCreated: 2000, location: "Paris, France", employees: "190 000+", website: "https://www.bnpparibas.com", profiles: "Ingénieurs financiers, data analysts", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Portail carrières BNP Paribas", description: "BNP Paribas est l'une des premières banques européennes avec une présence internationale.", highlights: ["Banque universelle", "Innovation fintech", "Finance durable"] },
  { id: 20, name: "CMA CGM", sector: "Transport maritime", domain: "Transport", yearCreated: 1978, location: "Marseille, France", employees: "155 000+", website: "https://www.cmacgm.com", profiles: "Ingénieurs logistique, supply chain", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Site carrières CMA CGM", description: "CMA CGM est un leader mondial du transport maritime et de la logistique, basé à Marseille.", highlights: ["3e armateur mondial", "Siège à Marseille", "Innovation logistique"] },
];

export const allExposants = [parrain, ...partenaires, ...exposantsList].sort((a, b) =>
  a.name.localeCompare(b.name, "fr")
);
