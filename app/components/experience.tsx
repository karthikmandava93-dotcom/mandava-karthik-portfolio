import { experience } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/5 bg-slate-950/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Professional Experience"
            title="HR internships across recruitment & operations"
          />
        </Reveal>

        <div className="relative mt-10">
          <div className="absolute left-[11px] top-2 hidden h-[calc(100%-2rem)] w-0.5 timeline-line md:block" />

          <div className="space-y-10">
            {experience.map((job, index) => (
              <Reveal key={`${job.company}-${job.period}`} delay={index * 0.1}>
                <article className="relative md:pl-12">
                  <div className="absolute left-0 top-1 hidden h-6 w-6 rounded-full border-2 border-teal-400 bg-slate-950 md:block" />

                  <div className="glass-card rounded-2xl p-6 sm:p-8 transition-transform hover:-translate-y-1 duration-300">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        <p className="mt-1 font-medium text-teal-300">{job.company}</p>
                      </div>
                      <span className="inline-flex w-fit rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-200">
                        {job.period}
                      </span>
                    </div>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {job.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
