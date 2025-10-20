import { DomainMetrics } from "./types";

export const domainAreas: DomainMetrics[] = [
  {
    title: "Data Analytics & BI",
    icon: "BarChart3",
    blurb: "Building automated reporting pipelines and executive dashboards that drive data-informed decision-making.",
    metrics: [
      "80% reduction in manual entry",
      "20+ KPIs tracked across 5 departments",
      "35% faster decision cycles"
    ],
    domain: "data"
  },
  {
    title: "AI Engineering",
    icon: "Brain",
    blurb: "Leading AI product development at Applizy, creating intelligent tools that augment human workflows.",
    metrics: [
      "60% reduction in completion time",
      "95% positive beta feedback",
      "40% uplift in conversion"
    ],
    domain: "ai"
  },
  {
    title: "Web Development",
    icon: "Globe",
    blurb: "Managing web platform initiatives with focus on performance, scalability, and developer experience.",
    metrics: [
      "Sub-2.1s average load",
      "42% faster feature delivery",
      "99.9% uptime"
    ],
    domain: "web"
  },
  {
    title: "Mobile Development",
    icon: "Smartphone",
    blurb: "Driving mobile product strategy from concept to launch, optimizing for performance and user engagement.",
    metrics: [
      "900+ DAU month-1",
      "Release cycle: 10 → 6 days",
      "Crash rate ≤ 0.3%"
    ],
    domain: "mobile"
  },
  {
    title: "UI/UX & Brand Design",
    icon: "Palette",
    blurb: "Championing design systems and user-centered approaches that balance aesthetics with accessibility.",
    metrics: [
      "50% faster design-to-dev handoff",
      "Satisfaction: 3.8 → 4.6",
      "WCAG AA compliance"
    ],
    domain: "uiux"
  },
  {
    title: "QA & CI/CD",
    icon: "GitBranch",
    blurb: "Implementing automated testing and deployment pipelines that ensure quality at velocity.",
    metrics: [
      "28% fewer release defects",
      "99.9% build success",
      "35% shorter regression suites"
    ],
    domain: "qa"
  }
];
