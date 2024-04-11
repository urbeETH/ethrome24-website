"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";

import Image from "next/image";

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
      <div
        className="relative w-full flex flex-col justify-between items-center"
        style={{ height: "calc(100vh - 72px)" }}
      >
        <Swiper
          className="w-full h-full"
          modules={[Navigation, Scrollbar, Autoplay]}
          spaceBetween={0}
          slidesPerView={"auto"}
          navigation
          scrollbar={{ draggable: true }}
          zoom={true}
          loop={true}
          watchSlidesProgress={true}
          centeredSlides={true}
          lazyPreloadPrevNext={2}
        >
          {gallerySwiperItems.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={`${item.immago}`}
                alt={`EthRome 2023 photo ${index} `}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
