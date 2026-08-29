import React from 'react';
import { X, FileDown, Sun, Moon, Search } from 'lucide-react';
import { Button } from '../common/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
  activeSection: string;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCommandPalette: () => void;
  onResumeClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  activeSection,
  isDark,
  onToggleTheme,
  onOpenCommandPalette,
  onResumeClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Menu Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center font-mono font-bold text-sky-400">
                MK
              </span>
              <span className="font-semibold text-white">Muthu Karthik</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search & Palette Button */}
          <button
            onClick={() => {
              onClose();
              onOpenCommandPalette();
            }}
            className="w-full mt-4 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-sky-400" />
              <span>Search & Commands</span>
            </div>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-slate-400 font-mono">
              Ctrl+K
            </kbd>
          </button>

          {/* Nav Links */}
          <nav className="mt-6 flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-slate-800 space-y-3">
          <Button
            variant="primary"
            size="md"
            className="w-full"
            icon={<FileDown className="w-4 h-4" />}
            onClick={() => {
              onClose();
              onResumeClick();
            }}
          >
            Download CV / Resume
          </Button>
        </div>
      </div>
    </div>
  );
};
