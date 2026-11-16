import { heroIntro, personal } from "@/lib/portfolio-data";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
          <div className="max-w-3xl">
            <Reveal delay={0.1}>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-300">
                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                {personal.location}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {personal.name}
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-4 text-lg font-medium leading-relaxed text-indigo-200/90 sm:text-xl">
                {personal.title}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
                {heroIntro}
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href="#project" className="btn-primary">
                  View Project
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href={personal.resumePath} download className="btn-secondary">
                  Download Resume
                  <Download className="h-4 w-4" />
                </a>
                <a href="#contact" className="btn-secondary">
                  Contact Me
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-400">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-teal-300"
                >
                  <Mail className="h-4 w-4 text-teal-400" />
                  {personal.email}
                </a>
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-teal-300"
                >
                  <span className="font-semibold text-teal-400">📞</span>
                  {personal.phone}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="relative mx-auto flex justify-center lg:justify-end">
              <div className="relative">
                {/* Ambient glow effect */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-teal-500/20 via-indigo-500/20 to-teal-500/20 blur-xl transition-all" />
                
                <div className="relative h-64 w-64 overflow-hidden rounded-3xl border-2 border-white/10 bg-slate-900 shadow-2xl transition-all duration-300 hover:border-teal-500/40 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                  <Image
                    src="/profile.jpg"
                    alt={personal.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
