"use client"
import { DomainCard } from "@/components/DomainCard";
import { Hero } from "@/components/Hero";
import * as Icons from "@/components/icons";
import { Metric } from "@/components/Metric";
import { ProjectCard } from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import { domainAreas } from "@/lib/data";
import { Project } from "@/lib/types";

const projects = projectsData as Project[];
const featuredProjects = projects.filter((p) => p.featured);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BarChart3: Icons.BarChart3,
  Brain: Icons.Brain,
  Globe: Icons.Globe,
  Smartphone: Icons.Smartphone,
  Palette: Icons.Palette,
  GitBranch: Icons.GitBranch,
};

export default function Home() {
  return (
    <main>
      <Hero
        ctas={[
          { label: "Contact", href: "/contact", variant: "primary" },
          { label: "View Projects", href: "/projects", variant: "secondary" },
          {
            label: "GitHub",
            href: "https://github.com/natnael",
            variant: "ghost",
            external: true,
          },
          {
            label: "LinkedIn",
            href: "https://linkedin.com/in/natnael",
            variant: "ghost",
            external: true,
          },
          {
            label: "Download PDF",
            href: "/assets/natnael-endale-portfolio.pdf",
            variant: "ghost",
          },
        ]}
      />

      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl mb-6 text-black font-manrope font-extrabold uppercase">
              Areas of Ownership
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-agdasima">
              Leading cross-functional teams across the full product lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {domainAreas.map((domain, index) => {
              const IconComponent = iconMap[domain.icon] || Icons.Globe;
              return (
                <DomainCard
                  id={index}
                  key={domain.domain}
                  icon={<IconComponent className="w-8 h-8" />}
                  title={domain.title}
                  blurb={domain.blurb}
                  metrics={domain.metrics}
                  href={`/projects?domain=${domain.domain}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-manrope">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-manrope">
            Leadership Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-400 font-manrope">
                Cross-Functional Leadership
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-agdasima">
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-500 mr-2">•</span>
                  <span>Led teams of 5-8 across engineering, design, and data analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-500 mr-2">•</span>
                  <span>Managed stakeholder alignment across 3+ time zones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-500 mr-2">•</span>
                  <span>Coordinated sprint planning, retrospectives, and daily standups</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-400 font-manrope">
                Results & KPIs
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-agdasima">
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-500 mr-2">•</span>
                  <span>Shipped 12+ major features with 95%+ on-time delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-500 mr-2">•</span>
                  <span>Reduced time-to-market by 40% through process optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 dark:text-emerald-500 mr-2">•</span>
                  <span>Maintained team velocity at 85% sprint commitment rate</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-200 dark:border-slate-800">
            <Metric label="Products Shipped" value="15+" />
            <Metric label="Team Members Led" value="25+" />
            <Metric label="Stakeholders Managed" value="30+" />
            <Metric label="On-Time Delivery" value="95%" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-6">
            TRUSTED BY
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">
              STAfrica
            </div>
            <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">
              Applizy
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
