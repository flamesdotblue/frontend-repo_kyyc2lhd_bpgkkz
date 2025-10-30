import React, { useEffect, useMemo, useRef, useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import { Mail, Linkedin, Github, Sun, Moon, Contrast, Turtle } from 'lucide-react';

function App() {
  const [dark, setDark] = useState(true);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const activeId = useRef('hero');
  const [current, setCurrent] = useState('hero');

  // Apply theme classes to html element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    root.classList.toggle('hc', highContrast);
    root.classList.toggle('rm', reducedMotion);
  }, [dark, highContrast, reducedMotion]);

  // Persist user preferences
  useEffect(() => {
    try {
      localStorage.setItem('pref-dark', JSON.stringify(dark));
      localStorage.setItem('pref-hc', JSON.stringify(highContrast));
      localStorage.setItem('pref-rm', JSON.stringify(reducedMotion));
    } catch {}
  }, [dark, highContrast, reducedMotion]);
  useEffect(() => {
    try {
      const d = JSON.parse(localStorage.getItem('pref-dark') || 'true');
      const hc = JSON.parse(localStorage.getItem('pref-hc') || 'false');
      const rm = JSON.parse(localStorage.getItem('pref-rm') || 'false');
      setDark(d);
      setHighContrast(hc);
      setReducedMotion(rm);
    } catch {}
  }, []);

  // IntersectionObserver for active nav highlighting
  useEffect(() => {
    const ids = ['projects', 'experience', 'skills', 'about', 'education', 'services', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId.current = entry.target.id;
            setCurrent(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const nav = useMemo(
    () => [
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'skills', label: 'Skills' },
      { id: 'about', label: 'About' },
      { id: 'education', label: 'Education' },
      { id: 'services', label: 'Services' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Skip link */}
      <a href="#projects" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-sky-600 focus:text-white focus:px-4 focus:py-2">Skip to content</a>

      <header className="sticky top-0 z-40 border-b border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-zinc-950/70">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight">Arjun Malgwa</a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-4 text-sm">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={
                  'rounded-md px-2 py-1.5 outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ' +
                  (current === n.id ? 'text-sky-600 dark:text-sky-400 font-medium' : 'hover:text-sky-600')
                }
                aria-current={current === n.id ? 'page' : undefined}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 px-2.5 py-1.5 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-pressed={dark}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Light' : 'Dark'}
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setHighContrast((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 px-2.5 py-1.5 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-pressed={highContrast}
              aria-label="Toggle high contrast"
              title="High contrast"
            >
              <Contrast className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setReducedMotion((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 px-2.5 py-1.5 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-pressed={reducedMotion}
              aria-label="Toggle reduced motion"
              title="Reduced motion"
            >
              <Turtle className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <main id="content" className="[&_*:focus-visible]:outline-none">
        <Hero />
        <Projects />
        <Experience />
        <Skills />

        {/* About */}
        <section id="about" aria-labelledby="about-title" className="py-20 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
          <div className="mx-auto max-w-7xl px-6">
            <h2 id="about-title" className="text-2xl md:text-3xl font-semibold mb-6">About</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <p className="md:col-span-2 text-zinc-700 dark:text-zinc-200 text-lg leading-relaxed">
                I’m a Data & AI Analyst who enjoys turning messy datasets into clear decisions. I build dashboards that surface what matters, automate reporting pipelines, and evaluate large language models so teams can trust AI-assisted workflows. My work spans e-commerce analytics, forecasting, and retrieval-augmented generation (RAG).
              </p>
              <div className="md:col-span-1">
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-3">Highlights</p>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-200 list-disc pl-5">
                    <li>MS Business Analytics, Drexel University (GPA 3.9)</li>
                    <li>Improved Amazon seller performance by 20% via KPI tracking and pricing optimization</li>
                    <li>Automated inventory reporting in Python, cutting manual effort by 40%</li>
                    <li>Supported a product reaching ~1,000 units/month at a 22% margin</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" aria-labelledby="edu-title" className="py-20 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
          <div className="mx-auto max-w-7xl px-6">
            <h2 id="edu-title" className="text-2xl md:text-3xl font-semibold mb-6">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
                <h3 className="font-semibold">Drexel University — LeBow College of Business</h3>
                <p className="text-zinc-600 dark:text-zinc-300">MS, Business Analytics (GPA 3.9)</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">Sept 2023 – Mar 2025</p>
              </article>
              <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
                <h3 className="font-semibold">Devi Ahilya Vishwavidyalaya</h3>
                <p className="text-zinc-600 dark:text-zinc-300">BCom, Business & Finance</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">2018 – 2020</p>
              </article>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" aria-labelledby="services-title" className="py-20 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 id="services-title" className="text-2xl md:text-3xl font-semibold">Services</h2>
              <a
                href="mailto:am5395@drexel.edu?subject=Work%20with%20Arjun%20on%20Analytics%20%2F%20AI"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
              >
                Discuss a project
              </a>
            </div>
            <p className="text-zinc-700 dark:text-zinc-200 mb-6 max-w-3xl">
              I help teams turn raw data into dashboards, forecasts, and AI insights they can use immediately.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-zinc-700 dark:text-zinc-200">
              {[
                'KPI dashboard design (Tableau/Power BI) that surfaces trends and bottlenecks',
                'Reporting & ETL automation in Python/SQL to reduce manual effort and errors',
                'Predictive modeling & time-series forecasting for demand, churn, and sales',
                'Marketplace/e-commerce analytics for pricing, listings, and replenishment',
                'EDA to uncover growth levers, conversion drivers, and retention patterns',
                'Feature engineering and model evaluation to improve accuracy & reliability',
                'Prompt engineering and LLM output optimization',
                'RAG prototyping for domain-specific retrieval and trustworthy AI answers',
                'Data visualization & storytelling for cross-functional stakeholders',
                'Performance monitoring for analytics/LLM systems',
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-title" className="py-20 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
          <div className="mx-auto max-w-7xl px-6">
            <h2 id="contact-title" className="text-2xl md:text-3xl font-semibold mb-6">Contact</h2>
            <p className="text-zinc-700 dark:text-zinc-200 max-w-2xl">
              Fastest way to reach me is email. Happy to discuss analytics roles, AI evaluation work, or marketplace projects. Open to Data Analyst, Product Analyst, BI Analyst, and AI Analyst roles.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:am5395@drexel.edu"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/arjunmalgwa/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/arjun-malgwa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Arjun Malgwa. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-sm">
            <a href="https://arjun-malgwa.github.io/" className="underline underline-offset-4">Portfolio</a>
            <span aria-hidden>•</span>
            <a href="mailto:am5395@drexel.edu" className="underline underline-offset-4">Email</a>
          </div>
        </div>
      </footer>

      {/* Print styles for resume-friendly printing */}
      <style>{`
        @media print {
          header, footer, nav, button { display: none !important; }
          main { padding: 0 !important; }
          section { break-inside: avoid; page-break-inside: avoid; }
          a { text-decoration: none; color: black; }
          .rounded-xl, .rounded-lg { border: 1px solid #ddd !important; box-shadow: none !important; }
          .bg-zinc-950, .bg-zinc-900, .dark\:bg-zinc-950, .dark\:bg-zinc-900, .dark { background: #fff !important; color: #000 !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
