"use client";

import Image from "next/image";
import ButtonPurple from "./buttons/buttonPurple";

export default function AboveFold() {
  return (
    <div className="w-full relative h-[810px] md:h-[calc(100vh-80px)] ">
      <div className="absolute w-full -top-[80px] left-0 flex flex-col justify-start items-start gap-[8.46px]">
        <div className="w-full h-[36.76px] modanatura opacity-[0.6]"></div>
        <div className="w-full h-[36.76px] modanatura opacity-[0.5]"></div>
        <div className="w-full h-[36.76px] modanatura opacity-[0.4]"></div>
      </div>

      <div className="w-full px-6 pt-16 flex flex-col items-center justify-center md:px-0 md:pt-0 md:h-[calc(100%-63.578px)]">
        <div className=" z-10 flex flex-col items-center justify-center w-full h-full gap-0 md:gap-8 md:w-auto md:flex-row">
          {/* logo */}

          <Image
            src="/img/aboveFold/ethRomeLogo_aboveFold.svg"
            width={0}
            height={0}
            alt="ETHRome Logo"
            className="w-[264px] h-[264px] md:w-[480px] md:h-[480px]"
          />

          {/**Right container */}

          <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full gap-8">
            <div className="flex flex-col items-start">
              <Image
                src="/img/aboveFold/ethRomeLogoClaim_aboveFold.svg"
                width={0}
                height={0}
                alt="ETHRome Logo Text & Claim"
                className="w-[284px] h-[73.51px] md:w-[424.96px] md:h-[110px]"
              />
            </div>

            <div className="flex flex-col items-center md:justify-start items-start gap-6">
              <div className="flex flex-col items-center md:items-start gap-2 red_hat_display">
                <div className="flex flex-col text-center items-center md:items-start text-ethrome-white text-xl">
                  <p className="">Come, enjoy and build with care.</p>
                  <p>
                    <span className="font-bold">Account Abstraction </span>&
                    <span className="font-bold"> Privacy </span>Tracks.
                  </p>
                </div>
                <p className="text-base text-ethrome-yellow leading-8 font-black italic">
                  4-6 October 2024
                </p>
              </div>
              <ButtonPurple cta="Feel the vibe" route="https://twitter.com/ETHRome" />
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://linktr.ee/urbe.eth"
        className="absolute bottom-[34px] left-1/2 -translate-x-1/2 z-10"
        target="_blank"
      >
        <Image
          src="/img/aboveFold/sponsoredUrbe.png"
          width={107}
          height={37}
          alt="sponsored by urbe.eth"
        />
      </a>
      <div className="absolute bottom-[5px] left-0 w-full h-[5px] bg-ethrome-brown"></div>
    </div>
  );
}
