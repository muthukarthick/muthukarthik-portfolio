import { ArrowUp, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/common/Icons';
import { profile } from '../data/profile';
import { Container } from '../components/common/Container';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl py-12 md:py-16 text-slate-400 text-xs">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800/60">
          {/* Brand Left (6 cols) */}
          <div className="md:col-span-6 space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-mono font-bold text-xs">
                MK
              </span>
              <span className="font-bold text-base text-white tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm mx-auto md:mx-0">
              Senior Full-Stack Developer & Technical Lead. Building scalable, secure, and resilient digital architectures.
            </p>
          </div>

          {/* Quick Nav Middle (3 cols) */}
          <div className="md:col-span-3 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-xs">
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
            <a href="#architecture" className="hover:text-sky-400 transition-colors">Architecture</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top (3 cols) */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-sky-500/20 text-slate-300 hover:text-sky-400 border border-slate-800 hover:border-sky-500/40 transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 text-center text-[11px] font-mono text-slate-500">
          © {new Date().getFullYear()} Muthu Karthik. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
