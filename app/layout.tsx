import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import SmoothScrolling from "@/utils/SmoothScroll";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="py-0 my-0">
        <body className="antialiased py-0 my-0">
      <PreloaderWrapper>
          <SmoothScrolling>
            <Navigation />
            {children}
            <Footer />
          </SmoothScrolling>
      </PreloaderWrapper>
        </body>
    </html>
  );
}
