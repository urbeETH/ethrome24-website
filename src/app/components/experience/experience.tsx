"use client";

import { useState} from "react";
import { motion} from "framer-motion";

import { experienceItems } from "./experienceItems";
import ExperienceSwiper from "./experienceSwiper";
import GrainBg from "../grainBg";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index: any) => {
    setHoveredIndex(index);
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      id="experience"
      className="relative section_frame h-screen overflow-hidden"
    >
      <GrainBg />
      {/**Modanatura */}
      <div className="flex flex-col justify-start items-center gap-2">
        <div className="w-full h-[36.76px] modanatura opacity-[0.6]"></div>
        <div className="w-full h-[36.76px] modanatura opacity-[0.4]"></div>
      </div>

      <div className="w-full xl:h-[calc(100vh-80px)] flex flex-col justify-between items-center">
        <h1
          className="px-6 pt-[23px] pb-[130px] text-ethrome-white text-center xl:px-[298px] xl:pb-[99px]"
          style={{ fontSize: "min(max(2rem, 3vw), 3.5rem)" }}
        >
          {" "}
          What will you{" "}
          <span className="text-ethrome-yellow font-bold">find?</span>
        </h1>

        <div className="hidden w-full h-full justify-between items-center px-[106px] xl:flex">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: ["0", "-10px", "0"],

                transition: { duration: 2, ease: "linear" },
              }}
              className="experience_columns_box flex flex-col items-center gap-7 h-full"
              animate={{
                y: ["0", "15px", "0"],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                delay: index * 0.7
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleHoverEnd}
            >
              <div className="flex flex-col justify-start items-center gap-4">
                <div className="flex flex-col justify-start items-center gap-px">
                  <motion.div
                    initial={{ backgroundColor: "#7D304B" }} // Initial color
                    animate={{
                      backgroundColor:
                        hoveredIndex === index ? "#fabb00" : hoveredIndex !== null ? "#301320" : "#7D304B" 
                    }}
                    className="flex justify-center items-center px-4 py-2 w-[174.75px] experience_text_box"
                  >
                    {item.text}
                  </motion.div>
                  <motion.svg
                    width="175"
                    height="11"
                    initial={{ fill: "#7D304B" }}
                    animate={{
                      fill:  hoveredIndex === index ? "#fabb00" : hoveredIndex !== null ? "#301320" : "#7D304B" 
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
                  initial={{ stroke: "#7D304B" }} // Initial color
                  animate={{
                    stroke:  hoveredIndex === index ? "#fabb00" : hoveredIndex !== null ? "#301320" : "#7D304B" 
                  }}
                >
                  {item.logo}
                </motion.svg>
              </div>
              <motion.div
                animate={{
                  opacity: hoveredIndex === index ? "0.32" : "1",
                }}
              >
                <motion.svg
                  width={`${item.colWidth}`}
                  height={`${item.colHeight}`}
                  viewBox={`0 0 ${item.colWidth} ${item.colHeight}`}
                  fill="none"
                  strokeWidth="4.05941"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ stroke: "#7D304B" }} // Initial color
                  animate={{
                    stroke:  hoveredIndex === index ? "#fabb00" : hoveredIndex !== null ? "#301320" : "#7D304B" 
                  }}
                >
                  {item.col}
                </motion.svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <ExperienceSwiper className="xl:hidden" />
      </div>
    </div>
  );
}
