import { motion } from "framer-motion";

const parrain = {
  name: "VINCI Energies",
  logo: "https://logo.clearbit.com/vinci-energies.com",
};

const partenaires = [
  { name: "Métropole Aix-Marseille Provence", logo: "https://upload.wikimedia.org/wikipedia/fr/0/0f/Logo_M%C3%A9tropole_Aix-Marseille-Provence.png" },
  { name: "Batiactu", logo: "https://logo.clearbit.com/batiactu.com" },
  { name: "Haribo", logo: "https://logo.clearbit.com/haribo.com" },
  { name: "Min. Enseignement Sup.", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/37/Logo_MESRI.svg/512px-Logo_MESRI.svg.png" },
  { name: "La Mie Câline", logo: "https://logo.clearbit.com/lamiecaline.com" },
  { name: "Cafés Richard", logo: "https://logo.clearbit.com/cafesrichard.com" },
  { name: "Gomet'", logo: null },
  { name: "Studyrama", logo: "https://logo.clearbit.com/studyrama.com" },
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

const LogoImage = ({
  name,
  logo,
  large = false,
}: {
  name: string;
  logo: string;
  large?: boolean;
}) => (
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
        const target = e.currentTarget;
        target.style.display = "none";
        const parent = target.parentElement;
        if (parent) {
          const span = document.createElement("span");
          span.className =
            "text-xs font-heading font-bold text-center leading-tight";
          span.style.color = "hsl(var(--foreground) / 0.7)";
          span.textContent = name;
          parent.appendChild(span);
        }
      }}
    />
  </div>
);

const PartnerLogo = ({
  name,
  logo,
  large = false,
}: {
  name: string;
  logo: string | null;
  large?: boolean;
}) => {
  if (logo) return <LogoImage name={name} logo={logo} large={large} />;
  return <LogoBadge name={name} large={large} />;
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
