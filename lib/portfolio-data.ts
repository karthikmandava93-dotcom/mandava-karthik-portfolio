export const personal = {
  name: "Mandava Karthik",
  title: "HR Recruitment & Talent Operations",
  location: "Hyderabad, India",
  phone: "+91 9182428447",
  email: "karthik.goud.work@gmail.com",
  portfolioUrl: "https://mandava-karthik-portfolio.vercel.app",
  linkedin: "https://www.linkedin.com/in/karthiiik22m",
  github: "https://github.com/karthikmandava93-dotcom",
  resumePath: "/resume.pdf",
} as const;

export const heroIntro =
  "HR professional with a B.Tech background in Artificial Intelligence & Machine Learning and hands-on experience in full-cycle recruitment, candidate sourcing, and HR operations across two internships. Experienced using Naukri and LinkedIn Recruiter to source and screen candidates, coordinate interview schedules, and support onboarding and offboarding documentation. Certified in HR Analytics, POSH, and HRMS (Keka). Seeking HR Operations, Talent Acquisition, or HR Analytics roles.";

export const aboutText =
  "HR professional with a B.Tech background in Artificial Intelligence & Machine Learning and hands-on experience in full-cycle recruitment, candidate sourcing, and HR operations across two internships. Experienced using Naukri and LinkedIn Recruiter to source and screen candidates, coordinate interview schedules, and support onboarding and offboarding documentation. Completed certifications in HR Analytics, POSH, and HRMS (Keka). Seeking HR Operations, Talent Acquisition, or HR Analytics roles.";

export const focusAreas = [
  "Full-Cycle Recruitment & Sourcing",
  "HR Operations & Onboarding/Offboarding",
  "HRMS Administration (Keka)",
  "HR Analytics & Funnel Tracking",
  "POSH & Statutory Compliance",
] as const;

export const experience = [
  {
    role: "Human Resource Intern",
    company: "Dev Innovations Labs",
    period: "Jul 2026 – Aug 2026",
    highlights: [
      "Supported end-to-end recruitment coordination for active requisitions, including job posting, resume screening, and interview scheduling.",
      "Conducted candidate outreach and follow-ups to share job opportunities and track application progress.",
      "Maintained candidate records across HR systems using spreadsheets and HRMS tools.",
    ],
  },
  {
    role: "HR & Operations Intern",
    company: "ANOVYA Lifestyle Pvt. Ltd.",
    period: "Apr 2026",
    highlights: [
      "Sourced, screened, and contacted 40+ candidates across 3 roles using Naukri and LinkedIn Recruiter.",
      "Tracked candidate information and streamlined interview coordination, reducing scheduling turnaround from 48 hours to same-day.",
      "Wrote 4 job descriptions and 6 employer-branding posts using AI-assisted drafting, cutting JD creation time by about 60%.",
    ],
  },
] as const;

export const featuredProject = {
  name: "HumaveliOS — Recruitment & HR Operations Platform",
  badge: "HR Operations · Recruitment Funnel · Analytics",
  description:
    "A recruitment and HR operations platform covering candidate pipeline tracking, applicant record management, and analytics dashboards summarizing recruitment funnel and sourcing metrics.",
  features: [
    "Candidate Pipeline Tracking",
    "Applicant Record Management",
    "Recruitment Funnel Analytics Dashboard",
    "Sourcing Metrics Tracking",
    "Interview Coordination Workflows",
    "HR Operations & Record Hygiene",
    "Interactive HR Analytics UI",
    "Vercel Deployment & Live Demo",
  ],
  techStack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Python",
    "SQL",
    "MS Excel",
    "Vercel",
  ],
  metrics: [
    { label: "Pipeline & Funnel Tracking", icon: "dashboard" as const },
    { label: "Candidate Record Management", icon: "ai" as const },
    { label: "Sourcing & Funnel Metrics", icon: "analytics" as const },
    { label: "Responsive HR Dashboard", icon: "responsive" as const },
  ],
  githubUrl: "https://github.com/karthikmandava93-dotcom",
  liveDemoUrl: "https://mandava-karthik-portfolio.vercel.app",
} as const;

export const skills = {
  recruitmentSourcing: [
    "Candidate Sourcing",
    "LinkedIn Recruiter",
    "Naukri",
    "Boolean Search",
    "Job Posting",
    "Interview Coordination",
  ],
  hrOperations: [
    "Recruitment Coordination",
    "Onboarding/Offboarding",
    "HRMS Administration (Keka)",
    "POSH Awareness",
  ],
  dataTools: [
    "MS Excel",
    "Google Sheets",
    "Candidate Record Maintenance",
    "Recruitment Funnel Tracking",
    "Python",
    "SQL",
  ],
} as const;

export const certifications = [
  {
    title: "HR Analytics",
    issuer: "Simplilearn",
    date: "Jun 2026",
    badge: "HR Analytics",
  },
  {
    title: "POSH Certification",
    issuer: "Keka Academy × Safe Spaces",
    date: "Aug 2026",
    badge: "Workplace Safety & POSH",
  },
  {
    title: "Core HR Operations – HRMS",
    issuer: "Keka Academy",
    date: "Feb 2026",
    badge: "HRMS (Keka)",
  },
] as const;

export const education = {
  degree: "B.Tech – Artificial Intelligence & Machine Learning",
  institution: "Sanjay Ghodawat University, Kolhapur",
  period: "Aug 2024 – Dec 2028",
  details:
    "Engineering foundation in Artificial Intelligence and Machine Learning applied to modern HR workflows, recruitment systems, and people analytics.",
} as const;

export const leadership = [
  {
    title: "Google Student Ambassador",
    organization: "Sanjay Ghodawat University",
    period: "Aug 2025 – Jul 2026",
    highlights: [
      "Led 5+ workshops, grew community participation by 30%, and coordinated volunteer teams of 10+ members.",
    ],
  },
  {
    title: "Campus Representative",
    organization: "GeeksforGeeks, SGU",
    period: "Jan 2026 – Present",
    highlights: [
      "Reached 100+ students per semester through campus events and outreach.",
    ],
  },
  {
    title: "Campus Lead",
    organization: "Unstop, SGU",
    period: "Dec 2025 – Mar 2026",
    highlights: [
      "Onboarded 40+ students into Unstop events and hackathons through community outreach.",
    ],
  },
] as const;

export const recognitions = [
  {
    title: "Letter of Recommendation – Dev Innovations Labs",
    authority: "Available on request",
    description:
      "Available on request for contributions to recruitment coordination, resume screening, and HR systems maintenance.",
  },
  {
    title: "Letter of Recommendation – ANOVYA Lifestyle Pvt. Ltd.",
    authority: "Available on request",
    description:
      "Available on request for performance in sourcing 40+ candidates, same-day scheduling turnaround, and employer branding.",
  },
  {
    title: "Letter of Recommendation – GeeksforGeeks",
    authority: "Available on request",
    description:
      "Available on request for campus community outreach and organizing technical student events reaching 100+ students.",
  },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#project", label: "Project" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#leadership", label: "Leadership" },
  { href: "#education", label: "Education" },
  { href: "#recognitions", label: "Recommendations" },
  { href: "#contact", label: "Contact" },
] as const;
