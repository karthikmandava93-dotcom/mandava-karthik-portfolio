import { skills } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";
import { Users, BarChart3, Search } from "lucide-react";
import { Reveal } from "./reveal";

const skillGroups = [
  {
    key: "recruitmentSourcing" as const,
    title: "Recruitment & Sourcing",
    icon: <Search className="h-5 w-5 text-teal-400" />,
  },
  {
    key: "hrOperations" as const,
    title: "HR Operations",
    icon: <Users className="h-5 w-5 text-indigo-400" />,
  },
  {
    key: "dataTools" as const,
    title: "Data & Tools",
    icon: <BarChart3 className="h-5 w-5 text-teal-400" />,
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 bg-slate-950/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Skills & Competencies"
            title="HR competencies & technical toolset"
            description="Hands-on expertise in full-cycle recruitment, candidate sourcing, HR operations, and recruitment analytics."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.key} delay={index * 0.1}>
              <div className="glass-card h-full rounded-2xl p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="mb-5 flex items-center gap-3 text-lg font-bold text-white">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    {group.icon}
                  </span>
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[group.key].map((skill) => (
                    <span key={skill} className="tag-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
