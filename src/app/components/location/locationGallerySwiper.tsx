"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import ButtonPurple from "../buttons/buttonPurple";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//import "./gallerySwiper.css";

export default function LocationGallerySwiper() {
  const locationGallerySwiperItems = [
    {
      immago: "/img/location/location_1.png",
    },
    {
      immago: "/img/location/location_2.png",
    },
    {
      immago: "/img/location/location_3.png",
    },
    {
      immago: "/img/location/location_4.png",
    },
  ];

  return (
    <>
      <div
        className="relative w-full flex flex-col justify-between items-center"
        style={{ height: "calc(100vh - 72px)" }}
      >
        
      <ButtonPurple
        cta="Side Events"
        route="https://lu.ma/ethrome-24"
        variant="primary"
        className="absolute right-4 top-4 z-30 md:hidden"
      />
        <Swiper
          className="w-full h-full"
          modules={[Scrollbar, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          zoom={true}
          loop={true}
          autoplay
          watchSlidesProgress={true}
          centeredSlides={true}
          lazyPreloadPrevNext={2}
        >
          {locationGallerySwiperItems.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={`${item.immago}`}
                alt={`location photo ${index} `}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="location_gallery_swiper_overlay"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
