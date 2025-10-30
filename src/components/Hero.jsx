import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative w-full min-h-[80vh] md:min-h-[90vh] lg:min-h-screen overflow-hidden bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      {/* Skip link target */}
      <h1 id="hero-heading" className="sr-only">Arjun Malgwa — Data & AI Analyst</h1>

      {/* Soft gradient glow - allow Spline interaction */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[42rem] rounded-full bg-gradient-to-r from-sky-400/25 via-indigo-400/20 to-fuchsia-400/25 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Copy */}
        <div className="order-2 lg:order-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur">
            Philadelphia, PA • Open to opportunities
          </p>
          <p className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            I turn raw data into dashboards, forecasts, and reliable AI insights.
          </p>
          <p className="text-zinc-300 text-base md:text-lg max-w-xl">
            MS in Business Analytics (Drexel, GPA 3.9). I build KPI dashboards, automate ETL/reporting, and evaluate RAG/LLM systems for accuracy and trust.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-300" aria-label="Key capabilities">
            {[
              'KPI Dashboards • Tableau & Power BI',
              'ETL & Data Automation • Python & SQL',
              'Predictive Modeling & Time Series Forecasting',
              'RAG, Prompt Engineering & LLM Evaluation',
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 text-white px-4 py-2.5 text-sm font-medium shadow hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-zinc-900 transition"
            >
              View projects <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="mailto:am5395@drexel.edu?subject=Analytics%20Opportunity%20for%20Arjun"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-medium text-white/90 hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-zinc-900 transition"
            >
              Hire me for analytics <Mail className="h-4 w-4" aria-hidden />
            </a>
          </div>

          {/* Metrics */}
          <dl className="mt-4 grid grid-cols-3 gap-4 max-w-lg" aria-label="Impact metrics">
            {[
              { label: 'Amazon seller growth', value: '+20%' },
              { label: 'Manual reporting time', value: '-40%' },
              { label: 'Projects', value: '8+' },
            ].map((m) => (
              <div key={m.label} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3 text-center">
                <dt className="text-sm text-zinc-400">{m.label}</dt>
                <dd className="text-xl font-semibold text-white">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Spline */}
        <div className="order-1 lg:order-2 h-[320px] md:h-[440px] lg:h-[560px] rounded-2xl bg-zinc-900/40 backdrop-blur border border-zinc-800 overflow-hidden">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
