"use client";

import Image from "next/image";
import ButtonPurple from "../buttons/buttonPurple";
import GrainBg from "../grainBg";

import { bountySponsor, citizen, patrician } from "./sponsorsItems";

export default function SponsorZone() {
  return (
    <div id="sponsorZone" className="section_frame ">
      <GrainBg />
      <div className="w-full h-[27px] modanatura_cols"></div>

      <div className="w-full flex flex-col justify-center items-center px-6 pt-[88px] pb-24 gap-10 2xl:px-20">
        {/** Sponsors  */}
        <h1
          className="px-6 text-ethrome-white text-center xl:px-[298px]"
          style={{ fontSize: "min(max(2rem, 3vw), 3.5rem)" }}
        >
          {" "}
          Meet our{" "}
          <span className="text-ethrome-yellow font-bold">sponsors!</span>
        </h1>
        <div className="w-full flex flex-col justify-center items-start gap-10 xl:flex-row">
          {/** Patrician */}
          <div className="w-full xl:w-1/3 flex flex-col justify-center items-start gap-4">
            <div className="patrician_bg flex justify-center items-center w-[116px] h-[44px] px-4 py-[7] uppercase text-ethrome-white text-base rounded-[22px]  ">
              Patrician
            </div>

            <div className="grid grid-cols-2 gap-4">
              {patrician.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[155px] h-[112px] gap-[3px] xl:w-[246px] xl:h-[168px]"
                >
                  <div className="flex justify-center items-center sponsor_zone_box_bg h-[112px] xl:min-h-[144px] xl:h-[auto] py-2 px-5">
                    <Image
                      src={item.sponsor_logo}
                      alt="logo img"
                      width={200}
                      height={128}
                      style={{ opacity: "0.8" }}
                    />
                  </div>
                  <div className="w-full h-[21px] modanatura_sponsor_zone"></div>
                </div>
              ))}
            </div>
          </div>
          {/** Citizen */}
          <div className="w-full xl:w-1/3 flex flex-col justify-center items-start gap-4">
            <div className="citizen_bg flex justify-center items-center w-[95px] h-[44px] px-4 py-[7] uppercase text-ethrome-white text-base rounded-[22px]  ">
              Citizen
            </div>
            <div className="grid grid-cols-2 gap-4">
              {citizen.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[155px] h-[112px] gap-[3px] xl:w-[246px] xl:h-[168px]"
                >
                  <div className="flex justify-center items-center sponsor_zone_box_bg h-[112px] xl:min-h-[144px] xl:h-[auto] py-2 px-5">
                    <Image
                      src={item.sponsor_logo}
                      alt="logo img"
                      width={200}
                      height={128}
                      style={{ opacity: "0.8" }}
                    />
                  </div>
                  <div className="w-full h-[21px] modanatura_sponsor_zone"></div>
                </div>
              ))}
            </div>
          </div>

          {/** Bounty Sponsor */}
          <div className="w-full xl:w-1/3 flex flex-col justify-center items-start gap-4">
            <div className="bountySponsor_bg flex justify-center items-center w-[179px] h-[44px] px-4 py-[7] text-ethrome-white text-base rounded-[22px] uppercase ">
              Bounty Sponsor
            </div>
            <div className="grid grid-cols-2 gap-4">
              {bountySponsor.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[155px] h-[112px] gap-[3px] xl:w-[246px] xl:h-[168px]"
                >
                  <div className="flex justify-center items-center sponsor_zone_box_bg h-[112px] xl:min-h-[144px] xl:h-[auto] py-2 px-5">
                    <Image
                      src={item.sponsor_logo}
                      alt="logo img"
                      width={200}
                      height={128}
                      style={{ opacity: "0.8" }}
                    />
                  </div>
                  <div className="w-full h-[21px] modanatura_sponsor_zone"></div>
                </div>
              ))}
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
