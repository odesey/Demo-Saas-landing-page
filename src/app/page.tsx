import { NewHero } from "@/sections/NewHero";
import React from "react";
import { Faq } from "@/sections/Faq";
// import Features from "@/sections/Features";
import { ScrollFeature } from "@/sections/ScrollFeature";
import { NewNav } from "@/sections/NewNav";
import { NewNav2 } from "@/sections/NewNav2";
import { ScreenShots } from "@/sections/ScreenShots";
import { Contact } from "@/sections/Contact";
import Download from "@/sections/Download";
import Privacy from "@/sections/Privacy";
import dynamic from "next/dynamic";

const Features = dynamic(() => import("@/sections/Features"), {
  ssr: false
});

export const runtime = "edge";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <NewNav2 />
      {/* <NewNav /> */}
      {/* <GlassNavigation /> */}
      <NewHero />
      <Features />
      {/* <ScrollFeature /> */}
      <Privacy />
      <ScreenShots />
      <Download />
      <Faq />
      <Contact />
    </main>
  );
}
