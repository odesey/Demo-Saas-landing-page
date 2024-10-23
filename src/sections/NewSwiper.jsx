"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "@/assets/img_1.jpg";
import slide_image_2 from "@/assets/img_2.jpg";
import slide_image_3 from "@/assets/img_3.jpg";
import slide_image_4 from "@/assets/img_4.jpg";
import slide_image_5 from "@/assets/img_5.jpg";
import slide_image_6 from "@/assets/img_6.jpg";
import slide_image_7 from "@/assets/img_7.jpg";
import CircleArrowRight from "@/assets/circle-arrow-right.svg";
import CircleArrowLeft from "@/assets/circle-arrow-left.svg";

export const images = [
  {
    src: slide_image_1,
    alt: "First"
  },
  { src: slide_image_2, alt: "Second" },
  { src: slide_image_3, alt: "Third" },
  { src: slide_image_4, alt: "Fourth" }
];

export const NewSwiper = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="py-12">
      <div className="container">
        <Swiper
          effect={"coverflow"}
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-96 w-full rounded-lg"
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
      </div>
    </section>
  );
};
