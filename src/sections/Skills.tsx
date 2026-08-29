import React, { useState } from 'react';
import {
  Server,
  Layout,
  Workflow,
  Database,
  ShieldCheck,
  Terminal,
  Cloud,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react';
import { skillCategories, topTechnologies } from '../data/skills';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';
import { GlowCard } from '../components/common/GlowCard';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Workflow':
        return <Workflow className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4" />;
      case 'Cloud':
      default:
        return <Cloud className="w-4 h-4" />;
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative z-10">
      <Container>
        <SectionHeading
          badge="Expertise"
          title="Technical Skills & Technology Matrix"
          subtitle="A comprehensive overview of backend systems, frontend frameworks, database engines, APIs, and security practices."
        />

        {/* Top Flagship Technologies Showcase */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-850/90 to-slate-900/90 border border-sky-500/30 backdrop-blur-xl shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Core Production Stack
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {topTechnologies.map((tech, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-white border border-slate-700/80 hover:border-sky-400/60 transition-all duration-200 group"
              >
                <div className="font-bold text-sm text-white dark:text-white light:text-slate-900 group-hover:text-sky-400 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[11px] font-mono text-sky-400/90 mt-0.5">
                  {tech.level}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            All Disciplines ({skillCategories.length})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{getCategoryIcon(cat.icon)}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <GlowCard
              key={category.id}
              className="flex flex-col justify-between p-6 transition-all duration-300 hover:border-sky-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {category.skills.length} competencies
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills tags cloud */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => (
                    <Badge
                      key={sIdx}
                      variant="default"
                      size="sm"
                      className="bg-slate-800/80 hover:bg-slate-700/80 hover:text-sky-300 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1 text-emerald-400/90">
                  <CheckCircle2 className="w-3 h-3" />
                  Production Tested
                </span>
                <span>Modular Design</span>
              </div>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
};
