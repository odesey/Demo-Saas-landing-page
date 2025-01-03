import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/app/theme-provider";
import Footer from "@/components/layout/Footer";
import ActiveSectionProvider from "@/context/active-section";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/SmoothScroll";

const font = Mulish({ subsets: ["latin"] });

// export const runtime = "edge";

export const metadata: Metadata = {
  title: "GenesisApp",
  description: "GenesisApp - Helping your church communicate better"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="relative dark !scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${font.className} bg-primeBlue-50 dark:bg-onyx-950 antialiased`}
      >
        <ThemeProvider>
          <ActiveSectionProvider>
            <SmoothScroll>{children}</SmoothScroll>
            <Footer />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
