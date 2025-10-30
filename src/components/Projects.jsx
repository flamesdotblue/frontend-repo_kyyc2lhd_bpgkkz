import React from 'react';
import { FolderGit2, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Playground',
    description:
      'A playful WebGL/Spline experience with smooth controls, dynamic lighting, and performance‑aware rendering.',
    tags: ['React', 'Spline', 'WebGL'],
    link: '#',
  },
  {
    title: 'AI‑Powered Portfolio',
    description:
      'Personal site with AI‑generated case studies, semantic search, and automated content updates.',
    tags: ['Next.js', 'OpenAI', 'Edge'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description:
      'Streaming analytics with live charts, role‑based access, and optimistic UI.',
    tags: ['TypeScript', 'WebSockets', 'Postgres'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-9 w-9 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
            <FolderGit2 className="h-4 w-4" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              className="group rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 hover:border-indigo-300 dark:hover:border-indigo-700 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{p.title}</h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-300">{p.description}</p>
                </div>
                <div className="h-9 w-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2.5 py-1 text-xs text-zinc-700 dark:text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
