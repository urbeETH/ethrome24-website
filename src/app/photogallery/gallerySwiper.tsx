"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  Autoplay,
} from "swiper/modules";


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
        >
          {gallerySwiperItems.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={`${item.immago}`}
                className="object-cover w-full h-full slide-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
