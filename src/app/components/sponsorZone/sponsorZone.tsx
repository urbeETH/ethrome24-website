"use client";

import Image from "next/image";
import GrainBg from "../grainBg";
import Marquee from "react-fast-marquee";

import { bountySponsor, citizen, patrician } from "./sponsorsItems";
import Link from "next/link";

export default function SponsorZone() {
  return (
    <div id="sponsorZone" className="relative section_frame ">
      <GrainBg />
      {/**Modanatura */}
      <div className="flex flex-col justify-start items-center gap-2">
        <div className="w-full h-[36.76px] modanatura opacity-[0.6]"></div>
        <div className="w-full h-[36.76px] modanatura opacity-[0.4]"></div>
      </div>

      <div className="w-full pt-10 xl:pt-16 pb-[104px] xl:pb-[88px] flex flex-col justify-center items-start gap-10">
        {/** title + marquee */}
        <div className="flex flex-col justify-center items-start gap-8 xl:gap-10">
        <div className="w-screen flex justify-center items-start xl:justify-start">
          <h1
            className="text-ethrome-white text-center 2xl:px-20"
            style={{ fontSize: "min(max(2rem, 3vw), 3.5rem)" }}
          >
            {" "}
            Meet our{" "}
            <span className="text-ethrome-yellow font-bold">sponsors!</span>
          </h1>
        </div>
          <Marquee className="relative w-full flex justify-start items-center px-6 py-1 ">
            {/**blend bg */}
            <div className="absolute inset-0 marquee_sponsor_bg"></div>
            <div className="py-1 pr-4 flex justify-start items-center gap-4 text-base">
              <span className="text-[#F8FCFC]/80 font-light">·</span>
              <h3 className="text-ethrome-yellow font-black">
                {" "}
                +60k ${" "}
                <span className="text-[#F8FCFC]/80 font-light">
                  in sponsor prizes
                </span>
              </h3>
            </div>
            <div className="py-1 pr-4 flex justify-start items-center gap-4 text-base">
              <span className="text-[#F8FCFC]/80 font-light">·</span>
              <h3 className="text-ethrome-yellow font-black">
                {" "}
                +60k ${" "}
                <span className="text-[#F8FCFC]/80 font-light">
                  in sponsor prizes
                </span>
              </h3>
            </div>
            <div className="py-1 pr-4 flex justify-start items-center gap-4 text-base">
              <span className="text-[#F8FCFC]/80 font-light">·</span>
              <h3 className="text-ethrome-yellow font-black">
                {" "}
                +60k ${" "}
                <span className="text-[#F8FCFC]/80 font-light">
                  in sponsor prizes
                </span>
              </h3>
            </div>
            <div className="py-1 pr-4 flex justify-start items-center gap-4 text-base">
              <span className="text-[#F8FCFC]/80 font-light">·</span>
              <h3 className="text-ethrome-yellow font-black">
                {" "}
                +60k ${" "}
                <span className="text-[#F8FCFC]/80 font-light">
                  in sponsor prizes
                </span>
              </h3>
            </div>
            <div className="py-1 pr-4 flex justify-start items-center gap-4 text-base">
              <span className="text-[#F8FCFC]/80 font-light">·</span>
              <h3 className="text-ethrome-yellow font-black">
                {" "}
                +60k ${" "}
                <span className="text-[#F8FCFC]/80 font-light">
                  in sponsor prizes
                </span>
              </h3>
            </div>
            <div className="py-1 pr-4 flex justify-start items-center gap-4 text-base">
              <span className="text-[#F8FCFC]/80 font-light">·</span>
              <h3 className="text-ethrome-yellow font-black">
                {" "}
                +60k ${" "}
                <span className="text-[#F8FCFC]/80 font-light">
                  in sponsor prizes
                </span>
              </h3>
            </div>
            <div className="py-1 pr-4 flex justify-start items-center gap-4 text-base">
              <span className="text-[#F8FCFC]/80 font-light">·</span>
              <h3 className="text-ethrome-yellow font-black">
                {" "}
                +60k ${" "}
                <span className="text-[#F8FCFC]/80 font-light">
                  in sponsor prizes
                </span>
              </h3>
            </div>
            <div className="py-1 pr-4 flex justify-start items-center gap-4 text-base">
              <span className="text-[#F8FCFC]/80 font-light">·</span>
              <h3 className="text-ethrome-yellow font-black">
                {" "}
                +60k ${" "}
                <span className="text-[#F8FCFC]/80 font-light">
                  in sponsor prizes
                </span>
              </h3>
            </div>
            <div className="py-1 pr-4 flex justify-start items-center gap-4 text-base">
              <span className="text-[#F8FCFC]/80 font-light">·</span>
              <h3 className="text-ethrome-yellow font-black">
                {" "}
                +60k ${" "}
                <span className="text-[#F8FCFC]/80 font-light">
                  in sponsor prizes
                </span>
              </h3>
            </div>
            <div className="py-1 pr-4 flex justify-start items-center gap-4 text-base">
              <span className="text-[#F8FCFC]/80 font-light">·</span>
              <h3 className="text-ethrome-yellow font-black">
                {" "}
                +60k ${" "}
                <span className="text-[#F8FCFC]/80 font-light">
                  in sponsor prizes
                </span>
              </h3>
            </div>
            <div className="py-1 pr-4 flex justify-start items-center gap-4 text-base">
              <span className="text-[#F8FCFC]/80 font-light">·</span>
              <h3 className="text-ethrome-yellow font-black">
                {" "}
                +60k ${" "}
                <span className="text-[#F8FCFC]/80 font-light">
                  in sponsor prizes
                </span>
              </h3>
            </div>
            <div className="py-1 pr-4 flex justify-start items-center gap-4 text-base">
              <span className="text-[#F8FCFC]/80 font-light">·</span>
              <h3 className="text-ethrome-yellow font-black">
                {" "}
                +60k ${" "}
                <span className="text-[#F8FCFC]/80 font-light">
                  in sponsor prizes
                </span>
              </h3>
            </div>
          </Marquee>
        </div>
        {/** Sponsors  */}
        <div className="w-full flex flex-col justify-center items-center px-6 gap-10 2xl:px-20 2xl:items-start">
          <div className="w-full flex flex-col justify-center items-start gap-6 xl:flex-row">
            {/** Patrician */}
            <div className="w-full xl:w-1/3 flex flex-col justify-center items-start gap-4">
              <div className="patrician_bg flex justify-center items-center w-[116px] h-[44px] px-4 py-[7] uppercase text-ethrome-white text-base rounded-[22px]  ">
                Patrician
              </div>

              <div className="w-full flex flex-col justify-start items-start gap-2">
                {patrician.map((item, index) => (
                  <Link
                    key={index}
                    href={item.sponsor_link}
                    target="_blank"
                    className="relative w-full h-[120.5px] rounded-2xl"
                  >
                    <div className="sponsor_zone_box_bg"></div>

                    <div className="w-full h-full p-2 flex flex-col justify-center items-center rounded-2xl">
                      <Image
                        src={item.sponsor_logo}
                        alt="logo img"
                        width={Number(item.width)}
                        height={Number(item.height)}
                        style={{ opacity: 0.8 }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/** Citizen */}
            <div className="w-full h-fit xl:w-1/3 flex flex-col justify-center items-start gap-4">
              <div className="citizen_bg flex justify-center items-center w-[95px] h-[44px] px-4 py-[7] uppercase text-ethrome-white text-base rounded-[22px]  ">
                Citizen
              </div>
              <div className="w-full h-full grid grid-cols-2 gap-2">
                {citizen.map((item, index) => (
                  <Link
                    key={index}
                    href={item.sponsor_link}
                    target="_blank"
                    className="relative w-full h-[163.33px] rounded-2xl"
                  >
                    <div className=" sponsor_zone_box_bg"></div>

                    <div className="w-full h-full p-2 flex flex-col justify-center items-center rounded-2xl">
                      <Image
                        src={item.sponsor_logo}
                        alt="logo img"
                        width={Number(item.width)}
                        height={Number(item.height)}
                        style={{ opacity: "0.8" }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/** Bounty Sponsor */}
            <div className="w-full xl:w-1/3 flex flex-col justify-center items-start gap-4">
              <div className="bountySponsor_bg flex justify-center items-center w-[179px] h-[44px] px-4 py-[7] text-ethrome-white text-base rounded-[22px] uppercase ">
                Bounty Sponsor
              </div>
              <div className="w-full grid grid-cols-2 gap-2">
                {bountySponsor.map((item, index) => (
                  <Link
                    key={index}
                    href={item.sponsor_link}
                    target="_blank"
                    className="relative w-full h-[120.5px] rounded-2xl "
                  >
                    <div className=" sponsor_zone_box_bg"></div>
                   

                    <div className="w-full h-full p-2 flex flex-col justify-center items-center rounded-2xl">
                      <Image
                        src={item.sponsor_logo}
                        alt="logo img"
                        width={Number(item.width)}
                        height={Number(item.height)}
                        style={{ opacity: "0.8" }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
