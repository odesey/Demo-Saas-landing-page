import { NewHero } from "@/sections/NewHero";
import React from "react";
import { Faq } from "@/sections/Faq";
import { Features } from "@/sections/Features";
import { NewNav } from "@/sections/NewNav";
import TabsFeatures from "@/sections/TabsFeatures";
import Nav3 from "@/sections/Nav3";
import { GlassNavigation } from "@/sections/GlassNavigation";
import { ScreenShots } from "@/sections/ScreenShots";
import Carousel from "@/sections/Carousel";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* <Nav3 /> */}
      <NewNav />
      {/* <GlassNavigation /> */}
      <NewHero />
      {/* <TabsFeatures /> */}
      <Features />
      <ScreenShots />
      {/* <Carousel /> */}
      <Faq />
    </main>
  );
}
