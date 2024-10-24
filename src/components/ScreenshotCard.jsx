"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const ScreenshotCard = ({ description, isActive, title }) => {
  return (
    <div className="mx-10 md:mx-2">
      <div
        className={`${
          isActive ? "scale-[1.4] -translate-y-10" : "shadow-mdbl"
        } relative border border-white/60 p-2 min-h-24 text-center rounded dark:border-onyx-800 shadow-mdbl dark:shadow-big duration-500 ease-in-out transform dark:bg-onyx-950 bg-primeBlue-50`}
        // className="relative border border-white/60 p-4 text-center rounded-sm sm:flex-1 dark:border-onyx-800 shadow-mdbl dark:shadow-big min-h-[120px]"
      >
        <h3 className="text-sm tracking-tight font-medium text-onyx-500 dark:text-onyx-100">
          {title}
        </h3>
        <div className="border-b mx-16 border-primeBlue-100 dark:border-onyx-600"></div>
        <p className="mt-2 text-xs tracking-tight dark:text-onyx-200 text-onyx-500">
          {description}
        </p>
      </div>
    </div>
  );
};
