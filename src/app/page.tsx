import { NewHero } from "@/sections/NewHero";
import React from "react";
import { Faq } from "@/sections/Faq";
import { Features } from "@/sections/Features";
import { Features3 } from "@/sections/Features3";
import { Features2 } from "@/sections/Features2";
import { NewNav } from "@/sections/NewNav";
import TabsFeatures from "@/sections/TabsFeatures";
import Nav3 from "@/sections/Nav3";
import { ScreenShots } from "@/sections/ScreenShots";
import { Contact } from "@/sections/Contact";
import Privacy from "@/sections/Privacy";
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
      <Privacy />
      <ScreenShots />
      {/* <Carousel /> */}
      <Faq />
      <Contact />
    </main>
  );
}
