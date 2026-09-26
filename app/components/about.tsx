import { aboutText, focusAreas } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader eyebrow="About Me" title="People-first HR with data-driven impact" />
        </Reveal>
        
        <div className="mt-10 grid min-w-0 grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(15rem,1fr)]">
          <div className="min-w-0">
            <Reveal delay={0.2}>
              <div className="glass-card h-full rounded-2xl p-8">
                <p className="text-lg leading-relaxed text-slate-300">{aboutText}</p>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0">
            <Reveal delay={0.4}>
              <div className="glass-card h-full rounded-2xl p-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-teal-400">
                  Core Focus
                </h3>
                <ul className="space-y-3">
                  {focusAreas.map((area) => (
                    <li key={area} className="flex min-w-0 items-center gap-3 text-slate-300">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-500/15 text-teal-400">
                        ✓
                      </span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
