import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  const skills = [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Python',
    'FastAPI',
    'MongoDB',
    'Tailwind CSS',
    'AWS',
    'Docker',
  ];

  return (
    <section id="about" className="relative py-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-9 w-9 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">About</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <p className="md:col-span-2 text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
            I’m Arjun, a product‑minded engineer who enjoys working across the stack — from polished interfaces to robust APIs and cloud infrastructure. I care deeply about code quality, accessibility, and creating experiences that feel fast and intuitive.
          </p>
          <div className="md:col-span-1">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-3">Core skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
