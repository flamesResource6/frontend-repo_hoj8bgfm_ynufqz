import React from 'react';

export default function CTA() {
  return (
    <section id="get-started" className="relative w-full bg-gradient-to-b from-[#0f1020] to-[#0b0b12] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Launch your first agent today</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Start with a template, connect tools, and watch your agent come to life. No complex setup required.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500">
            Create Agent
          </a>
          <a href="#features" className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
