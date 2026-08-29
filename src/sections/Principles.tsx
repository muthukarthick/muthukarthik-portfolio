import React from 'react';
import {
  Network,
  Boxes,
  Database,
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { engineeringPrinciples } from '../data/principles';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlowCard } from '../components/common/GlowCard';

export const Principles: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-5 h-5 text-sky-400" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="principles" className="py-20 md:py-28 relative z-10">
      <Container>
        <SectionHeading
          badge="Philosophy"
          title="Core Engineering Principles"
          subtitle="Strict adherence to architectural disciplines, clean software craftsmanship, and scalable system engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((principle) => (
            <GlowCard
              key={principle.id}
              className="p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-sky-500/40"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/90 dark:bg-slate-800/90 light:bg-slate-100 border border-slate-700/80">
                    {getIcon(principle.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                      {principle.title}
                    </h3>
                    <div className="text-[11px] font-mono text-sky-400">
                      {principle.subtitle}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                  {principle.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-800/60">
                  {principle.points.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Standards Compliant</span>
                <span className="text-emerald-400">Enterprise Tested</span>
              </div>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
};
