"use client";

import Image from "next/image";
import ButtonPurple from "./buttons/buttonPurple";

export default function SponsorZone() {
  return (
    <div id="sponsorZone" className="relative section_frame h-[810px] overflow-hidden md:h-auto">
      {/**       <Image
        src="/img/decors/modanatura_cols.svg"
        alt="sponsor zone modanatura"
        width={0}
        height={27}
        style={{ width: "100%" }}
        className="mix-blend-color-dodge opacity-[0.8]"*/}
      <div className="w-full h-[27px] modanatura_cols"></div>

      <div className="relative flex flex-col justify-start px-6 pt-[120px] md:px-0 md:pt-[168px] md:pb-[151px] md:pl-[223px]">
        <div className="flex flex-col justify-start max-w-[519px] items-start gap-9">
          <div className="flex flex-col items-start justify-start gap-3">
            <img
              src="/img/sponsor_zone/sponsor_crown.svg"
              className="w-20 h-20 drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] md:h-40 md:w-40"
            />
            <div className="flex flex-col justify-start items-start gap-4">
              <h1 className="text-[32px] font-bold text-white md:text-7xl text-left">
                Sponsor Zone
              </h1>
              <p className="sponsor_zone_description text-ethrome-white md:text-left red_hat_display">
                Seize the chance to gain exceptional exposure, establish
                valuable connections, and demonstrate your unwavering support
                for the development of the blockchain space!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start gap-2">
            <ButtonPurple cta="Request deck" route="mailto:sponsor@ethrome.org?subject=Request%20ETHRome%20Deck" />
            <a
              className="text-ethrome-white text-center underline opacity-[64%]"
              href="mailto:sponsor@ethrome.org"
            >
              sponsor@ethrome.org
            </a>
          </div>
        </div>
      </div>
      <img
          src="/img/decors/flowers.svg"
          alt=""
          className="absolute bottom-0 left-[43px] h-[calc(100%-27px)] mix-blend-color-dodge opacity-[0.8]"
        />
      <Image
        src="/img/sponsor_zone/temple.svg"
        alt="Temple"
        width={0}
        height={0}
        className="absolute bottom-0 w-[404px] h-[353px] -right-[125px] md:right-0 mix-blend-color-dodge opacity-[0.8] md:h-[624px] md:w-auto"
      />
    </div>
  );
}
