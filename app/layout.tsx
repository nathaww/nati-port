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
    <html lang="en" className="bg-black" style={{ height: '100%' }}>
      <body className="antialiased" style={{ margin: 0, padding: 0, width: '100%', minHeight: '100dvh' }}>
        <SmoothScrolling>
          <PreloaderWrapper>
            <Navigation />
            {children}
            <Footer />
          </PreloaderWrapper>
        </SmoothScrolling>
      </body>
    </html>
  );
}
