import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users, Award, Shield, Lightbulb, Heart, Leaf, Briefcase } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";

// Team photos placeholder — replace with real uploads
const teamYears = [
  { year: 2025, label: "Equipe 2025" },
  { year: 2024, label: "Equipe 2024" },
  { year: 2023, label: "Equipe 2023" },
  { year: 2022, label: "Equipe 2022" },
  { year: 2021, label: "Equipe 2021" },
  { year: 2020, label: "Equipe 2020" },
  { year: 2019, label: "Equipe 2019" },
  { year: 2018, label: "Equipe 2018" },
  { year: 2017, label: "Equipe 2017" },
  { year: 2016, label: "Equipe 2016" },
  { year: 2015, label: "Equipe 2015" },
];

const values = [
  { icon: Briefcase, title: "Professionnalisme", desc: "Un événement organisé avec rigueur et exigence à chaque édition." },
  { icon: Heart, title: "Engagement", desc: "28 étudiants investis pour créer un pont entre écoles et entreprises." },
  { icon: Lightbulb, title: "Innovation", desc: "Des formats renouvelés chaque année pour répondre aux attentes du marché." },
  { icon: Shield, title: "Autonomie", desc: "Une gestion indépendante et responsable de l'événement." },
  { icon: Users, title: "Solidarité", desc: "Égalité des chances et accessibilité pour tous les étudiants." },
  { icon: Leaf, title: "Éco-responsabilité", desc: "Une démarche durable intégrée à chaque étape de l'organisation." },
];

