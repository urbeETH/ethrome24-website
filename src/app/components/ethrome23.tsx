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
    <div
      id="ethrome23"
      className="relative section_frame overflow-hidden h-screen"
    >
      <div className="w-full h-[35.19px] modanatura_cols_roof"></div>
      <Marquee className="marquee_desktop w-full px-6 py-3 xl:flex">
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

      {/**
     *       <Marquee
        className="marquee_mobile w-[810px] px-6 py-3 xl:flex"
        direction="up"
      >
        <h1 className=" pl-6 text-ethrome-white text-[32px] uppercase font-semibold tracking-[16px] -rotate-90">
          About Last Year
        </h1>
        <h1 className=" pl-6 text-ethrome-yellow text-[32px] uppercase font-semibold tracking-[16px] -rotate-90">
          About Last Year
        </h1>
        <h1 className=" pl-6 text-ethrome-white text-[32px] uppercase font-semibold tracking-[16px] -rotate-90">
          About Last Year
        </h1>
        <h1 className=" pl-6 text-ethrome-yellow text-[32px] uppercase font-semibold tracking-[16px] -rotate-90">
          About Last Year
        </h1>
      </Marquee>
     */}

      <motion.div
        className="w-full h-full object-cover ethrome23_bg -z-10"
        animate={{
          x: ["0", "5%", "0%", "-5%", "0%"], // Translate from left to right and back
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
        }}
      />

      <div className="w-full h-full flex justify-center items-center xl:justify-start xl:items-start ">
        <div className=" h-[calc(100%-35.19px)] xl:h-[calc(100%-107.19px)] flex flex-col justify-center items-center xl:pl-[33px] xl:py-8 gap-5">
          {ethrome23Numbers.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2 ethrome23_number_box"
            >
              <div className="ethrome23_number">{item.number}</div>
              <div className="text-ethrome-white text-2xl font-light xl:text-3xl">
                {item.text}
              </div>
            </div>
          ))}
          <div className="photogallery_button_box">
            <div className="xl:absolute xl:right-8 xl:bottom-8 w-[175px] h-[44px] flex justify-start items-center gap-2 bg-ethrome-white rounded-[22px] z-40">
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
    </div>
  );
}
