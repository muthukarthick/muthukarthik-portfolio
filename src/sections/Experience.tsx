import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Building2,
} from 'lucide-react';
import { experiences } from '../data/experience';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(experiences[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative z-10">
      <Container>
        <SectionHeading
          badge="Career History"
          title="10+ Years of Engineering & Leadership"
          subtitle="Progressive journey through full-stack development, CMS solutions, system architecture, and technical team leadership."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-sky-500 via-blue-600 to-indigo-700 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              return (
                <div key={exp.id} className="relative sm:pl-20">
                  {/* Timeline Bullet Node */}
                  <div className="hidden sm:flex absolute left-6 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-slate-900 border-2 border-sky-400 items-center justify-center shadow-[0_0_12px_#38bdf8] z-10">
                    <div className="w-2 h-2 rounded-full bg-sky-400" />
                  </div>

                  {/* Experience Card */}
                  <div className="rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800/80 hover:border-sky-500/40 p-4 sm:p-8 backdrop-blur-xl shadow-xl transition-all duration-300">
                    {/* Header Bar */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                            {exp.type}
                          </span>
                          {index === 0 && (
                            <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                              Current Position
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 mt-2 break-words">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
                          <span className="flex items-center gap-1.5 font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">
                            <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-500 shrink-0" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-1 md:mt-0">
                        <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-800/80 text-[11px] sm:text-xs font-mono text-slate-300 border border-slate-700/60">
                          <Calendar className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="mt-4 text-xs sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Key Accomplishments & Highlights */}
                    <div className="mt-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          Key Architectural & Leadership Deliverables
                        </h4>
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="text-xs text-slate-400 hover:text-sky-300 flex items-center gap-1 font-mono transition-colors"
                        >
                          <span>{isExpanded ? 'Collapse' : `View All (${exp.highlights.length})`}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      <ul className="space-y-2.5">
                        {(isExpanded ? exp.highlights : exp.highlights.slice(0, 4)).map(
                          (highlight, hIdx) => (
                            <li
                              key={hIdx}
                              className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700"
                            >
                              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                              <span className="leading-normal">{highlight}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Technologies Employed */}
                    <div className="mt-6 pt-4 border-t border-slate-800/80">
                      <div className="text-[11px] font-mono text-slate-400 mb-2">
                        Technologies & Tools:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, tIdx) => (
                          <Badge key={tIdx} variant="default" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
