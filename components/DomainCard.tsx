import Link from "next/link";
import { ArrowRight } from "./icons";

type DomainCardProps = {
  icon: React.ReactNode;
  title: string;
  blurb: string;
  metrics: string[];
  href: string;
};

export function DomainCard({ icon, title, blurb, metrics, href }: DomainCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 rounded- border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
        {blurb}
      </p>
      <ul className="space-y-1.5 mb-4">
        {metrics.map((metric, idx) => (
          <li key={idx} className="text-sm text-slate-500 dark:text-slate-500 flex items-start">
            <span className="text-emerald-600 dark:text-emerald-500 mr-2">•</span>
            <span>{metric}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center text-emerald-700 dark:text-emerald-400 text-sm font-medium group-hover:gap-2 transition-all">
        View projects
        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
