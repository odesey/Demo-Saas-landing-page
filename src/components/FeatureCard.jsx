"use client";
import { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue
} from "framer-motion";

import Logo from "@/assets/logo.svg";

export const FeatureCard = ({ index, icon, title, description }) => {
  const borderRef = useRef(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(150px 150px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const updateMousePosition = (e) => {
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
    <motion.div
      transition={{
        duration: 0.2,
        ease: "easeInOut"
        // delay: index * 0.019
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
      relative border
    border-primeBlue-50 px-4 my-2 py-2
    text-center rounded-sm sm:flex-1 dark:border-onyx-800
    shadow-mdbl dark:shadow-big min-h-[260px] md:min-h-[340px]
    `}
    >
      <motion.div
        ref={borderRef}
        className="absolute inset-0 border-2 rounded-sm "
        style={{
          maskImage
        }}
      ></motion.div>
      <div className="my-2 inline-flex justify-center items-center dark:fill-white">
        <div
          className={`
        backdrop-blur-sm backdrop-filter
        items-center justify-center relative flex size-20 lg:size-24
        rounded-sm border border-white/75 dark:border-onyx-700 bg-primeBlue-50
        dark:bg-onyx-950 dark:bg-[linear-gradient(135deg,_rgba(31,30,38,0.2),_rgba(75,72,91,0.8))]
        bg-[linear-gradient(135deg,_rgba(158,207,255,0.15),_rgba(255,255,255,0.4))]
        [box-shadow:4px_4px_8px_rgba(158,207,255,0.3),_-4px_-4px_8px_#ffffff]
        dark:[box-shadow:6px_6px_12px_rgba(0,0,0,0.1),_-6px_-6px_12px_rgba(0,0,0,0.01)]
        `}
        >
          <div className="fill-primeBlue-500 backdrop-blur-sm backdrop-filter">
            {icon}
          </div>
        </div>
      </div>
      <h3 className="my-4 mx-4 text-2xl font-bold text-onyx-400 dark:text-onyx-100">
        {title}
      </h3>
      <p className="m-4 dark:text-onyx-300 text-onyx-500 text-lg">
        {description}
      </p>
    </motion.div>
  );
};
