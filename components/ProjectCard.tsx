import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "./icons";

type ProjectCardProps = {
  title: string;
  domains: string[];
  role: string;
  team: string;
  stack: string[];
  outcomes: string[];
  links?: { label: string; href: string }[];
  image?: string;
  slug?: string;
};

const domainLabels: Record<string, string> = {
  ai: "AI Engineering",
  data: "Data & BI",
  web: "Web",
  mobile: "Mobile",
  uiux: "UI/UX",
  qa: "QA/CI",
};

const domainColors: Record<string, string> = {
  ai: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-400",
  data: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
  web: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400",
  mobile: "bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-400",
  uiux: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
  qa: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400",
};

export function ProjectCard({
  title,
  domains,
  role,
  team,
  stack,
  outcomes,
  links,
  image,
}: ProjectCardProps) {
  return (
    <article className="group border border-slate-200 bg-white overflow-hidden cursor-pointer transition-all">
      {image && (
        <div className="relative w-full h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {domains.map((domain) => (
            <span
              key={domain}
              className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                domainColors[domain] || domainColors.web
              }`}
            >
              {domainLabels[domain] || domain}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 font-manrope transition-colors">
          {title}
        </h3>
        
        <div className="text-sm text-slate-600 dark:text-slate-400 mb-4 space-y-1">
          <p>
            <span className="font-medium">Role:</span> {role}
          </p>
          <p>
            <span className="font-medium">Team:</span> {team}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Key Outcomes:
          </p>
          <ul className="space-y-1.5">
            {outcomes.slice(0, 3).map((outcome, idx) => (
              <li
                key={idx}
                className="text-sm text-slate-600 dark:text-slate-400 flex items-start"
              >
                <span className="text-emerald-600 dark:text-emerald-500 mr-2 mt-0.5">
                  •
                </span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded"
              >
                {tech}
              </span>
            ))}
            {stack.length > 5 && (
              <span className="px-2 py-0.5 text-xs text-slate-500 dark:text-slate-500">
                +{stack.length - 5} more
              </span>
            )}
          </div>
        </div>

        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-emerald-700 dark:text-emerald-400 hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
              >
                {link.label}
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
