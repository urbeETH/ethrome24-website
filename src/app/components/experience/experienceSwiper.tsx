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
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle hover
  const isActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  // Function to handle hover end
  const handleHoverEnd = () => {
    setActiveIndex(0);
  };

  return (
    <>
      <div
        className={`w-full h-full absolute bottom-0 left-0 flex flex-col justify-end items-center ${className}`}
      >
        <Swiper
          className="w-full"
          spaceBetween={200}
          slidesPerView={3}
          zoom={true}
          loop={true}
          modules={[Autoplay]}
          watchSlidesProgress={true}
          onSlideChange={(swiper) => {
            // Get the active index considering the loop
            const activeIndex = swiper.realIndex;
            console.log("Slide changed, activeIndex:", activeIndex);
            setActiveIndex(activeIndex);
          }}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}    
          initialSlide={0}      
        >
          {experienceItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ translateY: "-10px" }}
                transition={{ ease: "linear", duration: 0.5 }}
                className="flex flex-col justify-end items-center gap-7 h-[613px]"
                animate={{
                  y: ["0", "15px", "0"],
                  transition: {
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: index * 0.7,
                  },
                }}
                onMouseEnter={() => isActiveIndex(index)}
                onMouseLeave={handleHoverEnd}
              >
                <div className="flex flex-col justify-start items-center gap-4">
                  <div className="flex flex-col justify-start items-center gap-px">
                    <motion.div
                      initial={{ backgroundColor: "#301320" }} // Initial color
                       animate={{
                        backgroundColor: activeIndex === index ? "#fabb00" : "#301320",
                      }}
                      className="flex justify-center items-center px-4 py-2 w-[174.75px] experience_text_box"
                    >
                      {item.text}
                    </motion.div>
                    <motion.svg
                      width="175"
                      height="11"
                      initial={{ fill: "#301320" }}
                      animate={{
                        fill: activeIndex === index ? "#fabb00" : "#301320",
                      }}
                    >
                      <path
                        d="M174.8,1.7H0V0.2h174.8V1.7z M1.5,9.3H0V2.9h1.5V9.3z M3.8,7.4H2.7V2.9h1.1V7.4z M6.5,9.3H5V2.9h1.5V9.3z
	 M6.5,9.3H5V2.9h1.5V9.3z M8.7,7.4H7.7V2.9h1.1V7.4z M11.4,9.3H9.9V2.9h1.5V9.3z M11.4,9.3H9.9V2.9h1.5V9.3z M13.7,7.4h-1.1V2.9h1.1
	V7.4z M16.4,9.3h-1.5V2.9h1.5V9.3z M16.3,9.3h-1.5V2.9h1.5V9.3z M18.6,7.4h-1V2.9h1V7.4z M21.3,9.3h-1.5V2.9h1.5V9.3z M21.3,9.3
	h-1.5V2.9h1.5V9.3z M23.5,7.4h-1V2.9h1V7.4z M26.2,9.3h-1.5V2.9h1.5V9.3z M26.2,9.3h-1.5V2.9h1.5V9.3z M28.5,7.4h-1V2.9h1V7.4z
	 M31.2,9.3h-1.5V2.9h1.5V9.3z M31.2,9.3h-1.5V2.9h1.5V9.3z M33.5,7.4h-1V2.9h1V7.4z M36.2,9.3h-1.5V2.9h1.5V9.3z M36.2,9.3h-1.5V2.9
	h1.5V9.3z M38.4,7.4h-1V2.9h1V7.4z M41.1,9.3h-1.5V2.9h1.5V9.3z M41.1,9.3h-1.5V2.9h1.5V9.3z M43.3,7.4h-1V2.9h1V7.4z M46,9.3h-1.5
	V2.9H46V9.3z M46,9.3h-1.5V2.9H46V9.3z M48.3,7.4h-1V2.9h1V7.4z M51,9.3h-1.5V2.9H51V9.3z M51,9.3h-1.5V2.9H51V9.3z M53.2,7.4h-1
	V2.9h1V7.4z M56,9.3h-1.5V2.9H56V9.3z M56,9.3h-1.5V2.9H56V9.3z M58.2,7.4h-1V2.9h1V7.4z M60.9,9.3h-1.5V2.9h1.5V9.3z M60.9,9.3
	h-1.5V2.9h1.5V9.3z M63.2,7.4h-1.1V2.9h1.1V7.4z M65.9,9.3h-1.5V2.9h1.5V9.3z M65.8,9.3h-1.5V2.9h1.5V9.3z M68.1,7.4H67V2.9h1.1V7.4
	z M70.8,9.3h-1.5V2.9h1.5V9.3z M70.8,9.3h-1.5V2.9h1.5V9.3z M73,7.4H72V2.9H73V7.4z M75.8,9.3h-1.5V2.9h1.5V9.3z M75.8,9.3h-1.5V2.9
	h1.5V9.3z M78,7.4h-1.1V2.9H78V7.4z M80.7,9.3h-1.5V2.9h1.5V9.3z M80.7,9.3h-1.5V2.9h1.5V9.3z M83,7.4h-1.1V2.9H83V7.4z M85.7,9.3
	h-1.5V2.9h1.5V9.3z M85.7,9.3h-1.5V2.9h1.5V9.3z M87.9,7.4h-1.1V2.9h1.1V7.4z M90.6,9.3h-1.5V2.9h1.5V9.3z M90.6,9.3h-1.5V2.9h1.5
	V9.3z M92.8,7.4h-1.1V2.9h1.1V7.4z M95.5,9.3H94V2.9h1.5V9.3z M95.5,9.3H94V2.9h1.5V9.3z M97.8,7.4h-1.1V2.9h1.1V7.4z M100.5,9.3H99
	V2.9h1.5V9.3z M100.5,9.3H99V2.9h1.5V9.3z M102.8,7.4h-1.1V2.9h1.1V7.4z M105.4,9.3h-1.5V2.9h1.5V9.3z M105.4,9.3h-1.5V2.9h1.5V9.3z
	 M107.7,7.4h-1.1V2.9h1.1V7.4z M110.4,9.3h-1.5V2.9h1.5V9.3z M110.4,9.3h-1.5V2.9h1.5V9.3z M112.7,7.4h-1.1V2.9h1.1V7.4z M115.4,9.3
	h-1.5V2.9h1.5V9.3z M115.3,9.3h-1.5V2.9h1.5V9.3z M117.6,7.4h-1.1V2.9h1.1V7.4z M120.3,9.3h-1.5V2.9h1.5V9.3z M120.3,9.3h-1.5V2.9
	h1.5V9.3z M122.6,7.4h-1.1V2.9h1.1V7.4z M125.2,9.3h-1.5V2.9h1.5V9.3z M125.2,9.3h-1.5V2.9h1.5V9.3z M127.5,7.4h-1.1V2.9h1.1V7.4z
	 M130.2,9.3h-1.5V2.9h1.5V9.3z M130.2,9.3h-1.5V2.9h1.5V9.3z M132.4,7.4h-1.1V2.9h1.1V7.4z M135.1,9.3h-1.5V2.9h1.5V9.3z M135.1,9.3
	h-1.5V2.9h1.5V9.3z M137.4,7.4h-1.1V2.9h1.1V7.4z M140.1,9.3h-1.5V2.9h1.5V9.3z M140.1,9.3h-1.5V2.9h1.5V9.3z M142.4,7.4h-1.1V2.9
	h1.1V7.4z M145.1,9.3h-1.5V2.9h1.5V9.3z M145.1,9.3h-1.5V2.9h1.5V9.3z M147.3,7.4h-1.1V2.9h1.1V7.4z M150,9.3h-1.5V2.9h1.5V9.3z
	 M150,9.3h-1.5V2.9h1.5V9.3z M152.2,7.4h-1.1V2.9h1.1V7.4z M154.9,9.3h-1.5V2.9h1.5V9.3z M154.9,9.3h-1.5V2.9h1.5V9.3z M157.2,7.4
	h-1.1V2.9h1.1V7.4z M159.9,9.3h-1.5V2.9h1.5V9.3z M159.9,9.3h-1.5V2.9h1.5V9.3z M162.1,7.4h-1.1V2.9h1.1V7.4z M164.9,9.3h-1.5V2.9
	h1.5V9.3z M164.9,9.3h-1.5V2.9h1.5V9.3z M167.1,7.4h-1.1V2.9h1.1V7.4z M169.8,9.3h-1.5V2.9h1.5V9.3z M169.8,9.3h-1.5V2.9h1.5V9.3z
	 M172.1,7.4H171V2.9h1.1V7.4z M174.8,9.3h-1.5V2.9h1.5V9.3z M174.8,10.8H0V9.3h174.8V10.8z"
                      />
                    </motion.svg>
                  </div>

                  <motion.svg
                    viewBox="0 0 81 81"
                    className="experience_logo_svg"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ stroke: "#301320" }} // Initial color
                     animate={{
                      stroke: activeIndex === index ? "#fabb00" : "#301320",
                    }}
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
                    stroke: activeIndex === index ? "#fabb00" : "#301320",
                  }}
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
