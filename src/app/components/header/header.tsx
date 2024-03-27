"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { headerItems } from "./headerItems";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`relative hidden md:flex items-center justify-between px-10 py-4 w-full z-50`}
      >
        <Link href="/">
          <img src="/img/logo/ethRomeLogo.png" className="h-12" />
        </Link>

        <div className="flex items-center justify-center space-x-10 text-lg text-white font-semibold">
          {headerItems.map((item, index) => (
            <Link key={index} href={item.route}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/** Mobile Menu */}

      <div
        className={`relative flex flex-col md:hidden px-6 py-4 w-full transition-colors z-50`}
      >
        <div className={"flex items-center justify-between"}>
          <img src="/img/logo/ethRomeLogo.png" className="h-10" />
          <img
            src={
              !isMenuOpen
                ? "/img/mobile/menu_burger.svg"
                : "/img/mobile/menu_burger_close.svg"
            }
            className="h-8"
            onClick={() => toggleMenu()}
          />
        </div>
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-[calc(100%-72px)] mt-[72px] bg-ethrome-BlackerThanPurple">
            <div className="flex flex-col h-full justify-center items-center text-xl font-medium gap-14">
              {headerItems.map((item, index) => (
                <Link key={index} href={item.route} onClick={toggleMenu} className="px-7 py-1 bg-ethrome-white rounded-[22px]">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
