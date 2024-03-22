"use client";

import Marquee from "react-fast-marquee";

export default function ETHRome23() {
  return (
    <div className="relative section_frame">
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
      <div className="absolute right-8 bottom-8 w-[220px] h-[44px] flex justify-start items-center gap-2 bg-ethrome-white rounded-[22px]">
      <p className="pl-[28px] py-[10px] pr-4">Browse the gallery</p>
      <img src="/img/misc/right_arrow.svg" alt="button right arrow" />
       </div>
    </div>
  );
}
