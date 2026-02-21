import { motion } from "framer-motion";

const PartnersSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-4">PARRAIN</h2>
          <div className="flex justify-center mb-12">
            <div className="w-48 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm font-heading">
              Logo Parrain
            </div>
          </div>

          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-8">NOS PARTENAIRES</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xs font-heading"
              >
                Partenaire {i + 1}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
