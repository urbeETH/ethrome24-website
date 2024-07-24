"use client";

import { partnersItems } from "./partnersItems";

import Image from "next/image";
import { useState } from "react";

export default function SponsorZoneMobile({
  className,
}: {
  className?: string;
}) {
  const [switchSponsor, setswitchSponsor] = useState(false);

  const togglesponsor = () => {
    setswitchSponsor(!switchSponsor);
  };

  const sponsorsItems = [
    {
      sponsor_logo: "/img/sponsor_zone/sponsors/logo-ens.svg",
    },
    {
      sponsor_logo: "/img/sponsor_zone/sponsors/logo-iexec.svg",
    },
    {
      sponsor_logo: "/img/sponsor_zone/sponsors/logo-zkpass.svg",
    },
    {
      sponsor_logo: "/img/sponsor_zone/sponsors/logo-buidlguidl.svg",
    },
    {
      sponsor_logo: "/img/sponsor_zone/sponsors/logo-purpleDAO.svg",
    },
  ];

  return (
    <div className={`${className}`}>
      <div className="w-full h-[27px] modanatura_cols"></div>

      <div className="flex justify-center items-center pt-10 pb-24 px-6">
        {/** Partners */}
        {switchSponsor && (
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex justify-start items-start gap-2">
                <div
                  onClick={togglesponsor}
                  className="flex justify-center text-[#F8FCFC] text-lg items-center w-[131px] h-[32px] opacity-40 cursor-pointer"
                >
                  SPONSORS
                </div>
                <div
                  onClick={togglesponsor}
                  className="flex justify-center items-center w-[131px] h-[32px] bg-ethrome-purple text-ethrome-white text-lg rounded-[22px] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] hover:bg-ethrome-dark-purple cursor-pointer"
                >
                  PARTNERS
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {partnersItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[148px] h-[112px] gap-[3px]"
                  >
                    <div className="flex justify-center items-center sponsor_zone_box_bg h-[88px] py-2 px-[14px]">
                      <Image
                        src={item.partners_logo}
                        alt="logo img"
                        width={120}
                        height={72}
                        style={{ opacity: "0.8" }}
                      />
                    </div>
                    <div className="w-full h-[21px] modanatura_sponsor_zone"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/** Sponsors  */}
        {!switchSponsor && (
          <div className="flex flex-col gap-6">
            <div className="flex justify-start items-start gap-2">
              <div
                onClick={togglesponsor}
                className="flex justify-center items-center w-[131px] h-[32px] bg-ethrome-purple text-ethrome-white text-lg rounded-[22px] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] hover:bg-ethrome-dark-purple cursor-pointer"
              >
                SPONSORS
              </div>
              <div
                onClick={togglesponsor}
                className="flex justify-center text-[#F8FCFC] text-lg items-center w-[131px] h-[32px] opacity-40 cursor-pointer"
              >
                PARTNERS
              </div>
            </div>

            <div className="flex flex-col justify-start items-start gap-3">
              <div className="grid grid-cols-2 gap-3">
                {sponsorsItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[155px] h-[112px] gap-[3px]"
                  >
                    <div className="flex justify-center items-center sponsor_zone_box_bg h-[88px] py-2 px-5">
                      <Image
                        src={item.sponsor_logo}
                        alt="logo img"
                        width={160}
                        height={96}
                        style={{ opacity: "0.8" }}
                      />
                    </div>
                    <div className="w-full h-[21px] modanatura_sponsor_zone"></div>
                  </div>
                ))}
              </div>

              {/**Last */}
              <div className="flex flex-col w-[322px] h-[112px] gap-[3px]">
                <div className="flex justify-center items-center sponsor_zone_box_bg h-[88px] py-2 px-5">
                  <Image
                    src="/img/sponsor_zone/sponsors/logo-ethereum.svg"
                    alt="logo img"
                    width={160}
                    height={96}
                    style={{ opacity: "0.8" }}
                  />
                </div>
                <div className="w-full h-[21px] modanatura_sponsor_zone"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
