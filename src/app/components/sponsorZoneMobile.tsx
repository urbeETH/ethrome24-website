"use client";

import { sponsorsItems } from "./sponsorsItems";
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

  return (
    <div className={`${className}`}>
      <div className="w-full h-[27px] modanatura_cols"></div>

      <div className="flex pt-10 pb-24 px-6">
        <>
          {/** Partners */}
          <div className="flex flex-col justify-start items-start gap-6">
            {!switchSponsor && (
              <div className="flex flex-col gap-6">
                <div className="flex justify-start items-start gap-2">
                  <div
                    onClick={togglesponsor}
                    className="flex justify-center text-[#F8FCFC] text-lg items-center w-[164px] h-[44px] opacity-40"
                  >
                    SPONSORS
                  </div>
                  <div
                    onClick={togglesponsor}
                    className="flex justify-center items-center w-[164px] h-[44px] bg-ethrome-purple text-ethrome-white text-lg rounded-[22px] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] ${className} hover:bg-ethrome-dark-purple"
                  >
                    PARTNERS
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {partnersItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col min-w-[148px] h-[122px]"
                    >
                      <div className="relative sponsor_zone_box_bg h-[122px] px-2">
                        <Image
                          src={item.partners_logo}
                          alt="logo img"
                          width={0}
                          height={0}
                          style={{ width: "100%", height: "100%" }}
                          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        />
                      </div>
                      <div className="w-full h-[21px] modanatura_sponsor_zone"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>

        {switchSponsor && (
          <>
            {/** Sponsors  */}

            <div className="flex flex-col gap-6">
              <div className="flex justify-start items-start gap-2">
                <div
                  onClick={togglesponsor}
                  className="flex justify-center items-center w-[164px] h-[44px] bg-ethrome-purple text-ethrome-white text-lg rounded-[22px] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] ${className} hover:bg-ethrome-dark-purple"
                >
                  SPONSORS
                </div>
                <div
                  onClick={togglesponsor}
                  className="flex justify-center text-[#F8FCFC] text-lg items-center w-[164px] h-[44px] opacity-40"
                >
                  PARTNERS
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-6">
                <div className="grid grid-cols-2 gap-3">
                  {sponsorsItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center min-w-[165px] h-[112px] relative sponsor_zone_box_bg"
                    >
                      <div>
                        <Image
                          src={item.sponsor_logo}
                          alt="logo img"
                          width={0}
                          height={0}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className="w-full h-[21px] modanatura_sponsor_zone"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
