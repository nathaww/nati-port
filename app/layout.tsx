import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Natnael Endale - Product Manager",
  description: "Data-driven PM leading AI, Analytics, Web & Mobile products.",
  openGraph: {
    title: "Natnael Endale - Product Manager",
    description: "Data-driven PM leading AI, Analytics, Web & Mobile products.",
    images: ["/og/profile.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
