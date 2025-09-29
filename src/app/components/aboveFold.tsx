"use client";

import Image from "next/image";
import ButtonPurple from "./buttons/buttonPurple";
import GrainBg from "./grainBg";

export default function AboveFold() {
  return (
    <div className="w-full relative min-h-[810px] h-screen xl:h-[calc(100vh-80px)]">
      <GrainBg />
      {/**Modanatura top*/}
      <div className="absolute w-full top-0 left-0 flex flex-col justify-start items-start gap-[8.46px] xl:-top-[80px]">
        <div className="w-full h-[36.76px] modanatura opacity-[0.6]"></div>
        <div className="w-full h-[36.76px] modanatura opacity-[0.5]"></div>
        <div className="w-full h-[36.76px] modanatura opacity-[0.4]"></div>
      </div>

      <div className="w-full px-6 pt-[75px] flex flex-col items-center justify-center xl:px-0 xl:pt-0 xl:h-[calc(100%-63.578px)]">
        <div className="aboveFold_items_box z-10 flex flex-col items-center justify-center w-full h-full gap-0 xl:gap-8 xl:w-auto">
          {/* logo */}

          <Image
            src="/img/aboveFold/ethRomeLogo_aboveFold.svg"
            width={0}
            height={0}
            alt="ETHRome Logo"
            className="w-full h-full max-w-[264px] max-h-[264px] md:max-w-[480px] md:max-h-[480px]"
          />

          {/**Right container */}

          <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start w-full gap-8">
            <div className="flex flex-col items-start">
              <Image
                src="/img/aboveFold/ethRomeLogoClaim_aboveFold.svg"
                width={0}
                height={0}
                alt="ETHRome Logo Text & Claim"
                className="w-full h-full max-w-[284px] max-h-[73.51px] md:max-w-[424.96px] md:max-h-[110px]"
              />
            </div>

            <div className="flex flex-col items-center xl:justify-start xl:items-start gap-6">
              <div className="flex flex-col items-center xl:items-start gap-6 red_hat_display">
                <div className="flex flex-col text-center items-center xl:items-start text-ethrome-white text-xl leading-9">
                  <p>Come, enjoy and build with care.</p>
                  <p>
                    <span className="font-bold">AI, DeFi </span>&
                    <span className="font-bold"> Privacy </span>tracks.
                  </p>
                </div>
                <p className="text-base text-ethrome-yellow leading-8 font-black italic">
                  17-19 October 2025
                </p>
              </div>
              <div className="flex flex-row space-x-4">
                <ButtonPurple
                  cta="Apply to Hack"
                  route="https://docs.google.com/forms/d/e/1FAIpQLSejn4me435Qisw_1aPcMQjuRTu6UEvPrjqm4m6zWXgXDu5Tew/viewform"
                  variant="primary"
                />
                <ButtonPurple
                  cta="Hacker Manual"
                  route="https://ethrome25.notion.site/ETHRome-2025-Hacker-Manual-160d00c099af8080be9de5d98f45d2ca"
                  variant="outline"
                />
              </div>
              {/**
              <div className="flex flex-row space-x-4">
               
                <ButtonPurple
                  cta="Hacker Manual"
                  route="https://builders-garden.notion.site/ETHRome-2024-Hacker-Manual-3d270d9f5d594d9a9faf2f34f6ee7eb5?pvs=74"
                  variant="primary"
                />
                <ButtonPurple
                  cta="Side Events"
                  route="https://lu.ma/ethrome-24"
                  variant="outline"
                />
                <ButtonPurple
                  cta="Apply to Hack"
                  route=""
                  variant="primary"
                />
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://urbe.build/"
        className="absolute bottom-[34px] left-1/2 -translate-x-1/2 z-10"
        target="_blank"
      >
        <Image
          src="/img/aboveFold/hosted_by_urbe.eth.svg"
          width={208}
          height={63}
          alt="sponsored by urbe.eth"
        />
      </a>
    </div>
  );
}
