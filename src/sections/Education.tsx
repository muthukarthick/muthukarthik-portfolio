import React from 'react';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
  Sparkles,
  School,
  Trophy,
  Star,
} from 'lucide-react';
import { educationList, certificationList } from '../data/education';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlowCard } from '../components/common/GlowCard';

interface RadialGaugeProps {
  percentage: number;
  gradientId: string;
  startColor: string;
  stopColor: string;
}

const RadialGauge: React.FC<RadialGaugeProps> = ({
  percentage,
  gradientId,
  startColor,
  stopColor,
}) => {
  const radius = 33;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-22 h-22 sm:w-26 sm:h-26 flex items-center justify-center shrink-0">
      <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 80 80">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={startColor} />
            <stop offset="100%" stopColor={stopColor} />
          </linearGradient>
        </defs>
        {/* Background track circle */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          className="text-slate-800/80 dark:text-slate-800/80 light:text-slate-200"
        />
        {/* Animated percentage progress arc */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      {/* Percentage Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-sm sm:text-base font-extrabold font-mono text-white tracking-tight">
          {percentage}%
        </span>
        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider -mt-0.5">
          Score
        </span>
      </div>
    </div>
  );
};

export const Education: React.FC = () => {
  const higherEducation = educationList.filter(
    (e) => e.id === 'mca' || e.id === 'bca'
  );
  const schooling = educationList.filter(
    (e) => e.id === 'hsc' || e.id === 'sslc'
  );

  return (
    <section id="education" className="py-20 md:py-28 relative z-10">
      <Container>
        <SectionHeading
          badge="Credentials"
          badgeIcon={<GraduationCap className="w-3.5 h-3.5" />}
          title="Academic Degrees & Verified Certifications"
          subtitle="Postgraduate and Undergraduate computer applications degrees with first-class honors, academic foundations, and professional technical certifications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Degrees with Unique Score Meters (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-400" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                  Higher Education &amp; Degree Honors
                </h3>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5" /> First Class Distinction
              </span>
            </div>

            {/* Featured PG & UG Degree Cards */}
            <div className="space-y-5">
              {higherEducation.map((edu) => {
                const isMCA = edu.id === 'mca';
                const gradStart = isMCA ? '#38bdf8' : '#2dd4bf';
                const gradStop = isMCA ? '#2563eb' : '#059669';

                return (
                  <GlowCard
                    key={edu.id}
                    className="p-5 sm:p-7 transition-all duration-300 hover:border-sky-500/50 group"
                  >
                    {/* Header: Level Pill & Year */}
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border ${
                            isMCA
                              ? 'bg-sky-500/15 text-sky-300 border-sky-500/30'
                              : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                          }`}
                        >
                          {edu.level}
                        </span>
                        <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                          • {edu.division}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60">
                        <Calendar className="w-3.5 h-3.5 text-sky-400" />
                        {edu.period}
                      </span>
                    </div>

                    {/* Degree & Score Gauge Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                      <div className="space-y-2 flex-1">
                        <h4 className="text-base sm:text-xl font-bold text-white group-hover:text-sky-400 transition-colors leading-snug">
                          {edu.degree}
                        </h4>

                        <div className="text-xs sm:text-sm font-medium text-slate-300 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>
                            {edu.institution}, {edu.location}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                          {edu.description}
                        </p>
                      </div>

                      {/* Right: Unique Radial Gauge & Score Pod */}
                      <div className="flex sm:flex-col items-center justify-center p-3 sm:p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 shadow-inner shrink-0 self-center sm:self-auto gap-3 sm:gap-2 w-full sm:w-auto">
                        <RadialGauge
                          percentage={edu.percentage || 60}
                          gradientId={`gauge-${edu.id}`}
                          startColor={gradStart}
                          stopColor={gradStop}
                        />

                        <div className="text-center space-y-1">
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                            <span>{edu.division}</span>
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">
                            Aggregate: {edu.grade}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Percentage Progress Bar */}
                    <div className="mt-5 pt-3 border-t border-slate-800/60">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
                        <span className="flex items-center gap-1 text-[11px]">
                          <Sparkles className="w-3 h-3 text-sky-400" /> Academic
                          Performance Metric
                        </span>
                        <span className="font-bold text-sky-300">
                          {edu.grade}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-850 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            isMCA
                              ? 'bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_8px_#38bdf8]'
                              : 'bg-gradient-to-r from-teal-400 to-emerald-500 shadow-[0_0_8px_#2dd4bf]'
                          }`}
                          style={{ width: `${edu.percentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Course Badges */}
                    {edu.courses && edu.courses.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {edu.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/50"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </GlowCard>
                );
              })}
            </div>

            {/* Schooling Foundations (HSC & SSLC) Unique Dual Cards */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3">
                <School className="w-4 h-4 text-purple-400" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                  Academic Foundations (Higher Secondary &amp; Secondary)
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {schooling.map((sch) => (
                  <GlowCard
                    key={sch.id}
                    className="p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:border-purple-500/40"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-purple-500/10 text-purple-300 border border-purple-500/20">
                          {sch.level}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {sch.period}
                        </span>
                      </div>

                      <h5 className="text-sm font-bold text-white mb-1">
                        {sch.degree}
                      </h5>
                      <div className="text-xs text-slate-400 mb-2 truncate">
                        {sch.institution}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80">
                      <div className="flex items-center justify-between text-xs font-mono mb-1">
                        <span className="text-slate-400">Score</span>
                        <span className="font-bold text-purple-300">
                          {sch.grade} ({sch.division})
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full"
                          style={{ width: `${sch.percentage}%` }}
                        />
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Industry Certifications & Verified Skills (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                Industry Certifications &amp; Technical Rank
              </h3>
            </div>

            <div className="space-y-4">
              {certificationList.map((cert) => (
                <GlowCard
                  key={cert.id}
                  className="p-5 flex items-start gap-4 transition-all duration-300 hover:border-amber-500/40 group"
                >
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                        {cert.badgeText}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Certified
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors mt-2">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-slate-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </GlowCard>
              ))}

              {/* Technical Verification Pod */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 font-mono font-semibold text-emerald-400 text-xs">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Academic &amp; Professional Verification</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Continuous technical learning through 10+ years of active software engineering, combining formal computer application foundations with modern enterprise system architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
