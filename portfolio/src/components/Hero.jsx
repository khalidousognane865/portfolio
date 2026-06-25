import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiMapPin, FiDownload } from "react-icons/fi";
import { profile } from "../data";

// Animation variants
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
});

// Badges animés en arrière-plan
const FLOATING_WORDS = ["Python", "Airflow", "Spark", "SQL", "Docker", "MLflow", "FastAPI", "dbt", "Pandas", "Kafka"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary bg-grid-pattern"
    >
      {/* Orbes lumineux */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent2/10 rounded-full blur-3xl pointer-events-none" />

      {/* Mots flottants en fond */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {FLOATING_WORDS.map((word, i) => (
          <motion.span
            key={word}
            className="absolute font-mono text-xs text-accent/10 select-none"
            style={{
              left: `${8 + (i * 9) % 85}%`,
              top: `${10 + (i * 13) % 80}%`,
            }}
            animate={{ y: [0, -12, 0], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Badge disponibilité */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-mono">
            <span className={`w-2 h-2 rounded-full ${profile.available ? "bg-green-400 animate-pulse" : "bg-muted"}`} />
            {profile.available ? "Disponible pour des opportunités" : "Actuellement en poste"}
          </span>
        </motion.div>

        {/* Nom */}
        <motion.h1 {...fadeUp(0.1)} className="font-display font-bold text-5xl md:text-7xl mb-4 leading-tight">
          {profile.name.split(" ")[0]}{" "}
          <span className="gradient-text">{profile.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        {/* Titre */}
        <motion.div {...fadeUp(0.2)} className="mb-6">
          <span className="font-mono text-accent text-lg md:text-xl">
            &lt; {profile.title} /&gt;
          </span>
        </motion.div>

        {/* Sous-titre */}
        <motion.p {...fadeUp(0.3)} className="font-body text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
          {profile.subtitle.split("\n").map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </motion.p>

        {/* Localisation */}
        <motion.p {...fadeUp(0.35)} className="flex items-center justify-center gap-1.5 text-muted text-sm mb-10">
          <FiMapPin className="text-accent" />
          {profile.location}
        </motion.p>

        {/* Boutons */}
        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="projects"
            smooth
            duration={600}
            offset={-70}
            className="cursor-pointer px-8 py-3 bg-accent text-primary font-display font-semibold rounded-xl hover:bg-accent/90 glow-strong transition-all duration-200 text-sm"
          >
            Voir mes projets →
          </Link>
          <a
            href={profile.cvUrl}
            download
            className="px-8 py-3 border border-white/20 text-white font-display font-medium rounded-xl hover:border-accent hover:text-accent transition-all duration-200 text-sm flex items-center justify-center gap-2"
          >
            <FiDownload /> Télécharger mon CV
          </a>
        </motion.div>

        {/* Liens sociaux */}
        <motion.div {...fadeUp(0.5)} className="flex justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors text-2xl"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors text-2xl"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </motion.div>
      </div>

      {/* Flèche scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted/40 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
