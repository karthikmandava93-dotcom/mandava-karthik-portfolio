import { education } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Reveal } from "./reveal";

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader eyebrow="Education" title="Academic foundation" />
        </Reveal>

        <div className="mt-10 max-w-3xl">
          <Reveal delay={0.2}>
            <div className="glass-card rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300">
                      <Calendar className="h-3 w-3" />
                      {education.period}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {education.degree}
                  </h3>

                  <p className="mt-1 flex items-center gap-1.5 text-base text-slate-300">
                    <MapPin className="h-4 w-4 text-teal-400" />
                    {education.institution}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {education.details}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
