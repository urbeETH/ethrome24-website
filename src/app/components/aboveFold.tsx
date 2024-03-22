"use client";

import Image from "next/image";

export default function AboveFold() {
  return (
    <div className="h-[calc(100vh-80px)] relative">
      <div className="flex flex-col items-center justify-start h-full md:justify-center md:pt-0">
        <div className="z-10 flex flex-col items-center justify-between w-full h-full space-x-0 md:flex-row md:space-y-0 md:space-x-8 md:w-auto">
          {/* logo */}

          <Image
            src="/img/aboveFold/ethRomeLogo_aboveFold.svg"
            width={367.41}
            height={399.36}
            alt="sponsored by urbe.eth"
            className=""
          />

          {/* hacking history */}
          <div className="flex flex-col items-center w-full px-4 space-y-8 md:items-start md:space-y-8 md:w-auto">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-4xl sm:text-5xl md:text-7xl">
                <span className="font-bold">ETH</span>
                <span className="font-light">Rome</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-normal text-center md:text-left max-w-[240px] md:max-w-none mt-2 md:mt-0">
                Hacking history, shaping the future
              </h2>
            </div>
            <div className="flex-col hidden md:flex">
              <h3 className="text-xl">
                Second Edition coming{" "}
                <span className="font-semibold">Autumn 2024</span>
              </h3>
            </div>

            {/* hacker form link */}
            <div className="flex flex-col items-center w-5/6 mt-4 space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <a
                href="https://twitter.com/ETHRome"
                className="w-full md:w-48 bg-rome-purple transition-colors drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] hover:drop-shadow-none rounded-full flex items-center justify-center text-white py-2 font-medium border-2 border-transparent px-2"
              >
                <p>Stay Updated</p>
              </a>

              <a
                className="w-full md:w-72 text-rome-purple transition-colors drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center py-2 font-medium border-2 border-rome-purple hover:text-white hover:bg-rome-100 hover:border-transparent"
                href="https://ethrome.notion.site/ETHRome-Hacker-Manual-e3aa8b443a84426186eede13b0ae8709"
                target="_blank"
              >
                <h2>Hacker Manual 2023</h2>
              </a>
            </div>
          </div>

          {/* dates */}
          <div className="flex flex-col justify-center flex-auto text-center text-black md:hidden">
            <h3 className="text-xl font-semibold">6-8th October 2023</h3>
            <p className="text-xl">Governance & Privacy Hackathon</p>
          </div>
        </div>

        <img
          src="splash_white_mobile.png"
          className="absolute z-0 block w-full md:hidden -bottom-56"
        />
      </div>
      <Image
        src="/img/aboveFold/sponsoredUrbe.png"
        width={107}
        height={37}
        alt="sponsored by urbe.eth"
        className="absolute bottom-[34px] left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
