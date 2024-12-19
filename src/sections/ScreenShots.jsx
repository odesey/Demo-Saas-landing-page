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
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
    swiperRef.current.swiper.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef.current.swiper.slideNext();
  }, [swiperRef]);

  const { ref } = useSectionInView("#screenshots");

  const swiperParameters = {
    longSwipes: false,
    modules: [A11y, Controller, EffectCoverflow, Keyboard],
    centeredSlides: true,
    grabCursor: true,
    slideToClickedSlide: true,
    controller: { control: firstSwiper },
    onSwiper: setSecondSwiper,
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
      1440: { slidesPerView: 3 },
      1280: { slidesPerView: 3 }
    }
  };

  const swiperCubeParameters = {
    longSwipes: false,
    modules: [A11y, Controller, EffectCube, Keyboard],
    centeredSlides: true,
    grabCursor: true,
    controller: { control: secondSwiper },
    onSwiper: setFirstSwiper,
    effect: "cube",
    cubeEffect: { slideShadows: false, shadowOffset: 50 },
    speed: 500,
    keyboard: { enabled: true },
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    cubeEffect: {
      shadow: false,
      slideShadows: false,
      shadowOffset: 0,
      shadowScale: 0.8
    },
    navigation: {
      enabled: true,
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    },
    className: "mySwiper"
  };

  return (
    <section
      ref={ref}
      className="h-screen w-full flex justify-center items-center align-middle md:h-[95vh]"
      id="screenshots"
    >
      <div className="container">
        <div className="flex-1 items-center align-middle relative flex justify-center mb-24">
          <h2 className="text-3xl xs:text-2xl font-bold leading-[1.2] md:text-5xl left-[2vw] md:left-0 relative text-onyx-400">
            Genesis
            <span className="dark:text-onyx-50 text-onyx-700">
              App in Action
            </span>
          </h2>
        </div>
        <div className="flex flex-col">
          {/* Main slides */}
          <div className="flex relative mb-2">
            <Swiper className="mainSwiper" {...swiperParameters}>
              {images.map((image, index) => (
                <SwiperSlide key={index} className="">
                  <div className="flex items-center justify-center bg-transparent">
                    <Image
                      // fill
                      priority={false}
                      placeholder="blur"
                      height={2340}
                      width={1080}
                      sizes="(min-width: 1620px) 1360px, (min-width: 900px) 660px, (min-width: 660px), (min-width: 400px) 680px, calc(18.18vw + 500px), (min-width: 350px)"
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
              className="flex absolute -left-4 md:left-40 lg:left-96 top-12 lg:top-20"
            >
              <Prev className="md:size-16 lg:size-20 size-12 fill-primeBlue-500 z-50 dark:fill-onyx-600" />
            </button>
            <Swiper
              ref={swiperRef}
              {...swiperCubeParameters}
              style={
                {
                  // userSelect: "none",
                  // boxSizing: "border-box",
                  // overflow: "visible"
                }
              }
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <ScreenshotCard
                    description={image.cardDescription}
                    title={image.cardTitle}
                    className="w-[240px] h-[10px] lg:w-72"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={handleNext}
              className="absolute -right-4 md:right-40 lg:right-96 top-12 lg:top-20"
            >
              <Next className="md:size-16 lg:size-20 size-12 fill-primeBlue-500 z-50 dark:fill-onyx-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
