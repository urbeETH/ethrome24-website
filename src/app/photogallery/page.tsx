import Marquee from "react-fast-marquee";
import GallerySwiper from "./gallerySwiper";

export default function Photogallery() {
  return (
    <div className="relative section_frame">
      <Marquee className="w-full flex justify-start items-center px-6 py-3">
        <h1 className="pl-6 text-ethrome-white text-[32px] uppercase font-semibold tracking-[16px]">
          ETHROME 2023 Photogallery
        </h1>
        <h1 className="pl-6 text-ethrome-yellow text-[32px] uppercase font-semibold tracking-[16px]">
          ETHROME 2023 Photogallery
        </h1>
        <h1 className="pl-6 text-ethrome-white text-[32px] uppercase font-semibold tracking-[16px]">
          ETHROME 2023 Photogallery
        </h1>
        <h1 className="pl-6 text-ethrome-yellow text-[32px] uppercase font-semibold tracking-[16px]">
          ETHROME 2023 Photogallery
        </h1>
      </Marquee>

      <GallerySwiper />
    </div>
  );
}
