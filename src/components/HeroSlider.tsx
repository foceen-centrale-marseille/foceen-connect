import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";
import logoWhite from "@/assets/logo_foceen_white.png";

const slides = [
  {
    id: 1,
    content: (
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-primary-foreground">
        <img src={logoWhite} alt="FOCEEN" className="h-24 md:h-36" />
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
            <span className="bg-cyan/80 px-3 py-1 inline-block mb-2">PLUS GRAND</span>
            <br />
            <span className="bg-cyan/80 px-3 py-1 inline-block mb-2">FORUM INGÉNIEUR</span>
            <br />
            <span className="bg-cyan/80 px-3 py-1 inline-block">DE LA RÉGION SUD-EST</span>
          </h1>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="text-center text-primary-foreground max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">PRÈS DE 2500 VISITEURS</h2>
        <p className="text-base md:text-lg font-body leading-relaxed text-primary-foreground/90">
          Chaque année, le souhait du Forum Centrale Méditerranée Entreprises est de proposer des profils variés aux recruteurs présents au Palais des Congrès de Marseille. Pour cela, nous avons développé des partenariats avec de multiples écoles dans toute la France. Provenant à la fois d'écoles d'ingénieurs généralistes (Centrale Méditerranée, Polytech, Mines Saint Etienne, Arts et Métiers) mais aussi d'écoles plus spécialisées (Institut G4, ISBA TP) ou encore d'écoles de management (Kedge BS) ainsi que de l'IAE d'Aix-en-Provence et l'Université d'Aix-Marseille, le panel d'étudiants est grand et nous espérons, année après année, le diversifier.
        </p>
      </div>
    ),
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl"
          >
            {slides[current].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        aria-label="Slide précédente"
      >
        <ChevronLeft size={36} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        aria-label="Slide suivante"
      >
        <ChevronRight size={36} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`slide-indicator ${
              i === current ? "slide-indicator-active" : "slide-indicator-inactive"
            }`}
            aria-label={`Aller à la slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
