"use client";

import { useSectionInView } from "@/lib/hooks";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { PROJECTS } from "@/lib/data";
import Card from "@/components/Card";

export const ScrollFeature = () => {
  // const { ref } = useSectionInView("#faq");
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <section
      id="scroll"
      className="scroll-m-20 mt-[50vh] relative"
      ref={container}
    >
      <div className="container relative">
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - (PROJECTS.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};
