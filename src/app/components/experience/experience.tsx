"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { experienceCol } from "./experienceItems";

export default function Experience() {
  const [isHovered, setIsHovered] = useState(false);

  // Function to toggle hover state
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div id="experience" className="relative section_frame">
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

      <div className="flex justify-between items-center px-[106px]">
        {experienceCol.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ translateY: "-10px" }}
            transition={{ ease: "linear", duration: 0.5 }}
            className="flex flex-col justify-end items-center gap-7 h-[555px]"
          >
            <div className="flex flex-col justify-start items-center gap-4">
              <div className="flex flex-col justify-start items-center gap-px">
                <div className="flex justify-center items-center px-4 py-2 w-[174.75px] experience_text_box">
                  {item.text}
                </div>
                <Image
                  src="/img/experience/experience_box_modanatura.svg"
                  alt="modanatura box"
                  width={174.75}
                  height={10.56}
                  className="svg-image"
                />
              </div>

              <svg
                viewBox="0 0 81 81"
                className="experience_logo_svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                {item.logo}
              </svg>
            </div>
            <img
              src={item.col}
              className="mix-blend-color-dodge opacity[0.12]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
