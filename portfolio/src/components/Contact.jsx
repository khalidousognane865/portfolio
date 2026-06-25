import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { profile } from "../data";

// ⚠️ Remplace ces valeurs après avoir créé ton compte sur emailjs.com (gratuit)
const EMAILJS_SERVICE_ID = "service_t948nyi";
const EMAILJS_TEMPLATE_ID = "template_xgdbdhs";
const EMAILJS_PUBLIC_KEY = "2ICq_BecEwtNaDjkB";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-surface/30">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-accent text-sm mb-3">// contact</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Travaillons <span className="gradient-text">ensemble</span>
          </h2>
          <p className="font-body text-muted mt-4 text-sm">
            Disponible pour des opportunités, collaborations ou simplement un échange.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Infos contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <FiMail />
              </div>
              <div>
                <p className="text-xs text-muted font-mono mb-0.5">Email</p>
                <a href={`mailto:${profile.email}`} className="text-white font-body text-sm hover:text-accent transition-colors">
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="card p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <FiMapPin />
              </div>
              <div>
                <p className="text-xs text-muted font-mono mb-0.5">Localisation</p>
                <p className="text-white font-body text-sm">{profile.location}</p>
              </div>
            </div>

            <div className="card p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <FiGithub />
              </div>
              <div>
                <p className="text-xs text-muted font-mono mb-0.5">GitHub</p>
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-white font-body text-sm hover:text-accent transition-colors">
                  {profile.github.replace("https://", "")}
                </a>
              </div>
            </div>

            <div className="card p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <FiLinkedin />
              </div>
              <div>
                <p className="text-xs text-muted font-mono mb-0.5">LinkedIn</p>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-white font-body text-sm hover:text-accent transition-colors">
                  {profile.linkedin.replace("https://", "")}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-8 space-y-5"
          >
            <div>
              <label className="block text-xs font-mono text-muted mb-2">Nom</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-body placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="votre@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-body placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Décrivez votre projet ou votre message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-body placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-accent text-primary font-display font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === "loading" ? "Envoi..." : <><FiSend /> Envoyer le message</>}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm font-mono text-center">
                ✓ Message envoyé avec succès !
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm font-mono text-center">
                ✗ Erreur — vérifie les clés EmailJS dans Contact.jsx
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
