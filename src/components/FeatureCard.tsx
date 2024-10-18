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
    <div className="relative border border-white/60 p-4 text-center rounded-sm sm:flex-1 dark:border-onyx-800 shadow-mdbl dark:shadow-big min-h-[320px]">
      <motion.div
        ref={borderRef}
        className="absolute inset-0 border-2 border-primeBlue-400  rounded-sm"
        style={{
          maskImage
        }}
      ></motion.div>
      <div className="inline-flex size-16 justify-center items-center dark:fill-white">
        {icon}
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 ">{description}</p>
    </div>
  );
};
