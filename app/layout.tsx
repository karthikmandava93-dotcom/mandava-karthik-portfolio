import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { personal } from "@/lib/portfolio-data";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${personal.name} | HR Analytics & Talent Operations`,
  description:
    "Portfolio of Mandava Karthik — HR Analytics, People Analytics, HRIS & HR Systems, HR Operations, and Talent Acquisition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-[#070b14] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
