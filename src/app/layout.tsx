import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naveenkumar P | AI Engineer & Full Stack Developer Portfolio",
  description: "B.Tech Artificial Intelligence & Data Science student at Sri Eshwar College of Engineering. Building intelligent, full-stack digital solutions and machine learning pipelines.",
  keywords: [
    "Naveenkumar P",
    "AI Engineer",
    "Full Stack Developer",
    "Sri Eshwar College of Engineering",
    "Artificial Intelligence",
    "Data Science Student Portfolio",
    "Next.js Portfolio",
    "React Developer",
    "MERN Stack"
  ],
  authors: [{ name: "Naveenkumar P" }],
  robots: "index, follow",
  openGraph: {
    title: "Naveenkumar P | AI Engineer & Full Stack Developer Portfolio",
    description: "B.Tech Artificial Intelligence & Data Science student portfolio. Discover engineering projects, analytics milestones, and AI interest pipelines.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-primary text-text-primary relative">
        {children}
      </body>
    </html>
  );
}
