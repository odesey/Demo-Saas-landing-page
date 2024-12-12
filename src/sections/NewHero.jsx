// "use client";

import React from "react";
import { motion } from "framer-motion";
import { HeaderGrid } from "@/sections/HeaderGrid";
import BlurFade from "@/components/BlurFade";
// import { useSectionInView } from "@/lib/hooks";
import SplineHero from "@/components/SplineHero";
import { Beams } from "@/components/Beams";

export const NewHero = () => {
  // const { ref } = useSectionInView("#home");
  return (
    <>
      <HeaderGrid />
      <Beams />
      <div
        // ref={ref}
        className="w-full flex items-center justify-center p-4 relative overflow-hidden pt-24 lg:pt-0 lg:mt-32"
        id="home"
      >
        <div className="absolute inset-0" style={{ filter: "blur(5px)" }}></div>
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between rounded-xl p-4 sm:p-8 relative z-10">
          <div className="w-full lg:w-1/2 lg:mb-0">
            <BlurFade delay={0.15}>
              <h1 className="text-4xl lg:text-7xl dark:text-white font-display  md:text-6xl my-4 font-bold ">
                Bridge your Church's communication gap with the
                <span className="block text-primeBlue-500 pt-2">
                  {" "}
                  GenesisApp
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className=" text-lg sm:text-xl opacity-60 font-normal mb-8 max-w-[564px]">
                A simple yet powerful software platform that will help your
                church communicate better.
              </p>
              <p className=" text-lg sm:text-xl opacity-60 font-bold mb-8 max-w-[564px]">
                Download GenesisApp and get started today.
              </p>
              <p className="md:text-xl opacity-60 font-light mb-8 left-24 relative flex text-lg">
                (coming soon)
              </p>
            </BlurFade>

            <BlurFade delay={0.25}>
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
                    <p className="text-lg font-semibold dark:text-primeBlue-50 pl-4">
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
                    <p className="text-lg font-semibold dark:text-primeBlue-50 pl-4">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
            </BlurFade>

            {/* <BlurFade delay={0.35}> */}
            {/* <div className="flex flex-row items-center space-x-8">
              <div className="flex flex-col items-start">
                <span className=" text-[44px] font-semibold">23k+</span>
                <span className=" text-base font-normal">Users</span>
              </div>
              <div className="flex flex-col items-start">
                <span className=" text-[44px] font-semibold">1M+</span>
                <span className=" text-base font-normal">Download</span>
              </div>
            </div> */}
            {/* </BlurFade> */}
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0 min-w-96">
            {/* <SplineHero width="500" /> */}
            {/* <SplineViewer
              width="500"
              height="500"
              url="@/public/scene.splinecode"
            ></SplineViewer> */}
            {/* <spline-viewer
              width="500"
              height="500"
              url="@/public/scene.splinecode"
            ></spline-viewer> */}
            <div className="relative w-full lg:justify-center lg:items-center lg:align-middle flex md:w-vw h-96 md:h-[500px] lg:h-screen bottom-16 mt-24 md:mt-16 lg:mt-2">
              <SplineHero />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
