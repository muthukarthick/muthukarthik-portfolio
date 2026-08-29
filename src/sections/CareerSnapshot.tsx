import React from 'react';
import {
  Calendar,
  Award,
  Server,
  Code2,
  Boxes,
  Database,
  Workflow,
  Cloud,
} from 'lucide-react';
import { profile } from '../data/profile';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlowCard } from '../components/common/GlowCard';

export const CareerSnapshot: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-sky-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-indigo-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-purple-400" />;
      case 'Cloud':
      default:
        return <Cloud className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="snapshot" className="py-16 md:py-24 relative z-10">
      <Container>
        <SectionHeading
          badge="Snapshot"
          title="Career Metrics & Technical Focus"
          subtitle="A high-level summary of tenured full-stack capabilities, architecture leadership, and core production competencies."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profile.stats.map((stat, idx) => (
            <GlowCard
              key={idx}
              className="flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase tracking-wider">
                  {stat.label}
                </span>
                <div className="p-2 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300">
                  {getIcon(stat.icon)}
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-normal">
                  {stat.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
};
