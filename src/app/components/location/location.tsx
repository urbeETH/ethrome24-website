"use client";

import Marquee from "react-fast-marquee";

import LocationGallerySwiper from "./locationGallerySwiper";

export default function Location() {
  return (
    <div
      id="location"
      className="relative section_frame overflow-hidden h-screen"
    >
      {/**Modanatura */}
      <div className="w-full h-[35.19px] modanatura_cols_roof"></div>
      <Marquee className="marquee_desktop w-full px-6 py-3 xl:flex">
        <h1 className=" pl-6 text-ethrome-white text-[32px] uppercase font-semibold tracking-[16px]">
          The location
        </h1>
        <h1 className=" pl-6 text-ethrome-yellow text-[32px] uppercase font-semibold tracking-[16px]">
          The location
        </h1>
        <h1 className=" pl-6 text-ethrome-white text-[32px] uppercase font-semibold tracking-[16px]">
          The location
        </h1>
        <h1 className=" pl-6 text-ethrome-yellow text-[32px] uppercase font-semibold tracking-[16px]">
          The location
        </h1>
      </Marquee>

      <div className="absolute left-0 bottom-0 flex flex-col justify-center items-start px-10 py-6 absolute_info">
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-ethrome-yellow text-[40px] outfit">
            Talent Garden Roma
          </p>
          <p className="text-ethrome-white text-base outfit">
            Via Ostiense, 92 - 00154 Roma RM
          </p>
        </div>
        <div className="grain"></div>
      </div>

      <LocationGallerySwiper />

      {/**       <motion.div
        className="w-full h-full object-cover location_bg -z-10"
        animate={{
          x: ["0", "5%", "0%", "-5%", "0%"], // Translate from left to right and back
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
        }}
      /> */}
    </div>
  );
}
