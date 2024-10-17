import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import React from "react";
import { Header } from "@/sections/Header";
import { Features } from "@/sections/Features";
import { NewHero } from "@/sections/NewHero";
import { NewNav } from "@/sections/NewNav";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/app/theme-provider";
import Footer from "@/components/layout/Footer";
const font = Mulish({ subsets: ["latin"] });

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="relative dark" suppressHydrationWarning>
      <body className={`${font.className} bg-primeBlue-50 dark:bg-onyx-950`}>
        <ThemeProvider>
          <NewHero />
          <NewNav />
          <Features />
          {/* <Navbar /> */}
          {/* <Header /> */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
