import React from 'react';
import { FolderGit2, ExternalLink, Code2 } from 'lucide-react';

const CARDS = [
  {
    name: 'Customer Churn Prediction (Kaggle — #1 Ranked)',
    stack: ['R', 'XGBoost', 'EDA'],
    summary:
      'Built a predictive model to identify at-risk customers; tuned features & validation; ranked #1 among 24 teams.',
    links: [
      { label: 'Code', href: '#', type: 'code' },
      { label: 'Slides', href: '#', type: 'demo' },
    ],
    impact: ['Improved recall on high-risk cohort', 'Prioritized retention outreach'],
  },
  {
    name: 'LSTM Next-Word Prediction',
    stack: ['Python', 'TensorFlow/Keras', 'NLP'],
    summary:
      'UCI SMS dataset; compared CNN/RNN vs. LSTM to improve long-dependency handling.',
    links: [
      { label: 'Notebook', href: '#', type: 'code' },
      { label: 'Demo', href: '#', type: 'demo' },
    ],
  },
  {
    name: 'RAG Evaluation Framework',
    stack: ['Python', 'Prompt Engineering', 'Evaluation'],
    summary:
      'Prompt suites, hallucination scoring, and citation reliability tests for domain QA.',
    links: [
      { label: 'Write-up', href: '#', type: 'demo' },
      { label: 'Repo', href: '#', type: 'code' },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-20 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-9 w-9 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center">
            <FolderGit2 className="h-4 w-4" aria-hidden />
          </div>
          <h2 id="projects-title" className="text-2xl md:text-3xl font-semibold">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((p) => (
            <article key={p.name} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-sm">
              <header className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-300">{p.summary}</p>
                </div>
              </header>
              <div className="mt-4 flex flex-wrap gap-2" aria-label="Stack">
                {p.stack?.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2.5 py-1 text-xs text-zinc-700 dark:text-zinc-200">
                    {t}
                  </span>
                ))}
              </div>
              {p.impact && (
                <ul className="mt-4 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-200 space-y-1">
                  {p.impact.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              )}
              <div className="mt-5 flex gap-3">
                {p.links?.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    aria-label={`${l.label} for ${p.name}`}
                  >
                    {l.type === 'code' ? <Code2 className="h-4 w-4" aria-hidden /> : <ExternalLink className="h-4 w-4" aria-hidden />}
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
