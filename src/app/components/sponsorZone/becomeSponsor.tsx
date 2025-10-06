import ButtonPurple from "../buttons/buttonPurple";
import GrainBg from "../grainBg";

export default function BecomeSponsor() {
  return (
    <div className="relative hidden xl:flex">
      <GrainBg />
      <div
        id="becomeSponsor"
        className="becomeSponsor_bg relative w-full flex flex-col justify-between gap-24 p-8 lg:flex-row"
      >
        <div className="max-w-[1109px] flex flex-col items-center justify-start gap-2 text-ethrome-white">
          <p className="w-full text-start text-[56px] outfit">
            Become our sponsor!
          </p>
          <p className="w-full text-start text-lg leading-8 red_hat_display">
            Seize the chance to gain exceptional exposure, establish valuable
            connections, and demonstrate your unwavering support for the
            development of the blockchain space!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 z-50">
          <ButtonPurple
            cta="Request deck"
            route="mailto:sponsor@ethrome.org?subject=Request%20ETHRome%20Deck"
            variant="primary"
          />
          <a
            className="text-ethrome-white text-center underline opacity-[64%]"
            href="mailto:sponsor@ethrome.org"
          >
            hello@urbe.build
          </a>
        </div>
      </div>
    </div>
  );
}
