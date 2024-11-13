"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Controller,
  EffectCoverflow,
  EffectCube,
  Keyboard
} from "swiper/modules";

import { ScreenshotCard } from "@/components/ScreenshotCard";
import { images } from "@/lib/images";
import Next from "@/public/chevron-right.svg";
import Prev from "@/public/chevron-left.svg";
import { useSectionInView } from "@/lib/hooks";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/navigation";

export const ScreenShots = () => {
  const [swiper, setSwiper] = useState(null);
  const [showNavigation, setShowNavigation] = useState(false);

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
    swiperRef.current.swiper.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef.current.swiper.slideNext();
  }, [swiperRef]);

  // const swiperParameters = {
  //   modules: [A11y, EffectCoverflow, Keyboard, Controller],
  //   onSwiper: setFirstSwiper,
  //   longSwipes: false,
  //   controller: { control: secondSwiper },
  //   centeredSlides: true,
  //   grabCursor: true,
  //   slideToClickedSlide: true,
  //   // loop: true,
  //   loopAdditionalSlides: 2,
  //   effect: "coverflow",
  //   coverflowEffect: { slideShadows: false },
  //   speed: 500,
  //   keyboard: { enabled: true },
  //   watchSlidesProgress: true,
  //   observer: true,
  //   observeParents: true,
  //   resistanceRatio: 0.5,
  //   breakpoints: {
  //     // 475:
  //     // 640
  //     768: {
  //       slidesPerView: 2,
  //       centeredSlides: true,
  //       loopAdditionalSlides: 2,
  //       speed: 500,
  //       resistanceRatio: 0.85
  //     },
  //     // 1024:
  //     1280: {
  //       slidesPerView: 3,
  //       centeredSlides: true,
  //       loopAdditionalSlides: 2,
  //       speed: 500,
  //       resistanceRatio: 0.85
  //     }
  //     // 1536:
  //   }
  // };

  const { ref } = useSectionInView("#screenshots");

  const swiperParameters = {
    modules: [A11y, Controller, EffectCoverflow, Keyboard],
    centeredSlides: true,
    grabCursor: true,
    slideToClickedSlide: true,
    controller: { control: firstSwiper },
    onSwiper: setSecondSwiper,
    // loop: true,
    effect: "coverflow",
    coverflowEffect: {
      depth: 300,
      slideShadows: false,
      rotate: 30,
      scale: 0.55,
      stretch: -100,
      modifier: 0.5
    },
    speed: 500,
    keyboard: { enabled: true },
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    breakpoints: {
      375: { slidesPerView: 1 },
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      // 1024
      // 1280
      // 1980
      1280: { slidesPerView: 3 }
    }
  };

  // const swiperCubeParameters = {
  //   modules: [A11y, EffectCube, Keyboard],
  //   grabCursor: true,
  //   loop: true,
  //   effect: "cube",
  //   cubeEffect: { slideShadows: false, shadowOffset: 50 },
  //   speed: 800,
  //   keyboard: { enabled: true },
  //   watchSlidesProgress: true,
  //   observer: true,
  //   observeParents: true
  // };

  return (
    <section
      ref={ref}
      className="h-screen w-full flex justify-center items-center align-middle"
      id="screenshots"
    >
      <div className="container  ">
        {/* navigation */}
        {/* <nav className="my-10">
          <ul className="flex gap-4">
            {images.map((image, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    swiper.slideTo(index);
                    // setShowNavigation(false)
                  }}
                  className="relative block h-20 w-20 overflow-hidden rounded-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav> */}
        <div className="flex flex-col">
          {/* Main slides */}
          <div className="flex relative">
            <Swiper
              className="mainSwiper"
              {...swiperParameters}
              // effect={"coverflow"}
              // coverflowEffect={{ slideShadows: false }}
              // modules={[A11y, EffectCoverflow, Keyboard, Controller]}
              // spaceBetween={10}
              // onSwiper={setSwiper}
              // className=""
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="">
                  <div className="flex items-center justify-center rounded-full bg-transparent">
                    <Image
                      // fill
                      height={2340}
                      width={1080}
                      sizes="(min-width: 1620px) 1360px, (min-width: 900px) 660px, (min-width: 660px) calc(18.18vw + 500px), (min-width: 380px) 340px, 260px"
                      src={image.src}
                      alt={image.alt}
                      className="block h-full w-full bg-primeBlue-100 bg-opacity-10 object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex relative mt-2 items-center justify-center align-middle">
            <button
              onClick={handlePrev}
              className="flex absolute -left-2 md:left-40 lg:left-96"
            >
              <Prev className="md:size-16 lg:size-20 size-12 fill-primeBlue-500 z-50 dark:fill-onyx-600" />
            </button>
            <Swiper
              ref={swiperRef}
              effect={"cube"}
              controller={{ control: secondSwiper }}
              onSwiper={setFirstSwiper}
              grabCursor
              speed={500}
              watchSlidesProgress
              cubeEffect={{
                shadow: false,
                slideShadows: false,
                shadowOffset: 0,
                shadowScale: 0.8
              }}
              navigation={{
                enabled: true,
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next"
              }}
              modules={[A11y, Controller, EffectCube]}
              className="mySwiper"
              style={{
                userSelect: "none",
                boxSizing: "border-box",
                overflow: "visible"
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <ScreenshotCard
                      isActive={isActive}
                      description={image.cardDescription}
                      title={image.cardTitle}
                      className="w-[240px] h-[10px]"
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={handleNext}
              className="absolute -right-2 md:right-40 lg:right-96"
            >
              <Next className="md:size-16 lg:size-20 size-12 fill-primeBlue-500 z-50 dark:fill-onyx-600" />
            </button>
            {/* <div className="swiper-button-prev" />
            <div className="swiper-button-next" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
