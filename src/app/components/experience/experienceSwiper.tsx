"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { experienceItems } from "./experienceItems";

export default function ExperienceSwiper({
  className,
}: {
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to handle hover
  const handleHover = (index: any) => {
    setHoveredIndex(index);
  };

  // Function to handle hover end
  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div
        className={`relative w-full flex flex-col justify-between items-center ${className}`}
      >
        <Swiper
          className="w-full"
          spaceBetween={10}
          slidesPerView={2}
          zoom={true}
          loop={true}
          modules={[Autoplay]}
          watchSlidesProgress={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          {experienceItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ translateY: "-10px" }}
                transition={{ ease: "linear", duration: 0.5 }}
                className="flex flex-col justify-end items-center gap-7 h-[555px]"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleHoverEnd}
              >
                <div className="flex flex-col justify-start items-center gap-4">
                  <div className="flex flex-col justify-start items-center gap-px">
                    <motion.div
                      initial={{ backgroundColor: "#301320" }} // Initial color
                      animate={{
                        backgroundColor:
                          hoveredIndex === index ? "#fabb00" : "#301320",
                      }} // Change fill color on hover
                      className="flex justify-center items-center px-4 py-2 w-[174.75px] experience_text_box"
                    >
                      {item.text}
                    </motion.div>
                    <Image
                      src="/img/experience/experience_box_modanatura.svg"
                      alt="experience modanatura"
                      width={174.75}
                      height={10.56}
                    />
                  </div>

                  <motion.svg
                    viewBox="0 0 81 81"
                    className="experience_logo_svg"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ stroke: "#301320" }} // Initial color
                    animate={{
                      stroke: hoveredIndex === index ? "#fabb00" : "#301320",
                    }} // Change fill color on hover
                  >
                    {item.logo}
                  </motion.svg>
                </div>
                <motion.svg
                  width={`${item.colWidth}`}
                  height={`${item.colHeight}`}
                  viewBox={`0 0 ${item.colWidth} ${item.colHeight}`}
                  fill="none"
                  strokeWidth="4.05941"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ stroke: "#301320" }} // Initial color
                  animate={{
                    stroke: hoveredIndex === index ? "hsla(45, 100%, 49%, 0.68)" : "#301320",
                  }} // Change fill color on hover
                >
                  {item.col}
                </motion.svg>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}