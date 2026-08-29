import React from 'react';
import {
  CheckCircle2,
  Layers,
  Sparkles,
  Users,
  Code2,
  ShieldAlert,
} from 'lucide-react';
import { profile } from '../data/profile';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { TechOrbit } from '../components/ui/TechOrbit';
import { GlowCard } from '../components/common/GlowCard';

export const About: React.FC = () => {
  const highlights = [
    {
      title: '10+ Years Experience',
      description: 'Hands-on full-stack development across mission-critical web applications.',
      icon: <Sparkles className="w-5 h-5 text-sky-400" />,
    },
    {
      title: 'Enterprise Applications',
      description: 'Architecting custom Drupal modules, Webforms, and Laravel MVC platforms.',
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: 'Full-Stack Delivery',
      description: 'Seamless synergy between high-speed REST APIs and modern React/TypeScript UIs.',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: 'Technical Leadership',
      description: 'Sprint planning, architectural code reviews, and mentoring development teams.',
      icon: <Users className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative z-10">
      <Container>
        <SectionHeading
          badge="About Me"
          title="Engineering Products. Solving Problems."
          subtitle="A senior engineering mindset bridging technical design with reliable production delivery."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative & Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                {profile.bio[0]}
              </p>
              <p>
                {profile.bio[1]}
              </p>
            </div>

            {/* Core Highlight Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <GlowCard
                  key={idx}
                  className="p-5 flex items-start gap-4 transition-all duration-200 hover:border-sky-500/40"
                >
                  <div className="p-2.5 rounded-xl bg-slate-800/90 dark:bg-slate-800/90 light:bg-slate-100 border border-slate-700/60 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </GlowCard>
              ))}
            </div>

            {/* Engineering Values List */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-sky-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>SOLID Principles</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>API-First Architecture</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Database Query Tuning</span>
              </div>
              <div className="flex items-center gap-1.5 text-indigo-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Role-Based Access (RBAC)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Technology Orbit Visual (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <TechOrbit />
            <div className="text-center mt-6">
              <div className="text-xs font-mono uppercase tracking-widest text-sky-400">
                Core Technology Ecosystem
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Interconnected backend, CMS, API & frontend disciplines
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
