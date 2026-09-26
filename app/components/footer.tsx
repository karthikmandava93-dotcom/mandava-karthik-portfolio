import { personal } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row">
        <p>
          © {year} {personal.name}. HR Analytics · Talent Acquisition · HR Technology.
        </p>
        <p>Hyderabad, India</p>
      </div>
    </footer>
  );
}
