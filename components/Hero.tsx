import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import HeroCard from "./HeroCard";

export type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

type HeroProps = {
  ctas: CTAButton[];
};

export function Hero({ ctas }: HeroProps) {
  return (
    <section className="relative bg-background rounded-b-[4.5rem] py-20 md:py-26 px-4 flex items-center justify-center">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl flex flex-col items-center gap-6">
          <div className="size-48 relative">
            <Image
              width={200}
              height={200}
              src="/imgs/image copy.png"
              alt="Natnael Profile Image"
              className="w-full h-full rounded-full object-cover border-4 border-white"
              priority
            />
            <HeroCard />
          </div>
          <h1 className="text-4xl md:text-6xl text-black font-[Arial] font-extrabold uppercase text-center">
            Building data-driven products with people-first leadership.
          </h1>
          <div className="flex flex-wrap gap-4">
            {ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2",
                  cta.variant === "primary" &&
                  "bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-500",
                  cta.variant === "secondary" &&
                  "bg-black text-white hover:bg-white hover:text-black focus:ring-slate-500",
                  (!cta.variant || cta.variant === "ghost") &&
                  "border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 focus:ring-slate-500"
                )}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
