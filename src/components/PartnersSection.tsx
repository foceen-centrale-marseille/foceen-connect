import { motion } from "framer-motion";

const parrain = {
  name: "VINCI Energies",
  logo: "/logos/Logo_VE_bleu_Rouge.png",
};

const partenaires = [
  { name: "Métropole Aix-Marseille Provence", logo: "/logos/960px-Logo_Métropole_Aix_Marseille_Provence.svg.png" },
  { name: "Batiactu", logo: "/logos/81792a_3e8f982fc8a6497ca46a98b487517d35~mv2.png" },
  { name: "Haribo", logo: "/logos/png-clipart-logo-haribo-of-america-brand-bear-bear-animals-text.png" },
  { name: "Min. Enseignement Sup.", logo: "/logos/3840px-Logo_du_Ministère_de_l'Enseignement_Supérieur_et_de_la_Recherche_(2022).svg.png" },
  { name: "La Mie Câline", logo: "/logos/logo-la-mie-caline.png" },
  { name: "Cafés Richard", logo: "/logos/logo-cafes-richard.png" },
  { name: "Gomet'", logo: "/logos/logo.png" },
  { name: "Studyrama", logo: "/logos/752_ckeditor_agenda_53966_637f4194bed9f_1.png" },
];

const LogoBadge = ({ name, large = false }: { name: string; large?: boolean }) => (
  <div
    className={`${
      large ? "w-56 h-28" : "w-36 h-20"
    } bg-muted/60 rounded-lg flex items-center justify-center border border-border px-3`}
  >
    <span
      className={`${
        large ? "text-sm" : "text-xs"
      } font-heading font-bold text-foreground/70 text-center leading-tight`}
    >
      {name}
    </span>
  </div>
);

const PartnerLogo = ({
  name,
  logo,
  large = false,
}: {
  name: string;
  logo: string;
  large?: boolean;
}) => {
  return (
    <div
      className={`${
        large ? "w-56 h-28" : "w-36 h-20"
      } bg-white rounded-lg flex items-center justify-center border border-border p-3`}
    >
      <img
        src={logo}
        alt={name}
        className="max-h-full max-w-full object-contain"
        onError={(e) => {
          // Replace with badge on error
          const target = e.currentTarget;
          const parent = target.parentElement;
          if (parent) {
            target.style.display = "none";
            const span = document.createElement("span");
            span.className =
              "text-xs font-bold text-center leading-tight";
            span.style.color = "hsl(var(--foreground) / 0.7)";
            span.textContent = name;
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
};

const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-4">PARRAIN</h2>
          <div className="flex justify-center mb-12">
            <PartnerLogo name={parrain.name} logo={parrain.logo} large />
          </div>

          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-8">NOS PARTENAIRES</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
            {partenaires.map((p) => (
              <PartnerLogo key={p.name} name={p.name} logo={p.logo} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
