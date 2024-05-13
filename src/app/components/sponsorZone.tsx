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
      className="relative section_frame  overflow-hidden h-screen"
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

        <>
          {/** Partners */}
          <div className="hidden flex flex-col justify-start items-start gap-6 xl:flex">
            {switchSponsor && (
              <div className="flex flex-col gap-6">
                <div className="flex justify-start items-start gap-2">
                  <div
                    onClick={togglesponsor}
                    className="flex justify-center text-[#F8FCFC] text-lg items-center w-[164px] h-[44px] opacity-40"
                  >
                    SPONSORS
                  </div>
                  <div
                    onClick={togglesponsor}
                    className="flex justify-center items-center w-[164px] h-[44px] bg-ethrome-purple text-ethrome-white text-lg rounded-[22px] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] ${className} hover:bg-ethrome-dark-purple"
                  >
                    PARTNERS
                  </div>
                </div>
                <div className="grid xl:grid-cols-4 gap-4">
                  {partnersItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col min-w-[148px] h-[122px]"
                    >
                      <div className="relative sponsor_zone_box_bg h-[122px] px-2">
                        <Image
                          src={item.partners_logo}
                          alt="logo img"
                          width={0}
                          height={0}
                          style={{ width: "100%", height: "100%" }}
                          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        />
                      </div>
                      <div className="w-full h-[21px] modanatura_sponsor_zone"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>

        {!switchSponsor && (
          <>
            {/** Sponsors  */}

            <div className="hidden flex flex-col gap-6 xl:flex">
              <div className="flex justify-start items-start gap-2">
                <div
                  onClick={togglesponsor}
                  className="flex justify-center items-center w-[164px] h-[44px] bg-ethrome-purple text-ethrome-white text-lg rounded-[22px] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] ${className} hover:bg-ethrome-dark-purple"
                >
                  SPONSORS
                </div>
                <div
                  onClick={togglesponsor}
                  className="flex justify-center text-[#F8FCFC] text-lg items-center w-[164px] h-[44px] opacity-40"
                >
                  PARTNERS
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-6">
                <div className="grid grid-cols-3 gap-3">
                  {sponsorsItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col min-w-[200px] h-[136px] relative sponsor_zone_box_bg"
                    >
                      <div>
                        <Image
                          src={item.sponsor_logo}
                          alt="logo img"
                          width={0}
                          height={0}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className="w-full h-[21px] modanatura_sponsor_zone"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
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
