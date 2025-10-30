import React from 'react';
import { Sparkles } from 'lucide-react';

const TOP = ['Python', 'SQL', 'Tableau', 'Power BI', 'Predictive Modeling'];
const GROUPS = {
  analytics_engineering: ['ETL Pipelines', 'Data Automation', 'Feature Engineering', 'Git', 'Docker'],
  ml_ai: ['Machine Learning', 'NLP / LLM Evaluation', 'RAG', 'Prompt Engineering', 'TensorFlow', 'PyTorch'],
  analysis_visualization: ['EDA', 'Data Storytelling', 'Data Visualization', 'Time Series Forecasting'],
};

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-20 bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-9 w-9 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center">
            <Sparkles className="h-4 w-4" aria-hidden />
          </div>
          <h2 id="skills-title" className="text-2xl md:text-3xl font-semibold">Skills</h2>
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-3">Top skills</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {TOP.map((s) => (
              <span key={s} className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-200">
                {s}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(GROUPS).map(([group, items]) => (
              <div key={group}>
                <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-200 mb-2">
                  {group === 'analytics_engineering' && 'Analytics Engineering'}
                  {group === 'ml_ai' && 'ML & AI'}
                  {group === 'analysis_visualization' && 'Analysis & Visualization'}
                </h3>
                <ul className="space-y-1 text-sm text-zinc-700 dark:text-zinc-200">
                  {items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
