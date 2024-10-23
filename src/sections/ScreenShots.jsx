"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Controller,
  EffectCoverflow,
  Navigation,
  Keyboard
} from "swiper/modules";

import { ScreenshotCard } from "@/components/ScreenshotCard";
import { images } from "@/lib/images";

import "swiper/css";

export const ScreenShots = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const swiperParameters = {
    modules: [A11y, EffectCoverflow, Keyboard, Navigation],
    grabCursor: true,
    slideToClickedSlide: true,
    loop: true,
    loopAdditionalSlides: 2,
    effect: "coverflow",
    coverflowEffect: { slideShadows: false, scale: 0.8 },
    speed: 500,
    navigation: {
      enabled: true,
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    },
    keyboard: { enabled: true },
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
    resistanceRatio: 0.5,
    breakpoints: {
      768: {
        slidesPerView: 2,
        centeredSlides: true,
        loopAdditionalSlides: 0,
        speed: 500,
        navigation: { enabled: false },
        resistanceRatio: 0.85
      },
      1280: { slidesPerView: 3 }
    }
  };

  return (
    <section className="relative py-12">
      <div className="container">
        <div className="text-center max-w-3xl lg:mx-auto">
          <h3 className="text-4xl font-display">Screenshots</h3>
          <p className="text-onyx-300 my-4">
            Here are some of the features that GenesisApp offers
          </p>
        </div>
        {/* Main slides */}
        <div className="flex">
          {/* <Swiper
            slideToClickedSlide={true}
            modules={[A11y, EffectCoverflow, Keyboard]}
            speed={500}
            keyboard={{ enabled: true }}
            watchSlidesProgress={true}
            observer={true}
            observeParents={true}
            effect={"coverflow"}
            grabCursor={true}
            controller={{ control: secondSwiper }}
            coverflowEffect={{ scale: 0.8 }}
            loop={true}
            spaceBetween={10}
            onSwiper={setFirstSwiper}
            breakpoints={{
              768: { slidesPerView: 2, centeredSlides: true, speed: 600 },
              1280: { slidesPerView: 3 }
            }}
            className=""
          > */}
          <Swiper {...swiperParameters}>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <Image
                    width={0}
                    height={0}
                    // style={{ width: "100%", height: "auto" }}
                    src={image.src}
                    alt={image.alt}
                    className="block object-scale-down"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <Swiper
            modules={[Controller]}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
          >

          </Swiper> */}
        </div>
        {/* navigation */}
        {/* <nav className="my-10">
          <ul className="flex gap-4 justify-center items-center">
            {images.map((image, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    swiper.slideTo(index);
                    // setShowNavigation(false)
                  }}
                  className="relative block h-20 w-20 overflow-hidden rounded-sm"
                >
                  <ScreenshotCard title="Title" description="description" />
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-contain"
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
    </section>
  );
};
