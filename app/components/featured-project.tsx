import { featuredProject } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";
import { LayoutDashboard, Sparkles, Smartphone, TrendingUp, ExternalLink, Image as ImageIcon } from "lucide-react";
import { GithubIcon } from "./icons";
import { Reveal } from "./reveal";

const metricIcons = {
  dashboard: <LayoutDashboard className="h-6 w-6" />,
  ai: <Sparkles className="h-6 w-6" />,
  responsive: <Smartphone className="h-6 w-6" />,
  analytics: <TrendingUp className="h-6 w-6" />,
};

export function FeaturedProject() {
  return (
    <section id="project" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Featured Project"
            title="Talent intelligence built for recruiters"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass-card mt-10 overflow-hidden rounded-3xl border-teal-500/20 p-6 sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-300">
                  {featuredProject.badge}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                  {featuredProject.name}
                </h3>
                <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3 mt-4 sm:mt-0">
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={featuredProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Demo <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Dashboard Overview", "Pipeline Analytics", "ATS Scoring View"].map(
                (label, i) => (
                  <Reveal key={label} delay={0.3 + i * 0.1}>
                    <div className="screenshot-placeholder flex-col gap-2 p-6 transition-colors hover:border-teal-500/40 hover:bg-slate-800/50">
                      <ImageIcon className="h-10 w-10 text-slate-600" />
                      <span>{label}</span>
                      <span className="text-xs">Screenshot placeholder</span>
                    </div>
                  </Reveal>
                ),
              )}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProject.metrics.map((metric, i) => (
                <Reveal key={metric.label} delay={0.4 + i * 0.1}>
                  <div
                    className="rounded-xl border border-white/10 bg-slate-900/60 p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/10"
                  >
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                      {metricIcons[metric.icon]}
                    </div>
                    <p className="text-sm font-semibold text-slate-200">{metric.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <Reveal delay={0.6}>
                <div>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-300">
                    Project Features
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {featuredProject.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-400"
                      >
                        <span className="text-teal-400">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.7}>
                <div>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-300">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.techStack.map((tech) => (
                      <span key={tech} className="tag-pill font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
