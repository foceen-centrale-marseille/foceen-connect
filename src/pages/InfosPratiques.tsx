import { motion } from "framer-motion";
import { MapPin, Clock, Train, Info, Download, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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

      {/* Retour sur la 18ème édition - Downloads */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
              RETOUR SUR LA 18<sup>ème</sup> EDITION
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/documents/Guide_eleve.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors"
              >
                <Download size={20} />
                Guide élève
                <FileText size={18} className="opacity-60" />
              </a>
              <a
                href="/documents/Brochure_entreprise.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-cyan text-primary px-6 py-4 rounded-lg font-heading font-semibold hover:bg-cyan/90 transition-colors"
              >
                <Download size={20} />
                Brochure entreprise
                <FileText size={18} className="opacity-60" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
                Parc Chanot<br />
                114 Rond-Point du Prado<br />
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
                03 novembre 2026<br />
                9h00 — 17h00<br />
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
                Métro : Ligne 2, Rond-Point du Prado<br />
                Bus : Lignes 19, 44, 83<br />
                Parking : Parc Chanot
              </p>
            </motion.div>
          </div>

          {/* Link to Exposants */}
          <div className="text-center">
            <Link
              to="/exposants"
              className="inline-flex items-center gap-2 text-cyan font-heading font-semibold hover:underline underline-offset-4 transition-colors"
            >
              Découvrir les exposants
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2 text-center">
              DEROULE DE LA 18<sup>ème</sup> EDITION
            </h2>
            <p className="text-center text-lg font-heading font-semibold text-cyan mb-12">PROGRAMME</p>

            {/* Conférences */}
            <div className="mb-12">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6 border-l-4 border-cyan pl-4">
                Conférences
              </h3>
              <div className="space-y-4">
                <div className="bg-card p-5 rounded-lg border border-border">
                  <span className="text-sm font-heading font-semibold text-cyan">11:00 – 12:00</span>
                  <h4 className="font-heading font-semibold text-foreground mt-1">Conférence Pernod Ricard</h4>
                  <p className="text-muted-foreground font-body text-sm mt-1">
                    Piloter le cycle de vie d'un produit : l'exemple d'une bouteille de Ricard
                  </p>
                </div>
                <div className="bg-card p-5 rounded-lg border border-border">
                  <span className="text-sm font-heading font-semibold text-cyan">13:30 – 14:30</span>
                  <h4 className="font-heading font-semibold text-foreground mt-1">Conférence Dassault Systèmes</h4>
                  <p className="text-muted-foreground font-body text-sm mt-1">
                    L'impression 3D, quand design et fabrication s'accordent
                  </p>
                </div>
              </div>
            </div>

            {/* Tables rondes */}
            <div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-6 border-l-4 border-cyan pl-4">
                Tables Rondes
              </h3>
              <div className="space-y-4">
                <div className="bg-card p-5 rounded-lg border border-border">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-sm font-heading font-semibold text-cyan">10:00 – 11:00</span>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded font-body text-muted-foreground">Salle Sormiou</span>
                  </div>
                  <h4 className="font-heading font-semibold text-foreground">"Protection des infrastructures maritimes critiques"</h4>
                  <p className="text-muted-foreground font-body text-sm mt-1">par Thales</p>
                </div>

                <div className="bg-card p-5 rounded-lg border border-border">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-sm font-heading font-semibold text-cyan">10:00 – 10:30</span>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded font-body text-muted-foreground">Salle Morgiou</span>
                  </div>
                  <h4 className="font-heading font-semibold text-foreground">"Au cœur de la transition énergétique"</h4>
                  <p className="text-muted-foreground font-body text-sm mt-1">par Vinci Energies</p>
                </div>

                <div className="bg-card p-5 rounded-lg border border-border">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-sm font-heading font-semibold text-cyan">10:45 – 11:15</span>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded font-body text-muted-foreground">Salle Morgiou</span>
                  </div>
                  <h4 className="font-heading font-semibold text-foreground">"Naviguer entre normes, données et projets pour sécuriser la transformation digitale"</h4>
                  <p className="text-muted-foreground font-body text-sm mt-1">par EY</p>
                </div>

                <div className="bg-card p-5 rounded-lg border border-border">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-sm font-heading font-semibold text-cyan">13:30 – 14:30</span>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded font-body text-muted-foreground">Salle Sormiou</span>
                  </div>
                  <h4 className="font-heading font-semibold text-foreground">"Data et sport – Projet Zéphir"</h4>
                  <p className="text-muted-foreground font-body text-sm mt-1">par BPCE-SI</p>
                </div>

                <div className="bg-card p-5 rounded-lg border border-border">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-sm font-heading font-semibold text-cyan">13:30 – 14:30</span>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded font-body text-muted-foreground">Salle Morgiou</span>
                  </div>
                  <h4 className="font-heading font-semibold text-foreground">"L'ingénierie système appliquée aux bâtiments de combat"</h4>
                  <p className="text-muted-foreground font-body text-sm mt-1">par NAVAL GROUP</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <MapSection />
    </div>
  );
};

export default InfosPratiques;
