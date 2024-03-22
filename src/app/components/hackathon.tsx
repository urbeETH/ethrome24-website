"use client";

import Image from "next/image";

export default function Hackathon() {
  return (
    <div className="relative section_frame">
      <div className="flex flex-col justify-start items-center px-[298px] pt-[104px] pb-[205px] gap-[104px]">
        <div className="flex flex-col justify-start items-center">
          <h1 className="text-ethrome-white text-[56px]">The leading ETHalian Hackathon</h1>
          <h1 className="text-ethrome-yellow text-[56px] font-bold">crafted by builders, for builders</h1>
        </div>

        <div className="flex justify-start items-center gap-24">
          <div className="flex flex-col justify-start items-center gap-4">
            <Image
              src={"/img/hackathon/romans.svg"}
              alt="romans"
              width={144}
              height={144}
            />
            <h1 className="red_hat_display text-ethrome-white">
              Unite with fellow hackers to foster Account Abstraction &
              Privacy-preserving technologies.
            </h1>
          </div>
          <div className="flex flex-col justify-start items-center gap-4">
            <Image
              src={"/img/hackathon/colosseum.svg"}
              alt="romans"
              width={144}
              height={144}
            />
            <h1 className="red_hat_display text-ethrome-white">
              Address web3 most pressing challenges while getting inspired by
              the historic splendour of Rome.
            </h1>
          </div>
        </div>
      </div>
      <Image src={"/img/decors/double_columns.svg"} alt={"columns icon"} width={370.57} height={389.44} className="absolute left-[170px] bottom-0 mix-blend-color-dodge opacity-[0.8]"/>

      <Image src={"/img/decors/flowers.svg"} alt={"left icon"} width={48.04} height={847.75} className="absolute left-[57px] bottom-0 mix-blend-color-dodge opacity-[0.8]" style={{width: "", height:"100%"}}/>
      <Image src={"/img/decors/flowers_gold.svg"} alt={"right cold icon"} width={48.04} height={847.75} className="absolute right-[55.96px] bottom-0"/>
    </div>
  );
}
