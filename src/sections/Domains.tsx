import React from 'react';
import {
  Building2,
  ShoppingCart,
  HeartPulse,
  BadgeDollarSign,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { projectDomains } from '../data/domains';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlowCard } from '../components/common/GlowCard';

export const Domains: React.FC = () => {
  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-sky-400" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-emerald-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-cyan-400" />;
      case 'BadgeDollarSign':
      default:
        return <BadgeDollarSign className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="domains" className="py-20 md:py-28 relative z-10">
      <Container>
        <SectionHeading
          badge="Domain Solutions"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="Industry Domains & Enterprise Capabilities"
          subtitle="Versatile full-stack solutions tailored for high-concurrency e-commerce, complex CMS workflows, secure healthcare records, and precision financial calculations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectDomains.map((domain) => (
            <GlowCard
              key={domain.id}
              className="p-8 flex flex-col justify-between transition-all duration-300 hover:border-sky-500/40"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-2xl bg-slate-800/90 dark:bg-slate-800/90 light:bg-slate-100 border border-slate-700/80 shrink-0">
                    {getDomainIcon(domain.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
                      {domain.tagline}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 mt-6">
                  {domain.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Enterprise Grade</span>
                <span className="text-sky-400">API-First Delivery</span>
              </div>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
};
