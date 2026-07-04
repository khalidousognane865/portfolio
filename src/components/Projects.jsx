import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiClock, FiCheckCircle } from "react-icons/fi";
import { projects } from "../data";

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card p-6 md:p-8 hover:border-accent/20 glow transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
        {/* Numéro de projet */}
        <span className="font-mono text-4xl font-bold text-white/5 group-hover:text-accent/10 transition-colors select-none">
          0{project.id}
        </span>

        {/* Status */}
        <span className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full ${
          project.status === "Terminé"
            ? "text-green-400 bg-green-400/10 border border-green-400/20"
            : "text-accent2 bg-accent2/10 border border-accent2/20"
        }`}>
          {project.status === "Terminé"
            ? <><FiCheckCircle /> Terminé</>
            : <><FiClock /> En cours</>
          }
        </span>
      </div>

      <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-accent transition-colors">
        {project.title}
      </h3>

      <p className="font-body text-muted text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/5 border border-accent/10 text-accent/70"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Liens */}
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors font-body"
        >
          <FiGithub /> GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-accent hover:text-white transition-colors font-body"
          >
            <FiExternalLink /> Démo live
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-accent text-sm mb-3">// projets</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Ce que j'ai <span className="gradient-text">construit</span>
          </h2>
          <p className="font-body text-muted mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Des projets end-to-end, de l'ingestion des données jusqu'au déploiement — 
            avec des données réelles, des outils professionnels et du code ouvert.
          </p>
        </motion.div>

        {/* Grille projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
