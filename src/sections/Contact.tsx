import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/common/Icons';
import confetti from 'canvas-confetti';
import { profile } from '../data/profile';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { GlowCard } from '../components/common/GlowCard';

/**
 * FEATURE TOGGLE:
 * Set SHOW_CONTACT_FORM to `true` whenever you want to re-enable the interactive form.
 * When `false`, the contact section displays an elegant center-aligned direct contact hub.
 */
const SHOW_CONTACT_FORM = false;

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Architecture & Full-Stack',
    message: '',
    botField: '', // Honeypot spam trap
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Architecture & Full-Stack',
    'Drupal 10/11 Development',
    'Laravel MVC Application',
    'REST API & CRM Integration',
    'Technical Team Leadership',
    'Other Engineering Consultation',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (formData.botField) {
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid work email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Please provide a message with at least 10 characters describing your inquiry.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#818cf8', '#34d399'],
        });
      } catch {
        // Safe fallback
      }
    }, 900);
  };

  const mailtoFallbackUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Inquiry from ${formData.name || 'Visitor'} - ${formData.projectType}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nProject Focus: ${formData.projectType}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative z-10">
      <Container>
        <SectionHeading
          badge="Contact"
          badgeIcon={<Mail className="w-3.5 h-3.5" />}
          title="Let's Build Something Great"
          subtitle="Ready to discuss solution architecture, enterprise Drupal/Laravel engineering, API integrations, or technical leadership? Get in touch."
        />

        {!SHOW_CONTACT_FORM ? (
          /* ========================================================
             CENTER-ALIGNED CONTACT DETAILS HUB (FORM HIDDEN)
             ======================================================== */
          <div className="max-w-2xl mx-auto space-y-6">
            <GlowCard className="p-6 sm:p-10 border-sky-500/30 text-center relative overflow-hidden">
              {/* Ambient backdrop glow */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/15 border border-sky-500/30 text-sky-400 flex items-center justify-center mx-auto shadow-lg shadow-sky-500/10">
                  <Mail className="w-7 h-7" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Get In Touch
                </h3>

                <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Whether you're looking for a Senior Full-Stack Architect, enterprise Drupal/Laravel development, or technical leadership, feel free to reach out directly.
                </p>

                {/* Direct Email Display & Copy Action */}
                <div className="pt-2 max-w-md mx-auto">
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-sky-500/30 shadow-xl flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 overflow-hidden text-left">
                      <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          Direct Email
                        </div>
                        <a
                          href={`mailto:${profile.email}`}
                          className="text-xs sm:text-sm font-bold text-white hover:text-sky-400 transition-colors truncate block"
                        >
                          {profile.email}
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      className="p-2 sm:p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700 shrink-0 touch-manipulation flex items-center gap-1.5 text-xs font-mono"
                      title="Copy Email Address"
                      aria-label="Copy Email"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 hidden sm:inline">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Direct Email Action Button */}
                <div className="pt-3">
                  <Button
                    variant="primary"
                    size="lg"
                    href={`mailto:${profile.email}?subject=Project%20Inquiry%20-%20Muthu%20Karthik`}
                    icon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto px-8"
                  >
                    Send an Email
                  </Button>
                </div>
              </div>
            </GlowCard>

            {/* Social Cards & Location (Center 2-Column Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-sky-500/40 text-slate-200 hover:text-sky-300 transition-all group shadow-md"
              >
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 group-hover:border-sky-500/30 text-sky-400 shrink-0">
                  <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                    LinkedIn Profile
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono truncate">
                    linkedin.com/in/mr-muthukarthick
                  </div>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-sky-500/40 text-slate-200 hover:text-white transition-all group shadow-md"
              >
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 group-hover:border-sky-500/30 text-slate-300 shrink-0">
                  <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                    GitHub Profile
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono truncate">
                    github.com/muthukarthick
                  </div>
                </div>
              </a>
            </div>

            {/* Location & Availability Banner */}
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center justify-around gap-3 text-xs text-slate-400 font-mono text-center">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Location: {profile.location}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-800" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Response Time: Typically within 24 hours</span>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================
             FULL 2-COLUMN LAYOUT WITH INTERACTIVE CONTACT FORM
             ======================================================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact & Availability (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                  Connect Directly
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  Whether you're planning a new digital platform, scaling an existing Drupal/Laravel system, or seeking a Senior Technical Lead, I'm always open to discussing new technical opportunities.
                </p>
              </div>

              {/* Email Contact Card with Instant Copy */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-sky-500/30 backdrop-blur-xl shadow-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] sm:text-[11px] font-mono text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900 hover:text-sky-400 transition-colors truncate block"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 sm:p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700 shrink-0 touch-manipulation"
                  title="Copy Email Address"
                  aria-label="Copy Email"
                >
                  {isCopied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Professional Links */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-slate-200 hover:text-sky-300 transition-all group touch-manipulation"
                >
                  <LinkedinIcon className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold truncate">LinkedIn</div>
                    <div className="text-[10px] text-slate-500 font-mono truncate">Connect profile</div>
                  </div>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-slate-200 hover:text-white transition-all group touch-manipulation"
                >
                  <GithubIcon className="w-5 h-5 text-slate-300 group-hover:scale-110 transition-transform shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold truncate">GitHub</div>
                    <div className="text-[10px] text-slate-500 font-mono truncate">Repositories</div>
                  </div>
                </a>
              </div>

              {/* Location & Timezone Details */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2.5 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Location: {profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Response Time: Typically within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <GlowCard className="p-4 sm:p-8 md:p-10 border-sky-500/30">
                {isSubmitted ? (
                  <div className="text-center py-8 sm:py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Ready / Dispatched!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <strong className="text-sky-400">{formData.name}</strong>. Your project inquiry has been captured.
                    </p>

                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Button
                        variant="primary"
                        size="sm"
                        href={mailtoFallbackUrl}
                        icon={<Mail className="w-4 h-4" />}
                        className="w-full sm:w-auto"
                      >
                        Open in Email App
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            company: '',
                            projectType: 'Architecture & Full-Stack',
                            message: '',
                            botField: '',
                          });
                        }}
                        className="w-full sm:w-auto"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot field (hidden from real users) */}
                    <input
                      type="text"
                      name="botField"
                      value={formData.botField}
                      onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Enterprise Ltd"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                          Project / Consultation Focus
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                        >
                          {projectTypes.map((type, idx) => (
                            <option key={idx} value={type} className="bg-slate-900 text-white">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Project Details & Requirements *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe your technical requirements, goals, timelines, or role specifications..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                        {errorMessage}
                      </div>
                    )}

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        isLoading={isSubmitting}
                        icon={<Send className="w-4 h-4" />}
                      >
                        Send Message
                      </Button>
                    </div>

                    <p className="text-[11px] text-center text-slate-500 font-mono">
                      Protected by client-side validation & spam protection.
                    </p>
                  </form>
                )}
              </GlowCard>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
