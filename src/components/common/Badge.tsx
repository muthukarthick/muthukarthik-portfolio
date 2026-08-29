import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'cyan' | 'success' | 'outline' | 'amber';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  icon,
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5 font-medium',
  };

  const variantStyles = {
    default:
      'bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-slate-600',
    primary:
      'bg-sky-500/10 text-sky-300 border border-sky-500/25 hover:border-sky-500/40',
    cyan:
      'bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 hover:border-cyan-500/40',
    success:
      'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25',
    amber:
      'bg-amber-500/10 text-amber-300 border border-amber-500/25',
    outline:
      'bg-transparent text-slate-400 border border-slate-700 hover:text-slate-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full transition-colors duration-150',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon && <span className="opacity-80">{icon}</span>}
      {children}
    </span>
  );
};
