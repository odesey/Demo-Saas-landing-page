"use client";

import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";
import { ThemeChanger } from "@/app/Theme-changer";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "@/data/routes";

let tabs = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" }
];

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <header className="py-4 border-none sticky top-0 z-50">
      <div className="absolute inset-0  -z-10 "></div>
      <div className="container">
        <motion.div className="flex border rounded-full max-w-2xl mx-auto relative shadow-[0_10px_20px_rgba(_40,149,_255,_0.6)]">
          <div className="flex backdrop-blur-md rounded-full mx-auto  w-full justify-between items-center relative md:p-2.5">
            <div>
              <div className="border w-10 h-10 rounded-lg inline-flex justify-center items-center border-white/15">
                <div className="absolute inset-0 -z-10 hidden md:block"></div>
                <LogoIcon className="w-8 h-8" />
              </div>
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
            {/* <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="transition">
                Features
              </a>
              <a href="#" className="transition">
                Developers
              </a>
              <a href="#" className="transition">
                Pricing
              </a>
              <a href="#" className="transition">
                About us
              </a>
            </nav>
          </div> */}
            <div className="flex gap-4 items-center">
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
                      transition={{ duration: 0.2 }}
                      className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 border-b border-b-white/20"
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
                                delay: 0.1 + idx / 15
                              }}
                              key={route.title}
                              className="w-full p-[0.08rem] rounded-xl "
                            >
                              <a
                                onClick={() => setOpen((prev) => !prev)}
                                className={
                                  "flex items-center justify-between w-full p-5 rounded-xl dark:bg-onyx-950 bg-primeBlue-100 shadow-md"
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
          </div>
        </motion.div>
      </div>
    </header>
  );
};
