import { motion } from "framer-motion";

const parrain = { name: "Vinci Énergies" };

const partenaires = [
  { name: "Métropole Aix-Marseille-Provence" },
  { name: "Batiactu" },
  { name: "Haribo" },
  { name: "Min. Enseignement Sup." },
  { name: "La Mie Câline" },
  { name: "Cafés Richard" },
  { name: "Gomet'" },
  { name: "Studyrama" },
];

const LogoPlaceholder = ({ name, large = false }: { name: string; large?: boolean }) => (
  <div
    className={`${
      large ? "w-56 h-28" : "w-36 h-20"
    } bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xs font-heading text-center px-2 border border-border`}
  >
    {name}
  </div>
);

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
            <LogoPlaceholder name={parrain.name} large />
          </div>

          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-8">NOS PARTENAIRES</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
            {partenaires.map((p) => (
              <LogoPlaceholder key={p.name} name={p.name} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
