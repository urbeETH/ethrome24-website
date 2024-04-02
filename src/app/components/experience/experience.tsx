"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import { experienceItems } from "./experienceItems";
import ExperienceSwiper from "./experienceSwiper";
import GrainBg from "../grainBg";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

    // Function to handle hover
    const handleHover = (index: any) => {
      setHoveredIndex(index);
    };

  /*
  const controlsArray = experienceItems.map(() => useAnimation());



  // Function to handle hover end
  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };
  useEffect(() => {
    const animateElements = async () => {
      const delays = experienceItems.map(() => Math.random() * 3); // Generate random delays
      await Promise.all(
        controlsArray.map(async (controls, index) => {
          await controls.start({
            y: [0, 15, 0],
            transition: { duration: 3, delay: delays[index], repeat: Infinity },
          });
        })
      );
    };
    animateElements();
  }, [controlsArray]); // Add controlsArray to dependencies array
*/
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

      <div className="w-full lg:h-[calc(100vh-80px)] flex flex-col justify-between items-center">
        <h1
          className="px-6 pt-[23px] pb-[130px] text-ethrome-white text-center lg:px-[298px] lg:pb-[99px]"
          style={{ fontSize: "min(max(2rem, 3vw), 3.5rem)" }}
        >
          {" "}
          What will you{" "}
          <span className="text-ethrome-yellow font-bold">find?</span>
        </h1>

        <div className="hidden w-full h-full justify-between items-center px-[106px] lg:flex">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                translateY: "-10px",
                transition: { duration: 1, ease: "linear" },
              }}
              className="flex flex-col justify-end items-center gap-7 h-full"
              //animate={controlsArray[index]}
              onMouseEnter={() => handleHover(index)}
             // onMouseLeave={handleHoverEnd}
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
              <motion.div
                animate={{
                  opacity: hoveredIndex === index ? "0.32" : "1",
                }} // Change fill color on hover
              >
                <motion.svg
                  width={`${item.colWidth}`}
                  height={`${item.colHeight}`}
                  viewBox={`0 0 ${item.colWidth} ${item.colHeight}`}
                  fill="none"
                  strokeWidth="4.05941"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ stroke: "#301320" }} // Initial color
                  animate={{
                    stroke: hoveredIndex === index ? "#fabb00" : "#301320",
                  }} // Change fill color on hover
                >
                  {item.col}
                </motion.svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <ExperienceSwiper className="lg:hidden" />
      </div>
    </div>
  );
}
