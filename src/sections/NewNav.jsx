"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from "framer-motion";
import { useClickAway } from "react-use";
import { Squash as Hamburger } from "hamburger-react";
import { useMediaQuery } from "react-responsive";

import { ThemeChanger } from "@/app/Theme-changer";
import { routes } from "@/data/routes";
import Logo from "@/assets/logo.svg";
import { useActiveSectionContext } from "@/context/active-section";

let NAV_TITLES = [
  { hash: "#home", label: "" },
  { hash: "#features", label: "Features" },
  { hash: "#screenshots", label: "Screenshots" },
  { hash: "#download", label: "Download" },
  { hash: "#faq", label: "F.A.Q" },
  { hash: "#contact", label: "Contact" }
];

export const NewNav = () => {
  const { activeTab, setActiveTab, setLastClickedTime } =
    useActiveSectionContext();

  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  // const [isOpen, setOpen] = useState(false);
  // const ref = useRef(null);
  // useClickAway(ref, () => setOpen(false));
  // let [activeTab, setActiveTab] = useState(NAV_TITLES[0].hash);
  const [isMobile, setIsMobile] = useState(false);
  const desktop = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    setIsMobile(desktop);
  }, [desktop]);

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const variants = {
    open: {
      height: 490
    },
    closed: {
      height: 70
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { y: "-200%" },
        visible: { y: 0 }
      }}
      animate={hidden && isMobile ? "hidden" : "visible"}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      className="fixed inset-x-0 top-2 lg:top-8 z-50"
    >
      <motion.div className="mx-auto px-6 lg:max-w-4xl flex sm:align-top">
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
          className="flex justify-between md:justify-around backdrop-blur-xl backdrop-filter dark:bg-onyx-900/60 border dark:border-onyx-800 border-primeBlue-100 md:flex-row md:items-center mx-auto p-2 relative lg:rounded-2xl rounded-xl shadow-mdbl dark:shadow-massive w-full "
        >
          <div className="items-top flex flex-row justify-between md:justify-start sm:pt-1">
            <a
              className="inline-flex text-md items-top font-display pl-2 hover:text-white/50"
              href="/"
            >
              <Logo className="size-8" />
            </a>
          </div>
          <div className="space-x-1 hidden md:block">
            <nav className="flex lg:gap-6 text-sm md:gap-2">
              {NAV_TITLES.map((tab) => (
                <button
                  key={tab.hash}
                  onClick={() => setActiveTab(tab.hash)}
                  className={`${
                    activeTab === tab.hash
                      ? "font-bold"
                      : "hover:text-[#2895ff] font-medium"
                  } relative rounded-full px-3 py-1.5 text-lg transition focus-visible:outline-2`}
                  style={{
                    WebkitTapHighlightColor: "transparent"
                  }}
                >
                  {activeTab === tab.hash && (
                    <motion.span
                      layoutId="bubble"
                      className={`absolute inset-[0.5px]
                        z-10 shadow-mdbl bg-gradient-to-tr
                        from-primeBlue-500 via-primeBlue-400 to-primeBlue-300
                        dark:mix-blend-screen mix-blend-multiply p-[1.5px]
                        `}
                      style={{ borderRadius: 9999 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6
                      }}
                    >
                      <span className="bg-primeBlue-50 dark:bg-onyx-900 flex h-full w-full rounded-full"></span>
                    </motion.span>
                  )}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex relative gap-4 align-top justify-start items-start">
            <div className="justify-self-end pt-1 md:pt-0">
              <ThemeChanger />
            </div>
            {/* <ThemeChanger /> */}
            <div ref={ref} className="md:hidden justify-self-end">
              {/* <Hamburger2 /> */}
              <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 justify-center items-center align-middle"
                  >
                    <ul className="grid gap-2">
                      {routes.map((route, idx) => {
                        // const { Title } = route;

                        return (
                          <motion.li
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 25,
                              delay: 0.1 + idx / 30
                            }}
                            key={route.title}
                            className="w-full p-[0.08rem] rounded-xl "
                          >
                            <a
                              onClick={() => setOpen((prev) => !prev)}
                              className={
                                "flex items-top justify-between w-full p-5 text-center text-black-200 duration-500 ease-in-out transform border border-white dark:border-onyx-800 dark:bg-onyx-900 rounded-xl bg-transparent backdrop-blur-md shadow-md backdrop-filter"
                              }
                              href={route.href}
                            >
                              <span className="flex gap-1 text-lg">
                                {route.title}
                              </span>
                              {/* <Icon className="text-xl" /> */}
                            </a>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* <MenuIcon className="w-8 h-8 md:hidden" /> */}
          </div>
        </motion.div>
        {/* <div className="flex items-top ml-3 mt-[14px] ">
            <ThemeChanger />
          </div> */}
      </motion.div>
    </motion.div>
  );
};
