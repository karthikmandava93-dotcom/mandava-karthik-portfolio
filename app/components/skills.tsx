import { skills } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";
import { Users, BarChart3, Search, Cpu } from "lucide-react";
import { Reveal } from "./reveal";

const skillGroups = [
  {
    key: "hrTalentOps" as const,
    title: "HR & Talent Operations",
    icon: <Users className="h-5 w-5 text-teal-400" />,
  },
  {
    key: "hrAnalyticsReporting" as const,
    title: "HR Analytics & Reporting",
    icon: <BarChart3 className="h-5 w-5 text-indigo-400" />,
  },
  {
    key: "sourcingRecruitmentTools" as const,
    title: "Sourcing & Recruitment Tools",
    icon: <Search className="h-5 w-5 text-teal-400" />,
  },
  {
    key: "technicalProductivityTools" as const,
    title: "Technical & Productivity Tools",
    icon: <Cpu className="h-5 w-5 text-indigo-400" />,
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 bg-slate-950/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Skills & Tools"
            title="HR competencies & technical toolset"
            description="Bridging core human resource processes with data analytics, automation, and AI workflows."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
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
