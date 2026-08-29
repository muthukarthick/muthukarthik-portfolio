import React, { useState } from 'react';
import {
  Monitor,
  Workflow,
  Cpu,
  Database,
  Layers,
  CheckCircle2,
  ArrowDown,
  Sparkles,
} from 'lucide-react';
import { architectureLayers } from '../../data/architecture';

export const ArchitectureDiagram: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<string>(architectureLayers[1].id);

  const activeLayerData =
    architectureLayers.find((l) => l.id === selectedLayer) || architectureLayers[0];

  const getLayerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-5 h-5" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Layers':
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Interactive Diagram Pipeline (Left 7 cols) */}
      <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
        {architectureLayers.map((layer, index) => {
          const isSelected = selectedLayer === layer.id;
          return (
            <React.Fragment key={layer.id}>
              <div
                onClick={() => setSelectedLayer(layer.id)}
                className={`relative group cursor-pointer p-3.5 sm:p-5 rounded-2xl border transition-all duration-300 touch-manipulation ${
                  isSelected
                    ? 'bg-slate-900/90 dark:bg-slate-900/90 light:bg-sky-50/80 border-sky-500 shadow-lg shadow-sky-500/10 scale-[1.01] sm:scale-[1.02]'
                    : 'bg-slate-900/40 dark:bg-slate-900/40 light:bg-white/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                {/* Active Indicator Glow Bar */}
                {isSelected && (
                  <div className="absolute left-0 top-2 bottom-2 sm:top-3 sm:bottom-3 w-1.5 rounded-r bg-gradient-to-b from-sky-400 to-blue-600 shadow-[0_0_12px_#38bdf8]" />
                )}

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3.5">
                    <div
                      className={`p-2 sm:p-2.5 rounded-xl shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                          : 'bg-slate-800/80 text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {getLayerIcon(layer.icon)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-sky-400/80">
                          {layer.layer}
                        </span>
                        <span className="text-xs text-slate-500">•</span>
                        <h4 className="text-xs sm:text-base font-bold text-white dark:text-white light:text-slate-900">
                          {layer.title}
                        </h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                        {layer.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5">
                    {layer.technologies.slice(0, 2).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {layer.technologies.length > 2 && (
                      <span className="text-[10px] font-mono text-slate-500">
                        +{layer.technologies.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Visual Flow Connector Arrow */}
              {index < architectureLayers.length - 1 && (
                <div className="flex justify-center my-0.5">
                  <ArrowDown className="w-4 h-4 text-sky-500/40 animate-pulse" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Layer Detail Deep Dive Card (Right 5 cols) */}
      <div className="lg:col-span-5">
        <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-sky-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Subtle accent glow in background */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                Layer Architecture Insight
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-sky-500/15 text-sky-300 border border-sky-500/30">
              {activeLayerData.layer}
            </span>
          </div>

          <div className="mt-5">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {activeLayerData.title}
            </h3>
            <div className="text-xs font-mono text-cyan-400 mt-1">
              {activeLayerData.subtitle}
            </div>

            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              {activeLayerData.description}
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-800">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Applied Technologies & Protocols
            </div>
            <div className="flex flex-wrap gap-2">
              {activeLayerData.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-xs font-medium text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Clean Architecture • SOLID</span>
            <span className="text-emerald-400">Production Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};
