import { certifications } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";
import { Award, CheckCircle2 } from "lucide-react";
import { Reveal } from "./reveal";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Certifications"
            title="Industry credentials & verified training"
            description="Accredited in HR compliance, employment law, analytics, and HRMS operations."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.08}>
              <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs font-semibold text-teal-300">
                      {cert.badge}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-teal-400/80">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Verified
                  </span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
