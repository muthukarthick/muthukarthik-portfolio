import React, { useState } from 'react';
import {
  X,
  FileText,
  FileDown,
  CheckCircle2,
  Eye,
  Sparkles,
  Download,
  FileCode2,
} from 'lucide-react';
import { Button } from '../common/Button';

interface DownloadCvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFullPreview?: () => void;
}

export const DownloadCvModal: React.FC<DownloadCvModalProps> = ({
  isOpen,
  onClose,
  onOpenFullPreview,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<'pdf' | 'docx'>('pdf');
  const [downloadedFormat, setDownloadedFormat] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = (format: 'pdf' | 'docx') => {
    setDownloadedFormat(format);
    const link = document.createElement('a');
    link.href = format === 'pdf' ? '/docs/MuthuKarthik-CV.pdf' : '/docs/MuthuKarthik-CV.docx';
    link.download = format === 'pdf' ? 'MuthuKarthik-CV.pdf' : 'MuthuKarthik-CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadedFormat(null);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-sky-500/30 bg-slate-900 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950/60 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-sky-500/15 border border-sky-500/30 text-sky-400">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold">
                Curriculum Vitae
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">Download Resume</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors touch-manipulation"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Choose your preferred document format to download the complete, up-to-date resume of <strong className="text-white">Muthu Karthik</strong> (10+ Years Experience, Senior Full-Stack & Tech Lead).
          </p>

          {/* Format Selection Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* PDF Option */}
            <div
              onClick={() => setSelectedFormat('pdf')}
              className={`relative cursor-pointer p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                selectedFormat === 'pdf'
                  ? 'bg-sky-500/10 border-sky-400 shadow-lg shadow-sky-500/10 ring-1 ring-sky-400/50'
                  : 'bg-slate-800/60 border-slate-700/70 hover:border-slate-600 hover:bg-slate-800/90'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    PDF FORMAT
                  </span>
                  {selectedFormat === 'pdf' && (
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  )}
                </div>

                <div className="font-bold text-sm text-white">
                  MuthuKarthik-CV.pdf
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  • Recommended for HR & Recruiters<br />
                  • ATS-Optimized & Fixed Layout<br />
                  • Universal Compatibility
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/60">
                <Button
                  variant={selectedFormat === 'pdf' ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full text-xs"
                  icon={<Download className="w-3.5 h-3.5" />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload('pdf');
                  }}
                >
                  {downloadedFormat === 'pdf' ? 'Downloaded!' : 'Download PDF'}
                </Button>
              </div>
            </div>

            {/* DOCX Option */}
            <div
              onClick={() => setSelectedFormat('docx')}
              className={`relative cursor-pointer p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                selectedFormat === 'docx'
                  ? 'bg-sky-500/10 border-sky-400 shadow-lg shadow-sky-500/10 ring-1 ring-sky-400/50'
                  : 'bg-slate-800/60 border-slate-700/70 hover:border-slate-600 hover:bg-slate-800/90'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    DOCX FORMAT
                  </span>
                  {selectedFormat === 'docx' && (
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  )}
                </div>

                <div className="font-bold text-sm text-white">
                  MuthuKarthik-CV.docx
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  • Microsoft Word Document<br />
                  • Fully Editable Text & Tables<br />
                  • Compatible with Agency Portals
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/60">
                <Button
                  variant={selectedFormat === 'docx' ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full text-xs"
                  icon={<Download className="w-3.5 h-3.5" />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload('docx');
                  }}
                >
                  {downloadedFormat === 'docx' ? 'Downloaded!' : 'Download DOCX'}
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Browser Preview Link */}
          {onOpenFullPreview && (
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenFullPreview();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span>Or Preview Interactive CV on Screen / Print</span>
              </button>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between p-4 border-t border-slate-800 bg-slate-950/40 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400">
            <Sparkles className="w-3 h-3" />
            Verified Clean Files
          </span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
