import Link from "next/link";
import { Download, BarChart3, Users, Target, Zap, Smartphone, MessageSquare } from "@/components/icons";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Natnael Endale",
    description: "Learn about Natnael Endale's approach to product management, leadership philosophy, and professional journey.",
};

export default function AboutPage() {
    return (
        <main className="py-16 px-4 bg-white mb-[80vh] md:mb-[50vh] rounded-b-[4rem]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 font-manrope uppercase">About Me</h1>

                {/* Bio */}
                <section className="mb-16">
                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-agdasima">
                            I&apos;m a Product Manager who bridges the gap between data insights and user impact. With a
                            foundation in data analytics and AI engineering, I lead cross-functional teams to build
                            products that solve real problems at scale.
                        </p>
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-agdasima">
                            My approach combines rigorous data analysis with people-first leadership. I believe the
                            best products emerge when teams have clarity of vision, autonomy to execute, and continuous
                            feedback loops that keep us aligned with user needs.
                        </p>
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-agdasima">
                            Currently, I&apos;m focused on AI-powered tools at Applizy and data analytics initiatives at
                            STAfrica, where I&apos;ve helped teams ship products that serve thousands of users while
                            maintaining high quality standards.
                        </p>
                    </div>

                    <div className="mt-8">
                        <Link
                            href="/assets/natnael-endale-portfolio.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 font-manrope"
                        >
                            <Download className="w-5 h-5" />
                            Download Portfolio PDF
                        </Link>
                    </div>
                </section>

                {/* Guiding Values */}
                                {/* Guiding Values */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 font-manrope">
                        Guiding Values
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-emerald-700 mb-4 font-manrope">
                                People-Focused Leadership
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-agdasima">
                                I believe in leading with empathy and creating psychological safety where teams can thrive. 
                                When people feel heard, valued, and empowered, they produce their best work and drive 
                                meaningful innovation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-emerald-700 mb-4 font-manrope">
                                Customer-Centric Innovation
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-agdasima">
                                Every product decision should stem from genuine customer needs and pain points. 
                                I prioritize continuous user research and data-driven insights to ensure we&apos;re 
                                building solutions that create real value.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-emerald-700 mb-4 font-manrope">
                                Agile Excellence
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-agdasima">
                                True agility goes beyond ceremonies it&apos;s about fostering continuous learning, 
                                rapid iteration, and adaptive planning. I focus on delivering working solutions 
                                frequently while maintaining quality and team velocity.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-emerald-700 mb-4 font-manrope">
                                Strategic Thinking
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-agdasima">
                                I balance long-term vision with short-term execution, ensuring every sprint 
                                contributes to broader business objectives. Strategic alignment across teams 
                                and stakeholders is crucial for sustainable growth.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core PM Skills */}
                                {/* Core PM Skills */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 font-manrope">
                        Core PM Skills
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BarChart3 className="w-8 h-8 text-emerald-700" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3 font-manrope">Data-Driven Decision Making</h3>
                            <ul className="text-gray-600 text-sm space-y-1 font-agdasima">
                                <li>• Analytics & KPI Tracking</li>
                                <li>• A/B Testing & Experimentation</li>
                                <li>• User Research & Insights</li>
                                <li>• Market Analysis</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-emerald-700" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3 font-manrope">Cross-Functional Leadership</h3>
                            <ul className="text-gray-600 text-sm space-y-1 font-agdasima">
                                <li>• Team Coordination</li>
                                <li>• Stakeholder Management</li>
                                <li>• Conflict Resolution</li>
                                <li>• Change Management</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-emerald-700" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3 font-manrope">Strategic Product Planning</h3>
                            <ul className="text-gray-600 text-sm space-y-1 font-agdasima">
                                <li>• Roadmap Development</li>
                                <li>• Feature Prioritization</li>
                                <li>• Resource Allocation</li>
                                <li>• Go-to-Market Strategy</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8 text-emerald-700" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3 font-manrope">Agile Methodologies</h3>
                            <ul className="text-gray-600 text-sm space-y-1 font-agdasima">
                                <li>• Scrum & Kanban</li>
                                <li>• Sprint Planning</li>
                                <li>• Backlog Management</li>
                                <li>• Continuous Improvement</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Smartphone className="w-8 h-8 text-emerald-700" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3 font-manrope">Technical Product Knowledge</h3>
                            <ul className="text-gray-600 text-sm space-y-1 font-agdasima">
                                <li>• System Architecture</li>
                                <li>• API Integration</li>
                                <li>• Database Design</li>
                                <li>• Cloud Platforms</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageSquare className="w-8 h-8 text-emerald-700" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3 font-manrope">Communication Excellence</h3>
                            <ul className="text-gray-600 text-sm space-y-1 font-agdasima">
                                <li>• Executive Presentations</li>
                                <li>• Documentation</li>
                                <li>• Workshop Facilitation</li>
                                <li>• Public Speaking</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Leadership Approach */}
                <section>
                    <h2 className="text-3xl font-bold mb-8 font-manrope">Leadership Approach</h2>
                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                            <h3 className="text-xl font-semibold mb-3 font-manrope">Communication Cadence</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4 font-agdasima">
                                I maintain regular touchpoints to ensure alignment and surface blockers early:
                            </p>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-400 font-agdasima">
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
                            <h3 className="text-xl font-semibold mb-3 font-manrope">Delegation & Empowerment</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-agdasima">
                                I delegate outcomes, not tasks. I set clear success criteria, provide context and
                                resources, then trust the team to find the best path. I&apos;m available for unblocking and
                                course correction, but I avoid micromanagement. This builds ownership and develops the
                                team&apos;s decision-making muscles.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                            <h3 className="text-xl font-semibold mb-3 font-manrope">Cross-Timezone Collaboration</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-agdasima">
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
