import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  Database,
  Code2,
  TrendingUp,
  Clock,
  Sparkles,
  Lock,
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  onOpenResource: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenBooking,
  onOpenResource,
}) => {
  const t = translations[lang].hero;
  const [activeStepIndex, setActiveStepIndex] = useState(2);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/[0.06]">
      {/* Subtle architectural background accents */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center">
        <div className="w-[1100px] h-[550px] bg-gradient-to-b from-[#14B8A6]/[0.08] via-transparent to-transparent blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Slogan & Kicker Metadata - High Contrast Unboxed */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-slate-200 mb-4">
          <span className="text-teal-400 font-bold">Boost your processes, save license costs</span>
          <span className="text-teal-500 font-bold">·</span>
          <span className="text-slate-100 font-semibold">{t.kicker}</span>
        </div>

        {/* 5-Second Rule Headline */}
        <div className="max-w-4xl">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
            {t.headlineStart}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#0D9488]">
              {t.headlineAccent}
            </span>{' '}
            {t.headlineEnd}
          </h1>

          {/* Subheadline: Clear, outcome-focused B2B copy with high contrast */}
          <p className="mt-6 text-lg sm:text-xl text-slate-100 leading-relaxed max-w-3xl font-normal">
            {t.subheadline}
          </p>

          {/* CTAs with single-line labels */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#090D14] font-bold text-base px-6 py-3.5 transition-all shadow-lg shadow-emerald-500/15 hover:shadow-emerald-500/30 whitespace-nowrap cursor-pointer"
            >
              <span>{t.primaryCta}</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={onOpenResource}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/[0.08] hover:bg-white/[0.14] text-white font-semibold text-base px-5 py-3.5 transition-colors whitespace-nowrap cursor-pointer shadow-sm"
            >
              <span>{t.secondaryCta}</span>
            </button>
          </div>

          {/* Quiet Trust Markers (Unboxed high-contrast text) */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-100 font-medium">
            {t.trustMarkers.map((marker, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#14B8A6]" />
                <span>{marker}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Architectural Focal Carrier: Real-world B2B AI Workflow Transformation */}
        <div className="mt-14 rounded-2xl border border-white/15 bg-[#0E1524] p-6 lg:p-8 backdrop-blur-sm shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#14B8A6]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>
                  {lang === 'de'
                    ? 'PRAXIS-BEISPIEL · LIVE ARCHITEKTUR'
                    : 'LIVE ARCHITECTURE · REAL-WORLD EXAMPLE'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                {t.interactivePreview.title}
              </h3>
              <p className="text-sm text-slate-200 mt-0.5">
                {t.interactivePreview.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-100 font-mono font-medium">
              <Lock className="h-3.5 w-3.5 text-emerald-400" />
              <span>
                {lang === 'de'
                  ? 'Zero-Data-Retention · 100% DSGVO'
                  : 'Zero-Data-Retention · 100% GDPR Compliant'}
              </span>
            </div>
          </div>

          {/* Interactive 4-step pipeline preview */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.interactivePreview.steps.map((step, index) => {
              const isActive = activeStepIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStepIndex(index)}
                  className={`group relative rounded-xl p-5 border transition-all cursor-pointer ${
                    isActive
                      ? 'border-[#14B8A6] bg-[#14B8A6]/[0.12] shadow-lg shadow-[#14B8A6]/10'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-slate-200">
                      {step.tag}
                    </span>
                    {index === 0 && <FileSpreadsheet className="h-4 w-4 text-slate-200" />}
                    {index === 1 && <Database className="h-4 w-4 text-sky-400" />}
                    {index === 2 && <Code2 className="h-4 w-4 text-[#14B8A6]" />}
                    {index === 3 && <TrendingUp className="h-4 w-4 text-emerald-400" />}
                  </div>
                  <h4 className="mt-3 text-base font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-100 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-200">
                    <span className="font-mono">
                      {index === 0 && 'Format: PDF/CAD/ERP'}
                      {index === 1 && (lang === 'de' ? 'Vektor-Embeddings (Lokal)' : 'Vector Embeddings (Local)')}
                      {index === 2 && 'Vibe Coding via Cursor'}
                      {index === 3 && (lang === 'de' ? 'Ø -87% Bearbeitungszeit' : 'Avg -87% Cycle Time')}
                    </span>
                    {isActive && (
                      <span className="text-[#14B8A6] font-bold">
                        {lang === 'de' ? 'Aktiv' : 'Active'}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
