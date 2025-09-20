"use client";

import Image from "next/image";
import ButtonPurple from "../buttons/buttonPurple";
import GrainBg from "../grainBg";
import Marquee from "react-fast-marquee";

import { bountySponsor, citizen, patrician } from "./sponsorsItems";
import Link from "next/link";

export default function SponsorZone() {
  return (
    <div id="sponsorZone" className="section_frame ">
      <GrainBg />
      <div className="w-full h-[27px] modanatura_cols"></div>

      <div className="w-full pt-16 pb-28 flex flex-col justify-center items-start gap-10">
        {/** title + marquee */}
        <div className="flex flex-col justify-center items-start gap-10">
          <h1
            className="px-6 text-ethrome-white text-center 2xl:px-20"
            style={{ fontSize: "min(max(2rem, 3vw), 3.5rem)" }}
          >
            {" "}
            Meet our{" "}
            <span className="text-ethrome-yellow font-bold">sponsors!</span>
          </h1>         
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
                    <div className="absolute w-full h-full inset-0 sponsor_zone_box_bg rounded-2xl"></div>

                    <div className="w-full h-full p-2 flex flex-col justify-center items-center rounded-2xl">
                      <Image
                        src={item.sponsor_logo}
                        alt="logo img"
                        width={150}
                        height={128}
                        style={{ opacity: "0.8" }}
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
                    <div className="absolute w-full h-full inset-0 sponsor_zone_box_bg rounded-2xl"></div>

                    <div className="w-full h-full p-2 flex flex-col justify-center items-center rounded-2xl">
                      <Image
                        src={item.sponsor_logo}
                        alt="logo img"
                        width={125}
                        height={128}
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
                    <div className="absolute w-full h-full inset-0 sponsor_zone_box_bg rounded-2xl"></div>
                    {/** Bordo con gradient e opacità */}
                    <div className="absolute inset-0 sponsor_zone_border"></div>

                    <div className="w-full h-full p-2 flex flex-col justify-center items-center rounded-2xl">
                      <Image
                        src={item.sponsor_logo}
                        alt="logo img"
                        width={130}
                        height={128}
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

      {/**Became sponsor */}
      <div className="w-full flex flex-col justify-between gap-16 px-20 py-8 bg-ethrome-cotta lg:flex-row lg:gap-2">
        <div className="flex flex-col items-center justify-start gap-2 text-ethrome-white">
          <p className="w-full text-start text-[56px] outfit">
            Become our sponsor!
          </p>
          <p className="w-full text-start text-lg leading-8 red_hat_display">
            Seize the chance to gain exceptional exposure, establish valuable
            connections, and demonstrate your unwavering support for the
            development of the blockchain space!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <ButtonPurple
            cta="Request deck"
            route="mailto:sponsor@ethrome.org?subject=Request%20ETHRome%20Deck"
            variant="primary"
          />
          <a
            className="text-ethrome-white text-center underline opacity-[64%]"
            href="mailto:sponsor@ethrome.org"
          >
            hello@urbe.build
          </a>
        </div>
      </div>
    </div>
  );
}
