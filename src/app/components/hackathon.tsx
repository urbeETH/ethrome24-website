"use client";

import Image from "next/image";
import GrainBg from "./grainBg";

export default function Hackathon() {
  return (
    <div
      id="hackathon"
      className="relative section_frame py-12 h-[1137px] lg:h-screen lg:py-0 "
    >
      <GrainBg />
      <Image
        src={"/img/mobile/flowers_gold_mobile.svg"}
        alt={"top gold icon"}
        width={0}
        height={0}
        className="w-full h-12 lg:hidden"
      />
      <div className="hackathon_frame flex flex-col justify-start items-center">
        <div className="flex flex-col justify-start items-center"
        style={{ fontSize: "min(max(2rem, 3vw), 3.5rem)" }}>
          <div className="flex flex-col justify-start items-center text-center lg:max-w-[844px] ">
            <h1 className="text-ethrome-white">
              The leading ETHalian Hackathon{" "}
              <span className="text-ethrome-yellow font-bold">
                {" "}
                crafted by builders, for builders
              </span>
            </h1>
            <h1></h1>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center gap-16 lg:gap-24 lg:flex-row">
          <div className="flex flex-col justify-start items-center gap-3 lg:gap-4">
            <Image
              src={"/img/hackathon/colosseum.svg"}
              alt="Colosseum"
              width={0}
              height={0}
              className="w-full max-w-20 lg:max-w-[144px]"
            />
            <div className=" text-ethrome-white text-xl leading-8 text-center red_hat_display max-w-[342px] lg:max-w-[358px]">
              <p>
                This hackathon is all about{" "}
                <span className="font-bold">
                  {" "}
                  Web3 most pressing challenges,
                </span>{" "}
                with a chance to soak in the culture, the food,
                <span className="font-bold">the eternal city.</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-3 lg:gap-4">
            <Image
              src={"/img/hackathon/romans.svg"}
              alt="Ancient Romans"
              width={0}
              height={0}
              className="w-full max-w-20 lg:max-w-[144px]"
            />
            <div
              className="text-ethrome-white text-xl leading-8 text-center red_hat_display max-w-[342px] lg:max-w-[358px]">
              <div className="flex flex-col justify-center items-center">
                <p>
                  We like <span className="font-bold">showing</span>, not
                  telling.
                </p>
                <p>
                  <span className="font-bold">Building</span>, not talking.{" "}
                </p>
              </div>
              <p>
                <span className="font-bold">
                  {" "}
                  As serial hackers, we understand what you want.
                </span>
                Come find out at ETHRome.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/img/decors/double_columns.svg"}
        alt={"columns icon"}
        width={371}
        height={0}
        className="hackathon_double_columns absolute left-[9.5px] px-[9.5px] bottom-0 mix-blend-color-dodge opacity-[0.8] lg:left-[170px] lg:px-0 "
      />
      <Image
        src={"/img/decors/flowers_hackathon.svg"}
        alt={"left icon"}
        width={0}
        height={0}
        className="hidden absolute left-[57px] w-12 max-w-14 h-full object-cover rotate-90 top-0 mix-blend-color-dodge opacity-[0.8] lg:flex lg:rotate-0"
      />

      <Image
        src={"/img/decors/flowers_gold.svg"}
        alt={"right cold icon"}
        width={0}
        height={0}
        className="hidden w-12 max-w-14 absolute top-0 right-[55.96px] h-full object-cover lg:block"
      />
    </div>
  );
}
