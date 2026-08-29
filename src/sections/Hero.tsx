import React, { useState, useEffect } from 'react';
import {
  FileDown,
  ArrowRight,
  Mail,
  ShieldCheck,
  Award,
  Sparkles,
  Terminal,
  Code2,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/common/Icons';
import { profile } from '../data/profile';
import { Button } from '../components/common/Button';
import { Container } from '../components/common/Container';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for rotating roles
  useEffect(() => {
    const currentRole = profile.rotatingRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          // Pause at end of text
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % profile.rotatingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio, CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 z-10">
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-sky-500/30 text-xs font-mono text-slate-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sky-400 font-semibold">{profile.tagline}</span>
              <span className="text-slate-500">•</span>
              <span>Available for Senior Full-Stack Developer & Team Lead</span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.15] break-words">
                {profile.name}
              </h1>

              {/* Dynamic Animated Role */}
              <div className="min-h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-2xl lg:text-3xl font-bold font-mono gradient-text flex items-center flex-wrap justify-center lg:justify-start">
                  <span>{displayText}</span>
                  <span className="w-0.5 h-5 sm:h-7 bg-sky-400 ml-1 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-sm sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Building scalable, secure, and high-performance web applications with over{' '}
              <strong className="text-white dark:text-white light:text-slate-900 font-semibold">10+ years</strong> of experience
              across enterprise platforms, APIs, CMS ecosystems, and modern frontend architectures.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="#experience"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                View My Experience
              </Button>

              <Button
                variant="glow"
                size="lg"
                className="w-full sm:w-auto"
                icon={<FileDown className="w-4 h-4" />}
                onClick={onResumeClick}
              >
                Download CV
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                className="w-full sm:w-auto"
                icon={<Mail className="w-4 h-4" />}
              >
                Let's Talk
              </Button>
            </div>

            {/* Social Links & Trust Badges */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border border-slate-800 transition-all hover:scale-110 shadow-xs touch-manipulation"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all hover:scale-110 shadow-xs touch-manipulation"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="p-3 sm:p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border border-slate-800 transition-all hover:scale-110 shadow-xs touch-manipulation"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-5 w-px bg-slate-800 hidden sm:block" />

              {/* Quick Tech Highlights */}
              <div className="text-xs font-mono text-slate-400 flex items-center gap-2 text-center sm:text-left">
                <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="break-all sm:break-normal">PHP • Drupal • Laravel • React • APIs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Profile Card / Tech Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center z-10 w-full px-2 sm:px-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer Glowing Gradient Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-400 opacity-30 blur-xl animate-pulse-glow" />

              {/* Portrait Card */}
              <div className="relative rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-sky-500/30 p-3 sm:p-4 shadow-2xl backdrop-blur-xl animate-float-slow">
                {/* Visual Avatar / Portrait Card */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.8] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 flex flex-col justify-end p-4 sm:p-5 border border-slate-800 group">
                  {/* Real Profile Image */}
                  <img
                    src={profile.avatar || '/images/profile.png'}
                    alt={profile.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Gradient overlay on portrait */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                  <div className="relative z-10 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold drop-shadow-sm">
                        Senior Full-Stack Developer
                      </span>
                    </div>

                    <div className="font-bold text-xl sm:text-2xl text-white drop-shadow-md">
                      {profile.name}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px] sm:text-[11px] font-mono text-slate-300">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        10+ Years Exp
                      </span>
                      <span className="flex items-center gap-1 text-sky-300">
                        <Award className="w-3.5 h-3.5" />
                        Team Lead
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Highlights */}
                <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/95 border border-sky-500/40 shadow-xl backdrop-blur-md flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  <div className="text-left">
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono">Core Focus</div>
                    <div className="text-[11px] sm:text-xs font-bold text-white">Drupal & Laravel</div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/95 border border-sky-500/40 shadow-xl backdrop-blur-md flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <div className="text-left">
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono">Status</div>
                    <div className="text-[11px] sm:text-xs font-bold text-emerald-400">Senior Software Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
