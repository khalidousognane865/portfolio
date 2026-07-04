import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name} — Construit avec{" "}
          <FiHeart className="inline text-accent" /> React + TailwindCSS
        </p>
        <div className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer"
            className="text-muted hover:text-accent transition-colors">
            <FiGithub size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"
            className="text-muted hover:text-accent transition-colors">
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
