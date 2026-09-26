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
        
        <div className="grid gap-8 lg:grid-cols-5 mt-10">
          <Reveal delay={0.2}>
            <div className="glass-card rounded-2xl p-8 lg:col-span-3 h-full">
              <p className="text-lg leading-relaxed text-slate-300">{aboutText}</p>
            </div>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="glass-card rounded-2xl p-8 lg:col-span-2 h-full">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-teal-400">
                Core Focus
              </h3>
              <ul className="space-y-3">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-slate-300">
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
    </section>
  );
}
