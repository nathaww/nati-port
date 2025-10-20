import Link from "next/link";
import { Download } from "@/components/icons";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Natnael Endale",
    description: "Learn about Natnael Endale's approach to product management, leadership philosophy, and professional journey.",
};

export default function AboutPage() {
    return (
        <main className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

                {/* Bio */}
                <section className="mb-16">
                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            I&apos;m a Product Manager who bridges the gap between data insights and user impact. With a
                            foundation in data analytics and AI engineering, I lead cross-functional teams to build
                            products that solve real problems at scale.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            My approach combines rigorous data analysis with people-first leadership. I believe the
                            best products emerge when teams have clarity of vision, autonomy to execute, and continuous
                            feedback loops that keep us aligned with user needs.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            Currently, I&apos;m focused on AI-powered tools at Applizy and data analytics initiatives at
                            STAfrica, where I&apos;ve helped teams ship products that serve thousands of users while
                            maintaining high quality standards.
                        </p>
                    </div>

                    <div className="mt-8">
                        <Link
                            href="/assets/natnael-endale-portfolio.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                        >
                            <Download className="w-5 h-5" />
                            Download Portfolio PDF
                        </Link>
                    </div>
                </section>

                {/* Guiding Values */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Guiding Values</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Data-Informed, Not Data-Driven",
                                description:
                                    "Numbers guide decisions, but context and empathy shape solutions. I balance quantitative metrics with qualitative insights from users and team members.",
                            },
                            {
                                title: "Bias for Action",
                                description:
                                    "Ship iteratively and learn fast. Perfect is the enemy of good. I prioritize shipping MVPs that validate hypotheses over lengthy planning cycles.",
                            },
                            {
                                title: "People First, Always",
                                description:
                                    "Great products come from great teams. I invest in 1:1s, clear communication, and creating psychological safety for the team to do their best work.",
                            },
                            {
                                title: "Transparent Prioritization",
                                description:
                                    "Saying no is as important as saying yes. I use frameworks like RICE to make trade-offs explicit and ensure everyone understands why we're building what we're building.",
                            },
                            {
                                title: "Cross-Functional Collaboration",
                                description:
                                    "Engineering, design, data, and business all bring unique perspectives. I facilitate collaboration that leverages each discipline's strengths.",
                            },
                        ].map((value, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                            >
                                <h3 className="text-lg font-semibold mb-3 text-emerald-700 dark:text-emerald-400">
                                    {value.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Core PM Skills */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Core PM Skills</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                category: "Discovery & Strategy",
                                skills: [
                                    "User research & interviews",
                                    "Market analysis",
                                    "Competitive intelligence",
                                    "Roadmap planning",
                                    "OKR setting",
                                ],
                            },
                            {
                                category: "Execution & Delivery",
                                skills: [
                                    "Agile/Scrum ceremonies",
                                    "Sprint planning",
                                    "Backlog prioritization",
                                    "Stakeholder management",
                                    "Go-to-market planning",
                                ],
                            },
                            {
                                category: "Data & Analytics",
                                skills: [
                                    "SQL, Python, Power BI",
                                    "A/B testing & experimentation",
                                    "Metrics definition & tracking",
                                    "Dashboard design",
                                    "Data storytelling",
                                ],
                            },
                        ].map((group, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
                            >
                                <h3 className="text-lg font-semibold mb-4">{group.category}</h3>
                                <ul className="space-y-2">
                                    {group.skills.map((skill, sidx) => (
                                        <li
                                            key={sidx}
                                            className="text-sm text-slate-600 dark:text-slate-400 flex items-start"
                                        >
                                            <span className="text-emerald-600 dark:text-emerald-500 mr-2">•</span>
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Leadership Approach */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Leadership Approach</h2>
                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                            <h3 className="text-xl font-semibold mb-3">Communication Cadence</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                I maintain regular touchpoints to ensure alignment and surface blockers early:
                            </p>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                <li className="flex items-start">
                                    <span className="text-emerald-600 dark:text-emerald-500 mr-2">•</span>
                                    <span>Daily standups (15 min, async-friendly)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-600 dark:text-emerald-500 mr-2">•</span>
                                    <span>Weekly 1:1s with each team member</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-600 dark:text-emerald-500 mr-2">•</span>
                                    <span>Bi-weekly sprint planning and retrospectives</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-600 dark:text-emerald-500 mr-2">•</span>
                                    <span>Monthly stakeholder reviews with demos</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                            <h3 className="text-xl font-semibold mb-3">Delegation & Empowerment</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                I delegate outcomes, not tasks. I set clear success criteria, provide context and
                                resources, then trust the team to find the best path. I&apos;m available for unblocking and
                                course correction, but I avoid micromanagement. This builds ownership and develops the
                                team&apos;s decision-making muscles.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                            <h3 className="text-xl font-semibold mb-3">Cross-Timezone Collaboration</h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Having worked with teams across Africa, Europe, and Asia, I&apos;ve learned to design
                                asynchronous workflows. I document decisions in Notion/Confluence, record Loom videos for
                                complex topics, and ensure no one is blocked waiting for synchronous meetings. I schedule
                                overlap hours for critical discussions but default to async to respect everyone&apos;s time.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
