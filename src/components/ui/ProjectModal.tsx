import React from 'react';
import {
  X,
  Layers,
  CheckCircle2,
  Award,
  ExternalLink,
  Users,
  UserCheck,
  Building2,
} from 'lucide-react';
import { ProjectItem } from '../../types';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl z-10 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
              <Layers className="w-5 h-5" />
            </span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                  {project.domain} • {project.category}
                </span>
                {project.client && (
                  <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60">
                    {project.client}
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1 leading-snug">
                {project.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Live URL & Status Alert Banner */}
          {project.liveUrl && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-sky-950/40 border border-sky-500/30 text-sky-200">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <div>
                  <div className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                    {project.urlStatusText || 'Live Production Platform'}
                  </div>
                  <div className="text-sm font-mono font-medium text-white truncate max-w-[280px] sm:max-w-md">
                    {project.liveUrl}
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                className="w-full sm:w-auto text-xs font-semibold"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Visit Live Site
              </Button>
            </div>
          )}

          {/* Project Screenshot / Live Preview Window */}
          <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-lg">
            {/* Window Bar */}
            <div className="flex items-center justify-between px-3.5 py-2 bg-slate-900 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="px-3 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300">
                🔒 {project.displayUrl || project.liveUrl}
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">ONLINE</span>
            </div>

            {/* Screenshot Graphic */}
            <div className="relative aspect-[16/9] max-h-[340px] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={project.image || `/images/projects/${project.id}.svg`}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.src = `/images/projects/${project.id}.svg`;
                }}
              />
            </div>
          </div>

          {/* Key Leadership & Team Breakdown Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                <Users className="w-3.5 h-3.5 text-sky-400" />
                <span>Team Size</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white">
                {project.teamSize}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>My Specific Role</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-emerald-300">
                {project.role}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Client / Domain</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-200">
                {project.client || project.domain}
              </div>
            </div>
          </div>

          {/* Key Metrics Banner */}
          {project.metrics && (
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium">
              <Award className="w-5 h-5 shrink-0 text-amber-400" />
              <span>{project.metrics}</span>
            </div>
          )}

          {/* "My Part in this Project" - Core CV Highlights */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-sky-500/20">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold mb-3 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span>My Part in this Project &amp; Technical Contributions (From CV)</span>
            </h4>
            <div className="space-y-2.5">
              {project.myContributions.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Overview */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Architectural Overview &amp; Implementation Details
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Core Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Key Technical Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Technologies &amp; Libraries Applied
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <Badge key={idx} variant="primary" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-t border-slate-800 bg-slate-950/60 shrink-0">
          <div className="text-xs text-slate-500 font-mono hidden sm:block">
            Muthu Karthik • Senior Full-Stack Developer &amp; Team Lead
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {project.liveUrl && (
              <Button
                variant="primary"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Visit Live Site
              </Button>
            )}
            <Button variant="outline" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
