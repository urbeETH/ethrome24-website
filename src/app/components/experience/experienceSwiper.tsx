"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { useState } from "react";
import { motion } from "framer-motion";

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
          spaceBetween={187}
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
          breakpoints={{
            414:{
              spaceBetween:200
            }
          }}      
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
                  <div className="relative flex flex-col justify-start items-center gap-px">
                    <motion.div
                      initial={{ backgroundColor: "#301320" }} // Initial color
                       animate={{
                        backgroundColor: activeIndex === index ? "#fabb00": "#301320",
                      }}
                      className="flex justify-center items-center px-4 py-2 w-[174.75px] experience_text_box rounded-2xl"
                    >
                      {item.text}
                    </motion.div>
                  
                  </div>

                  <motion.svg
                    viewBox="0 0 81 81"
                    className="experience_logo_svg"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ fill: "#301320" }} // Initial color
                     animate={{
                      fill: activeIndex === index ? "#fabb00" : "#301320",
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
                    stroke: activeIndex === index ? "#fabb00" : "#301320"
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
