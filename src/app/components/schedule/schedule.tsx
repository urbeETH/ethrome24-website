import GrainBg from "../grainBg";
import {
  schedule_days_17,
  schedule_days_18,
  schedule_days_19,
} from "./schedule_days";

export default function Schedule() {
  return (
    <div id="schedule" className="relative section_frame ">
      <GrainBg />

      <div className="w-full py-16 flex flex-col justify-center items-start gap-10">
        {/** title */}
        <div className="flex justify-center items-start">
          <h1
            className="px-6 text-ethrome-white text-center 2xl:px-20"
            style={{ fontSize: "min(max(2rem, 3vw), 3.5rem)" }}
          >
            {" "}
            Discover the{" "}
            <span className="text-ethrome-yellow font-bold">schedule!</span>
          </h1>
        </div>
        {/** schedule  */}
        <div className="w-full flex flex-col justify-start items-center px-6 gap-10 2xl:px-20 2xl:items-start">
          <div className="w-full flex flex-col justify-start items-start gap-6 xl:flex-row">
            {/** 17 */}
            <div className="w-full xl:w-1/3 flex flex-col justify-center items-start gap-2">
              <div className="text-ethrome-yellow font-bold text-sm uppercase  ">
                OCT 17
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2">
                {schedule_days_17.map((item, index) => (
                  <div key={index} className="relative w-full rounded-2xl">
                    <div className="sponsor_zone_box_bg"></div>

                    <div className="w-full h-full p-4 gap-2 flex flex-col justify-start items-start rounded-2xl">
                      <div className="w-full flex flex-row justify-between items-center">
                        <p className="text-ethrome-white text-sm font-bold uppercase red_hat_display opacity-60 leading-5 tracking-[0.08em]">
                          {item.hour}
                        </p>
                        <div
                          className={`h-full px-[6px] py-[2px] rounded-[4px] ${item.category_bg}`}
                        >
                          <p
                            className={`font-bold text-xs uppercase tracking-[0.02em] text-${item.category_text_color}`}
                          >
                            {item.category}
                          </p>
                        </div>
                      </div>
                      <p className="text-ethrome-white text-xl tracking-[0.02em] red_hat_display">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/** 18 */}
            <div className="w-full xl:w-1/3 flex flex-col justify-center items-start gap-2">
              <div className="text-ethrome-yellow font-bold text-sm uppercase  ">
                OCT 18
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2">
                {schedule_days_18.map((item, index) => (
                  <div key={index} className="relative w-full rounded-2xl">
                    <div className="sponsor_zone_box_bg"></div>

                    <div className="w-full h-full p-4 gap-2 flex flex-col justify-start items-start rounded-2xl">
                      <div className="w-full flex flex-row justify-between items-center">
                        <p className="text-ethrome-white text-sm font-bold uppercase red_hat_display opacity-60 leading-5 tracking-[0.08em]">
                          {item.hour}
                        </p>
                        <div
                          className={`h-full px-[6px] py-[2px] rounded-[4px] ${item.category_bg}`}
                        >
                          <p
                            className={`font-bold text-xs uppercase tracking-[0.02em] text-${item.category_text_color}`}
                          >
                            {item.category}
                          </p>
                        </div>
                      </div>
                      <p className="text-ethrome-white text-xl tracking-[0.02em] red_hat_display">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/** 19 */}
            <div className="w-full xl:w-1/3 flex flex-col justify-center items-start gap-2">
              <div className="text-ethrome-yellow font-bold text-sm uppercase">
                OCT 19
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2">
                {schedule_days_19.map((item, index) => (
                  <div key={index} className="relative w-full rounded-2xl">
                    <div className="sponsor_zone_box_bg"></div>

                    <div className="w-full h-full p-4 gap-2 flex flex-col justify-start items-start rounded-2xl">
                      <div className="w-full flex flex-row justify-between items-center">
                        <p className="text-ethrome-white text-sm font-bold uppercase red_hat_display opacity-60 leading-5 tracking-[0.08em]">
                          {item.hour}
                        </p>
                        <div
                          className={`h-full px-[6px] py-[2px] rounded-[4px] ${item.category_bg}`}
                        >
                          <p
                            className={`font-bold text-xs uppercase tracking-[0.02em] text-${item.category_text_color}`}
                          >
                            {item.category}
                          </p>
                        </div>
                      </div>
                      <p className="text-ethrome-white text-xl red_hat_display tracking-[0.02em]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
