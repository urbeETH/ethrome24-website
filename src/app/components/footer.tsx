"use client";

import { Icon } from "@iconify-icon/react/dist/iconify.js";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center xl:justify-between w-full px-12 py-4 border-t-2 border-ethrome-brown gap-6 xl:gap-0 ">
      <div className="flex flex-col items-center justify-between w-full gap-3 xl:flex-row ">
        <Image src="/img/logo/ethRomeLogo.png" width={168} height={48} alt="logo footer"/>
        <div className="flex flex-col item-center justify-center text-sm text-center text-white xl:flex-row xl:text-base">
        <p className="flex items-center justify-center">
          WER S.R.L. <span className="hidden px-1 xl:block"> • </span>  
        </p>
        <p className="flex items-center justify-center">
        Via Beata Maria De Mattias, 2  <span className="hidden px-1 xl:block"> - </span>
        </p>
        <p className="flex items-center justify-center">
         00183 Roma (RM) <span className="hidden px-1 xl:block"> • </span> 
        </p>
        <p className="flex items-center justify-center">
        17627411006 <span className="hidden px-1 xl:block"> • </span> 
        </p>
        <p className="flex items-center justify-center">
        info@wersrl.com
        </p>
        </div>
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
