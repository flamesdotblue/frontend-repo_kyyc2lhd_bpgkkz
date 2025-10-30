import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Tech Company',
    period: '2022 — Present',
    points: [
      'Shipped modern web apps with React, TypeScript, and Node.js',
      'Led performance initiatives to improve Core Web Vitals',
      'Collaborated with product/design to deliver user‑centered features',
    ],
  },
  {
    title: 'Full‑stack Developer',
    company: 'Startup',
    period: '2020 — 2022',
    points: [
      'Designed and built end‑to‑end features across the stack',
      'Set up CI/CD pipelines and containerized services with Docker',
      'Introduced DX improvements that boosted team velocity',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-9 w-9 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
            <Briefcase className="h-4 w-4" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{exp.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{exp.company}</p>
                </div>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">{exp.period}</span>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-300">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
