"use client";

import Image from "next/image";

export default function Hackathon() {
  return (
    <div
      id="hackathon"
      className="relative section_frame py-12 h-[1037px] md:h-auto md:py-0 "
    >
      <Image
        src={"/img/mobile/flowers_gold_mobile.svg"}
        alt={"top gold icon"}
        width={0}
        height={0}
        className="w-full h-12 md:hidden"
      />
      <div className="flex flex-col justify-start items-center pt-[71px] px-6 gap-16 md:px-[298px] md:pt-[104px] md:pb-[205px] md:gap-[104px]">
        <div className="flex flex-col justify-start items-center text-[32px] md:text-[56px]">
          <div className="flex flex-col justify-start items-center text-center md:max-w-[844px] ">
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

        <div className="flex flex-col justify-start items-center gap-16 md:gap-24 md:flex-row">
          <div className="flex flex-col justify-start items-center gap-3 md:gap-4">
            <Image
              src={"/img/hackathon/romans.svg"}
              alt="romans"
              width={0}
              height={0}
              className="w-20 h-20 md:w-[144px] md:h-[144px]"
            />
            <div className=" text-ethrome-white text-xl leading-8 text-center red_hat_display">
              <p>Unite with fellow hackers to foster</p>
              <p>
                {" "}
                <span className="font-bold"> Account Abstraction</span> &{" "}
                <span className="font-bold">Privacy-</span>
              </p>
              <p>preserving technologies.</p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-3 md:gap-4">
            <Image
              src={"/img/hackathon/colosseum.svg"}
              alt="romans"
              width={0}
              height={0}
              className="w-20 h-20 md:w-[144px] md:h-[144px]"
            />
            <div className=" text-ethrome-white text-xl leading-8 text-center red_hat_display md:max-w-[374px]">
              <p>
                Address{" "}
                <span className="font-bold">web3 most pressing challenges </span>
                while getting inspired by the
                <span className="font-bold"> historic </span>
                <span className="font-bold">spendour </span>of Rome.
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
        className="absolute px-[9.5px] bottom-0 mix-blend-color-dodge opacity-[0.8] md:left-[170px] md:px-0 "
      />

      <Image
        src={"/img/decors/flowers_hackathon.svg"}
        alt={"left icon"}
        width={0}
        height={0}
        className="hidden absolute left-[57px] w-12 rotate-90 top-0 mix-blend-color-dodge opacity-[0.8] md:flex md:rotate-0"
        style={{ height: "102%" }}
      />
      <Image
        src={"/img/decors/flowers_gold.svg"}
        alt={"right cold icon"}
        width={0}
        height={0}
        className="hidden w-12 absolute top-0 right-[55.96px] h-[102%] md:block"
      />
    </div>
  );
}
