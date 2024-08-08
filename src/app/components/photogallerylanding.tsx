"use client";

import Marquee from "react-fast-marquee";
import GallerySwiper from "../photogallery/gallerySwiper";

export default function PhotogalleryLanding() {
  return (
    <div className="relative w-full max-w-full">
      <div className="w-full h-[27px] modanatura_cols"></div>
      <Marquee className="marquee_desktop w-full px-6 py-3 xl:flex">
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
