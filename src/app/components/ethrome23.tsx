"use client";

import Marquee from "react-fast-marquee";
import Link from "next/link";
import { motion } from "framer-motion";

const ethrome23Numbers = [
  {
    number: "300",
    text: "attendees",
  },
  {
    number: "14",
    text: "sponsors",
  },
  {
    number: "40+",
    text: "projects",
  },
];

export default function ETHRome23() {
  return (
    <div id="ethrome23" className="relative section_frame overflow-hidden h-screen">
      <div className="w-full h-[35.19px] modanatura_cols_roof"></div>

      <div className="ethrome23_frame relative w-full h-[calc(100vh-35.19px)] flex justify-start items-center lg:flex-col">
        <Marquee
          className="marquee_custom_container w-full px-6 py-3 lg:flex"
        >
          <h1 className=" pl-6 text-ethrome-white text-[32px] uppercase font-semibold tracking-[16px]">
            About Last Year
          </h1>
          <h1 className=" pl-6 text-ethrome-yellow text-[32px] uppercase font-semibold tracking-[16px]">
            About Last Year
          </h1>
          <h1 className=" pl-6 text-ethrome-white text-[32px] uppercase font-semibold tracking-[16px]">
            About Last Year
          </h1>
          <h1 className=" pl-6 text-ethrome-yellow text-[32px] uppercase font-semibold tracking-[16px]">
            About Last Year
          </h1>
        </Marquee>

        <div className="relative w-full h-full py-4 flex flex-col justify-center items-center gap-20 overflow-hidden lg:justify-start lg:items-start lg:flex-row lg:gap-0 lg:py-0">
          <motion.div
            className="ethrome23_bg -z-10 h-screen"
            animate={{
              x: ["0", "5%", "0%", "-5%", "0%"], // Translate from left to right and back
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
            }}
          />

          <div className="h-full flex flex-col justify-center items-center lg:pl-6 lg:pl-[33px] lg:py-8 gap-5 z-40 ">
            {ethrome23Numbers.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2 ethrome23_number_box"
              >
                <div className="ethrome23_number">{item.number}</div>
                <div className="text-ethrome-white text-2xl font-light lg:text-3xl">
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:absolute lg:right-8 lg:bottom-8 w-[175px] h-[44px] flex justify-start items-center gap-2 bg-ethrome-white rounded-[22px] z-40">
            <Link
              href="/photogallery"
              target="_blank"
              className="pl-7 py-[10px] font-medium"
            >
              Photogallery
            </Link>
            <img src="/img/misc/right_arrow.svg" alt="button right arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
