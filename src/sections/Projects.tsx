import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Layers,
  ArrowUpRight,
  Code2,
  Sparkles,
  Award,
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

  const categories = ['All', 'Drupal', 'API / Integration', 'Full-Stack', 'Backend / Security', 'Database / Tools'];

  const filteredProjects =
    filterCategory === 'All'
      ? projects
      : projects.filter((p) => p.category.includes(filterCategory) || p.domain.includes(filterCategory));

  return (
    <section id="projects" className="py-20 md:py-28 relative z-10">
      <Container>
        <SectionHeading
          badge="Portfolio"
          badgeIcon={<FolderGit2 className="w-3.5 h-3.5" />}
          title="Featured Architectural Projects"
          subtitle="Representative projects demonstrating scalable CMS modules, payment gateways, CRM synchronization, and high-concurrency booking engines."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filterCategory === cat
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <GlowCard
              key={project.id}
              className="flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 hover:border-sky-500/40 hover:-translate-y-1 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {project.domain}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-sky-500 group-hover:text-white text-slate-400 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-sky-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metric Pill */}
                {project.metrics && (
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{project.metrics}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
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
            </GlowCard>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </section>
  );
};
