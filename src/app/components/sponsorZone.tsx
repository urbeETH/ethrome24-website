"use client";

import Image from "next/image";
import ButtonPurple from "./buttons/buttonPurple";

export default function SponsorZone() {
  return (
    <div className="relative section_frame pt-[168px] pb-[151px] pl-[223px] ">
      <div className="flex flex-col justify-start max-w-[519px] items-center gap-9">
        <div className="flex flex-col items-center justify-start gap-3">
          <img
            src="/img/sponsor_zone/sponsor_crown.svg"
            className="h-[160px] w-[160px]"
          />
          <div className="flex flex-col justify-start items-center gap-0.5">
            <h1 className="font-bold text-white md:text-7xl text-left">
              Sponsor Zone
            </h1>
            <p className="text-ethrome-white text-lg leading-8 text-center md:text-left">
              Seize the chance to gain exceptional exposure, establish valuable
              connections, and demonstrate your unwavering support for the
              development of the blockchain space!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start gap-4">
          <ButtonPurple cta="Request deck" route="" />
        </div>
        <a
          className="text-ethrome-white text-center underline opacity-[64%]"
          href="mailto:sponsor@ethrome.org"
        >
          sponsor@ethrome.org
        </a>
      </div>

      <img
        src="/img/decors/flowers.svg"
        alt=""
        className="absolute top-0 left-[43px] h-full mix-blend-color-dodge opacity-[0.8]"
      />
      <img
        src="/img/decors/modanatura.svg"
        alt=""
        className="absolute top-0 left-0 w-full min-w-full h-[27px] mix-blend-color-dodge opacity-[0.8]"
      />
      <Image
        src="/img/sponsor_zone/temple.svg"
        alt="Temple"
        width={0}
        height={624}
        className="absolute bottom-0 right-0 mix-blend-color-dodge opacity-[0.8] "
        style={{ width: "auto" }}
      />
    </div>
  );
}
