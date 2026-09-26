"use client";

import { useState } from "react";
import { navLinks, personal } from "@/lib/portfolio-data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white"
        >
          MK<span className="text-teal-400">.</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-teal-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={personal.resumePath} className="btn-primary hidden text-xs sm:inline-flex sm:px-4 sm:py-2 lg:text-sm">
          Resume
        </a>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-slate-300 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/5 bg-slate-950/95 px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 text-slate-300"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personal.resumePath}
                className="btn-primary mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
