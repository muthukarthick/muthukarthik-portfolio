import React from 'react';
import { X, Layers, CheckCircle2, Award, ExternalLink, Code2 } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl z-10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Layers className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400">
                {project.domain} • {project.category}
              </span>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Key Metrics Banner */}
          {project.metrics && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 text-sm font-medium">
              <Award className="w-5 h-5 shrink-0 text-sky-400" />
              <span>{project.metrics}</span>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Architecture Overview
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Core Highlights */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Engineering Capabilities Applied
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>API-first modular services & clean code standards</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>High concurrency database query optimization</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Granular RBAC security & token-based auth</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Fault-tolerant background queues & cron handlers</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Technology Stack
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
        <div className="flex items-center justify-between p-6 border-t border-slate-800 bg-slate-950/40">
          <div className="text-xs text-slate-500 font-mono">
            Full-Stack & Lead Architecture
          </div>
          <div className="flex items-center gap-3">
            {project.github && (
              <Button
                variant="secondary"
                size="sm"
                href={project.github}
                target="_blank"
                icon={<Code2 className="w-4 h-4" />}
              >
                GitHub
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="primary"
                size="sm"
                href={project.liveUrl}
                target="_blank"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                View Live
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
