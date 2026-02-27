import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, ChevronDown } from "lucide-react";
import bureauImg from "@/assets/teams/bureau.jpg";
import kateBecaas from "@/assets/teams/kate-becaas.jpg";
import antoineMaginot from "@/assets/teams/antoine-maginot.jpg";
import adamThabet from "@/assets/teams/adam-thabet.jpg";
import arthurPoulin from "@/assets/teams/arthur-poulin.jpg";
import candiceDeliance from "@/assets/teams/candice-deliance.jpg";
import diegoMartel from "@/assets/teams/diego-martel.jpg";
import eloiPerrin from "@/assets/teams/eloi-perrin.jpg";
import arielDia from "@/assets/teams/ariel-dia.jpg";
import poleEntreprise from "@/assets/teams/pole-entreprise.jpg";
import poleLogistique from "@/assets/teams/pole-logistique.jpg";
import polePartenariats from "@/assets/teams/pole-partenariats.jpg";
import poleQualite from "@/assets/teams/pole-qualite.jpg";
import comeGrardel from "@/assets/teams/come-grardel.jpg";
import poleRelationsEcoles from "@/assets/teams/pole-relations-ecoles.jpg";
import poleServices from "@/assets/teams/pole-services.jpg";
import enzoColasuonnoHuvelle from "@/assets/teams/enzo-colasuonno-huvelle.jpg";
import aurelienBeaufils from "@/assets/teams/aurelien-beaufils.jpg";
import emmaGensburger from "@/assets/teams/emma-gensburger.jpg";

function generateEmail(prenom: string, nom: string) {
  const normalize = (s: string) =>
    s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
  return `${normalize(prenom)}.${normalize(nom)}@centrale-med.fr`;
}

interface Member {
  prenom: string;
  nom: string;
  poste: string;
  photo?: string;
}

interface Pole {
  title: string;
  description: string;
  groupPhoto?: string;
  members: Member[];
}

const poles: Pole[] = [
  {
    title: "Le Bureau",
    description: "Le Bureau dirige l'association FOCEEN et coordonne l'ensemble des pôles pour assurer le succès du forum.",
    groupPhoto: bureauImg,
    members: [
      { prenom: "Kate", nom: "Becaas", poste: "Présidente", photo: kateBecaas },
      { prenom: "Antoine", nom: "Maginot", poste: "Vice-Président", photo: antoineMaginot },
      { prenom: "Adam", nom: "Thabet", poste: "Trésorier", photo: adamThabet },
      { prenom: "Arthur", nom: "Poulin", poste: "Vice-Trésorier", photo: arthurPoulin },
      { prenom: "Candice", nom: "Deliance", poste: "Secrétaire", photo: candiceDeliance },
    ],
  },
  {
    title: "Pôle Entreprises",
    description: "Le Pôle Entreprises est en charge du démarchage et de la relation avec les entreprises exposantes.",
    groupPhoto: poleEntreprise,
    members: [
      { prenom: "Victor", nom: "Clément", poste: "Responsable" },
      { prenom: "Diego", nom: "Martel", poste: "Chef de secteur", photo: diegoMartel },
      { prenom: "Eloi", nom: "Perrin", poste: "Chef de secteur", photo: eloiPerrin },
      { prenom: "Ariel", nom: "Dia", poste: "Chef de secteur", photo: arielDia },
      { prenom: "Hippolyte", nom: "Barth", poste: "Chef de secteur" },
    ],
  },
  {
    title: "Pôle Logistique",
    description: "Le Pôle Logistique organise l'ensemble des aspects matériels et logistiques du forum.",
    groupPhoto: poleLogistique,
    members: [
      { prenom: "Ysoline", nom: "Michel-Villaz", poste: "Co-Responsable" },
      { prenom: "Soufiane", nom: "Ferfra", poste: "Co-Responsable" },
    ],
  },
  {
    title: "Pôle Communication",
    description: "Le Pôle Communication gère la stratégie de communication, les réseaux sociaux et l'image du FOCEEN.",
    members: [
      { prenom: "Manon", nom: "Gaudrie", poste: "Responsable" },
      { prenom: "Thomas", nom: "Arnaud", poste: "Chargé de communication" },
      { prenom: "Ulysse", nom: "Guezou", poste: "Chargé de communication" },
      { prenom: "Romain", nom: "Brunat", poste: "Chargé de communication" },
    ],
  },
  {
    title: "Pôle Partenariat",
    description: "Le Pôle Partenariat développe et entretient les relations avec les partenaires institutionnels et privés.",
    groupPhoto: polePartenariats,
    members: [
      { prenom: "Hippolyte", nom: "Barot", poste: "Co-Responsable" },
      { prenom: "Tom", nom: "Nivaggioni", poste: "Co-Responsable" },
    ],
  },
  {
    title: "Pôle Qualité",
    description: "Le Pôle Qualité assure le respect des normes ISO et l'amélioration continue des processus.",
    groupPhoto: poleQualite,
    members: [
      { prenom: "Marie", nom: "Costes", poste: "Responsable" },
      { prenom: "Raphaël", nom: "Oudot", poste: "Référent Qualité" },
      { prenom: "Côme", nom: "Grardel", poste: "Référent DD", photo: comeGrardel },
    ],
  },
  {
    title: "Pôle Services",
    description: "Le Pôle Services conçoit les événements complémentaires au forum : tables rondes, espace conseil, journée pré-FOCEEN.",
    groupPhoto: poleServices,
    members: [
      { prenom: "Enzo", nom: "Colasuonno Huvelle", poste: "Co-Resp. Entrepreneuriat", photo: enzoColasuonnoHuvelle },
      { prenom: "Aurélien", nom: "Beaufils", poste: "Co-Resp. Entrepreneuriat", photo: aurelienBeaufils },
      { prenom: "Juliette", nom: "Cholet", poste: "Tables Rondes / Conf." },
      { prenom: "Emma", nom: "Gensburger", poste: "Espace Conseil", photo: emmaGensburger },
      { prenom: "Thomas", nom: "Candeias Da Silva", poste: "Journée Pré-FOCEEN" },
    ],
  },
  {
    title: "Pôle Relations Écoles",
    description: "Le Pôle Relations Écoles coordonne les partenariats avec les écoles d'ingénieurs de la région.",
    groupPhoto: poleRelationsEcoles,
    members: [
      { prenom: "Jules", nom: "Bové", poste: "Co-Responsable" },
      { prenom: "Louis", nom: "Girel", poste: "Co-Responsable" },
    ],
  },
];

