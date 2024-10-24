"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const ScreenshotCard = ({ description, isActive, title }) => {
  return (
    <div
      className={`${
        isActive ? "scale-[1.3] -translate-y-10" : "shadow-mdbl"
      } relative border border-white/60 p-2 min-h-24 text-center rounded dark:border-onyx-800 shadow-mdbl dark:shadow-big duration-500 ease-in-out transform dark:bg-onyx-950 bg-primeBlue-50`}
      // className="relative border border-white/60 p-4 text-center rounded-sm sm:flex-1 dark:border-onyx-800 shadow-mdbl dark:shadow-big min-h-[120px]"
    >
      <h3 className="text-sm font-medium text-onyx-700 dark:text-onyx-100">
        {title}
      </h3>
      <p className="mt-2 text-sm dark:text-onyx-300 text-onyx-500">
        {description}
      </p>
    </div>
  );
};
