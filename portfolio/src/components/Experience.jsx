import { motion } from "framer-motion";
import { parcours } from "../data";

export default function Experience() {
  // Séparation des données (Corrigé : sans espace dans le nom de la variable)
  const experiencesProfessionnelles = parcours.filter(item => item.type === "experience");
  const formationsAcademiques = parcours.filter(item => item.type === "formation");

  return (
    // Gardé id="experience" pour que tes liens de navigation continuent de fonctionner
    <section id="experience" className="py-28 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-accent text-sm mb-3">// parcours</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Mon <span className="gradient-text">chemin</span>
          </h2>
        </motion.div>

        {/* Grille à 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ================= COLONNE EXPÉRIENCES ================= */}
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-8 flex items-center gap-3">
              <span className="text-accent"></span> Expériences Professionnelles
            </h3>
            
            <div className="relative border-l border-accent/20 pl-6 space-y-10">
              {experiencesProfessionnelles.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-primary" />
                  
                  <div className="card p-6 bg-secondary/40 backdrop-blur-sm rounded-xl border border-white/5 hover:border-accent/30 transition-all">
                    <span className="font-mono text-xs text-accent mb-1 block">{item.year}</span>
                    <h4 className="font-display font-semibold text-white text-lg">{item.title}</h4>
                    <p className="font-body text-accent2 text-sm mb-2">{item.org}</p>
                    <p className="font-body text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= COLONNE FORMATIONS ================= */}
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-8 flex items-center gap-3">
              <span className="text-accent"></span> Formations & Diplômes
            </h3>
            
            <div className="relative border-l border-accent/20 pl-6 space-y-10">
              {formationsAcademiques.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-primary" />
                  
                  <div className="card p-6 bg-secondary/40 backdrop-blur-sm rounded-xl border border-white/5 hover:border-accent/30 transition-all">
                    <span className="font-mono text-xs text-accent mb-1 block">{item.year}</span>
                    <h4 className="font-display font-semibold text-white text-lg">{item.title}</h4>
                    <p className="font-body text-accent2 text-sm mb-2">{item.org}</p>
                    <p className="font-body text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}