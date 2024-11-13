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

  const swiperParameters = {
    modules: [A11y, EffectCoverflow, Keyboard, Controller],
    onSwiper: setFirstSwiper,
    longSwipes: false,
    controller: { control: secondSwiper },
    centeredSlides: true,
    grabCursor: true,
    slideToClickedSlide: true,
    // loop: true,
    loopAdditionalSlides: 2,
    effect: "coverflow",
    coverflowEffect: { slideShadows: false },
    speed: 500,
    keyboard: { enabled: true },
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    resistanceRatio: 0.5,
    breakpoints: {
      // 475:
      // 640
      768: {
        slidesPerView: 2,
        centeredSlides: true,
        loopAdditionalSlides: 2,
        speed: 500,
        resistanceRatio: 0.85
      },
      // 1024:
      1280: {
        slidesPerView: 3,
        centeredSlides: true,
        loopAdditionalSlides: 2,
        speed: 500,
        resistanceRatio: 0.85
      }
      // 1536:
    }
  };

  const { ref } = useSectionInView("#screenshots");

  console.log(swiperRef.current);

  return (
    <section ref={ref} className="relative py-12 scroll-m-20" id="screenshots">
      <div className="container">
        <div className="text-center max-w-4xl lg:mx-auto">
          <h3 className="text-4xl font-display">Screenshots</h3>
          <p className="text-onyx-300 my-4">
            Here are some of the features that GenesisApp offers
          </p>
        </div>
        {/* Main slides */}
        <div className="flex flex-col">
          <div className="flex relative flex-1 justify-center items-center align-middle">
            <button onClick={handlePrev}>
              <Prev className="size-10 fill-primeBlue-500 absolute z-50 -left-4 dark:fill-onyx-600 " />
            </button>
            <Swiper {...swiperParameters}>
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center">
                    <Image
                      // fill
                      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      width={1080}
                      height={2340}
                      src={image.src}
                      alt={image.alt}
                      // className="block object-scale-down h-[400px] w-40 md:h-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button onClick={handleNext} className="">
              <Next className="size-10 fill-primeBlue-500 absolute z-50 -right-4 dark:fill-onyx-600 " />
            </button>
          </div>
          {/* <div className="flex relative -top-16 align-top ">
            <Swiper
              ref={swiperRef}
              className="mySwiper2"
              autoHeight
              breakpoints={{
                320: { slidesPerView: 1.1, centeredSlides: true },
                768: {
                  slidesPerView: 3,
                  centeredSlides: true,
                  loopAdditionalSlides: 2,
                  speed: 500,
                  resistanceRatio: 0.85
                },
                1280: {
                  slidesPerView: 5,
                  centeredSlides: true,
                  loopAdditionalSlides: 2,
                  speed: 500,
                  resistanceRatio: 0.85
                }
              }}
              modules={[Controller]}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              spaceBetween={60}
              slidesPerView={5}
              loopAdditionalSlides={2}
              grabCursor
              slideToClickedSlide
              centeredSlides
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <ScreenshotCard
                      isActive={isActive}
                      description={image.cardDescription}
                      title={image.cardTitle}
                      className="swipeCard"
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
        </div>
      </div>
    </section>
  );
};
