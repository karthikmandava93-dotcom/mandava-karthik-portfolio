import { personal } from "@/lib/portfolio-data";
import { SectionHeader } from "./section-header";
import { Mail, Phone, Globe, Download, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title="Let's connect"
            description="Open to HR internships, People Analytics roles, Talent Acquisition, and HR Operations opportunities."
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass-card mt-10 rounded-3xl p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-white">Get in touch directly</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Feel free to reach out for opportunities, discussions on HR analytics, or campus leadership collaboration.
                </p>

                <div className="mt-6 space-y-4">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-3 text-slate-300 transition-colors hover:text-teal-300"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Email</p>
                      <p className="font-medium text-white">{personal.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-slate-300 transition-colors hover:text-teal-300"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Phone</p>
                      <p className="font-medium text-white">{personal.phone}</p>
                    </div>
                  </a>

                  <a
                    href={personal.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 transition-colors hover:text-teal-300"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Portfolio</p>
                      <p className="font-medium text-white">mandava-karthik-portfolio.vercel.app</p>
                    </div>
                  </a>
                </div>

                <p className="mt-6 text-sm text-slate-500">
                  📍 {personal.location}
                </p>
              </div>

              <div className="flex flex-col justify-between space-y-4">
                <ul className="space-y-3">
                  <li>
                    <ContactLink
                      href={personal.linkedin}
                      label="LinkedIn"
                      sublabel="linkedin.com/in/karthiiik22m"
                      icon={<LinkedinIcon className="h-5 w-5 text-teal-400" />}
                    />
                  </li>
                  <li>
                    <ContactLink
                      href={personal.github}
                      label="GitHub"
                      sublabel="github.com/karthikmandava93-dotcom"
                      icon={<GithubIcon className="h-5 w-5 text-teal-400" />}
                    />
                  </li>
                </ul>

                <a
                  href={personal.resumePath}
                  download
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  label,
  sublabel,
  icon,
}: {
  href: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-200 hover:border-teal-400/30 hover:bg-teal-500/5 hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
          {icon}
        </div>
        <div>
          <p className="font-semibold text-white">{label}</p>
          <p className="text-xs text-slate-400">{sublabel}</p>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-teal-400" />
    </a>
  );
}
