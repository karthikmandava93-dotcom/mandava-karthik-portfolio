import { recognitions } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";
import { Award, FileText } from "lucide-react";
import { Reveal } from "./reveal";

export function Achievements() {
  return (
    <section id="recognitions" className="border-t border-white/5 bg-slate-950/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Recognitions"
            title="Formal Recommendations & Leadership Awards"
            description="Endorsements and Letters of Recommendation from corporate mentors and campus leaders."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {recognitions.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-300">
                        Formal LOR
                      </span>
                      <h3 className="mt-1 text-base font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-3 text-xs font-medium uppercase tracking-wider text-teal-300">
                    {item.authority}
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 border-t border-white/5 pt-3 text-xs text-slate-500">
                  <FileText className="h-3.5 w-3.5 text-teal-400" />
                  <span>Verified Recommendation</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
