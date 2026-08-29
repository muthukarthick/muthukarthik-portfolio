import React, { useState, useEffect } from 'react';
import {
  Search,
  User,
  Cpu,
  Briefcase,
  Layers,
  FolderGit2,
  GraduationCap,
  Mail,
  FileDown,
  Moon,
  Sun,
  X,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { profile } from '../../data/profile';
import { skillCategories } from '../../data/skills';
import { experiences } from '../../data/experience';
import { projects } from '../../data/projects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  isDark: boolean;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onToggleTheme,
  isDark,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (hash: string) => {
    onClose();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Go to Hero & Profile', icon: <User className="w-4 h-4 text-sky-400" />, action: () => navigateTo('#hero'), category: 'Navigation' },
    { label: 'View About & Highlights', icon: <User className="w-4 h-4 text-sky-400" />, action: () => navigateTo('#about'), category: 'Navigation' },
    { label: 'Explore Technical Skills', icon: <Cpu className="w-4 h-4 text-blue-400" />, action: () => navigateTo('#skills'), category: 'Navigation' },
    { label: 'View Experience Timeline', icon: <Briefcase className="w-4 h-4 text-indigo-400" />, action: () => navigateTo('#experience'), category: 'Navigation' },
    { label: 'System Architecture Flow', icon: <Layers className="w-4 h-4 text-cyan-400" />, action: () => navigateTo('#architecture'), category: 'Navigation' },
    { label: 'Featured Projects & Domains', icon: <FolderGit2 className="w-4 h-4 text-emerald-400" />, action: () => navigateTo('#projects'), category: 'Navigation' },
    { label: 'Education & Certifications', icon: <GraduationCap className="w-4 h-4 text-amber-400" />, action: () => navigateTo('#education'), category: 'Navigation' },
    { label: 'Contact Muthu Karthik', icon: <Mail className="w-4 h-4 text-purple-400" />, action: () => navigateTo('#contact'), category: 'Navigation' },
    {
      label: isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme',
      icon: isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />,
      action: () => {
        onToggleTheme();
        onClose();
      },
      category: 'Preferences',
    },
    {
      label: 'Download Resume (PDF Format)',
      icon: <FileDown className="w-4 h-4 text-rose-400" />,
      action: () => {
        const link = document.createElement('a');
        link.href = '/docs/MuthuKarthik-CV.pdf';
        link.download = 'MuthuKarthik-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onClose();
      },
      category: 'Actions',
    },
    {
      label: 'Download Resume (Word DOCX Format)',
      icon: <FileDown className="w-4 h-4 text-blue-400" />,
      action: () => {
        const link = document.createElement('a');
        link.href = '/docs/MuthuKarthik-CV.docx';
        link.download = 'MuthuKarthik-CV.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onClose();
      },
      category: 'Actions',
    },
    {
      label: 'Open LinkedIn Profile',
      icon: <ExternalLink className="w-4 h-4 text-blue-400" />,
      action: () => {
        window.open(profile.linkedin, '_blank');
        onClose();
      },
      category: 'Socials',
    },
    {
      label: 'Open GitHub Profile',
      icon: <Code2 className="w-4 h-4 text-slate-300" />,
      action: () => {
        window.open(profile.github, '_blank');
        onClose();
      },
      category: 'Socials',
    },
  ];

  // Dynamic search across skills, experiences, projects
  const filteredNavItems = navItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const matchedSkills: { name: string; category: string }[] = [];
  if (query.trim().length > 1) {
    skillCategories.forEach((cat) => {
      cat.skills.forEach((sk) => {
        if (sk.toLowerCase().includes(query.toLowerCase())) {
          matchedSkills.push({ name: sk, category: cat.name });
        }
      });
    });
  }

  const matchedProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const matchedExperiences = experiences.filter(
    (e) =>
      e.company.toLowerCase().includes(query.toLowerCase()) ||
      e.role.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Palette Container */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/95 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3.5">
          <Search className="w-5 h-5 text-sky-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command, section, skill, or project... (ESC to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-800/40">
          {/* Quick Actions / Navigation */}
          {filteredNavItems.length > 0 && (
            <div className="py-2">
              <div className="px-3 py-1.5 text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Quick Commands & Navigation
              </div>
              <div className="space-y-1 mt-1">
                {filteredNavItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={item.action}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-slate-200 hover:bg-sky-500/10 hover:text-sky-300 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/50 group-hover:border-sky-500/30">
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-sky-400">
                      {item.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Skills */}
          {matchedSkills.length > 0 && (
            <div className="py-2">
              <div className="px-3 py-1.5 text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">
                Matching Technologies ({matchedSkills.length})
              </div>
              <div className="grid grid-cols-2 gap-1.5 mt-1 px-1">
                {matchedSkills.slice(0, 8).map((sk, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigateTo('#skills')}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="font-medium text-sky-300">{sk.name}</span>
                    <span className="text-[10px] text-slate-500">{sk.category}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Projects */}
          {matchedProjects.length > 0 && (
            <div className="py-2">
              <div className="px-3 py-1.5 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                Matching Projects ({matchedProjects.length})
              </div>
              <div className="space-y-1 mt-1">
                {matchedProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => navigateTo('#projects')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-800 text-xs text-slate-300 hover:text-white text-left"
                  >
                    <span className="font-medium">{p.title}</span>
                    <span className="text-slate-500">{p.domain}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Experiences */}
          {matchedExperiences.length > 0 && (
            <div className="py-2">
              <div className="px-3 py-1.5 text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
                Matching Experience ({matchedExperiences.length})
              </div>
              <div className="space-y-1 mt-1">
                {matchedExperiences.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => navigateTo('#experience')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-800 text-xs text-slate-300 hover:text-white text-left"
                  >
                    <div>
                      <div className="font-medium text-slate-200">{e.company}</div>
                      <div className="text-[11px] text-slate-400">{e.role}</div>
                    </div>
                    <span className="text-slate-500">{e.period}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredNavItems.length === 0 &&
            matchedSkills.length === 0 &&
            matchedProjects.length === 0 && (
              <div className="py-10 text-center text-sm text-slate-400">
                No commands or content found matching &quot;{query}&quot;
              </div>
            )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-slate-800 bg-slate-950/40 px-4 py-2.5 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300 font-mono">
                ESC
              </kbd>{' '}
              to close
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] text-slate-300 font-mono">
                Ctrl + K
              </kbd>{' '}
              to toggle
            </span>
          </div>
          <span className="text-sky-400 font-mono text-[11px]">Muthu Karthik Portfolio</span>
        </div>
      </div>
    </div>
  );
};
