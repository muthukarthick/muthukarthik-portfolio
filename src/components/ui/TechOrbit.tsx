import React from 'react';

interface TechItem {
  name: string;
  category: string;
  color: string;
  iconText: string;
}

export const TechOrbit: React.FC = () => {
  const innerRing: TechItem[] = [
    { name: 'PHP', category: 'Core 10+ yrs', color: 'from-indigo-500 to-purple-600', iconText: 'PHP' },
    { name: 'Drupal', category: 'CMS Lead', color: 'from-sky-500 to-blue-600', iconText: 'DRP' },
    { name: 'Laravel', category: 'MVC Lead', color: 'from-red-500 to-rose-600', iconText: 'LRV' },
    { name: 'React', category: 'SPA Frontend', color: 'from-cyan-400 to-blue-500', iconText: 'RCT' },
  ];

  const outerRing: TechItem[] = [
    { name: 'REST APIs', category: 'API-First', color: 'from-emerald-400 to-teal-600', iconText: 'API' },
    { name: 'MySQL', category: 'RDBMS', color: 'from-amber-400 to-orange-500', iconText: 'SQL' },
    { name: 'TypeScript', category: 'Frontend', color: 'from-blue-400 to-indigo-600', iconText: 'TS' },
    { name: 'Stripe & PayPal', category: 'Payments', color: 'from-violet-400 to-purple-600', iconText: 'PAY' },
    { name: 'HubSpot & CRM', category: 'Integrations', color: 'from-orange-400 to-red-500', iconText: 'CRM' },
    { name: 'WordPress', category: 'CMS/Plugins', color: 'from-blue-600 to-sky-700', iconText: 'WP' },
  ];

  return (
    <div className="relative w-full max-w-[440px] aspect-square mx-auto flex items-center justify-center select-none scale-[0.75] xs:scale-[0.85] sm:scale-100 origin-center my-[-20px] sm:my-0">
      {/* Outer Orbit Track */}
      <div className="absolute inset-2 sm:inset-0 rounded-full border border-dashed border-slate-700/50 animate-[spin_60s_linear_infinite]" />
      
      {/* Inner Orbit Track */}
      <div className="absolute inset-16 sm:inset-16 rounded-full border border-dashed border-sky-500/20 animate-[spin_40s_linear_infinite_reverse]" />

      {/* Central Core Identity Hub */}
      <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-1 shadow-2xl shadow-sky-500/20 border border-sky-500/40 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 font-mono font-bold text-sm sm:text-base mb-1 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
          MK
        </div>
        <div className="text-xs font-bold text-white tracking-wide">Muthu Karthik</div>
        <div className="text-[9px] sm:text-[10px] font-mono text-sky-400 mt-0.5">Senior Full-Stack</div>
      </div>

      {/* Inner Ring Technology Badges (4 points) */}
      {innerRing.map((tech, i) => {
        const angle = (i * 360) / innerRing.length;
        const radius = 105; // px
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={tech.name}
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
            className="absolute z-20 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-lg shadow-black/40 backdrop-blur-md hover:scale-110 hover:border-sky-400/60 transition-all duration-200 cursor-default"
          >
            <span
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-gradient-to-br ${tech.color} text-white font-mono font-bold text-[8px] sm:text-[9px] flex items-center justify-center shadow-xs`}
            >
              {tech.iconText}
            </span>
            <div className="text-left">
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-100 leading-tight">{tech.name}</div>
            </div>
          </div>
        );
      })}

      {/* Outer Ring Technology Badges (6 points) */}
      {outerRing.map((tech, i) => {
        const angle = (i * 360) / outerRing.length + 30;
        const radius = 175; // px
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={tech.name}
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
            className="absolute z-20 flex items-center gap-1.5 px-2 py-0.5 sm:py-1 rounded-lg bg-slate-900/85 border border-slate-800 shadow-md backdrop-blur-sm hover:scale-105 hover:border-cyan-400/50 transition-all duration-200 cursor-default"
          >
            <span
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded bg-gradient-to-br ${tech.color} text-white font-mono font-bold text-[7px] sm:text-[8px] flex items-center justify-center`}
            >
              {tech.iconText}
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium text-slate-300">{tech.name}</span>
          </div>
        );
      })}
    </div>
  );
};
