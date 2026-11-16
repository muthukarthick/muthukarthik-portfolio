import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Award,
  Users,
  UserCheck,
  CheckCircle2,
} from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectItem } from '../types';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ProjectModal } from '../components/ui/ProjectModal';
import { GlowCard } from '../components/common/GlowCard';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = [
    { label: 'All', count: projects.length },
    { label: 'Healthcare', count: projects.filter((p) => p.category.includes('Healthcare')).length },
    { label: 'E-Commerce & Booking', count: projects.filter((p) => p.category.includes('E-Commerce')).length },
    { label: 'Enterprise CMS', count: projects.filter((p) => p.category.includes('Enterprise')).length },
    { label: 'Rental & Finance', count: projects.filter((p) => p.category.includes('Finance') || p.category.includes('Rental')).length },
  ];

  const filteredProjects =
    filterCategory === 'All'
      ? projects
      : projects.filter(
          (p) =>
            p.category.toLowerCase().includes(filterCategory.toLowerCase()) ||
            p.domain.toLowerCase().includes(filterCategory.toLowerCase())
        );

  return (
    <section id="projects" className="py-20 md:py-28 relative z-10">
      <Container>
        <SectionHeading
          badge="Real-World Projects"
          badgeIcon={<FolderGit2 className="w-3.5 h-3.5" />}
          title="Featured Engineering & Production Projects"
          subtitle="Real-world production systems from my CV: scalable CMS platforms, multi-language booking engines, healthcare portals, and CRM synchronization hubs."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setFilterCategory(cat.label)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                filterCategory === cat.label
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  filterCategory === cat.label
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <GlowCard
              key={project.id}
              className="flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-sky-500/50 hover:-translate-y-1 group"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Visual Browser Mockup & Screenshot */}
                <div className="relative border-b border-slate-800/80 bg-slate-950/70 overflow-hidden">
                  {/* Browser Window Chrome */}
                  <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 border-b border-slate-800/60 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>

                    {/* URL Bar */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-300 max-w-[180px] sm:max-w-[210px] truncate">
                      <span className="text-emerald-400 text-[9px]">🔒</span>
                      <span className="truncate">{project.displayUrl || project.liveUrl}</span>
                    </div>

                    {/* Live Link Button on Card Top Bar */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="Open live URL in new tab"
                        className="p-1 rounded text-slate-400 hover:text-sky-300 hover:bg-slate-800 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Screenshot Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img
                      src={project.image || `/images/projects/${project.id}.svg`}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to SVG if external image fails
                        e.currentTarget.src = `/images/projects/${project.id}.svg`;
                      }}
                    />

                    {/* Status Pill on Screenshot */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium backdrop-blur-md bg-slate-950/85 border border-emerald-500/40 text-emerald-300 shadow-lg">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span>{project.urlStatusText || 'Live Site'}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Category & Client */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {project.domain}
                    </span>
                    {project.client && (
                      <span className="text-[11px] font-mono text-slate-400 truncate">
                        {project.client}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Meta Pills: Team Size & My Role */}
                  <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-850/80 bg-slate-800/50 border border-slate-700/50 text-slate-300">
                      <Users className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="truncate font-medium">{project.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-850/80 bg-slate-800/50 border border-slate-700/50 text-slate-300">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate font-medium">{project.role}</span>
                    </div>
                  </div>

                  {/* My Part / Contributions Preview */}
                  <div className="mt-3.5 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1.5 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-sky-400" />
                      <span>My Part in this Project</span>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {project.myContributions && project.myContributions.length > 0
                        ? project.myContributions[0]
                        : project.description}
                    </p>
                  </div>

                  {/* Key Metric Pill */}
                  {project.metrics && (
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg">
                      <Award className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                      <span className="truncate">{project.metrics}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies & Actions Footer */}
              <div className="px-6 pb-6 pt-0">
                <div className="pt-3 border-t border-slate-800/80 mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <Badge key={idx} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono text-slate-500 self-center">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex-1 text-xs justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Details
                  </Button>

                  {project.liveUrl && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.liveUrl}
                      target="_blank"
                      className="text-xs px-3"
                      icon={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      Live URL
                    </Button>
                  )}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Project Modal with Complete Architectural Details */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </section>
  );
};
