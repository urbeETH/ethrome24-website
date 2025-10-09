"use client";

import LocationGallerySwiper from "./locationGallerySwiper";
import { motion } from "framer-motion";

export default function Location() {
  // Componente per il marquee orizzontale (Desktop)
  const HorizontalMarquee = () => {
    return (
      <div className="w-full overflow-hidden relative">
        <motion.div
          className="flex items-center justify-start whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Serie di elementi per loop seamless */}
          {[...Array(8)].map((_, index) => (
            <h1
              key={index}
              className={`px-6 text-[32px] uppercase font-semibold tracking-[16px] ${
                index % 2 === 0 ? "text-ethrome-white" : "text-ethrome-yellow"
              }`}
            >
              the location
            </h1>
          ))}
        </motion.div>
      </div>
    );
  };

  // Componente per il marquee verticale (Mobile)
  const VerticalMarquee = () => {
    return (
      <div className="h-full overflow-hidden relative">
        <motion.div
          className="flex flex-col items-start justify-start"
          initial={{ y: 0 }}
          animate={{ y: "-50%" }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Serie di elementi per loop seamless */}
          {[...Array(8)].map((_, index) => (
            <h1
              key={index}
              className={`text-[24px] uppercase font-semibold tracking-[8px] mb-4 [writing-mode:vertical-lr] [text-orientation:mixed] rotate-180 ${
                index % 2 === 0 ? "text-ethrome-white" : "text-ethrome-yellow"
              }`}
            >
              the location
            </h1>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div id="location" className="relative w-full overflow-hidden h-screen">
      {/**Modanatura */}
      <div className="w-full h-[35.19px] modanatura_cols_roof"></div>

      <div className="w-full flex justify-start items-start h-[calc(100vh-107.19px)] xl:flex-col">
        {/** Marquee - Desktop */}
        <div className="hidden xl:block w-full py-3">
          <HorizontalMarquee />
        </div>

        {/** Marquee - Mobile */}
        <div className="xl:hidden w-full px-3">
          <VerticalMarquee />
        </div>

        <LocationGallerySwiper />
      </div>
    </div>
  );
}
