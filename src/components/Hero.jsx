import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b0b12] via-[#0b0b12] to-[#0f1020]">
      {/* Subtle background gradient tint */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(120,119,198,0.18),rgba(147,51,234,0.12)_40%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
              <span className="mr-2 inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Build • Visualize • Deploy • Evaluate
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Platform for AI Agents
            </h1>
            <p className="max-w-xl text-lg text-white/80">
              Design autonomous voice and tool-using agents, observe behaviors in rich scenes, ship to production, and measure results—all in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <Rocket className="h-5 w-5" />
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* Spline scene */}
          <div className="relative h-[50vh] w-full md:h-[70vh]">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Enhance aura without blocking interactions */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),rgba(168,85,247,0.12)_35%,rgba(251,146,60,0.08)_55%,transparent_75%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
