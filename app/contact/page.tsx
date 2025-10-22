import { Mail, Github, Linkedin } from "@/components/icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Natnael Endale",
  description: "Get in touch with Natnael Endale for product management opportunities and collaborations.",
};

export default function ContactPage() {
  return (
    <main className="py-16 px-4 bg-white mb-[50vh] rounded-b-[4rem]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-manrope uppercase">Get in Touch</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-agdasima">
            Open to new opportunities in product management, data analytics, and AI engineering.
            Let&apos;s connect and explore how we can build something impactful together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email */}
          <a
            href="mailto:natnael.endale@example.com"
            className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 font-manrope">Email</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-2 font-agdasima">
                  Reach out directly via email for opportunities and collaborations.
                </p>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium group-hover:underline font-agdasima">
                  natnael.endale@example.com
                </span>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/natnael"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 font-manrope">LinkedIn</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-2 font-agdasima">
                  Connect with me professionally and see my career journey.
                </p>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium group-hover:underline font-agdasima">
                  linkedin.com/in/natnael
                </span>
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/natnael"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900 transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 font-manrope">GitHub</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-2 font-agdasima">
                  Check out my open-source contributions and project repositories.
                </p>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium group-hover:underline font-agdasima">
                  github.com/natnael
                </span>
              </div>
            </div>
          </a>

          {/* Calendly (Optional) */}
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
            <h2 className="text-xl font-semibold mb-4 font-manrope">Schedule a Call</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 font-agdasima">
              Want to discuss a project or opportunity? Book a 30-minute intro call.
            </p>
            <a
              href="https://calendly.com/natnael"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 font-manrope"
            >
              Book a Call
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-3 font-agdasima">
              Available Monday-Friday, 9 AM - 5 PM EAT
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800">
          <h2 className="text-2xl font-bold mb-4 text-emerald-900 dark:text-emerald-100 font-manrope">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-emerald-800 dark:text-emerald-200">
            <div>
              <h3 className="font-semibold mb-2 font-manrope">Response Time</h3>
              <p className="text-sm font-agdasima">I typically respond within 24-48 hours on weekdays.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 font-manrope">Best For</h3>
              <p className="text-sm font-agdasima">
                Product management roles, consulting opportunities, speaking engagements, and
                collaboration on data/AI projects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 font-manrope">Time Zone</h3>
              <p className="text-sm font-agdasima">East Africa Time (EAT / UTC+3)</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 font-manrope">Preferred Contact</h3>
              <p className="text-sm font-agdasima">Email for detailed discussions, LinkedIn for quick networking.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
