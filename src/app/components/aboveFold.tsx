"use client";

import Image from "next/image";
import ButtonPurple from "./buttons/buttonPurple";

export default function AboveFold() {
  return (
    <div className="h-[calc(100vh-80px)] relative">
      <Image
        src="/img/aboveFold/modanatura_triple.svg"
        width={0}
        height={0}
        alt="Modanatura Above the Fold"
        style={{ width: "100vw", height:"122px" }}
        className="absolute -top-[80px] left-0"
      />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="z-10 flex flex-col items-center justify-between w-full h-full space-x-0 md:flex-row md:space-y-0 md:space-x-8 md:w-auto">
          {/* logo */}

          <Image
            src="/img/aboveFold/ethRomeLogo_aboveFold.svg"
            width={480}
            height={480}
            alt="ETHRome Logo"
            className=""
          />

          {/**Right container */}

          <div className="flex flex-col items-start w-full gap-8">
            <div className="flex flex-col items-start">
              <Image
                src="/img/aboveFold/ethRomeLogoClaim_aboveFold.svg"
                width={424.96}
                height={110}
                alt="ETHRome Logo Text & Claim"
                className=""
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col items-start gap-2">
                <div className="flex flex-col items-start text-ethrome-white text-xl">
                  <p>Come, enjoy and build with care.</p>
                  <p>
                    <span className="font-bold">Account Abstraction </span>&
                    <span className="font-bold"> Privacy</span>Tracks.
                  </p>
                </div>
                <p className="text-base text-ethrome-yellow leading-8 font-black italic">
                  4-6 October 2024
                </p>
              </div>

              <ButtonPurple
                cta="Feel the vibe"
                route=""
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/img/aboveFold/sponsoredUrbe.png"
        width={107}
        height={37}
        alt="sponsored by urbe.eth"
        className="absolute bottom-[34px] left-1/2 -translate-x-1/2"
      />
      <div className="absolute bottom-[5px] left-0 w-full h-[5px] bg-ethrome-brown">

      </div>
    </div>
  );
}
