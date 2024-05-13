"use client";

import Image from "next/image";
import ButtonPurple from "./buttons/buttonPurple";
import GrainBg from "./grainBg";
import { useState } from "react";

import { partnersItems } from "./partnersItems";
import { sponsorsItems } from "./sponsorsItems";

export default function SponsorZone() {
  const [switchSponsor, setswitchSponsor] = useState(false);

  const togglesponsor = () => {
    setswitchSponsor(!switchSponsor);
  };

  return (
    <div
      id="sponsorZone"
      className="relative section_frame"
    >
      <GrainBg />
      {/**       <Image
        src="/img/decors/modanatura_cols.svg"
        alt="sponsor zone modanatura"
        width={0}
        height={27}
        style={{ width: "100%" }}
        className="mix-blend-color-dodge opacity-[0.8]"*/}
      <div className="w-full h-[27px] modanatura_cols"></div>

      <div className="relative flex flex-col justify-between px-6  pt-[120px] xl:flex-row xl:px-0 xl:pt-[168px] xl:pb-[151px] xl:pl-[223px] xl:pr-20">
        <div className="flex flex-col justify-start max-w-[519px] items-start gap-9">
          <div className="flex flex-col items-start justify-start gap-3">
            <img
              src="/img/sponsor_zone/sponsor_crown.svg"
              className="w-20 h-20 drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] xl:h-40 xl:w-40"
            />
            <div className="flex flex-col justify-start items-start gap-4">
              <h1 className="text-[32px] font-bold text-white xl:text-7xl text-left">
                Sponsor Zone
              </h1>
              <p className="sponsor_zone_description text-ethrome-white xl:text-left red_hat_display">
                Seize the chance to gain exceptional exposure, establish
                valuable connections, and demonstrate your unwavering support
                for the development of the blockchain space!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start gap-2">
            <ButtonPurple
              cta="Request deck"
              route="mailto:sponsor@ethrome.org?subject=Request%20ETHRome%20Deck"
              variant="primary"
            />
            <a
              className="text-ethrome-white text-center underline opacity-[64%]"
              href="mailto:sponsor@ethrome.org"
            >
              sponsor@ethrome.org
            </a>
          </div>
        </div>

        {/** Partners */}
        {switchSponsor && (
          <div className="hidden flex flex-col justify-start items-start gap-6 xl:flex">
            <div className="flex flex-col gap-6">
              <div className="flex justify-start items-start gap-2">
                <div
                  onClick={togglesponsor}
                  className="flex justify-center text-[#F8FCFC] text-lg items-center w-[131px] h-[32px] opacity-40 cursor-pointer"
                >
                  SPONSORS
                </div>
                <div
                  onClick={togglesponsor}
                  className="flex justify-center items-center w-[131px] h-[32px] bg-ethrome-purple text-ethrome-white text-lg rounded-[22px] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] hover:bg-ethrome-dark-purple cursor-pointer"
                >
                  PARTNERS
                </div>
              </div>
              <div className="grid grid-cols-3 2xl:grid-cols-4 gap-3">
                {partnersItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[148px] h-[112px] gap-[3px]"
                  >
                    <div className="flex justify-center items-center sponsor_zone_box_bg h-[88px] py-2 px-[14px]">
                      <Image
                        src={item.partners_logo}
                        alt="logo img"
                        width={120}
                        height={72}
                        style={{ opacity: "0.8" }}
                      />
                    </div>
                    <div className="w-full h-[21px] modanatura_sponsor_zone"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/** Sponsors  */}
        {!switchSponsor && (
          <div className="hidden flex flex-col gap-6 xl:flex">
            <div className="flex justify-start items-start gap-2">
              <div
                onClick={togglesponsor}
                className="flex justify-center items-center w-[131px] h-[32px] bg-ethrome-purple text-ethrome-white text-lg rounded-[22px] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] hover:bg-ethrome-dark-purple cursor-pointer"
              >
                SPONSORS
              </div>
              <div
                onClick={togglesponsor}
                className="flex justify-center text-[#F8FCFC] text-lg items-center w-[131px] h-[32px] opacity-40 cursor-pointer"
              >
                PARTNERS
              </div>
            </div>

            <div className="flex flex-col justify-start items-start">
              <div className="grid grid-cols-2 2xl:grid-cols-3 gap-3">
                {sponsorsItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[200px] h-[136px] gap-[3px]"
                  >
                    <div className="flex justify-center items-center sponsor_zone_box_bg h-[112px] py-2 px-5">
                      <Image
                        src={item.sponsor_logo}
                        alt="logo img"
                        width={160}
                        height={96}
                        style={{ opacity: "0.8" }}
                      />
                    </div>
                    <div className="w-full h-[21px] modanatura_sponsor_zone"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <img
        src="/img/decors/flowers.svg"
        alt=""
        className="absolute bottom-0 left-[43px] h-[calc(100%-27px)] mix-blend-color-dodge opacity-[0.8]"
      />
    </div>
  );
}
