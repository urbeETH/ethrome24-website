"use client";

import Image from "next/image";

export default function Hackathon() {
  return (
    <div id="hackathon" className="relative section_frame">
      <div className="flex flex-col justify-start items-center px-[298px] pt-[104px] pb-[205px] gap-[104px]">
        <div className="flex flex-col justify-start items-center">
          <h1 className="text-ethrome-white text-[56px]">
            The leading ETHalian Hackathon
          </h1>
          <h1 className="text-ethrome-yellow text-[56px] font-bold">
            crafted by builders, for builders
          </h1>
        </div>

        <div className="flex justify-start items-center gap-24">
          <div className="flex flex-col justify-start items-center gap-4">
            <Image
              src={"/img/hackathon/romans.svg"}
              alt="romans"
              width={144}
              height={144}
            />
            <div className=" text-ethrome-white text-xl leading-8 text-center">
              <p>Unite with fellow hackers to foster</p>
              <p>
                {" "}
                <span className="font-bold"> Account Abstraction</span> &{" "}
                <span className="font-bold">Privacy-</span>
              </p>
              <p>preserving technologies.</p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-4">
            <Image
              src={"/img/hackathon/colosseum.svg"}
              alt="romans"
              width={144}
              height={144}
            />
            <div className=" text-ethrome-white text-xl leading-8 text-center">
              <p>
                Address{" "}
                <span className="font-bold">web3 most pressing challenges</span>
              </p>
              <p>
                while getting inspired by the
                <span className="font-bold">historic</span>
              </p>
              <p>
                <span className="font-bold">spendour</span>of Rome.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/img/decors/double_columns.svg"}
        alt={"columns icon"}
        width={370.57}
        height={389.44}
        className="absolute left-[170px] bottom-0 mix-blend-color-dodge opacity-[0.8]"
      />

      <Image
        src={"/img/decors/flowers.svg"}
        alt={"left icon"}
        width={48.04}
        height={847.75}
        className="absolute left-[57px] top-0 mix-blend-color-dodge opacity-[0.8]"
        style={{ width: "", height: "100%" }}
      />
      <Image
        src={"/img/decors/flowers_gold.svg"}
        alt={"right cold icon"}
        width={48.04}
        height={847.75}
        className="absolute right-[55.96px] top-0"
      />
    </div>
  );
}
