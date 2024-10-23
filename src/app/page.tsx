import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { DarkGridHero } from "@/sections/DarkGridHero";
import { NewHero } from "@/sections/NewHero";
import { NewSwiper } from "@/sections/NewSwiper";
import { features } from "@/data/features";
import { pricing } from "@/data/pricing";
import React from "react";
import { Header } from "@/sections/Header";
import { Faq } from "@/sections/Faq";
import { Features } from "@/sections/Features";
import { NewNav } from "@/sections/NewNav";
// import { ImageSlider } from "@/sections/ImageSlider";
import { ScreenShots } from "@/sections/ScreenShots";
import { CircleCheck } from "lucide-react";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <NewHero />
      <NewNav />
      <Features />
      <ScreenShots />
      {/* <NewSwiper /> */}
      {/* <ImageSlider /> */}
      <Faq />
      {/* <div className="border-b border-border">
        <main className="container mx-auto">
          <div className="relative md:mt-24 mx-auto w-full max-w-4xl pt-4 text-center">
            <div className="absolute top-0 -z-10 max-h-full max-w-screen-lg w-full h-full blur-2xl overflow-hidden">
              <div className="absolute top-24 left-24 w-56 h-56 bg-violet-600 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl"></div>
              <div className="absolute hidden md:block bottom-2 right-1/4 w-56 h-56 bg-sky-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-1000 filter blur-3xl"></div>
              <div className="absolute hidden md:block bottom-1/4 left-1/3 w-56 h-56 bg-pink-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-500 filter blur-3xl"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <Image
              className="w-full"
              src="/dashboard-ui.png"
              alt="Dashboard ui design"
              priority
              width={1200}
              height={800}
            />
          </div>
        </main>
      </div> */}

      {/* features */}

      {/* <section
        id="features"
        className="border-b border-border bg-gradient-to-b from-background to-transparent via-background via-90% relative"
      >
        <div className="container mx-auto text-center">
          <div className="my-24">
            <h5 className="text-primary">WHY CHOOSE US</h5>
            <h2 className="text-4xl font-extrabold my-4">
              Build better websites with us
            </h2>

            <p className="mx-auto my-4 text-sm w-full max-w-md bg-transparent text-center font-medium leading-relaxed tracking-wide text-muted-foreground">
              Show off your features or services in a beautiful way. This
              section is perfect for showcasing
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-12">
              {features.map((feature) => (
                <Card key={feature.title} className="max-w-lg mx-auto">
                  <CardHeader>
                    <div className="w-16 h-16 text-primary-foreground flex justify-center items-center border border-border rounded-xl bg-primary mx-auto">
                      {feature.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="mt-4">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-0 -z-10 max-h-full w-full h-full blur-2xl overflow-hidden">
          <div className="absolute bottom-0 left-0 w-1/2 h-56 bg-violet-600 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-56 bg-sky-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-1000 filter blur-3xl"></div>
        </div>
      </section> */}
    </>
  );
}
