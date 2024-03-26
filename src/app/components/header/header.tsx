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
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
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
            <a key={index} href={item.route}>
              {item.title}
            </a>
          ))}
        </div>
      </div>

      {/** Mobile Menu */}

      <div
        className={`flex flex-col md:hidden px-6 py-4 w-full transition-colors z-50`}
      >
        <div className={"flex items-center justify-between"}>
        <img src="/img/logo/ethRomeLogo.png" className="h-10" />
          <img
            src={!isMenuOpen ? "/img/mobile/menu_burger.svg" : "/img/mobile/menu_burger.svg"}
            className="h-8"
            onClick={() => toggleMenu()}
          />
        </div>
        {isMenuOpen && (
          <div className="flex flex-col items-center mt-4 space-y-4 text-lg font-medium">
            <h3
              className="cursor-pointer hover:underline"
              onClick={() => scrollTo("intro")}
            >
              About
            </h3>
            <h3
              className="cursor-pointer hover:underline"
              onClick={() => scrollTo("hackathon")}
            >
              Tracks
            </h3>
            <h3
              className="cursor-pointer hover:underline"
              onClick={() => scrollTo("bounties")}
            >
              Bounties
            </h3>
            <h3
              className="cursor-pointer hover:underline"
              onClick={() => scrollTo("contact")}
            >
              Sponsor Zone
            </h3>
            <Link
              href="https://ethrome.notion.site/Schedule-ff7f183b415c47c69aea2799540deb30"
              target="_blank"
            >
              <h3 className="relative underline_item cursor-pointer">
                Schedule
              </h3>
            </Link>
            <Link
              href="https://ethrome.notion.site/Regulation-7d77e4d4903d47baae9a6e8f21cf4200"
              target="_blank"
            >
              <h3 className="relative underline_item cursor-pointer">
                Regulation
              </h3>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
