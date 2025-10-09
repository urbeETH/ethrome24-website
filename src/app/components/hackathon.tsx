"use client";

import Image from "next/image";
import GrainBg from "./grainBg";

export default function Hackathon() {
  return (
    <div
      id="hackathon"
      className="relative section_frame pt-12 pb-4 xl:h-screen xl:py-0 overflow-hidden"
    >
      <GrainBg />

      <div className="w-full h-12 xl:hidden" >
         <Image
          src={"/img/mobile/flowers_gold_mobile.svg"}
          alt={"top gold icon"}
          width={1281}
          height={48}
          className="w-full h-12 object-cover"
          style={{ width: "100vw" }}
        /> 
      </div>

      <div className="hackathon_frame flex flex-col justify-center items-center">
        <div
          className="flex flex-col justify-start items-center"
          style={{ fontSize: "min(max(2rem, 3vw), 3.5rem)" }}
        >
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

        <div className="flex flex-col justify-center items-center gap-16 xl:gap-24 xl:flex-row">
          <div className="flex flex-col justify-start items-center gap-3 xl:gap-4">
            <Image
              src={"/img/hackathon/romans.svg"}
              alt="Ancient Romans"
              width={0}
              height={0}
              className="w-full max-w-20 xl:max-w-[144px]"
            />
            <div className="text-ethrome-white text-xl leading-8 text-center red_hat_display max-w-[342px] lg:max-w-[400px]">
              <div className="flex flex-col justify-center items-center">
                <p>
                  We like <span className="font-bold">showing</span>, not
                  telling. <span className="font-bold">Building</span>, not
                  talking.{" "}
                  <span className="font-bold">
                    {" "}
                    As serial hackers, we understand what you want.
                  </span>{" "}
                  Come find out at ETHRome.
                </p>
              </div>
              <p></p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-3 xl:gap-4">
            <Image
              src={"/img/hackathon/colosseum.svg"}
              alt="Colosseum"
              width={0}
              height={0}
              className="w-full max-w-20 xl:max-w-[144px]"
            />
            <div className=" text-ethrome-white text-xl leading-8 text-center red_hat_display max-w-[342px] lg:max-w-[400px]">
              <p>
                This hackathon is all about{" "}
                <span className="font-bold">
                  {" "}
                  Web3 most pressing challenges,
                </span>{" "}
                with a chance to soak in the culture, the food and{" "}
                <span className="font-bold">the eternal city.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-12">
        <Image
          src={"/img/decors/double_columns.svg"}
          alt={"columns icon"}
          width={371}
          height={0}
          className="hackathon_double_columns mix-blend-color-dodge opacity-[0.8] xl:absolute xl:left-[170px] bottom-0 "
        />
      </div>

      <div className="hidden xl:block absolute top-0 left-[57px] bottom-0 mix-blend-color-dodge opacity-[0.8]">
        <Image
          src={"/img/decors/flowers_hackathon.svg"}
          alt={"left icon"}
          width={56}
          height={0}
          className="h-full w-auto object-contain"
          style={{ height: "100vh" }}
        />
      </div>
      <div className="hidden xl:block absolute top-0 right-[55.96px] bottom-0">
        <Image
          src={"/img/decors/flowers_gold.svg"}
          alt={"right gold icon"}
          width={56}
          height={0}
          className="h-full w-auto object-contain"
          style={{ height: "100vh" }}
        />
      </div>
    </div>
  );
}
