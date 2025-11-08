import React from 'react';
import { Cpu, Eye, Rocket, Workflow } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Agent Builder',
    desc: 'Compose tools, memory, and policies to craft autonomous, goal-driven agents.',
  },
  {
    icon: Eye,
    title: 'Visualize & Simulate',
    desc: 'Live inspect reasoning traces, voice interactions, and environment state.',
  },
  {
    icon: Rocket,
    title: 'One-click Deploy',
    desc: 'Ship agents to scalable endpoints with observability baked in.',
  },
  {
    icon: Workflow,
    title: 'Evaluate & Iterate',
    desc: 'Run experiments, compare runs, and improve with continuous feedback.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#0f1020] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Everything you need to ship agents</h2>
          <p className="mt-3 text-white/70">From idea to production with first-class evaluation tools.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur transition hover:bg-white/[0.08]">
              <div className="mb-4 inline-flex rounded-lg bg-indigo-600/20 p-2 text-indigo-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
