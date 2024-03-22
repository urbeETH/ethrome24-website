"use client";

import Image from "next/image";

export default function Experience() {
  return (
    <div className="relative section_frame">
      
        <h1 className="px-[298px] pt-[104px] text-ethrome-white text-[56px] text-center"> What will you <span className="text-ethrome-yellow font-bold">find?</span></h1>
        

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
  );
}
