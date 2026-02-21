import { motion } from "framer-motion";
import { Building2, Search } from "lucide-react";
import { useState } from "react";

const Exposants = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Placeholder grid for future company logos
  const placeholderCompanies = Array.from({ length: 24 }).map((_, i) => ({
    id: i + 1,
    name: `Entreprise ${i + 1}`,
  }));

  const filtered = placeholderCompanies.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <Building2 size={48} className="text-cyan mx-auto mb-4" />
            <h1 className="text-4xl font-heading font-bold mb-4">EXPOSANTS</h1>
            <p className="text-lg font-body text-primary-foreground/80">
              Découvrez les 136 entreprises qui participent au Forum FOCEEN et leurs offres de stages et d'emplois.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search + Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher une entreprise..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filtered.map((company, i) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
                className="bg-card border border-border rounded-lg p-4 flex flex-col items-center justify-center aspect-square hover:shadow-md hover:border-cyan transition-all cursor-pointer"
              >
                <Building2 size={32} className="text-muted-foreground mb-2" />
                <span className="text-xs font-heading text-muted-foreground text-center">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exposants;
