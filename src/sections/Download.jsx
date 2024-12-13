"use client";

import { motion } from "framer-motion";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import DownloadBG from "@/public/download-section-bg.webp";
import MyChurch from "@/public/images/MyChurch.jpg";
import Image from "next/image";

const Download = () => {
  const { ref } = useSectionInView("#download");

  return (
    <section
      id="download"
      // style={{
      //   backgroundImage: `url(${DownloadBG.src})`,
      //   // backgroundSize: "contain",
      //   objectFit: "contain"
      // }}
      className="scroll-m-20 min-h-screen md:min-h-[90vh] w-full  items-center justify-center align-middle relative flex overflow-hidden mt-40 md:mt-4"
      ref={ref}
    >
      {/* <Image
        src={DownloadBG}
        alt="Background Image"
        className="absolute md:object-scale-down -z-1"
      /> */}
      <div
        className="container w-full bg-primeBlue-100 dark:bg-onyx-800 rounded-sm h-full p-8"
        style={{
          backgroundImage: `url(${DownloadBG.src})`,
          backgroundRepeat: "no-repeat",
          // backgroundSize: "contain",
          objectFit: "fit"
        }}
      >
        <div className="flex flex-1 relative md:flex-row h-full flex-col">
          {/* left side of download section */}
          <div className="flex-1 justify-center align-middle items-center relative flex flex-col">
            <div className="max-w-96 mb-16">
              <h1 className="text-4xl md:text-5xl font-bold tracking-normal font-display lg:text-6xl text-center md:text-left">
                Download <span className="text-primeBlue-500">GenesisApp</span>{" "}
                and get started today.
              </h1>
            </div>
            <div>
              <div className="flex flex-wrap gap-3 mb-12">
                <a
                  href="/"
                  title="link to your page"
                  aria-label="your label"
                  className="mx-2 my-2 inline-flex items-center h-12 justify-center w-full sm:w-auto px-7 py-3 text-sm text-center shadow-mdbl dark:shadow-big duration-500 ease-in-out transform text-onyx-950-700 rounded-xl bg-primeBlue-50 border border-white dark:border-onyx-800 dark:bg-onyx-900"
                >
                  <div className="logo">
                    <svg
                      className="w-6 h-6 fill-black dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="419.955"
                      height="512"
                      viewBox="0 0 419.955 512"
                    >
                      <g transform="translate(-46.022)">
                        <path d="M185.255,512c-76.2-.439-139.233-155.991-139.233-235.21,0-129.4,97.075-157.734,134.487-157.734,16.86,0,34.863,6.621,50.742,12.48,11.1,4.087,22.588,8.306,28.975,8.306,3.823,0,12.832-3.589,20.786-6.738,16.963-6.753,38.071-15.146,62.651-15.146h.146c18.354,0,74,4.028,107.461,54.272l7.837,11.777-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267,0,52.031,33.3,72.041,49.292,81.665,7.061,4.248,14.37,8.628,14.37,18.208,0,6.255-49.922,140.566-122.417,140.566-17.739,0-30.278-5.332-41.338-10.034-11.191-4.761-20.845-8.862-36.8-8.862-8.086,0-18.311,3.823-29.136,7.881C221.5,505.73,204.752,512,185.753,512Z" />
                        <path d="M351.343,0c1.888,68.076-46.8,115.3-95.425,112.342C247.9,58.015,304.54,0,351.343,0Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="text">
                    <p className="text-base md:text-lg font-semibold dark:text-primeBlue-50 pl-4">
                      Apple Store
                    </p>
                  </div>
                </a>
                <a
                  href="/"
                  title="link to your page"
                  aria-label="your label"
                  className="mx-2 my-2 inline-flex items-center h-12 justify-center w-full sm:w-auto px-6 py-3 text-sm text-center shadow-mdbl dark:shadow-big duration-500 ease-in-out transform text-onyx-950-700 rounded-xl bg-primeBlue-50 border border-white dark:border-onyx-800 dark:bg-onyx-900"
                >
                  <div className="image">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="436.057"
                      height="469.847"
                      viewBox="0 0 436.057 469.847"
                    >
                      <g transform="translate(-16.896)">
                        <path
                          d="M270.336,234.965,34.39,462.165A40.146,40.146,0,0,1,16.9,428.672V41.258A40.146,40.146,0,0,1,34.39,7.765Z"
                          fill="#2196f3"
                        />
                        <path
                          d="M352.9,155.6l-82.56,79.36L34.39,7.765a31.446,31.446,0,0,1,2.773-1.92A40.363,40.363,0,0,1,77.91,5.2Z"
                          fill="#4caf50"
                        />
                        <path
                          d="M452.95,234.965a40.791,40.791,0,0,1-21.333,36.267L352.9,314.325l-82.56-79.36L352.9,155.6l78.72,43.093A40.791,40.791,0,0,1,452.95,234.965Z"
                          fill="#ffc107"
                        />
                        <path
                          d="M352.9,314.325,77.91,464.725a40.9,40.9,0,0,1-40.747-.64,31.44,31.44,0,0,1-2.773-1.92l235.947-227.2Z"
                          fill="#f44336"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="text">
                    <p className="text-base md:text-lg  font-semibold dark:text-primeBlue-50 pl-4">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* right side of download section */}
          <div className="flex-1 justify-center align-middle items-center flex-row flex overflow-hidden min-h-full py-10">
            <FloatingPhone />
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)"
      }}
      className="rounded-[24px] bg-primeBlue-400 dark:bg-onyx-600"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)"
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)"
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut"
        }}
        className="relative h-96 w-48 rounded-[24px] border-2 border-b-4 border-r-4 dark:border-onyx-500 border-primeBlue-300 border-l-neutral-200 border-t-neutral-200 bg-primeBlue-100 p-1 pl-[3px] pt-[3px]"
      >
        <Image
          src={MyChurch}
          alt="My Church Image"
          className="object-contain h-full"
          priority={false}
          placeholder="blur"
        />
      </motion.div>
    </div>
  );
};

export default Download;