const MemberCard = ({ member }: { member: Member }) => {
  const email = generateEmail(member.prenom, member.nom);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col items-center text-center bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-28 h-28 rounded-full overflow-hidden bg-muted mb-4 border-2 border-cyan/30">
        {member.photo ? (
          <img
            src={member.photo}
            alt={`${member.prenom} ${member.nom}`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-heading font-bold text-2xl">
            {member.prenom[0]}{member.nom[0]}
          </div>
        )}
      </div>
      <h4 className="font-heading font-semibold text-foreground text-sm">
        {member.prenom} {member.nom}
      </h4>
      <p className="text-xs text-cyan font-heading mt-1">{member.poste}</p>
      <div className="flex gap-3 mt-3">
        <a
          href="#"
          className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-cyan hover:text-primary-foreground transition-colors"
          aria-label={`LinkedIn de ${member.prenom}`}
        >
          <Linkedin size={14} />
        </a>
        <a
          href={`mailto:${email}`}
          className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-cyan hover:text-primary-foreground transition-colors"
          aria-label={`Email de ${member.prenom}`}
        >
          <Mail size={14} />
        </a>
      </div>
      <p className="text-[10px] text-muted-foreground mt-2 break-all">{email}</p>
    </motion.div>
  );
};

const PoleSection = ({ pole, index }: { pole: Pole; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className={`py-16 ${index % 2 === 0 ? "bg-background" : "bg-muted"}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header clickable */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left group"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground uppercase">
                {pole.title}
              </h2>
              <ChevronDown
                size={24}
                className={`text-cyan transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </div>
            <div className="w-16 h-1 bg-cyan mx-auto rounded-full mt-4 mb-4" />
            <p className="text-sm md:text-base font-body text-muted-foreground max-w-2xl mx-auto">
              {pole.description}
            </p>
          </motion.div>
        </button>

        {/* Expandable content */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              {pole.groupPhoto && (
                <div className="mb-10 rounded-xl overflow-hidden border border-border shadow-sm max-w-3xl mx-auto">
                  <img
                    src={pole.groupPhoto}
                    alt={pole.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                {pole.members.map((m) => (
                  <MemberCard key={`${m.prenom}-${m.nom}`} member={m} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const NotreEquipe = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bureauImg})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground uppercase tracking-wide">
            NOTRE ÉQUIPE
          </h1>
          <div className="mt-6 w-20 h-1 bg-cyan mx-auto rounded-full" />
          <p className="mt-4 text-primary-foreground/80 font-body text-sm md:text-base">
            Cliquez sur un pôle pour découvrir ses membres
          </p>
        </motion.div>
      </section>

      {/* Pôles */}
      {poles.map((pole, idx) => (
        <PoleSection key={pole.title} pole={pole} index={idx} />
      ))}
    </div>
  );
};

export default NotreEquipe;
