import React from 'react';
import { cn } from '../../utils/cn';

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className,
  glowEffect = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        'group relative rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80 p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/5',
        glowEffect && 'glow-box',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
