import { NewHero } from "@/sections/NewHero";
import React from "react";
import { Faq } from "@/sections/Faq";
import { Features } from "@/sections/Features";
import { NewNav } from "@/sections/NewNav";
import { ScreenShots } from "@/sections/ScreenShots";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <NewHero />
      <NewNav />
      <Features />
      <ScreenShots />
      <Faq />
    </>
  );
}
