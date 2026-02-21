import { motion } from "framer-motion";
import { Calendar, Award, Users, School, Building2 } from "lucide-react";

const figures = [
  { icon: Calendar, value: "03/11/2026", label: "PARC CHANOT" },
  { icon: Award, value: "ISO 9001, ISO 20121", label: "NORMES DE QUALITÉ" },
  { icon: Users, value: "2500", label: "VISITEURS" },
  { icon: School, value: "14", label: "ÉCOLES" },
  { icon: Building2, value: "136", label: "ENTREPRISES" },
];

const KeyFigures = () => {
  return (
    <section className="bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {figures.map((fig, i) => (
            <motion.div
              key={fig.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="key-figure"
            >
              <fig.icon size={28} className="text-cyan mb-1" />
              <div className="key-figure-value">{fig.value}</div>
              <div className="key-figure-label">{fig.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;
