"use client";

import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { Squash as Hamburger } from "hamburger-react";
import { ThemeChanger } from "@/app/Theme-changer";
import { routes } from "@/data/routes";

let tabs = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" }
];

export const NewNav = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  const variants = {
    open: {
      height: 480
    },
    closed: {
      height: 70
    }
  };

  return (
    <>
      <div
        className="fixed inset-x-0 top-2 lg:top-8 z-50"
        x-data="{ atTop: true }"
      >
        <motion.div className="mx-auto px-8  transition-all duration-1000 ease-in-out transform lg:max-w-2xl flex sm:align-top">
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            className="flex sm:justify-between backdrop-blur-xl backdrop-filter dark:bg-onyx-900/60 border dark:border-onyx-800 border-primeBlue-100 md:flex-row md:items-center md:justify-between mx-auto p-2 relative lg:rounded-2xl rounded-xl shadow-mdbl dark:shadow-massive w-full "
            x-data="{ open: false }"
          >
            <div className="items-top flex flex-row justify-between md:justify-start sm:pt-1">
              <a
                className="inline-flex text-md items-top font-display pl-2 hover:text-white/50"
                href="/"
              >
                <span>Aubergine</span>
              </a>
              {/* <div ref={ref} className="md:hidden">
                <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
              </div> */}
            </div>
            <div className="flex space-x-1 hidden md:block">
              <nav className="flex gap-8 text-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? ""
                        : "hover:text-[#2895ff] font-medium"
                    } relative rounded-full px-3 py-1.5 text-sm  transition focus-visible:outline-2`}
                    style={{
                      WebkitTapHighlightColor: "transparent"
                    }}
                  >
                    {activeTab === tab.id && (
                      <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-gradient-to-tr shadow-mdbl from-primeBlue-500 via-primeBlue-400 to-primeBlue-300 dark:mix-blend-screen mix-blend-multiply "
                        style={{ borderRadius: 9999 }}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6
                        }}
                      />
                    )}
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex gap-4 items-top">
              <ThemeChanger />
              {/* <Button>Join waitlist</Button> */}
              <div ref={ref} className="md:hidden">
                <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0"
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
        </motion.div>
      </div>
    </>
  );
};
