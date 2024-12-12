"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import ChevronUp from "@/assets/chevron-up.svg";

export const Question = ({ title, children, defaultOpen = false }) => {
  const [ref, { height }] = useMeasure();

  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-primeBlue-200 dark:border-b-onyx-800"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          // variants={{
          //   open: {
          //     color: "rgba(3, 6, 23, 0)"
          //   },

          //   closed: {
          //     color: "rgba(3, 6, 23, 0)"
          //   }
          // }}
          className=" text-left text-lg font-medium text-primeBlue-300 "
        >
          {title}
        </motion.span>

        <motion.span
          variants={{
            open: {
              rotate: "180deg"
            },
            closed: {
              rotate: "0deg"
            }
          }}
        >
          <ChevronUp className="size-5 fill-onyx-300 " />
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",

          marginBottom: open ? "24px" : "0px"
        }}
        className="overflow-hidden dark:text-onyx-200 text-onyx-600"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};
