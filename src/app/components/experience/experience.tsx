"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { experienceItems } from "./experienceItems";
import ExperienceSwiper from "./experienceSwiper";

export default function Experience() {
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
    <div id="experience" className="relative section_frame overflow-hidden">
      {/**Modanatura */}
      <div className="flex flex-col justify-start items-center gap-2">
        <div className="w-full h-[36.76px] modanatura opacity-[0.6]"></div>
        <div className="w-full h-[36.76px] modanatura opacity-[0.4]"></div>
      </div>
      <h1 className="px-6 pt-[23px] pb-[130px] text-ethrome-white text-[32px] text-center md:px-[298px] md:pb-[99px] md:text-[56px]">
        {" "}
        What will you{" "}
        <span className="text-ethrome-yellow font-bold">find?</span>
      </h1>

      <div className="hidden justify-between items-center px-[106px] md:flex">
        {experienceItems.map((item, index) => (
          <motion.div
            key={index}
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
              stroke-width="4.05941"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ stroke: "#301320" }} // Initial color
              animate={{
                stroke: hoveredIndex === index ? "hsla(45, 100%, 49%, 0.68)" : "#301320",
              }} // Change fill color on hover
            >
              {item.col}
            </motion.svg>
          </motion.div>
        ))}
      </div>

      <ExperienceSwiper className="md:hidden" />
    </div>
  );
}
