import { motion } from "framer-motion";
import { Building2, Search, Filter, MapPin, Users, Calendar, ExternalLink, Globe, X, Briefcase, GraduationCap, FileText } from "lucide-react";
import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type Exposant = {
  id: number;
  name: string;
  logo?: string;
  sector: string;
  domain: string;
  yearCreated: number;
  location: string;
  employees: string;
  website: string;
  profiles: string;
  postTypes: string[];
  applicationMethod: string;
  description: string;
  highlights: string[];
};

const DOMAINS = [
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
];

const parrain: Exposant = {
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

const partenaires: Exposant[] = [
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
    description: "La Métropole Aix-Marseille-Provence est la plus vaste métropole de France. Elle œuvre pour le développement économique, l'aménagement du territoire et la transition écologique.",
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
    description: "HARIBO est le leader mondial de la confiserie de sucre et de réglisse, offrant des produits de qualité depuis plus d'un siècle.",
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
    description: "Batiactu est le premier portail d'information dédié aux professionnels de la construction et du bâtiment en France.",
    highlights: ["Média de référence du BTP", "Actualités et réglementation", "Communauté de professionnels"],
  },
];

const exposantsList: Exposant[] = [
  { id: 1, name: "Accenture", sector: "Conseil & Technologie", domain: "Conseil", yearCreated: 1989, location: "Paris, France", employees: "738 000+", website: "https://www.accenture.com", profiles: "Consultants, ingénieurs IT", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Candidature en ligne", description: "Accenture est une entreprise mondiale de services professionnels, spécialisée dans le conseil, la technologie et l'externalisation.", highlights: ["Fortune Global 500", "Présence mondiale", "Innovation digitale"] },
  { id: 2, name: "Airbus", sector: "Aéronautique & Défense", domain: "Industrie", yearCreated: 1970, location: "Toulouse, France", employees: "130 000+", website: "https://www.airbus.com", profiles: "Ingénieurs aéronautique, mécanique", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Portail carrières Airbus", description: "Airbus est un leader mondial de l'aéronautique, de l'espace et de la défense.", highlights: ["Leader mondial aéronautique", "Innovation durable", "Programmes spatiaux"] },
  { id: 3, name: "Bouygues Construction", sector: "BTP", domain: "BTP", yearCreated: 1952, location: "Guyancourt, France", employees: "32 000+", website: "https://www.bouygues-construction.com", profiles: "Ingénieurs génie civil, conducteurs de travaux", postTypes: ["CDI", "Alternance", "Stage"], applicationMethod: "Site carrières Bouygues", description: "Bouygues Construction est un acteur mondial de la construction responsable, présent dans plus de 60 pays.", highlights: ["60+ pays", "Construction durable", "Projets emblématiques"] },
  { id: 4, name: "Capgemini", sector: "Conseil & IT", domain: "Numérique", yearCreated: 1967, location: "Paris, France", employees: "360 000+", website: "https://www.capgemini.com", profiles: "Consultants, développeurs, data scientists", postTypes: ["CDI", "Alternance", "Stage"], applicationMethod: "Candidature en ligne", description: "Capgemini est un leader mondial du conseil, de la transformation numérique et de l'ingénierie.", highlights: ["Leader du conseil IT", "Transformation digitale", "Intelligence artificielle"] },
  { id: 5, name: "CEA", sector: "Recherche & Énergie", domain: "Énergie", yearCreated: 1945, location: "Cadarache, France", employees: "20 000+", website: "https://www.cea.fr", profiles: "Ingénieurs et techniciens", postTypes: ["Alternance", "CDD", "CDI", "Stage"], applicationMethod: "Portail recrutement CEA", description: "Le CEA est un organisme de recherche sur l'énergie nucléaire et les nouvelles technologies de l'énergie, la défense et la sécurité.", highlights: ["Recherche de pointe", "Énergie nucléaire", "Technologies du futur", "Cadarache – site ITER"] },
  { id: 6, name: "Dassault Systèmes", sector: "Logiciels & Ingénierie", domain: "Numérique", yearCreated: 1981, location: "Vélizy, France", employees: "23 000+", website: "https://www.3ds.com", profiles: "Ingénieurs logiciel, R&D", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Candidature en ligne", description: "Dassault Systèmes développe des logiciels de conception 3D, de simulation et de gestion du cycle de vie des produits.", highlights: ["Leader du PLM", "Jumeaux numériques", "Industrie 4.0"] },
  { id: 7, name: "EDF", sector: "Énergie", domain: "Énergie", yearCreated: 1946, location: "Paris, France", employees: "165 000+", website: "https://www.edf.fr", profiles: "Ingénieurs énergie, maintenance", postTypes: ["CDI", "Alternance", "Stage"], applicationMethod: "Site carrières EDF", description: "EDF est le premier producteur et fournisseur d'électricité en France et en Europe.", highlights: ["1er producteur d'électricité en Europe", "Énergies bas carbone", "Nucléaire & renouvelable"] },
  { id: 8, name: "Engie", sector: "Énergie & Services", domain: "Énergie", yearCreated: 2008, location: "La Défense, France", employees: "96 000+", website: "https://www.engie.com", profiles: "Ingénieurs énergie, environnement", postTypes: ["CDI", "Alternance", "Stage"], applicationMethod: "Portail carrières Engie", description: "ENGIE est un groupe mondial de référence dans l'énergie bas carbone et les services.", highlights: ["Transition énergétique", "Énergies renouvelables", "Hydrogène vert"] },
  { id: 9, name: "Framatome", sector: "Nucléaire", domain: "Énergie", yearCreated: 2018, location: "Paris, France", employees: "18 000+", website: "https://www.framatome.com", profiles: "Ingénieurs nucléaire, sûreté", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Site carrières Framatome", description: "Framatome conçoit et fournit des composants, du combustible et des systèmes pour les centrales nucléaires.", highlights: ["Expertise nucléaire", "Sûreté", "Innovation"] },
  { id: 10, name: "Naval Group", sector: "Défense navale", domain: "Défense", yearCreated: 2017, location: "Paris & Toulon, France", employees: "17 000+", website: "https://www.naval-group.com", profiles: "Ingénieurs naval, systèmes embarqués", postTypes: ["CDI", "Stage", "Alternance"], applicationMethod: "Site carrières Naval Group", description: "Naval Group est un leader européen du naval de défense et un innovateur dans l'énergie marine.", highlights: ["Sous-marins & frégates", "Cyber-sécurité navale", "Énergie marine renouvelable"] },
  { id: 11, name: "Onet", sector: "Services aux entreprises", domain: "Industrie", yearCreated: 1860, location: "Marseille, France", employees: "75 000+", website: "https://www.ofrfrnet.com", profiles: "Ingénieurs, techniciens, managers", postTypes: ["CDI", "CDD", "Stage"], applicationMethod: "Candidature en ligne", description: "Onet est un groupe français de services aux entreprises : propreté, sécurité, ingénierie nucléaire.", highlights: ["Entreprise marseillaise", "Leader de la propreté", "Ingénierie nucléaire"] },
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

const allExposants = [parrain, ...partenaires, ...exposantsList].sort((a, b) =>
  a.name.localeCompare(b.name, "fr")
);

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

const Exposants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDomain, setActiveDomain] = useState("Tous");
  const [selectedExposant, setSelectedExposant] = useState<Exposant | null>(null);

  const filtered = useMemo(() => {
    return allExposants.filter((e) => {
      const matchSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchDomain = activeDomain === "Tous" || e.domain === activeDomain;
      return matchSearch && matchDomain;
    });
  }, [searchTerm, activeDomain]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Building2 size={48} className="text-cyan mx-auto mb-4" />
            <h1 className="text-4xl font-heading font-bold mb-4">EXPOSANTS</h1>
            <p className="text-lg font-body text-primary-foreground/80">
              Découvrez les entreprises qui participent au Forum FOCEEN et leurs offres de stages et d'emplois.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PARRAIN ── */}
      <section className="py-14 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-2">PARRAIN</h2>
          <div className="w-16 h-1 bg-cyan mx-auto rounded-full mb-8" />
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedExposant(parrain)}
              className="w-80 h-40 bg-card rounded-xl flex items-center justify-center border-2 border-cyan p-6 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
            >
              {parrain.logo ? (
                <img src={parrain.logo} alt={parrain.name} className="object-contain h-28 w-auto" />
              ) : (
                <span className="text-xl font-heading font-bold text-foreground">{parrain.name}</span>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PARTENAIRES ── */}
      <section className="py-10 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-2">PARTENAIRES</h2>
          <div className="w-16 h-1 bg-cyan mx-auto rounded-full mb-8" />
          <div className="flex flex-wrap justify-center gap-6">
            {partenaires.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedExposant(p)}
                className="w-44 h-24 bg-card rounded-lg flex items-center justify-center border border-border p-3 cursor-pointer hover:border-cyan hover:shadow-md transition-all"
              >
                {p.logo ? (
                  <img src={p.logo} alt={p.name} className="object-contain h-16 w-auto" />
                ) : (
                  <span className="text-sm font-heading text-foreground text-center">{p.name}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOUS LES EXPOSANTS ── */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-2">TOUS LES EXPOSANTS</h2>
          <div className="w-16 h-1 bg-cyan mx-auto rounded-full mb-10" />

          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 max-w-3xl mx-auto">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher une entreprise..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
          </div>

          {/* Domain filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {DOMAINS.map((domain) => (
              <button
                key={domain}
                onClick={() => setActiveDomain(domain)}
                className={`px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all ${
                  activeDomain === domain
                    ? "bg-cyan text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <Filter size={12} className="inline mr-1.5 -mt-0.5" />
                {domain}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((company, i) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.015, duration: 0.3 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedExposant(company)}
                className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center aspect-square hover:shadow-lg hover:border-cyan transition-all cursor-pointer group"
              >
                {company.logo ? (
                  <img src={company.logo} alt={company.name} className="object-contain h-16 w-auto mb-3" />
                ) : (
                  <Building2 size={32} className="text-muted-foreground mb-3 group-hover:text-cyan transition-colors" />
                )}
                <span className="text-xs font-heading font-semibold text-foreground text-center leading-tight">
                  {company.name}
                </span>
                <span className="text-[10px] text-muted-foreground mt-1 text-center">{company.sector}</span>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Building2 size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground font-body">Aucun exposant trouvé pour cette recherche.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── DETAIL MODAL ── */}
      <Dialog open={!!selectedExposant} onOpenChange={() => setSelectedExposant(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {selectedExposant && (
            <>
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-6 rounded-t-lg">
                <DialogHeader>
                  <div className="flex items-center gap-5">
                    {selectedExposant.logo ? (
                      <div className="w-20 h-20 bg-card rounded-lg flex items-center justify-center p-2 shrink-0">
                        <img src={selectedExposant.logo} alt={selectedExposant.name} className="object-contain h-16 w-auto" />
                      </div>
                    ) : (
                      <div className="w-20 h-20 bg-card/10 rounded-lg flex items-center justify-center shrink-0">
                        <Building2 size={36} className="text-cyan" />
                      </div>
                    )}
                    <div>
                      <DialogTitle className="text-2xl font-heading font-bold text-primary-foreground">
                        {selectedExposant.name}
                      </DialogTitle>
                      <DialogDescription className="text-cyan font-heading text-sm mt-1">
                        {selectedExposant.sector}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left – Info */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider flex items-center gap-2">
                      <Briefcase size={16} className="text-cyan" /> Infos Clés
                    </h3>
                    <div className="space-y-3 text-sm font-body">
                      <div className="flex items-start gap-3">
                        <Calendar size={16} className="text-cyan mt-0.5 shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Année de création</span>
                          <p className="font-semibold text-foreground">{selectedExposant.yearCreated}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-cyan mt-0.5 shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Localisation</span>
                          <p className="font-semibold text-foreground">{selectedExposant.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users size={16} className="text-cyan mt-0.5 shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Nombre d'employés</span>
                          <p className="font-semibold text-foreground">{selectedExposant.employees}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe size={16} className="text-cyan mt-0.5 shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Site web</span>
                          <a
                            href={selectedExposant.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-cyan hover:underline flex items-center gap-1"
                          >
                            Visiter <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right – Recrutement */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider flex items-center gap-2">
                      <GraduationCap size={16} className="text-cyan" /> Recrutement
                    </h3>
                    <div className="space-y-3 text-sm font-body">
                      <div>
                        <span className="text-muted-foreground">Profils recherchés</span>
                        <p className="font-semibold text-foreground">{selectedExposant.profiles}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Types de postes</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {selectedExposant.postTypes.map((type) => (
                            <span key={type} className="px-3 py-1 text-xs font-heading font-semibold rounded-full bg-cyan/15 text-cyan">
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText size={16} className="text-cyan mt-0.5 shrink-0" />
                        <div>
                          <span className="text-muted-foreground">Modalités de candidature</span>
                          <p className="font-semibold text-foreground">{selectedExposant.applicationMethod}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="font-heading font-bold text-foreground text-sm uppercase tracking-wider mb-4">
                    Présentation de l'entreprise
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
                    {selectedExposant.description}
                  </p>
                  <ul className="space-y-2">
                    {selectedExposant.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm font-body text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Exposants;
