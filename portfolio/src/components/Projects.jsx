import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import { projects } from "../data";

function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag) => (
        <span
          key={tag}
          className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/5 border border-accent/10 text-accent/70"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
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
  );
}

// Carte "projet phare" — plus grande, avec métriques chiffrées
function FeaturedProject({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="card p-8 md:p-10 glow border-accent/20 mb-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full text-accent2 bg-accent2/10 border border-accent2/20">
          <FiStar /> Projet phare — Mémoire de Master 2
        </span>
      </div>

      <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
        {project.title}
      </h3>

      <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
        {project.description}
      </p>

      {/* Métriques */}
      {project.metrics && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-accent/15 bg-accent/5 px-4 py-3 text-center">
              <p className="font-display font-bold text-xl text-accent">{m.value}</p>
              <p className="font-mono text-[11px] text-muted mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      <TagList tags={project.tags} />
      <ProjectLinks project={project} />
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card p-6 md:p-8 hover:border-accent/20 glow transition-all duration-300 group"
    >
      <span className="font-mono text-4xl font-bold text-white/5 group-hover:text-accent/10 transition-colors select-none block mb-3">
        0{project.id}
      </span>

      <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-accent transition-colors">
        {project.title}
      </h3>

      <p className="font-body text-muted text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      <TagList tags={project.tags} />
      <ProjectLinks project={project} />
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

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
            Des projets terminés, de bout en bout — de l'ingestion des données
            jusqu'au déploiement, avec du code ouvert.
          </p>
        </motion.div>

        {featured && <FeaturedProject project={featured} />}

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
