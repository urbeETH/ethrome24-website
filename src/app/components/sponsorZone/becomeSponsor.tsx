import ButtonPurple from "../buttons/buttonPurple";
import GrainBg from "../grainBg";

export default function BecomeSponsor() {
  return (
    <div className="relative flex">
      <GrainBg />
      <div
        id="becomeSponsor"
        className="becomeSponsor_bg relative w-full flex flex-col justify-between gap-10 p-6 lg:flex-row xl:gap-24 xl:p-8"
      >
        <div className="max-w-[1109px] flex flex-col items-center justify-start gap-2 text-ethrome-white">
          <p className="w-full text-start text-[36px] leading-tight xl:text-[56px] xl:leading-normal outfit">
            Become our sponsor!
          </p>
          <p className="w-full text-start text-lg leading-8 red_hat_display">
            ETHRome 2026 brings 40 selected builders to Urbe Hub in Rome, 11-13
            September. A smaller, sharper edition: sponsoring means real access
            to the people building, not a logo on a wall. A few slots are still
            open, request the deck and join us.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 z-50">
          <ButtonPurple
            cta="Request deck"
            route="mailto:hello@urbe.build?subject=Request%20ETHRome%20Deck"
            variant="primary"
          />
          <a
            className="text-ethrome-white text-center underline opacity-[64%]"
            href="mailto:hello@urbe.build"
          >
            hello@urbe.build
          </a>
        </div>
      </div>
    </div>
  );
}
