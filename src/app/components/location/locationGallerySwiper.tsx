"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//import "./gallerySwiper.css";

export default function LocationGallerySwiper() {
  const locationGallerySwiperItems = [
    {
      immago: "/img/location/location_1.avif",
    },
    {
      immago: "/img/location/location_2.avif",
    },
    {
      immago: "/img/location/location_3.avif",
    },
    {
      immago: "/img/location/location_4.avif",
    },
  ];

  return (
    <>
      <div
        className="relative w-full h-[calc(100vh-35.19px)] xl:h-[calc(100vh-107.19px)] flex flex-col justify-between items-center"
      >
        <Swiper
          className="w-full h-full"
          modules={[Scrollbar, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          //scrollbar={{ draggable: true }}
          zoom={true}
          loop={true}
          autoplay
          watchSlidesProgress={true}
          centeredSlides={true}
          lazyPreloadPrevNext={2}
        >
          {locationGallerySwiperItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                width={1440}
                height={810}
                src={`${item.immago}`}
                alt={`location photo ${index} `}
                className="object-cover w-full h-full"
              />
              <div className="location_gallery_swiper_overlay" />
            </SwiperSlide>
          ))}
        </Swiper>
        {/** TAG */}
        <div className="w-[calc(100vw-60px)] xl:w-auto absolute left-0 bottom-0 p-4 xl:px-10 xl:py-6 flex flex-col justify-center items-center xl:items-start absolute_info">
          <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start gap-1 xl:gap-2">
            <p className="text-ethrome-yellow text-[28px] xl:text-[40px] outfit">
              Talent Garden Roma
            </p>
            <p className="text-ethrome-white text-base outfit">
              Via Ostiense, 92 - 00154 Roma RM
            </p>
          </div>
          <div className="grain"></div>
        </div>
      </div>
    </>
  );
}
