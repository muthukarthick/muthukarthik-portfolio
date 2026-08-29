import { X, Printer, FileDown, CheckCircle2, Award, Mail, Phone, MapPin } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../common/Icons';
import { profile } from '../../data/profile';
import { experiences } from '../../data/experience';
import { skillCategories } from '../../data/skills';
import { educationList, certificationList } from '../../data/education';
import { Button } from '../common/Button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl z-10 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Actions Bar */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/80 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-mono font-bold text-xs">
              CV
            </span>
            <span className="font-bold text-sm text-white">Muthu Karthik — Curriculum Vitae</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              icon={<Printer className="w-4 h-4" />}
              onClick={handlePrint}
            >
              Print
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon={<FileDown className="w-4 h-4" />}
              href="/docs/MuthuKarthik-CV.docx"
              download="MuthuKarthik-CV.docx"
            >
              Word (.DOCX)
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<FileDown className="w-4 h-4" />}
              href="/docs/MuthuKarthik-CV.pdf"
              download="MuthuKarthik-CV.pdf"
            >
              Download PDF
            </Button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-950 text-slate-200 space-y-8 font-sans print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight print:text-black">
                {profile.name}
              </h1>
              <div className="text-sky-400 font-medium text-lg mt-1 print:text-blue-700">
                {profile.role} (10+ Years Experience)
              </div>
              <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed print:text-slate-700">
                {profile.bio[0]}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-300 font-mono print:text-slate-800">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {profile.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  {profile.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                  linkedin.com/in/mr-muthukarthick
                </span>
                <span className="flex items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-sky-400" />
                  github.com/muthukarthick
                </span>
              </div>
            </div>

            {/* Profile photo thumbnail */}
            <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-sky-500/40 shadow-xl shadow-sky-500/10">
              <img
                src={profile.avatar || '/images/profile.png'}
                alt={profile.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Technical Competencies Matrix */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-sky-400 mb-3 border-b border-slate-800/80 pb-1.5 print:text-blue-800 print:border-slate-300">
              Technical Competencies & Ecosystem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {skillCategories.slice(0, 6).map((cat) => (
                <div key={cat.id} className="p-3 rounded-lg bg-slate-900/70 border border-slate-800/80 print:bg-slate-50 print:border-slate-300">
                  <div className="font-bold text-slate-200 print:text-black mb-1">{cat.name}</div>
                  <div className="text-slate-400 print:text-slate-700 leading-relaxed font-mono text-[11px]">
                    {cat.skills.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-sky-400 mb-4 border-b border-slate-800/80 pb-1.5 print:text-blue-800 print:border-slate-300">
              Professional Work Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white print:text-black">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-semibold text-sky-400 print:text-blue-700">
                        {exp.company} — {exp.location}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-slate-400 print:text-slate-600 mt-1 sm:mt-0">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1 mt-2 pl-4 list-disc text-xs text-slate-300 print:text-slate-800">
                    {exp.highlights.slice(0, 5).map((hl, hIdx) => (
                      <li key={hIdx}>{hl}</li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400 print:bg-slate-100 print:text-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800 print:border-slate-300">
            <div>
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-sky-400 mb-3 print:text-blue-800">
                Education
              </h2>
              <div className="space-y-3 text-xs">
                {educationList.map((edu) => (
                  <div key={edu.id}>
                    <div className="font-bold text-slate-200 print:text-black">{edu.degree}</div>
                    <div className="text-slate-400 print:text-slate-700">{edu.institution}</div>
                    <div className="text-[11px] font-mono text-sky-400/80">{edu.period} • {edu.location}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-sky-400 mb-3 print:text-blue-800">
                Certifications
              </h2>
              <div className="space-y-2 text-xs">
                {certificationList.map((cert) => (
                  <div key={cert.id} className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-200 print:text-black">{cert.title}</div>
                      <div className="text-[11px] text-slate-400">{cert.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
