import Link from "next/link";
import { Github, Linkedin, Mail, Download } from "./icons";

export function Footer() {
  return (
    <footer className="pt-20 bg-black fixed bottom-0 w-screen -z-10 min-h-screen flex justify-end items-end">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 w-full gap-8 mb-8">
          <div>
            <h3 className="text-3xl md:text-4xl uppercase mb-3 text-white font-extrabold font-manrope">
              Let&apos;s build something efficient, automated, data-backed and designed to scale.
            </h3>
            <p className="text-lg text-slate-300 mb-6 font-agdasima">
              &quot;Build fast. Learn faster. Automate everything.&quot;
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-full font-medium hover:bg-emerald-800 transition-colors font-manrope"
            >
              Get in touch
            </Link>
          </div>
          
          <div className="flex flex-col justify-end md:items-center">
            <h4 className="font-semibold mb-4 text-white font-manrope">Contact Options</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:natnael@endale.dev"
                  className="text-white hover:text-primary transition-colors font-agdasima"
                >
                  natnael@endale.dev
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary" />
                <a
                  href="https://linkedin.com/in/natnaelende"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors font-agdasima"
                >
                  linkedin.com/in/natnaelende
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-primary" />
                <a
                  href="https://github.com/natnaelende"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors font-agdasima"
                >
                  github.com/natnaelende
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-primary" />
                <a
                  href="/assets/Natnael_Portfolio.pdf"
                  target="_blank"
                  className="text-white hover:text-primary transition-colors font-agdasima"
                >
                  Download Portfolio
                </a>
              </div>
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
