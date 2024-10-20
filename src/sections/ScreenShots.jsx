"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { images } from "@/lib/images";

import "swiper/css";

export const ScreenShots = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="relative min-h-screen py-12 text-white">
      <div className="container">
        {/* Main slides */}
        <Swiper
          spaceBetween={10}
          onSwiper={setSwiper}
          className="h-96 w-full rounded-sm"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* navigation */}
        <nav className="my-10">
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
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};
