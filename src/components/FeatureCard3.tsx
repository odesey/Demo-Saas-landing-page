"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import Logo from "@/assets/logo.svg";

export const FeatureCard3 = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode,
  title: string,
  description: string
}) => {
  const borderRef = useRef < HTMLDivElement > null;
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
        {/* <div></div> */}
        <div className="size-32 bg-primeBlue-100 justify-center items-center align-middle flex rounded-full">
          <div className="size-24 bg-primeBlue-200 relative justify-center items-center align-middle flex rounded-full">
            <div className=" size-16 bg-primeBlue-300 relative flex justify-center items-center align-middle rounded-full">
              <div className="size-8 flex relative fill-white justify-center items-center align-middle">
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mb-6 mx-4 text-2xl font-bold text-onyx-700 dark:text-onyx-100">
        {title}
      </h3>
      <p className="m-4 dark:text-onyx-300 text-onyx-500 text-lg">
        {description}
      </p>
    </div>
  );
};