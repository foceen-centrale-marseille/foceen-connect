import { motion } from "framer-motion";
import { MapPin, Clock, Train, Car, Info } from "lucide-react";
import MapSection from "@/components/MapSection";

const InfosPratiques = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Info size={48} className="text-cyan mx-auto mb-4" />
            <h1 className="text-4xl font-heading font-bold mb-4">INFOS PRATIQUES</h1>
            <p className="text-lg font-body text-primary-foreground/80">
              Toutes les informations pour préparer votre venue au Forum FOCEEN.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-lg shadow-sm border border-border"
            >
              <MapPin size={28} className="text-cyan mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Lieu</h3>
              <p className="text-muted-foreground font-body text-sm">
                Parc Chanot
                <br />
                114 Rond-Point du Prado
                <br />
                13008 Marseille
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="bg-card p-8 rounded-lg shadow-sm border border-border"
            >
              <Clock size={28} className="text-cyan mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Horaires</h3>
              <p className="text-muted-foreground font-body text-sm">
                03 novembre 2026
                <br />
                9h00 — 17h00
                <br />
                Entrée libre
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-card p-8 rounded-lg shadow-sm border border-border"
            >
              <Train size={28} className="text-cyan mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Accès</h3>
              <p className="text-muted-foreground font-body text-sm">
                Métro : Ligne 2, Rond-Point du Prado
                <br />
                Bus : Lignes 19, 44, 83
                <br />
                Parking : Parc Chanot
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <MapSection />
    </div>
  );
};

export default InfosPratiques;
