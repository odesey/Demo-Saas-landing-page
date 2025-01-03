"use client";
import { motion } from "framer-motion";

import { useState } from "react";
import {
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
  FiLink,
  FiTarget,
  FiTool,
  FiUpload
} from "react-icons/fi";
import Next from "@/public/chevron-right.svg";
import Prev from "@/public/chevron-left.svg";
import Location from "@/public/location-dot-slash.svg";
import Ads from "@/public/display-slash.svg";
import Handshake from "@/public/handshake-slash.svg";
import Https from "@/public/binary-lock.svg";
import FileLock from "@/public/file-lock.svg";
import { useSectionInView } from "@/lib/hooks";

const Privacy = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < FEATURES.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden py-32 max-w-full md:px-4 md:mb-32">
      <div className="relative z-0 flex-1 items-center justify-center align-middle">
        <div className="-z-10 max-w-screen-lg w-full h-2/4 blur-2xl absolute top-52">
          <div className="absolute left-24 w-56 h-56 bg-violet-500 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl"></div>
          <div className="absolute hidden md:block bottom-2 right-1/4 w-56 h-56 bg-sky-500 rounded-full mix-blend-multiply opacity-70 animate-blob delay-1000 filter blur-3xl"></div>
          <div className="absolute hidden md:block bottom-1/4 left-1/3 w-56 h-56 bg-pink-500 rounded-full mix-blend-multiply opacity-70 animate-blob delay-500 filter blur-3xl"></div>
        </div>
        <div className=" lg:mx-auto lg:max-w-6xl">
          <div className="flex justify-between md:gap-4 xs:gap-2 flex-col">
            <div className="flex-1 items-center align-middle relative flex">
              <h2 className="xs:2text-xl text-4xl font-bold leading-[1.2] md:text-5xl left-[0] md:left-0 relative">
                Church Privacy,{" "}
                <span className="text-onyx-400">
                  {/* <br /> */}
                  is Our Priority!
                </span>
              </h2>
            </div>
            <div className="justify-end relative flex flex-row flex-1 align-middle items-center my-8">
              <div className="flex relative items-center align-middle ">
                <div
                  className={`
                ${position === 0 ? "opacity-0" : ""}
        backdrop-blur-sm backdrop-filter
        items-center justify-center flex size-14 md:size-16 lg:size-20 xs:size-12
        rounded border border-white/75 dark:border-onyx-700 bg-primeBlue-50
        dark:bg-onyx-950 dark:bg-[linear-gradient(135deg,_rgba(31,30,38,0.2),_rgba(75,72,91,0.8))]
        bg-[linear-gradient(135deg,_rgba(158,207,255,0.15),_rgba(255,255,255,0.4))]
        [box-shadow:4px_4px_8px_rgba(158,207,255,0.3),_-4px_-4px_8px_#ffffff]
        dark:[box-shadow:6px_6px_12px_rgba(0,0,0,0.1),_-6px_-6px_12px_rgba(0,0,0,0.01)]
        `}
                >
                  <div className="fill-primeBlue-500 backdrop-blur-sm backdrop-filter">
                    <button
                      onClick={shiftLeft}
                      className="align-middle relative"
                    >
                      <Prev
                        className={`size-8 md:size-10 lg:size-12 inline-flex justify-center items-center ease-in-out transition-opacity duration-300
                        ${position === 0 ? "opacity-0 cursor-default" : ""}
                        `}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex relative items-center align-middle ml-8 xs:ml-4">
                {/* <button onClick={shiftLeft}>
                <Prev
                  className={`md:size-12 lg:mx-6 lg:size-16 size-12 fill-primeBlue-500 z-50 dark:fill-onyx-600 ease-in-out transition-opacity duration-300 ${
                    position === 0 ? "opacity-0" : ""
                  }`}
                />
              </button> */}

                <div
                  className={`
                  ${position === FEATURES.length - 1 ? "opacity-0" : ""}
        backdrop-blur-sm backdrop-filter
        items-center justify-center flex size-14 md:size-16 lg:size-20 xs:size-12
        rounded border border-white/75 dark:border-onyx-700 bg-primeBlue-50
        dark:bg-onyx-950 dark:bg-[linear-gradient(135deg,_rgba(31,30,38,0.2),_rgba(75,72,91,0.8))]
        bg-[linear-gradient(135deg,_rgba(158,207,255,0.15),_rgba(255,255,255,0.4))]
        [box-shadow:4px_4px_8px_rgba(158,207,255,0.3),_-4px_-4px_8px_#ffffff]
        dark:[box-shadow:6px_6px_12px_rgba(0,0,0,0.1),_-6px_-6px_12px_rgba(0,0,0,0.01)]
        `}
                >
                  <div className="fill-primeBlue-500 backdrop-blur-sm backdrop-filter">
                    <button
                      onClick={shiftRight}
                      className="align-middle relative"
                    >
                      <Next
                        className={`size-8 md:size-10 lg:size-12 inline-flex justify-center items-center ease-in-out transition-opacity duration-300
                        ${
                          position === FEATURES.length - 1
                            ? "opacity-0 cursor-default"
                            : ""
                        }
                        `}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 relative left-[2vw] md:left-0">
            {FEATURES.map((feat, index) => (
              <Feature
                {...feat}
                key={index}
                position={position}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ position, index, title, description, Icon }) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",

        duration: 0.35
      }}
      className={`rounded-[4px] relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-mdbl dark:shadow-big md:w-3/5 ${
        index % 2 ? "bg-onyx-800 text-white" : " bg-primeBlue-50"
      }`}
    >
      <div className="flex items-center dark:fill-white relative">
        <div className="flex-1 justify-start flex">
          <h3
            className={`xs:m-2 m-4 text-3xl xs:text-2xl font-bold text-onyx-700
          ${index % 2 ? "text-white/60 dark:text-onyx-300" : ""}`}
          >
            {title}
          </h3>
        </div>
        <div className="justify-end flex-initial relative flex">
          <div
            className={`
      backdrop-blur-sm backdrop-filter
      items-center justify-center relative flex size-20 lg:size-24 xs:size-16
      rounded-sm border xs:rounded

      ${
        index % 2
          ? "border-onyx-700 bg-onyx-800 text-onyx-300 bg-[linear-gradient(135deg,_rgba(31,30,38,0.2),_rgba(75,72,91,0.8))] [box-shadow:6px_6px_12px_rgba(0,0,0,0.1),_-6px_-6px_12px_rgba(0,0,0,0.01)]"
          : " bg-primeBlue-50 border-white/75 bg-[linear-gradient(135deg,_rgba(158,207,255,0.15),_rgba(255,255,255,0.4))] [box-shadow:4px_4px_8px_rgba(158,207,255,0.3),_-4px_-4px_8px_#ffffff]"
      }
      `}
          >
            <div className="fill-primeBlue-300 backdrop-blur-sm backdrop-filter">
              {Icon}
            </div>
          </div>
        </div>
      </div>

      <p
        className={`m-4 xs:m-2 dark:text-onyx-300 text-onyx-700 text-lg flex flex-1 relative items-center ${
          index % 2 ? "text-white/60 dark:text-onyx-300" : ""
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
};
const ICON_CLASS = "size-12 xs:size-10";
export default Privacy;

const FEATURES = [
  {
    title: "Zero Ads",
    Icon: <Ads className={ICON_CLASS} />,
    description:
      "There are absolutely zero ads in GenesisApp, allowing you to focus on God's work!"
  },
  {
    title: "Zero Tracking",
    Icon: <Location className={ICON_CLASS} />,
    description:
      "There is zero tracking in GenesisApp, GPS or otherwise! Only Jesus should be tracking you."
  },
  {
    title: "No Selling Data",
    Icon: <Handshake className={ICON_CLASS} />,
    description:
      "GenesisApp does not share or sell your church's data or your data with any third parties."
  },
  {
    title: "End to End Encryption",
    Icon: <Https className={ICON_CLASS} />,
    description:
      "While there is no secret what God can do, GenesisApp uses end to end encryption to keep your data...secret."
  },
  {
    title: "Encrypted at Rest",
    Icon: <FileLock className={ICON_CLASS} />,
    description:
      "The name of the Lord is a strong tower...so is the strong encryption used by GenesisApp to keep your data secure on our servers."
  }
];
