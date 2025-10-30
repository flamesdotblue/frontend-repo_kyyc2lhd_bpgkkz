import React from 'react';
import { Briefcase } from 'lucide-react';

const ITEMS = [
  {
    company: 'Letusto Inc.',
    role: 'Data Analyst Intern',
    location: 'New Jersey, United States',
    dates: 'Sept 2025 – Present',
    bullets: [
      'Analyzed Amazon marketplace trends to identify category expansion and pricing opportunities (~12% listing efficiency gain).',
      'Built KPI dashboards to track inventory health, shipments, and seller performance (–35% review time).',
      'Visualized e-commerce metrics to guide replenishment, ad spend, and product strategy decisions (–10% stockouts).',
    ],
    tags: ['Marketplace Analytics', 'KPI Dashboards', 'Forecasting', 'SQL', 'Python', 'Tableau'],
  },
  {
    company: 'Stacker Group',
    role: 'Data Analytics Intern',
    location: 'Charlottesville, VA',
    dates: 'June 2024 – Dec 2024',
    bullets: [
      'Designed and fine-tuned RAG models for renewable regulation queries (+27% citation reliability).',
      'Evaluated GPT, Gemini, and Llama3 for hallucination, bias, and citation accuracy (–22% hallucinations).',
      'Built prompt templates and evaluation frameworks to improve output quality and trust.',
    ],
    tags: ['RAG', 'Prompt Engineering', 'LLM Evaluation', 'Model Evaluation', 'Python'],
  },
  {
    company: 'Majitel Solutions Pvt. Ltd.',
    role: 'Business Analyst',
    location: 'Indore, India',
    dates: 'Jan 2021 – Jan 2023',
    bullets: [
      'Analyzed KPIs for 15+ Amazon seller accounts; lifted average revenue by ~20%.',
      'Automated inventory ETL/reporting with Python; reduced manual effort by ~40%.',
      'Built Tableau/Power BI dashboards to visualize sales velocity and competitor benchmarks (+18% listing optimization decisions).',
    ],
    tags: ['ETL Pipelines', 'Data Automation', 'KPI Dashboards', 'Tableau', 'Power BI', 'Python'],
  },
  {
    company: 'Sonil Selfcare Pvt. Ltd.',
    role: 'Business Analysis Intern',
    location: 'Mumbai, India',
    dates: 'Feb 2023 – June 2023',
    bullets: [
      'Built dashboards to visualize market gaps and pricing opportunities.',
      'Insights supported a product selling ~1,000 units/month at a 22% margin.',
      'Streamlined performance reporting for product and marketing decisions (–25% consolidation time).',
    ],
    tags: ['Data Visualization', 'EDA', 'Tableau', 'Pricing Analytics'],
  },
];

const Experience = () => {
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-20 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-9 w-9 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center">
            <Briefcase className="h-4 w-4" aria-hidden />
          </div>
          <h2 id="experience-title" className="text-2xl md:text-3xl font-semibold">Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ITEMS.map((exp) => (
            <article key={exp.company + exp.role} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-sm">
              <header className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">{exp.company} • {exp.location}</p>
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-300 whitespace-nowrap">{exp.dates}</span>
              </header>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-200">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
                {exp.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2.5 py-1 text-xs text-zinc-700 dark:text-zinc-200">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
