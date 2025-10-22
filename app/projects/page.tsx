"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import { Project } from "@/lib/types";

const projects = projectsData as Project[];

const domainFilters = [
  { value: "all", label: "All Projects" },
  { value: "data", label: "Data & BI" },
  { value: "ai", label: "AI Engineering" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "uiux", label: "UI/UX" },
  { value: "qa", label: "QA/CI" },
];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const domainParam = searchParams.get("domain");
  
  const [selectedDomain, setSelectedDomain] = useState(domainParam || "all");
  const [sortBy, setSortBy] = useState<"recent" | "impact">("recent");

  const filteredProjects = useMemo(() => {
    const filtered =
      selectedDomain === "all"
        ? projects
        : projects.filter((p) => p.domains.includes(selectedDomain));

    if (sortBy === "recent") {
      return filtered;
    } else {
      return [...filtered].sort((a, b) => b.outcomes.length - a.outcomes.length);
    }
  }, [selectedDomain, sortBy]);

  return (
    <main className="py-16 px-4 bg-white mb-[50vh] rounded-b-[4rem]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-manrope uppercase">Projects</h1>
          <p className="text-lg text-slate-600 max-w-2xl font-agdasima">
            A showcase of product initiatives across data analytics, AI, web, mobile, and design systems.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by domain">
            {domainFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedDomain(filter.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 font-manrope ${
                  selectedDomain === filter.value
                    ? "bg-emerald-700 text-white"
                    : "bg-slate-100 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                }`}
                aria-pressed={selectedDomain === filter.value}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="flex gap-2 items-center">
            <label htmlFor="sort" className="text-sm text-slate-600 dark:text-slate-400 font-agdasima">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "recent" | "impact")}
              className="px-3 py-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-agdasima"
            >
              <option value="recent">Most Recent</option>
              <option value="impact">Highest Impact</option>
            </select>
          </div>
        </div>

        <div className="mb-6 text-sm text-slate-600 dark:text-slate-400 font-agdasima">
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-600 dark:text-slate-400 text-lg font-agdasima">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="py-16 px-4"><div className="max-w-5xl mx-auto">Loading...</div></div>}>
      <ProjectsContent />
    </Suspense>
  );
}
