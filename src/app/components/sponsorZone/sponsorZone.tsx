"use client";

import Image from "next/image";
import ButtonPurple from "../buttons/buttonPurple";
import GrainBg from "../grainBg";

import { partnersItems } from "./partnersItems";
import { sponsorsItemsTier1 } from "./sponsorsItems";
import { sponsorsItemsTier2 } from "./sponsorsItems";
import { sponsorsItemsTier3 } from "./sponsorsItems";

export default function SponsorZone() {
  return (
    <div id="sponsorZone" className="section_frame ">
      <GrainBg />
      <div className="w-full h-[27px] modanatura_cols"></div>

      <div className="w-full flex flex-col justify-center px-6 py-24 gap-16 2xl:px-20">
        {/** Sponsors  */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex justify-center items-center w-[164px] h-[44px] bg-ethrome-purple uppercase text-ethrome-white text-base rounded-[22px] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] ${className} hover:bg-ethrome-dark-purple">
            Sponsors
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-10">
            {/** TIER 1 */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {sponsorsItemsTier1.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[155px] h-[112px] gap-[3px] xl:w-[246px] xl:h-[168px]"
                >
                  <div className="flex justify-center items-center sponsor_zone_box_bg h-[112px] xl:h-[auto] py-2 px-5">
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
            {/** TIER 2 */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
              {sponsorsItemsTier2.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[155px] h-[112px] gap-[3px] xl:w-[202px] xl:h-[136px]"
                >
                  <div className="flex justify-center items-center sponsor_zone_box_bg h-[112px] xl:h-[auto] py-2 px-5">
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

                          {/** TIER 3 */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
              {sponsorsItemsTier3.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[150px] h-[112px] gap-[3px]"
                >
                  <div className="flex justify-center items-center sponsor_zone_box_bg h-[112px] xl:h-[auto] py-2 px-5">
                    <Image
                      src={item.sponsor_logo}
                      alt="logo img"
                      width={150}
                      height={112}
                      style={{ opacity: "0.8" }}
                    />
                  </div>
                  <div className="w-full h-[21px] modanatura_sponsor_zone"></div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/** Partners */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex justify-center items-center w-[164px] h-[44px] bg-ethrome-purple uppercase text-ethrome-white text-base rounded-[22px] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] ${className} hover:bg-ethrome-dark-purple">
            Partners
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
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
            sponsor@ethrome.org
          </a>
        </div>
      </div>
    </div>
  );
}