const QuiSommesNous = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = useCallback(
    () => setCarouselIndex((i) => (i + 1) % teamYears.length),
    []
  );
  const prevSlide = useCallback(
    () => setCarouselIndex((i) => (i - 1 + teamYears.length) % teamYears.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div>
      {/* ─── 1. HERO — Photo d'équipe plein écran ─── */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground uppercase tracking-wide leading-tight">
            Une équipe dynamique
            <br />
            et professionnelle
          </h1>
          <div className="mt-6 w-20 h-1 bg-cyan mx-auto rounded-full" />
        </motion.div>
      </section>

      {/* ─── 2. PRÉSENTATION — Données factuelles ─── */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              LE <span className="text-cyan">FOCEEN</span>
            </h2>
            <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Le FOCEEN (Forum Centrale Méditerranée Entreprises) est une association de l'École Centrale de Marseille
              composée de <strong className="text-foreground">28 étudiants-ingénieurs</strong> passionnés. Chaque année,
              ces étudiants organisent le plus grand forum de recrutement ingénieur de la région Sud-Est, réunissant
              entreprises, écoles et talents autour d'un événement unique.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-heading font-bold text-cyan">19e</span>
                <span className="text-sm font-heading uppercase tracking-widest text-muted-foreground mt-1 block">
                  Édition
                </span>
              </div>
              <div className="hidden sm:block w-px h-16 bg-border" />
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-heading font-bold text-cyan">03</span>
                <span className="text-sm font-heading uppercase tracking-widest text-muted-foreground mt-1 block">
                  Novembre 2026
                </span>
              </div>
              <div className="hidden sm:block w-px h-16 bg-border" />
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-heading font-bold text-cyan">28</span>
                <span className="text-sm font-heading uppercase tracking-widest text-muted-foreground mt-1 block">
                  Membres
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. HISTORIQUE — Carrousel des équipes ─── */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-4"
          >
            DEPUIS 2015
          </motion.h2>
          <p className="text-center text-primary-foreground/70 font-body mb-12 max-w-2xl mx-auto">
            Plus de 10 ans d'engagement étudiant au service du lien entre écoles et entreprises.
          </p>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-video bg-navy-light rounded-lg flex items-center justify-center"
              >
                {/* Placeholder — replace with real team photos */}
                <div className="flex flex-col items-center gap-4 text-primary-foreground/50">
                  <Users size={64} />
                  <span className="text-lg font-heading">Photo à venir</span>
                </div>
                {/* Year overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                  <h3 className="text-xl md:text-2xl font-heading font-bold">
                    {teamYears[carouselIndex].label}
                  </h3>
                </div>
              </motion.div>
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 hover:bg-primary text-primary-foreground transition-colors"
              aria-label="Équipe précédente"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 hover:bg-primary text-primary-foreground transition-colors"
              aria-label="Équipe suivante"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {teamYears.map((t, i) => (
                <button
                  key={t.year}
                  onClick={() => setCarouselIndex(i)}
                  className={`px-3 py-1 rounded-full text-xs font-heading transition-all ${
                    i === carouselIndex
                      ? "bg-cyan text-primary-foreground"
                      : "bg-primary-foreground/10 text-primary-foreground/60 hover:bg-primary-foreground/20"
                  }`}
                >
                  {t.year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. VALEURS & NORMES ISO ─── */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-16"
          >
            NOS VALEURS & CERTIFICATIONS
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Values */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex gap-3 items-start"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                      <v.icon size={20} className="text-cyan" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm">{v.title}</h4>
                      <p className="text-xs text-muted-foreground font-body mt-1">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ISO history */}
              <div className="mt-8 p-5 bg-muted rounded-lg border border-border">
                <h4 className="font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                  <Award size={18} className="text-cyan" />
                  Certifications ISO
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-body">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan shrink-0" />
                    <span><strong className="text-foreground">ISO 9001</strong> — Management de la qualité, depuis 2020</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan shrink-0" />
                    <span><strong className="text-foreground">ISO 20121</strong> — Événementiel durable, depuis 2024</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right — ISO visual placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="w-full aspect-square max-w-md bg-muted rounded-xl border border-border flex flex-col items-center justify-center gap-4 text-muted-foreground">
                <Award size={72} strokeWidth={1} />
                <span className="font-heading text-sm">Logos ISO à venir</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 5. POLITIQUE QUALITÉ ─── */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-16"
          >
            POLITIQUE QUALITÉ
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — Piliers fondateurs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-xl border border-border shadow-sm"
            >
              <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield size={20} className="text-cyan" />
                Piliers fondateurs
              </h3>
              <ul className="space-y-3 text-sm font-body text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-cyan font-bold shrink-0">01</span>
                  <span>Offrir un cadre de recrutement professionnel et structuré, à la hauteur des exigences des entreprises.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan font-bold shrink-0">02</span>
                  <span>Garantir une organisation irréprochable grâce à des processus audités et certifiés ISO.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan font-bold shrink-0">03</span>
                  <span>Améliorer continuellement l'expérience visiteur et exposant à travers le retour d'expérience.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan font-bold shrink-0">04</span>
                  <span>Intégrer une démarche éco-responsable dans toutes les phases de l'événement.</span>
                </li>
              </ul>
            </motion.div>

            {/* Right — Politique d'accueil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 rounded-xl border border-border shadow-sm"
            >
              <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <Users size={20} className="text-cyan" />
                Politique d'accueil
              </h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-2">Pour les élèves</h4>
                  <p className="text-sm font-body text-muted-foreground">
                    Accompagnement personnalisé : ateliers de préparation CV, coaching entretien, accès à un annuaire
                    des exposants avant l'événement. Le FOCEEN s'assure que chaque étudiant puisse aborder le forum
                    avec confiance et préparation.
                  </p>
                </div>
                <div className="w-full h-px bg-border" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-2">Pour les entreprises</h4>
                  <p className="text-sm font-body text-muted-foreground">
                    Logistique sur mesure : stand équipé, visibilité pré-événement, accès aux profils étudiants,
                    et un interlocuteur dédié tout au long du processus. Nous garantissons aux exposants un
                    environnement optimal pour rencontrer les meilleurs talents.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuiSommesNous;
