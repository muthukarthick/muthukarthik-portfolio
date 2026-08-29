import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Ambient glowing radial orbs */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute top-[35%] -right-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] animate-float-slow" />
      <div className="absolute bottom-[20%] left-[-100px] w-[550px] h-[550px] bg-cyan-500/8 rounded-full blur-[150px]" />
      
      {/* Top subtle vignette gradient */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-slate-950/80 dark:to-slate-950/80 light:to-transparent" />
    </div>
  );
};
