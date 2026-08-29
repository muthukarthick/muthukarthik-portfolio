import React, { useState, useEffect } from 'react';
import { Menu, Sun, Moon, FileDown, Search, Terminal } from 'lucide-react';
import { Button } from '../common/Button';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCommandPalette: () => void;
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  isDark,
  onToggleTheme,
  onOpenCommandPalette,
  onResumeClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#architecture', label: 'Architecture' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Muthu Karthik Portfolio"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 p-0.5 shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 text-sm tracking-tighter">
                  MK
                </span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-sm tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-sky-400 transition-colors">
                Muthu Karthik
              </div>
              <div className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Senior Full-Stack & Tech Lead
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 px-3 py-1.5 rounded-full bg-slate-900/60 dark:bg-slate-900/60 light:bg-white/80 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-sky-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 light:hover:text-slate-800'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-sky-500/15 border border-sky-500/30 -z-10 animate-fade-in" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Command Palette Button (Ctrl+K) */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 text-xs font-medium transition-colors"
              title="Search and Commands (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-mono text-[11px] text-slate-400">Ctrl+K</span>
            </button>

            {/* Download CV CTA */}
            <Button
              variant="glow"
              size="sm"
              className="hidden sm:inline-flex"
              icon={<FileDown className="w-3.5 h-3.5" />}
              onClick={onResumeClick}
            >
              Download CV
            </Button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 lg:hidden rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={onToggleTheme}
        onOpenCommandPalette={onOpenCommandPalette}
        onResumeClick={onResumeClick}
      />
    </>
  );
};
