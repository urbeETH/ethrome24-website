"use client";

import { Icon } from "@iconify-icon/react/dist/iconify.js";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" flex flex-col items-center justify-center md:justify-between w-full px-12 py-4 border-t-2 border-ethrome-brown gap-6 md:gap-0 ">
      <div className="flex flex-col items-center justify-between w-full gap-3 md:gap-4 md:flex-row ">
        <Image src="/img/logo/ethRomeLogo.png" width={168} height={48} alt="logo footer"/>
        <p className="text-lg text-center text-white">
          Hacking history, shaping the future.
        </p>

        <div className="flex items-center gap-3">
          <Icon
            onClick={() => window.open("https://twitter.com/ETHRome", "_blank")}
            icon="mdi:twitter"
            className="text-4xl text-white cursor-pointer"
          />
          <Icon
            onClick={() => window.open("mailto:urbe.eth@gmail.com")}
            icon="material-symbols:mail-rounded"
            className="text-4xl text-white cursor-pointer z-10"
          />
        </div>
      </div>
    </footer>
  );
}
