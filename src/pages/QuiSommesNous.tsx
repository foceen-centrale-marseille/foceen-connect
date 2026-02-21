import { motion } from "framer-motion";
import { User } from "lucide-react";
import logoSquare from "@/assets/logo_foceen_square.png";

const pastMandates = [
  { year: "2024-2025", name: "Mandat 2024-2025" },
  { year: "2023-2024", name: "Mandat 2023-2024" },
  { year: "2022-2023", name: "Mandat 2022-2023" },
];

const QuiSommesNous = () => {
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
            <img src={logoSquare} alt="FOCEEN" className="h-28 mx-auto mb-6" />
            <h1 className="text-4xl font-heading font-bold mb-4">QUI SOMMES-NOUS ?</h1>
            <p className="text-lg font-body text-primary-foreground/80 leading-relaxed">
              Le FOCEEN (Forum Centrale Méditerranée Entreprises) est une association étudiante de Centrale Méditerranée qui organise chaque année le plus grand forum de recrutement de la région Sud-Est. Notre mission : connecter les étudiants avec les entreprises pour des stages, alternances et premiers emplois.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">NOS VALEURS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Excellence & Qualité", desc: "Certifié ISO 9001 et ISO 20121, le FOCEEN s'engage pour un forum de la plus haute qualité." },
              { title: "Éco-responsabilité", desc: "Nous intégrons une démarche éco-responsable dans l'organisation de l'événement." },
              { title: "Solidarité", desc: "Nous œuvrons pour l'égalité des chances et l'accessibilité du forum à tous les étudiants." },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-card p-8 rounded-lg shadow-sm border border-border text-center"
              >
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{val.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Mandate 2026 */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">NOUVEAU MANDAT 2026</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-20 h-20 rounded-full bg-card border-2 border-border flex items-center justify-center">
                  <User size={28} className="text-muted-foreground" />
                </div>
                <span className="text-xs font-heading text-muted-foreground">À venir</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Mandates */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">ANCIENS MANDATS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastMandates.map((mandate, i) => (
              <motion.div
                key={mandate.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-card p-6 rounded-lg shadow-sm border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <User size={24} className="text-muted-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{mandate.year}</h3>
                <p className="text-sm text-muted-foreground font-body mt-1">{mandate.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuiSommesNous;
