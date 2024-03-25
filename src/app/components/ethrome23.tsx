"use client";

import Marquee from "react-fast-marquee";
import Link from "next/link";

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
    <div id="ethrome23" className="relative section_frame">
      <div className="w-full h-[35.19px] modanatura_cols_roof"></div>
      <Marquee className="w-full flex px-6 py-3">
        <h1 className="pl-6 text-ethrome-white text-[32px] uppercase font-semibold tracking-[16px]">
          About Last Year
        </h1>
        <h1 className="pl-6 text-ethrome-yellow text-[32px] uppercase font-semibold tracking-[16px]">
          About Last Year
        </h1>
        <h1 className="pl-6 text-ethrome-white text-[32px] uppercase font-semibold tracking-[16px]">
          About Last Year
        </h1>
        <h1 className="pl-6 text-ethrome-yellow text-[32px] uppercase font-semibold tracking-[16px]">
          About Last Year
        </h1>
      </Marquee>

      <div className="bg_ethrome23 h-[810px] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center px-[78px] gap-10 md:flex-row">
          {ethrome23Numbers.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center px-8 py-7 gap-1 ethrome23_number_box"
            >
              <p className="ethrome23_number">{item.number}</p>
              <p className="text-ethrome-white text-[40px] font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-8 bottom-8 w-[175px] h-[44px] flex justify-start items-center gap-2 bg-ethrome-white rounded-[22px]">
        <Link href="/photogallery" target="_blank" className="pl-7 py-[10px] font-medium">Photogallery</Link>
        <img src="/img/misc/right_arrow.svg" alt="button right arrow" />
      </div>
    </div>
  );
}
