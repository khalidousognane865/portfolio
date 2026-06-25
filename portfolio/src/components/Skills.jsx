import { motion } from "framer-motion";
import { skills } from "../data";

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-sm text-white/80">{name}</span>
        <span className="font-mono text-xs text-accent">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.7, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #38BDF8, #F59E0B)",
          }}
        />
      </div>
    </motion.div>
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
              <h3 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                {category.category}
              </h3>
              {category.items.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} index={si} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
