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

      <div className="w-full flex justify-start items-center md:flex-col">
        <Marquee className="w-full px-6 py-3 md:flex">
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

        <div className="w-full bg_ethrome23 h-[810px] flex flex-col justify-center items-center gap-20 md:flex-row md:gap-0">
          <div className="flex flex-col justify-center items-center px-6 md:px-[78px] gap-10 md:flex-row">
            {ethrome23Numbers.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center px-8 py-7 gap-1 ethrome23_number_box"
              >
                <p className="ethrome23_number">{item.number}</p>
                <p className="text-ethrome-white text-[28px] font-light md:text-[40px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/** <div className="md:absolute md:right-8 md:bottom-8 w-[175px] h-[44px] flex justify-start items-center gap-2 bg-ethrome-white rounded-[22px]">
            <Link
              href="/photogallery"
              target="_blank"
              className="pl-7 py-[10px] font-medium"
            >
              Photogallery
            </Link>
            <img src="/img/misc/right_arrow.svg" alt="button right arrow" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
