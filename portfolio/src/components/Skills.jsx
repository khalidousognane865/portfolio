import { motion } from "framer-motion";
import { skills } from "../data";

function SkillBadge({ name, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className="inline-block font-mono text-xs px-3 py-1.5 rounded-lg bg-accent/5 border border-accent/15 text-accent/90 hover:border-accent/40 hover:bg-accent/10 transition-colors"
    >
      {name}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-accent text-sm mb-3">// compétences</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Stack <span className="gradient-text">technique</span>
          </h2>
          <p className="font-body text-muted mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Les outils que j'utilise réellement dans mes projets — chacun est démontré
            par au moins une réalisation concrète ci-dessous.
          </p>
        </motion.div>

        {/* Grille des catégories */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              className="card p-6 glow hover:border-accent/20 transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((name, si) => (
                  <SkillBadge key={name} name={name} index={si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
