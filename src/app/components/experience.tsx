"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experienceCol = [
  {
    text: "Web3 in an amazing venue",
    logo: "/img/experience/logo/web3_logo.svg",
    col: "/img/experience/col/web3_col.svg",
  },
  {
    text: "Experienced Hackers and Mentors",
    logo: "/img/experience/logo/hackers_mentors_logo.svg",
    col: "/img/experience/col/hackers_mentors_col.svg",
  },
  {
    text: "Networking and good vibes",
    logo: "/img/experience/logo/networking_logo.svg",
    col: "/img/experience/col/networking_col.svg",
  },
  {
    text: "Amazing food!",
    logo: "/img/experience/logo/food_logo.svg",
    col: "/img/experience/col/food_col.svg",
  },
  {
    text: "Side events",
    logo: "/img/experience/logo/side_events_logo.svg",
    col: "/img/experience/col/side_events_col.svg",
  },
  {
    text: "Community's craft beer",
    logo: "/img/experience/logo/beer_logo.svg",
    col: "/img/experience/col/beer_col.svg",
  },
];

export default function Experience() {
  return (
    <div id="experience" className="relative section_frame">
      <h1 className="px-[298px] pt-[104px] pb-[99px] text-ethrome-white text-[56px] text-center">
        {" "}
        What will you{" "}
        <span className="text-ethrome-yellow font-bold">find?</span>
      </h1>

      <div className="flex justify-between items-center px-[106px]">
        {experienceCol.map((item, index) => (
          <motion.div
          whileHover={{translateY: "-10px"}}
          transition={{ ease: "linear", duration: 0.5}}
          className="flex flex-col justify-end items-center gap-7 h-[555px]">
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
                />
              </div>
              <img src={item.logo} alt="" />
            </div>
            <img src={item.col} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
