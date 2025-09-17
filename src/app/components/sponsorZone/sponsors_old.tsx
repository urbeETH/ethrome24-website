"use client";

//import { sponsorsItemsTier1 } from "./sponsorsItems";
import Image from "next/image";

export default function Sponsors_old() {
  return (
    <div className="flex flex-col justify-start items-start gap-6">
      {/** TIER 1 
      <div className="flex flex-col justify-start gap-3">
        <div className="border-[#261418] border-y-0.5 bg-ethrome-BlackerThanPurple text-[#712E42]">
          TIER 1
        </div>
        <div className="flex flex-col  xl:flex-row gap-3">
          {sponsorsItemsTier1.map((item, index) => (
            <div key={index} className="flex flex-col min-w-[628px] h-[438px]">
              <div>
                <Image
                  src={item.sponsor_logo}
                  alt="logo img"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="w-full h-[21px] modanatura_cols_roof"></div>
            </div>
          ))}
        </div>
      </div>
      */}

      <div className="flex flex-col xl:flex-row">
        {/** TIER 2 */}
        <div className="w-1/2">
          <div className="border-[#261418] border-y-0.5 bg-ethrome-BlackerThanPurple text-[#712E42]">
            TIER 2
          </div>
          <div className="flex flex-col min-w-[628px] h-[438px]">
            <div>
              <Image
                src="/img/sponsor_zone/sponsors/buidlGuidl.png"
                alt="logo img"
                width={0}
                height={0}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="w-full h-[21px] modanatura_cols_roof"></div>
          </div>
        </div>

        {/** TIER 3 */}
        <div className="w-1/2">
          <div className="border-[#261418] border-y-0.5 bg-ethrome-BlackerThanPurple text-[#712E42]">
            TIER 3
          </div>
          <div className="flex flex-col min-w-[628px] h-[438px]">
            <div>
              <Image
                 src="/img/sponsor_zone/sponsors/web3Logo.png"
                alt="logo img"
                width={0}
                height={0}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="w-full h-[21px] modanatura_cols_roof"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
