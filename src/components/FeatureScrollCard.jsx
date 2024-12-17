"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import MyChurch from "@/public/images/MyChurch.jpg";

const FeatureScrollCard = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(20vh + ${i * 25}px)`
        }}
        className="flex flex-col relative top-[-25%] h-[500px] w-full rounded-[8px] origin-top border bg-primeBlue-50
        dark:bg-onyx-950
    border-primeBlue-50 p-4 md:p-6
    text-center sm:flex-1 dark:border-onyx-800
    shadow-mdbl dark:shadow-big min-h-[260px] md:min-h-[340px]"
      >
        <h2 className="m-2 md:m-4 text-2xl md:text3xl lg:text-4xl text-start font-bold">
          {title}
        </h2>
        <div className="flex h-full mt-12 ">
          <div className="w-[40%] relative top-[10%]">
            <p className="text-lg">{description}</p>
            <span className="flex gap-[5px] items-center">
              <a
                href={url}
                target="_blank"
                className="text-sm underline cursor-pointer"
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative h-full overflow-hidden rounded w-4/6">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image src={MyChurch} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureScrollCard;
