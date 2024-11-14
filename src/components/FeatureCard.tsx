"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import Logo from "@/assets/logo.svg";

export const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  const borderRef = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const updateMousePosition = (e: MouseEvent) => {
    if (!borderRef.current) return;

    const borderRect = borderRef.current.getBoundingClientRect();

    offsetX.set(e.x - borderRect.x);
    offsetY.set(e.y - borderRect.y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="relative border border-primeBlue-50 px-4 py-2 text-center rounded-sm sm:flex-1 dark:border-onyx-800 shadow-mdbl dark:shadow-big min-h-[260px] md:min-h-[300px]">
      <motion.div
        ref={borderRef}
        className="absolute inset-0 border-2 border-primeBlue-400  rounded-sm"
        style={{
          maskImage
        }}
      ></motion.div>
      <div className="my-2 inline-flex justify-center items-center dark:fill-white">
        <div className="backdrop-blur-sm backdrop-filter items-center justify-center relative flex size-20 rounded-sm border border-white/65 dark:border-onyx-700 bg-primeBlue-50 dark:bg-onyx-900 dark:bg-[linear-gradient(135deg,_rgba(31,30,38,0.2),_rgba(75,72,91,0.8))] bg-[linear-gradient(135deg,_rgba(158,207,255,0.15),_rgba(255,255,255,0.3))] [box-shadow:4px_4px_8px_rgba(158,207,255,0.3),_-4px_-4px_8px_#ffffff] dark:[box-shadow:6px_6px_12px_rgba(0,0,0,0.4),_-6px_-6px_12px_rgba(0,0,0,0.2)]">
          <div className="fill-primeBlue-500 backdrop-blur-sm backdrop-filter">
            {icon}
          </div>
        </div>
      </div>
      <h3 className="mb-6 mx-4 text-2xl font-bold text-onyx-400 dark:text-onyx-100">
        {title}
      </h3>
      <p className="m-4 dark:text-onyx-300 text-onyx-500 text-lg">
        {description}
      </p>
    </div>
  );
};
