"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
      <div className="w-full h-[27px] modanatura_cols"></div>

      <div className="w-full xl:h-[calc(100vh-90px)] flex flex-col justify-between items-center">
        <h1
          className="px-6 pt-6 pb-[130px] text-ethrome-white text-center xl:px-[298px] xl:pb-[99px]"
          style={{ fontSize: "min(max(2rem, 3vw), 3.5rem)" }}
        >
          {" "}
          What will you{" "}
          <span className="text-ethrome-yellow font-bold">find?</span>
        </h1>

        <div className="hidden absolute bottom-0 w-full h-full justify-between items-center px-[106px] xl:flex">
          {experienceItems.map((item, index) => (
            <div 
              key={index}
              className={`experience_columns_box flex flex-col items-center gap-7 h-full experience_breath ${
                hoveredIndex === index ? 'animation-paused' : ''
              }`}
              style={{
                animationDelay: `${index * 0.7}s`,
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleHoverEnd}
            >
              {/** text + logo */}
              <div className="flex flex-col justify-start items-center gap-4">
                <div className="relative flex flex-col justify-start items-center gap-px">
                  <div
                    className={`will_find_zone_box_bg ${
                      hoveredIndex === index
                        ? "active"
                        : hoveredIndex !== null
                        ? "inactive"
                        : ""
                    }`}
                  ></div>
                  <div className="flex justify-center items-center px-4 py-3 w-[174.75px] experience_text_box rounded-2xl z-10">
                    {item.text}
                  </div>
                </div>

                <svg
                  viewBox="0 0 81 81"
                  className={`experience_logo_svg ${
                    hoveredIndex === index
                      ? "fill-yellow"
                      : hoveredIndex !== null
                      ? "fill-dark"
                      : "fill-normal"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {item.logo}
                </svg>
              </div>

              {/** columns */}
              <div
                className={`${
                  hoveredIndex === index ? "opacity-32" : "opacity-100"
                }`}
              >
                <svg
                  width={`${item.colWidth}`}
                  height={`${item.colHeight}`}
                  viewBox={`0 0 ${item.colWidth} ${item.colHeight}`}
                  fill="none"
                  strokeWidth="4.05941"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    hoveredIndex === index
                      ? "stroke-yellow"
                      : hoveredIndex !== null
                      ? "stroke-dark"
                      : "stroke-normal"
                  }`}
                >
                  {item.col}
                </svg>
              </div>
            </div>
          ))}
        </div>

        <ExperienceSwiper className="xl:hidden" />
      </div>
    </div>
  );
}
