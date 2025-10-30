import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[80vh] md:min-h-[90vh] lg:min-h-screen overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[36rem] rounded-full bg-gradient-to-r from-indigo-400/40 via-fuchsia-400/30 to-sky-400/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Open to exciting opportunities
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Hi, I’m Arjun Malgwa.
            <br className="hidden md:block" />
            I build modern, interactive web experiences.
          </h1>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg md:text-xl max-w-xl">
            Full‑stack engineer focused on crafting performant interfaces, thoughtful systems, and delightful user experiences. I love turning ideas into shipped products.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/arjunmalgwa/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2.5 text-sm font-medium shadow hover:opacity-90 transition"
            >
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
            >
              View work <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 h-[320px] md:h-[420px] lg:h-[560px] rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur border border-zinc-200 dark:border-zinc-800 overflow-hidden">
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
