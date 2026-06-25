import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { profile } from "../data";

const navLinks = [
  { label: "Accueil", to: "hero" },
  { label: "Compétences", to: "skills" },
  { label: "Projets", to: "projects" },
  { label: "Parcours", to: "experience" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth duration={500} className="cursor-pointer">
          <span className="font-display font-bold text-xl">
            <span className="gradient-text">&lt;</span>
            <span className="text-white">DE</span>
            <span className="gradient-text">/&gt;</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                className="font-body text-sm text-muted hover:text-accent transition-colors cursor-pointer"
                activeClass="!text-accent"
                spy
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={profile.cvUrl}
              download
              className="px-4 py-2 border border-accent text-accent text-sm font-display font-medium rounded-lg hover:bg-accent hover:text-primary transition-all duration-200"
            >
              CV ↓
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-white/5"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-70}
                    onClick={() => setMenuOpen(false)}
                    className="text-muted hover:text-accent transition-colors cursor-pointer block py-1 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={profile.cvUrl}
                  download
                  className="inline-block px-4 py-2 border border-accent text-accent text-sm font-display font-medium rounded-lg"
                >
                  Télécharger CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
