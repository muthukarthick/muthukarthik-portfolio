import React from 'react';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { educationList, certificationList } from '../data/education';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlowCard } from '../components/common/GlowCard';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative z-10">
      <Container>
        <SectionHeading
          badge="Credentials"
          badgeIcon={<GraduationCap className="w-3.5 h-3.5" />}
          title="Academic Degrees & Certifications"
          subtitle="Formal academic foundations in computer applications, distributed computing, algorithms, and verified industry skill rankings."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Degrees (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                Formal Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {educationList.map((edu) => (
                <GlowCard
                  key={edu.id}
                  className="p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-sky-500/40"
                >
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                        {edu.degree}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 w-fit">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-1.5 mb-3">
                      <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{edu.institution}, {edu.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

          {/* Certifications & Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                Industry Certifications & Rank
              </h3>
            </div>

            <div className="space-y-4">
              {certificationList.map((cert) => (
                <GlowCard
                  key={cert.id}
                  className="p-6 flex items-start gap-4 transition-all duration-300 hover:border-amber-500/40"
                >
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                      {cert.badgeText}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white dark:text-white light:text-slate-900 mt-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </GlowCard>
              ))}

              {/* Technical Verification Pill */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Verified track record in Core Java, PHP, OOP, and Relational Database Systems.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
