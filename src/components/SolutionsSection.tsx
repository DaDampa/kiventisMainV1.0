import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import {
  Briefcase,
  ShieldCheck,
  Code2,
  Users,
  CheckCircle,
  Clock,
  ArrowRight,
  Sparkles,
  Server,
  Layers,
  FileCheck,
  Terminal,
  Shield,
  Cpu,
  Lock,
  Workflow,
  TrendingUp,
} from 'lucide-react';

interface SolutionsSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  lang,
  onOpenBooking,
}) => {
  const tPersonas = translations[lang].personas;
  const tSolutions = translations[lang].solutions;

  const [activeRole, setActiveRole] = useState<'management' | 'itCompliance' | 'departments'>('management');

  const currentPersona = tPersonas.data[
    activeRole === 'management' ? 'management' : activeRole === 'itCompliance' ? 'itCompliance' : 'departments'
  ];

  // Specific module mapping for Bento Grid
  const vibeModule = tSolutions.modules.find((m) => m.id === 'vibe-coding') || tSolutions.modules[1];
  const governanceModule = tSolutions.modules.find((m) => m.id === 'governance') || tSolutions.modules[2];
  const onPremiseModule = tSolutions.modules.find((m) => m.id === 'on-premise') || tSolutions.modules[3];
  const scanModule = tSolutions.modules.find((m) => m.id === 'scan') || tSolutions.modules[0];

  return (
    <section id="personas" className="py-20 border-b border-white/[0.06] bg-[#0A0E1A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= PERSONA SWITCHER FOR BUYING COMMITTEE ================= */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#14B8A6] mb-3">
            <Users className="h-4 w-4 shrink-0 text-[#14B8A6]" />
            <span>{tPersonas.kicker}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {tPersonas.heading}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {tPersonas.subheading}
          </p>
        </div>

        {/* Executive TL;DR Banner for Buying Committee */}
        <div className="mt-6 rounded-lg border border-[#14B8A6]/20 bg-[#14B8A6]/[0.04] px-4 py-3 flex items-center gap-3 max-w-3xl">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#14B8A6] border border-[#14B8A6]/30 px-2 py-0.5 rounded shrink-0">
            EXECUTIVE TL;DR
          </span>
          <p className="text-xs text-teal-100/90 font-medium leading-relaxed">
            {lang === 'de'
              ? 'Im B2B entscheiden 6 bis 10 Personen. Wir liefern jeder Rolle im Gremium die entscheidenden Argumente: EBITDA-Zahlen für die GF, Audit-Sicherheit für die IT und sofortige Entlastung für Fachkräfte.'
              : '6 to 10 stakeholders decide in B2B. We equip every role with undeniable evidence: EBITDA impact for CEOs, audit compliance for IT/Security, and instant relief for domain teams.'}
          </p>
        </div>

        {/* Functional Segmented Switcher Controls */}
        <div className="mt-8 flex flex-wrap gap-2 p-1.5 rounded-xl border border-white/[0.08] bg-[#0E1524] max-w-2xl">
          <button
            onClick={() => setActiveRole('management')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeRole === 'management'
                ? 'bg-[#14B8A6] text-[#090D14] shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
            }`}
          >
            <Briefcase className="h-4 w-4" />
            <span>{tPersonas.tabs.management}</span>
          </button>

          <button
            onClick={() => setActiveRole('itCompliance')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeRole === 'itCompliance'
                ? 'bg-[#14B8A6] text-[#090D14] shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
            }`}
          >
            <ShieldCheck className="h-4 w-4" />
            <span>{tPersonas.tabs.itCompliance}</span>
          </button>

          <button
            onClick={() => setActiveRole('departments')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeRole === 'departments'
                ? 'bg-[#14B8A6] text-[#090D14] shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
            }`}
          >
            <Code2 className="h-4 w-4" />
            <span>{tPersonas.tabs.departments}</span>
          </button>
        </div>

        {/* Active Persona Content Panel */}
        <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#0E1524]/70 p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono font-medium text-[#14B8A6]">
                {currentPersona.badge}
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white leading-tight">
                {currentPersona.headline}
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {currentPersona.subheadline}
              </p>

              <div className="mt-6 space-y-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  {lang === 'de' ? 'ENTSCHEIDUNGSRELEVANTE VORTEILE:' : 'KEY DECISION DRIVERS:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {currentPersona.keyBenefits.map((benefit, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start gap-2.5 p-3 rounded-lg border border-white/[0.05] bg-white/[0.02]"
                    >
                      <CheckCircle className="h-4 w-4 text-[#14B8A6] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote / Testimonial Box */}
              <div className="mt-6 p-4 rounded-xl border border-white/[0.06] bg-black/30">
                <p className="text-xs italic text-slate-300">
                  &ldquo;{currentPersona.quote.text}&rdquo;
                </p>
                <div className="mt-2 text-xs font-mono text-slate-400">
                  <span className="text-white font-medium">{currentPersona.quote.author}</span>
                  <span className="mx-1.5">·</span>
                  <span>{currentPersona.quote.role}</span>
                  <span className="mx-1.5">·</span>
                  <span className="text-[#14B8A6]">{currentPersona.quote.company}</span>
                </div>
              </div>
            </div>

            {/* Persona Primary Metric Card */}
            <div className="lg:col-span-4 rounded-xl border border-[#14B8A6]/20 bg-[#14B8A6]/[0.05] p-6 text-center">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                {currentPersona.primaryMetric.label}
              </span>
              <div className="mt-2 text-4xl sm:text-5xl font-extrabold text-white font-display">
                {currentPersona.primaryMetric.value}
              </div>
              <p className="mt-2 text-xs text-slate-300">
                {currentPersona.primaryMetric.detail}
              </p>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <button
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#090D14] font-semibold text-xs sm:text-sm px-4 py-3 transition-colors cursor-pointer shadow-lg shadow-emerald-500/10"
                >
                  <span>{translations[lang].nav.ctaButton}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-2 text-[11px] text-center text-slate-400">
                  {lang === 'de' ? 'Kostenfrei & unverbindlich · 30 Minuten' : 'No obligation · 30 minutes video call'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BENTO GRID: 4 DETAILED SERVICE MODULES ================= */}
        <div id="services" className="mt-24 pt-10 border-t border-white/[0.06]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#14B8A6] mb-3">
              <Layers className="h-4 w-4 shrink-0 text-[#14B8A6]" />
              <span>{tSolutions.kicker}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {tSolutions.heading}
            </h2>
            <p className="mt-3 text-base text-slate-300">
              {tSolutions.subheading}
            </p>
          </div>

          {/* Executive TL;DR for Modules */}
          <div className="mt-6 rounded-lg border border-[#14B8A6]/20 bg-[#14B8A6]/[0.04] px-4 py-3 flex items-center gap-3 max-w-3xl">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#14B8A6] border border-[#14B8A6]/30 px-2 py-0.5 rounded shrink-0">
              {lang === 'de' ? 'MODUL-ARCHITEKTUR' : 'MODULAR ARCHITECTURE'}
            </span>
            <p className="text-xs text-teal-100/90 font-medium leading-relaxed">
              {lang === 'de'
                ? 'Vom ersten Potenzial-Audit bis zur unternehmensweiten Citizen-Developer-Befähigung: Wir transformieren Ihre Fachabteilungen in autonome Macher – 100% DSGVO- und EU AI Act-konform.'
                : 'From initial opportunity scan to enterprise-wide citizen developer enablement: We turn domain specialists into autonomous builders – 100% GDPR and EU AI Act compliant.'}
            </p>
          </div>

          {/* Asymmetric Bento Grid (12-Column Responsive Layout) */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* ----------------- BENTO TILE 1: VIBE CODING FLAGSHIP (lg:col-span-7) ----------------- */}
            <div className="lg:col-span-7 rounded-2xl border border-white/[0.12] bg-[#0E1524]/90 p-7 sm:p-8 flex flex-col justify-between hover:border-[#14B8A6]/50 transition-all duration-300 shadow-xl group relative overflow-hidden">
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#14B8A6]/[0.04] rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-2xl font-black text-[#14B8A6]">
                      {vibeModule.number}
                    </span>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded bg-teal-500/10">
                      {lang === 'de' ? 'KERNPROGRAMM · CITIZEN DEVELOPER' : 'CORE PROGRAM · CITIZEN DEVELOPER'}
                    </span>
                  </div>
                  <Code2 className="h-6 w-6 text-[#14B8A6]" />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white group-hover:text-[#2DD4BF] transition-colors leading-snug">
                  {vibeModule.title}
                </h3>
                <p className="mt-1.5 text-xs font-medium text-slate-300">
                  {vibeModule.tagline}
                </p>

                {/* Artcraft-style Schematic Terminal & Workflow Simulation */}
                <div className="mt-5 rounded-xl border border-white/10 bg-[#070A12] p-4 font-mono text-xs shadow-inner">
                  <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/[0.08] text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 font-mono text-slate-300">kiventis-builder@enterprise:~$</span>
                    </div>
                    <span className="text-teal-400 font-semibold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                      {lang === 'de' ? 'LIVE PROMPT-TO-APP' : 'LIVE PROMPT-TO-APP'}
                    </span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="text-slate-300 flex items-start gap-2">
                      <span className="text-teal-400 shrink-0">{lang === 'de' ? '> Fachkraft:' : '> Domain Lead:'}</span>
                      <span className="text-white font-medium">
                        {lang === 'de'
                          ? '"Baue Web-Tool für ERP-Stücklistenprüfung & automatischen SAP OData-Abgleich."'
                          : '"Build internal web tool for BOM validation and automated SAP OData sync."'}
                      </span>
                    </div>
                    <div className="text-slate-400 pl-4 border-l border-teal-500/30 space-y-1">
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className="text-teal-400 font-bold">✓</span>
                        <span>
                          {lang === 'de' ? '14 fachspezifische Validierungsregeln autonom generiert' : '14 business rules autonomously verified'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className="text-teal-400 font-bold">✓</span>
                        <span>
                          {lang === 'de' ? 'React / TypeScript Benutzeroberfläche schlüsselfertig montiert' : 'Turnkey React/TypeScript UI connected to live sandbox'}
                        </span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        {lang === 'de' ? '● DEPLOYMENT BEREIT' : '● PRODUCTION READY'}
                      </span>
                      <span className="text-slate-400 font-mono">
                        {lang === 'de' ? 'Bauzeit: 4h (statt 6 Monate IT-Ticket)' : 'Build time: 4h (vs 6mo IT backlog)'}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {vibeModule.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-5">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    {lang === 'de' ? 'DELIVERABLES & PRAXIS-OUTPUT:' : 'DELIVERABLES & OUTPUT:'}
                  </span>
                  <ul className="mt-2.5 space-y-2">
                    {vibeModule.deliverables.slice(0, 4).map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="h-3.5 w-3.5 text-[#14B8A6] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Bar */}
              <div className="mt-7 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span>{vibeModule.duration}</span>
                  </div>
                  <div className="text-[#14B8A6] font-semibold">
                    {vibeModule.roiTimeline}
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#14B8A6] hover:bg-[#0D9488] text-[#090D14] text-xs font-bold px-5 py-2.5 transition-colors cursor-pointer whitespace-nowrap shadow-md shadow-[#14B8A6]/10"
                >
                  <span>{lang === 'de' ? 'Modul anfragen' : 'Inquire Module'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* ----------------- BENTO TILE 2: EU AI ACT COMPLIANCE (lg:col-span-5) ----------------- */}
            <div className="lg:col-span-5 rounded-2xl border border-white/[0.12] bg-[#0E1524]/90 p-7 sm:p-8 flex flex-col justify-between hover:border-emerald-400/50 transition-all duration-300 shadow-xl group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-2xl font-black text-emerald-400">
                      {governanceModule.number}
                    </span>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-500/10">
                      {lang === 'de' ? 'GESETZLICHE PFLICHT · ART. 4' : 'LEGAL MANDATE · ART. 4'}
                    </span>
                  </div>
                  <FileCheck className="h-6 w-6 text-emerald-400" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {governanceModule.title}
                </h3>
                <p className="mt-1.5 text-xs font-medium text-slate-300">
                  {governanceModule.tagline}
                </p>

                {/* Schematic Compliance Shield Mockup */}
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] text-[11px]">
                    <span className="text-emerald-400 font-bold">REGULATION (EU) 2024/1689</span>
                    <span className="text-slate-400 text-[10px]">ART. 4 ABS. 1</span>
                  </div>
                  <div className="mt-2.5 space-y-1.5 text-[11px]">
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{lang === 'de' ? 'Gesetzliche Schulungspflicht: Erfüllt' : 'Statutory Training Duty: Fulfilled'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{lang === 'de' ? 'Audit-Dokumentation für Prüfer' : 'Full audit documentation ready'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{lang === 'de' ? 'Haftungsschutz für GF & IT-Leitung' : 'Liability protection for leadership'}</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {governanceModule.description}
                </p>

                <div className="mt-5">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    {lang === 'de' ? 'KERNLEISTUNGEN:' : 'KEY DELIVERABLES:'}
                  </span>
                  <ul className="mt-2.5 space-y-2">
                    {governanceModule.deliverables.slice(0, 3).map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span>{governanceModule.duration}</span>
                  </div>
                  <div className="text-emerald-400 font-semibold">
                    {governanceModule.roiTimeline}
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-4 py-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>{lang === 'de' ? 'Zertifikat anfragen' : 'Request Audit Cert'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* ----------------- BENTO TILE 3: ON-PREMISE LLM STRATEGY (lg:col-span-5) ----------------- */}
            <div className="lg:col-span-5 rounded-2xl border border-white/[0.12] bg-[#0E1524]/90 p-7 sm:p-8 flex flex-col justify-between hover:border-sky-400/50 transition-all duration-300 shadow-xl group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-2xl font-black text-sky-400">
                      {onPremiseModule.number}
                    </span>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded bg-sky-500/10">
                      AIR-GAPPED · 0% US-CLOUD
                    </span>
                  </div>
                  <Server className="h-6 w-6 text-sky-400" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {onPremiseModule.title}
                </h3>
                <p className="mt-1.5 text-xs font-medium text-slate-300">
                  {onPremiseModule.tagline}
                </p>

                {/* Schematic Air-Gap Dataflow Mockup */}
                <div className="mt-4 rounded-xl border border-sky-500/30 bg-sky-500/[0.05] p-3.5 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-sky-500/20 text-[11px]">
                    <span className="text-sky-400 font-bold">AIR-GAP SOVEREIGNTY</span>
                    <span className="text-sky-300 text-[10px]">100% PRIVATE</span>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-[11px] gap-2">
                    <div className="rounded bg-sky-950/60 border border-sky-500/30 px-2 py-1 text-center shrink-0">
                      <span className="text-slate-300 block text-[9px]">
                        {lang === 'de' ? 'F&E DATEN' : 'R&D DATA'}
                      </span>
                      <span className="text-white font-bold text-[10px]">
                        {lang === 'de' ? 'Firmennetzwerk' : 'Corporate Intranet'}
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <span className="text-[9px] text-sky-300 font-semibold">🛡️ FIREWALL</span>
                      <div className="w-full h-0.5 bg-gradient-to-r from-sky-500 to-teal-400 my-1" />
                      <span className="text-[8px] text-slate-400">
                        {lang === 'de' ? '0 Byte US-Transfer' : '0 Byte External Transfer'}
                      </span>
                    </div>
                    <div className="rounded bg-sky-950/60 border border-sky-500/30 px-2 py-1 text-center shrink-0">
                      <span className="text-slate-300 block text-[9px]">
                        {lang === 'de' ? 'LOKALES LLM' : 'LOCAL LLM'}
                      </span>
                      <span className="text-white font-bold text-[10px]">Llama 3 / Mistral</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {onPremiseModule.description}
                </p>

                <div className="mt-5">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    {lang === 'de' ? 'KERNLEISTUNGEN:' : 'KEY DELIVERABLES:'}
                  </span>
                  <ul className="mt-2.5 space-y-2">
                    {onPremiseModule.deliverables.slice(0, 3).map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="h-3.5 w-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span>{onPremiseModule.duration}</span>
                  </div>
                  <div className="text-sky-400 font-semibold">
                    {onPremiseModule.roiTimeline}
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 text-xs font-semibold px-4 py-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>{lang === 'de' ? 'Architektur prüfen' : 'Audit Architecture'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* ----------------- BENTO TILE 4: OPPORTUNITY SCAN & QUICK WINS (lg:col-span-7) ----------------- */}
            <div className="lg:col-span-7 rounded-2xl border border-white/[0.12] bg-[#0E1524]/90 p-7 sm:p-8 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 shadow-xl group relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-2xl font-black text-amber-400">
                      {scanModule.number}
                    </span>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded bg-amber-500/10">
                      {lang === 'de' ? 'SCHNELLSTART · ROADMAP IN 7 TAGEN' : 'QUICK START · 7-DAY ROADMAP'}
                    </span>
                  </div>
                  <Sparkles className="h-6 w-6 text-amber-400" />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {scanModule.title}
                </h3>
                <p className="mt-1.5 text-xs font-medium text-slate-300">
                  {scanModule.tagline}
                </p>

                {/* Hard Metrics ROI Benchmark Matrix */}
                <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/[0.04] p-3.5 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-amber-500/20 text-[11px]">
                    <span className="text-amber-400 font-bold">
                      {lang === 'de' ? 'VERIFIZIERTE KMU-QUICK-WINS' : 'VERIFIED SME QUICK WINS'}
                    </span>
                    <span className="text-amber-300 text-[10px]">
                      {lang === 'de' ? 'AMORTISATION: 2–4 MONATE' : 'PAYBACK: 2–4 MONTHS'}
                    </span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px]">
                    <div className="rounded bg-black/40 border border-white/10 p-2.5 text-center">
                      <span className="text-amber-400 font-bold text-base block font-display">65%</span>
                      <span className="text-slate-300 text-[10px] block mt-0.5">
                        {lang === 'de' ? 'Rechnungsprüfung' : 'Invoice Audit'}
                      </span>
                    </div>
                    <div className="rounded bg-black/40 border border-white/10 p-2.5 text-center">
                      <span className="text-amber-400 font-bold text-base block font-display">78%</span>
                      <span className="text-slate-300 text-[10px] block mt-0.5">
                        {lang === 'de' ? 'BOM-Stücklisten' : 'BOM Engineering'}
                      </span>
                    </div>
                    <div className="rounded bg-black/40 border border-white/10 p-2.5 text-center">
                      <span className="text-amber-400 font-bold text-base block font-display">&gt;4x</span>
                      <span className="text-slate-300 text-[10px] block mt-0.5">
                        {lang === 'de' ? 'Angebotskalkulation' : 'RFQ Quoting Speed'}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {scanModule.description}
                </p>

                <div className="mt-5">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    {lang === 'de' ? 'DELIVERABLES & ROADMAP:' : 'DELIVERABLES & ROADMAP:'}
                  </span>
                  <ul className="mt-2.5 space-y-2">
                    {scanModule.deliverables.slice(0, 3).map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span>{scanModule.duration}</span>
                  </div>
                  <div className="text-amber-400 font-semibold">
                    {scanModule.roiTimeline}
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-semibold px-4 py-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>{lang === 'de' ? 'Quick-Scan anfragen' : 'Request Quick Scan'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
