import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-[#0b0b12]/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          Flames • Blue
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#get-started" className="transition hover:text-white">Get Started</a>
          <a href="#" className="transition hover:text-white">Docs</a>
        </nav>
        <a href="#" className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">
          Sign In
        </a>
      </div>
    </header>
  );
}
