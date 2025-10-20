"use client"
import Screensaver from "@/components/fancy/blocks/screensaver";
import Link from "next/link";
import { useRef } from "react";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <Screensaver containerRef={containerRef}>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Back to Home
          </Link>
        </div>
      </Screensaver>
    </main>
  );
}
