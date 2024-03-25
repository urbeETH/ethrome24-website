"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const ethrome23Numbers = [
  {
    number: "400",
    text: "hackers",
  },
  {
    number: "1100",
    text: "beers",
  },
  {
    number: "40+",
    text: "projects",
  },
  {
    number: "25",
    text: "total winners",
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
        <div className="grid grid-cols-2 justify-center items-center px-[211px] pt-[206px] pb-[144px] gap-14">
          {ethrome23Numbers.map((item,index) => (
            <div  key={index} className="flex flex-col justify-center items-center px-8 py-7 gap-1 ethrome23_number_box">
              <p className="ethrome23_number">{item.number}</p>
              <p className="text-ethrome-white text-[40px] font-light">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-8 bottom-8 w-[220px] h-[44px] flex justify-start items-center gap-2 bg-ethrome-white rounded-[22px]">
        <p className="pl-[28px] py-[10px] pr-4">Browse the gallery</p>
        <img src="/img/misc/right_arrow.svg" alt="button right arrow" />
      </div>
    </div>
  );
}
