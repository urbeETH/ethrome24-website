"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./gallerySwiper.css";

import { gallerySwiperItems } from "./gallerySwiperItems";

export default function GallerySwiper() {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col justify-between items-center">
        <Swiper
          className="w-full h-screen"
          modules={[Navigation, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          zoom={true}
          loop={true}
          watchSlidesProgress={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {gallerySwiperItems.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={`${item.immago}`} className="object-contain w-full h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
