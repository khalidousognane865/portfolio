import { motion } from "framer-motion";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-accent text-sm mb-3">// parcours</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Mon <span className="gradient-text">chemin</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex gap-8 pl-12"
              >
                {/* Point */}
                <div className="absolute left-0 w-8 h-8 rounded-full border-2 border-accent bg-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                {/* Contenu */}
                <div className="card p-6 flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="font-mono text-xs text-accent">{item.year}</span>
                    {item.type && (
                      <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
                        item.type === "Formation"
                          ? "text-accent border-accent/30 bg-accent/5"
                          : "text-accent2 border-accent2/30 bg-accent2/5"
                      }`}>
                        {item.type}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-1">{item.title}</h3>
                  <p className="font-body text-accent2 text-sm mb-2">{item.org}</p>
                  <p className="font-body text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
