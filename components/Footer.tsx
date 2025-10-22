import Link from "next/link";
import { Github, Linkedin, Mail } from "./icons";

export function Footer() {
  return (
    <footer className="py-20 bg-black fixed bottom-0 w-full -z-10 min-h-screen flex justify-end items-end">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-white">
              Let&apos;s build something insightful.
            </h3>
            <p className="text-white mb-4">
              Open to new opportunities and collaborations in product management,
              data analytics, and AI engineering.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Get in touch
            </Link>
          </div>
          
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/natnael"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/natnael"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:natnael@example.com"
                className="p-2 text-white hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Natnael Endale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
