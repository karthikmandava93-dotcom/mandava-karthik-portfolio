import { leadership } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";
import { Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

export function Leadership() {
  return (
    <section id="leadership" className="border-t border-white/5 bg-slate-950/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Leadership"
            title="Campus & community leadership"
            description="Empowering student communities, driving student engagement, and leading technical initiatives."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {leadership.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-teal-300">{item.organization}</p>

                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
