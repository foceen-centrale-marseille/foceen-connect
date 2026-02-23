import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "@/assets/logo_foceen_white.png";

interface NavbarProps {
  mode: "entreprise" | "visiteur";
  onModeChange: (mode: "entreprise" | "visiteur") => void;
}

const entrepriseLinks = [
{ label: "Accueil", path: "/" },
{ label: "Qui sommes-nous ?", path: "/qui-sommes-nous" },
{ label: "Exposants", path: "/exposants" },
{ label: "S'inscrire", path: "/inscrire", external: true }];


const visiteurLinks = [
{ label: "Accueil", path: "/" },
{ label: "Qui sommes-nous ?", path: "/qui-sommes-nous" },
{ label: "Infos Pratiques", path: "/infos-pratiques" },
{ label: "S'inscrire", path: "/inscrire", external: true }];


const Navbar = ({ mode, onModeChange }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const links = mode === "entreprise" ? entrepriseLinks : visiteurLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Mode toggle */}
          <div className="flex items-center gap-6">
            <Link to="/">
              <img alt="FOCEEN" className="h-14" src="/lovable-uploads/4b833b5e-891d-4c0f-aa5b-e8bb2b5a17d5.png" />
            </Link>
            <div className="hidden sm:flex items-center gap-1 text-sm font-heading">
              <button
                onClick={() => onModeChange("entreprise")}
                className={`px-2 py-1 transition-all ${
                mode === "entreprise" ?
                "text-primary-foreground underline underline-offset-4 decoration-cyan" :
                "text-primary-foreground/60 hover:text-primary-foreground/80"}`
                }>

                Entreprise
              </button>
              <span className="text-primary-foreground/40">|</span>
              <button
                onClick={() => onModeChange("visiteur")}
                className={`px-2 py-1 transition-all ${
                mode === "visiteur" ?
                "text-primary-foreground underline underline-offset-4 decoration-cyan" :
                "text-primary-foreground/60 hover:text-primary-foreground/80"}`
                }>

                Visiteur
              </button>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) =>
            link.external ?
            <a
              key={link.label}
              href="https://forum-foceen.eventmaker.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-heading text-primary-foreground/80 hover:text-primary-foreground transition-colors">

                  {link.label}
                </a> :

            <Link
              key={link.label}
              to={link.path}
              className={`text-sm font-heading transition-colors ${
              location.pathname === link.path ?
              "text-primary-foreground underline underline-offset-4 decoration-cyan" :
              "text-primary-foreground/80 hover:text-primary-foreground"}`
              }>

                  {link.label}
                </Link>

            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}>

            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-primary overflow-hidden">

            <div className="px-4 py-4 space-y-3">
              <div className="flex gap-4 pb-3 border-b border-primary-foreground/20">
                <button
                onClick={() => onModeChange("entreprise")}
                className={`text-sm font-heading ${
                mode === "entreprise" ? "text-cyan" : "text-primary-foreground/60"}`
                }>

                  Entreprise
                </button>
                <button
                onClick={() => onModeChange("visiteur")}
                className={`text-sm font-heading ${
                mode === "visiteur" ? "text-cyan" : "text-primary-foreground/60"}`
                }>

                  Visiteur
                </button>
              </div>
              {links.map((link) =>
            link.external ?
            <a
              key={link.label}
              href="https://forum-foceen.eventmaker.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-heading text-primary-foreground/80"
              onClick={() => setMobileOpen(false)}>

                    {link.label}
                  </a> :

            <Link
              key={link.label}
              to={link.path}
              className={`block text-sm font-heading ${
              location.pathname === link.path ?
              "text-cyan" :
              "text-primary-foreground/80"}`
              }
              onClick={() => setMobileOpen(false)}>

                    {link.label}
                  </Link>

            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

};

export default Navbar;