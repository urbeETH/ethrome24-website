import GrainBg from "../grainBg";
import Image from "next/image";
import {
  sponsorBountiesPrizes,
  sponsorBountiesDescription,
} from "./sponsorBountiesPrizes";

export default function Prizes() {
  return (
    <div id="prizes" className="relative">
      <GrainBg />

      <div className="w-full py-14 xl:py-16 flex flex-col justify-center items-start gap-8 xl:gap-10">
        {/** title */}
        <div className="w-full flex justify-center items-start xl:justify-start">
          <h1
            className="px-6 text-ethrome-white text-center 2xl:px-20"
            style={{ fontSize: "min(max(2rem, 3vw), 3.5rem)" }}
          >
            {" "}
            Prizes
          </h1>
        </div>
        {/** prizes  */}
        <div className="w-full flex flex-col justify-start items-start px-6 gap-10 2xl:px-20 xl:flex-row">
          {/**left side */}
          <div className="hidden w-full xl:w-1/4 xl:block xl:sticky xl:top-6 isolation-isolate">
            <div className="relative w-full px-6 py-4 gap-6">
              <div className="sponsor_zone_box_bg"></div>
              <div className="relative w-full h-full max-h-[calc(100vh-80px)] p-2 flex flex-col justify-start items-start gap-6 rounded-2xl z-30 overflow-y-auto">
                {/** Main Tracks */}
                <div className="w-full flex flex-col justify-start items-start">
                  <p className="text-ethrome-yellow outfit uppercase font-extrabold text-sm">
                    Main Tracks
                  </p>
                  <div className="w-full flex flex-col justify-start items-start gap-1">
                    {/** AI */}
                    <div className="w-full py-4 flex justify-start items-center gap-4 border-b border-[#f8ffff1f]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3 13.34C3 6.89669 8.22335 1.67334 14.6667 1.67334C17.1625 1.67334 19.2224 2.25518 20.9284 3.29966C22.6284 4.34049 23.92 5.80563 24.9388 7.48887C26.8699 10.6794 27.8984 14.8021 28.8512 18.6209L28.9701 19.0975L29.2808 20.34H25.6667V25.6733H21V30.6733H8.33333V23.1395C5.12561 21.0623 3 17.4499 3 13.34ZM16.5751 6.67855L17.3347 9.05449L19.7724 8.52478L21.6808 11.8301L20.0737 13.6759L21.6808 15.522L19.7724 18.8275L17.3344 18.2973L16.5751 20.6731H12.7584L11.999 18.2973L9.56103 18.8275L7.65267 15.522L9.25973 13.6759L7.65267 11.8301L9.56103 8.52478L11.9988 9.05449L12.7584 6.67855H16.5751ZM16.5264 13.6763C16.5264 12.6514 15.6956 11.8205 14.6707 11.8205C13.6456 11.8205 12.8148 12.6514 12.8148 13.6763C12.8148 14.7012 13.6456 15.5321 14.6707 15.5321C15.6956 15.5321 16.5264 14.7012 16.5264 13.6763Z"
                          fill="#FABB00"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3 13.34C3 6.89669 8.22335 1.67334 14.6667 1.67334C17.1625 1.67334 19.2224 2.25518 20.9284 3.29966C22.6284 4.34049 23.92 5.80563 24.9388 7.48887C26.8699 10.6794 27.8984 14.8021 28.8512 18.6209L28.9701 19.0975L29.2808 20.34H25.6667V25.6733H21V30.6733H8.33333V23.1395C5.12561 21.0623 3 17.4499 3 13.34ZM16.5751 6.67855L17.3347 9.05449L19.7724 8.52478L21.6808 11.8301L20.0737 13.6759L21.6808 15.522L19.7724 18.8275L17.3344 18.2973L16.5751 20.6731H12.7584L11.999 18.2973L9.56103 18.8275L7.65267 15.522L9.25973 13.6759L7.65267 11.8301L9.56103 8.52478L11.9988 9.05449L12.7584 6.67855H16.5751ZM16.5264 13.6763C16.5264 12.6514 15.6956 11.8205 14.6707 11.8205C13.6456 11.8205 12.8148 12.6514 12.8148 13.6763C12.8148 14.7012 13.6456 15.5321 14.6707 15.5321C15.6956 15.5321 16.5264 14.7012 16.5264 13.6763Z"
                          fill="url(#paint0_linear_2508_4767)"
                          style={{ mixBlendMode: "color-dodge" }}
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3 13.34C3 6.89669 8.22335 1.67334 14.6667 1.67334C17.1625 1.67334 19.2224 2.25518 20.9284 3.29966C22.6284 4.34049 23.92 5.80563 24.9388 7.48887C26.8699 10.6794 27.8984 14.8021 28.8512 18.6209L28.9701 19.0975L29.2808 20.34H25.6667V25.6733H21V30.6733H8.33333V23.1395C5.12561 21.0623 3 17.4499 3 13.34ZM16.5751 6.67855L17.3347 9.05449L19.7724 8.52478L21.6808 11.8301L20.0737 13.6759L21.6808 15.522L19.7724 18.8275L17.3344 18.2973L16.5751 20.6731H12.7584L11.999 18.2973L9.56103 18.8275L7.65267 15.522L9.25973 13.6759L7.65267 11.8301L9.56103 8.52478L11.9988 9.05449L12.7584 6.67855H16.5751ZM16.5264 13.6763C16.5264 12.6514 15.6956 11.8205 14.6707 11.8205C13.6456 11.8205 12.8148 12.6514 12.8148 13.6763C12.8148 14.7012 13.6456 15.5321 14.6707 15.5321C15.6956 15.5321 16.5264 14.7012 16.5264 13.6763Z"
                          fill="#4F172C"
                          style={{ mixBlendMode: "overlay" }}
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_2508_4767"
                            x1="13.1885"
                            y1="26.9033"
                            x2="27.6247"
                            y2="16.6461"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FABB00" />
                            <stop
                              offset="0.317708"
                              stop-color="#FABB00"
                              stop-opacity="0.24"
                            />
                            <stop offset="0.416667" stop-color="#FABB00" />
                            <stop
                              offset="0.526042"
                              stop-color="#FABB00"
                              stop-opacity="0.14"
                            />
                            <stop
                              offset="0.6875"
                              stop-color="#FABB00"
                              stop-opacity="0.74"
                            />
                            <stop
                              offset="1"
                              stop-color="#FABB00"
                              stop-opacity="0.24"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="w-full flex flex-col justify-start items-start gap-1">
                        <p className="text-base font-semibold outfit text-ethrome-white">
                          AI x WEB3
                        </p>
                        <p className="text-sm font-normal text-ethrome-white/65">
                          $1.500 + Devconnnect tickets
                        </p>
                      </div>
                    </div>
                    {/** Privacy */}
                    <div className="w-full py-4 flex justify-start items-center gap-4 border-b border-[#f8ffff1f]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.91684 1.33887H25.0806L25.3034 2.39752L27.6771 13.6722H30.6654V17.0055H1.33203V13.6722H4.32035L6.69396 2.39752L6.91684 1.33887ZM8.66536 21.6722C7.00851 21.6722 5.66536 23.0154 5.66536 24.6722C5.66536 26.329 7.00851 27.6722 8.66536 27.6722C10.3222 27.6722 11.6654 26.329 11.6654 24.6722C11.6654 23.0154 10.3222 21.6722 8.66536 21.6722ZM13.7866 20.9453C12.6349 19.3655 10.77 18.3389 8.66536 18.3389C5.16756 18.3389 2.33203 21.1743 2.33203 24.6722C2.33203 28.1701 5.16756 31.0055 8.66536 31.0055C12.1632 31.0055 14.9987 28.1701 14.9987 24.6722C14.9987 24.1199 15.4464 23.6722 15.9987 23.6722C16.551 23.6722 16.9987 24.1199 16.9987 24.6722C16.9987 28.1701 19.8342 31.0055 23.332 31.0055C26.8299 31.0055 29.6654 28.1701 29.6654 24.6722C29.6654 21.1743 26.8299 18.3389 23.332 18.3389C21.2274 18.3389 19.3624 19.3655 18.2108 20.9453C17.5632 20.5601 16.8068 20.3389 15.9987 20.3389C15.1906 20.3389 14.4342 20.5601 13.7866 20.9453ZM20.332 24.6722C20.332 26.329 21.6752 27.6722 23.332 27.6722C24.9888 27.6722 26.332 26.329 26.332 24.6722C26.332 23.0154 24.9888 21.6722 23.332 21.6722C21.6752 21.6722 20.332 23.0154 20.332 24.6722Z"
                          fill="#FABB00"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.91684 1.33887H25.0806L25.3034 2.39752L27.6771 13.6722H30.6654V17.0055H1.33203V13.6722H4.32035L6.69396 2.39752L6.91684 1.33887ZM8.66536 21.6722C7.00851 21.6722 5.66536 23.0154 5.66536 24.6722C5.66536 26.329 7.00851 27.6722 8.66536 27.6722C10.3222 27.6722 11.6654 26.329 11.6654 24.6722C11.6654 23.0154 10.3222 21.6722 8.66536 21.6722ZM13.7866 20.9453C12.6349 19.3655 10.77 18.3389 8.66536 18.3389C5.16756 18.3389 2.33203 21.1743 2.33203 24.6722C2.33203 28.1701 5.16756 31.0055 8.66536 31.0055C12.1632 31.0055 14.9987 28.1701 14.9987 24.6722C14.9987 24.1199 15.4464 23.6722 15.9987 23.6722C16.551 23.6722 16.9987 24.1199 16.9987 24.6722C16.9987 28.1701 19.8342 31.0055 23.332 31.0055C26.8299 31.0055 29.6654 28.1701 29.6654 24.6722C29.6654 21.1743 26.8299 18.3389 23.332 18.3389C21.2274 18.3389 19.3624 19.3655 18.2108 20.9453C17.5632 20.5601 16.8068 20.3389 15.9987 20.3389C15.1906 20.3389 14.4342 20.5601 13.7866 20.9453ZM20.332 24.6722C20.332 26.329 21.6752 27.6722 23.332 27.6722C24.9888 27.6722 26.332 26.329 26.332 24.6722C26.332 23.0154 24.9888 21.6722 23.332 21.6722C21.6752 21.6722 20.332 23.0154 20.332 24.6722Z"
                          fill="url(#paint0_linear_2508_4848)"
                          style={{ mixBlendMode: "color-dodge" }}
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.91684 1.33887H25.0806L25.3034 2.39752L27.6771 13.6722H30.6654V17.0055H1.33203V13.6722H4.32035L6.69396 2.39752L6.91684 1.33887ZM8.66536 21.6722C7.00851 21.6722 5.66536 23.0154 5.66536 24.6722C5.66536 26.329 7.00851 27.6722 8.66536 27.6722C10.3222 27.6722 11.6654 26.329 11.6654 24.6722C11.6654 23.0154 10.3222 21.6722 8.66536 21.6722ZM13.7866 20.9453C12.6349 19.3655 10.77 18.3389 8.66536 18.3389C5.16756 18.3389 2.33203 21.1743 2.33203 24.6722C2.33203 28.1701 5.16756 31.0055 8.66536 31.0055C12.1632 31.0055 14.9987 28.1701 14.9987 24.6722C14.9987 24.1199 15.4464 23.6722 15.9987 23.6722C16.551 23.6722 16.9987 24.1199 16.9987 24.6722C16.9987 28.1701 19.8342 31.0055 23.332 31.0055C26.8299 31.0055 29.6654 28.1701 29.6654 24.6722C29.6654 21.1743 26.8299 18.3389 23.332 18.3389C21.2274 18.3389 19.3624 19.3655 18.2108 20.9453C17.5632 20.5601 16.8068 20.3389 15.9987 20.3389C15.1906 20.3389 14.4342 20.5601 13.7866 20.9453ZM20.332 24.6722C20.332 26.329 21.6752 27.6722 23.332 27.6722C24.9888 27.6722 26.332 26.329 26.332 24.6722C26.332 23.0154 24.9888 21.6722 23.332 21.6722C21.6752 21.6722 20.332 23.0154 20.332 24.6722Z"
                          fill="#4F172C"
                          style={{ mixBlendMode: "overlay" }}
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_2508_4848"
                            x1="12.7039"
                            y1="27.1489"
                            x2="27.8494"
                            y2="15.4077"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FABB00" />
                            <stop
                              offset="0.317708"
                              stop-color="#FABB00"
                              stop-opacity="0.24"
                            />
                            <stop offset="0.416667" stop-color="#FABB00" />
                            <stop
                              offset="0.526042"
                              stop-color="#FABB00"
                              stop-opacity="0.14"
                            />
                            <stop
                              offset="0.6875"
                              stop-color="#FABB00"
                              stop-opacity="0.74"
                            />
                            <stop
                              offset="1"
                              stop-color="#FABB00"
                              stop-opacity="0.24"
                            />
                          </linearGradient>
                        </defs>
                      </svg>

                      <div className="w-full flex flex-col justify-start items-start gap-1">
                        <p className="text-base font-semibold outfit text-ethrome-white">
                          Privacy
                        </p>
                        <p className="text-sm font-normal text-ethrome-white/65">
                          $1.500 + Devconnnect tickets
                        </p>
                      </div>
                    </div>
                    {/** Finance */}
                    <div className="w-full py-4 flex justify-start items-center gap-4 border-b border-[#f8ffff1f]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.33203 2.67285H30.6654V26.6729H27.332V30.6729H24.6654V26.6729H7.33203V30.6729H4.66536V26.6729H1.33203V2.67285ZM4.66536 10.6729V18.6729H7.33203V10.6729H4.66536ZM19.9987 12.0062C19.2915 12.0062 18.6132 12.2871 18.1131 12.7872C17.613 13.2873 17.332 13.9656 17.332 14.6729C17.332 15.3801 17.613 16.0584 18.1131 16.5585C18.6132 17.0586 19.2915 17.3395 19.9987 17.3395C20.7059 17.3395 21.3842 17.0586 21.8843 16.5585C22.3844 16.0584 22.6654 15.3801 22.6654 14.6729C22.6654 13.9656 22.3844 13.2873 21.8843 12.7872C21.3842 12.2871 20.7059 12.0062 19.9987 12.0062ZM21.332 9.50752V8.00619H18.6654V9.50752C17.7268 9.74973 16.8721 10.2435 16.1934 10.9355L14.892 10.1849L13.5587 12.4942L14.8587 13.2449C14.5993 14.1792 14.5993 15.1665 14.8587 16.1009L13.5587 16.8515L14.892 19.1609L16.1934 18.4102C16.8614 19.0902 17.712 19.5929 18.6654 19.8382V21.3395H21.332V19.8382C22.2707 19.5955 23.1254 19.1013 23.804 18.4089L25.1054 19.1609L26.4387 16.8515L25.1387 16.1009C25.3981 15.1665 25.3981 14.1792 25.1387 13.2449L26.4387 12.4942L25.1054 10.1849L23.804 10.9355C23.1253 10.2435 22.2706 9.74979 21.332 9.50752Z"
                          fill="#FABB00"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.33203 2.67285H30.6654V26.6729H27.332V30.6729H24.6654V26.6729H7.33203V30.6729H4.66536V26.6729H1.33203V2.67285ZM4.66536 10.6729V18.6729H7.33203V10.6729H4.66536ZM19.9987 12.0062C19.2915 12.0062 18.6132 12.2871 18.1131 12.7872C17.613 13.2873 17.332 13.9656 17.332 14.6729C17.332 15.3801 17.613 16.0584 18.1131 16.5585C18.6132 17.0586 19.2915 17.3395 19.9987 17.3395C20.7059 17.3395 21.3842 17.0586 21.8843 16.5585C22.3844 16.0584 22.6654 15.3801 22.6654 14.6729C22.6654 13.9656 22.3844 13.2873 21.8843 12.7872C21.3842 12.2871 20.7059 12.0062 19.9987 12.0062ZM21.332 9.50752V8.00619H18.6654V9.50752C17.7268 9.74973 16.8721 10.2435 16.1934 10.9355L14.892 10.1849L13.5587 12.4942L14.8587 13.2449C14.5993 14.1792 14.5993 15.1665 14.8587 16.1009L13.5587 16.8515L14.892 19.1609L16.1934 18.4102C16.8614 19.0902 17.712 19.5929 18.6654 19.8382V21.3395H21.332V19.8382C22.2707 19.5955 23.1254 19.1013 23.804 18.4089L25.1054 19.1609L26.4387 16.8515L25.1387 16.1009C25.3981 15.1665 25.3981 14.1792 25.1387 13.2449L26.4387 12.4942L25.1054 10.1849L23.804 10.9355C23.1253 10.2435 22.2706 9.74979 21.332 9.50752Z"
                          fill="url(#paint0_linear_2508_4844)"
                          style={{ mixBlendMode: "color-dodge" }}
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.33203 2.67285H30.6654V26.6729H27.332V30.6729H24.6654V26.6729H7.33203V30.6729H4.66536V26.6729H1.33203V2.67285ZM4.66536 10.6729V18.6729H7.33203V10.6729H4.66536ZM19.9987 12.0062C19.2915 12.0062 18.6132 12.2871 18.1131 12.7872C17.613 13.2873 17.332 13.9656 17.332 14.6729C17.332 15.3801 17.613 16.0584 18.1131 16.5585C18.6132 17.0586 19.2915 17.3395 19.9987 17.3395C20.7059 17.3395 21.3842 17.0586 21.8843 16.5585C22.3844 16.0584 22.6654 15.3801 22.6654 14.6729C22.6654 13.9656 22.3844 13.2873 21.8843 12.7872C21.3842 12.2871 20.7059 12.0062 19.9987 12.0062ZM21.332 9.50752V8.00619H18.6654V9.50752C17.7268 9.74973 16.8721 10.2435 16.1934 10.9355L14.892 10.1849L13.5587 12.4942L14.8587 13.2449C14.5993 14.1792 14.5993 15.1665 14.8587 16.1009L13.5587 16.8515L14.892 19.1609L16.1934 18.4102C16.8614 19.0902 17.712 19.5929 18.6654 19.8382V21.3395H21.332V19.8382C22.2707 19.5955 23.1254 19.1013 23.804 18.4089L25.1054 19.1609L26.4387 16.8515L25.1387 16.1009C25.3981 15.1665 25.3981 14.1792 25.1387 13.2449L26.4387 12.4942L25.1054 10.1849L23.804 10.9355C23.1253 10.2435 22.2706 9.74979 21.332 9.50752Z"
                          fill="#4F172C"
                          style={{ mixBlendMode: "overlay" }}
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_2508_4844"
                            x1="12.7039"
                            y1="27.0329"
                            x2="27.1831"
                            y2="15.1401"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FABB00" />
                            <stop
                              offset="0.317708"
                              stop-color="#FABB00"
                              stop-opacity="0.24"
                            />
                            <stop offset="0.416667" stop-color="#FABB00" />
                            <stop
                              offset="0.526042"
                              stop-color="#FABB00"
                              stop-opacity="0.14"
                            />
                            <stop
                              offset="0.6875"
                              stop-color="#FABB00"
                              stop-opacity="0.74"
                            />
                            <stop
                              offset="1"
                              stop-color="#FABB00"
                              stop-opacity="0.24"
                            />
                          </linearGradient>
                        </defs>
                      </svg>

                      <div className="w-full flex flex-col justify-start items-start gap-1">
                        <p className="text-base font-semibold outfit text-ethrome-white">
                          Finance
                        </p>
                        <p className="text-sm font-normal text-ethrome-white/65">
                          $1.500 + Devconnnect tickets
                        </p>
                      </div>
                    </div>
                  </div>
                  <div />
                </div>

                {/** Sponsor Bounties */}
                <div className="w-full flex flex-col justify-start items-start">
                  <p className="text-ethrome-yellow outfit uppercase font-extrabold text-sm">
                    Sponsor bounties
                  </p>

                  {sponsorBountiesPrizes.map((items, index) => (
                    <div
                      key={index}
                      className="w-full py-4 flex justify-start items-center gap-4 border-b border-[#f8ffff1f]"
                    >
                      <Image
                        src={items.logo}
                        alt="logo"
                        width={32}
                        height={32}
                      />
                      <div className="w-full flex flex-col justify-start items-start gap-1">
                        <p className="text-base font-semibold outfit text-ethrome-white">
                          {items.name}
                        </p>
                        <p className="text-sm font-normal text-ethrome-white/65">
                          {items.bounties}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="w-full flex flex-col justify-start items-start gap-1"></div>
                  <div />
                </div>
              </div>
            </div>
          </div>
          {/** right side */}
          <div className="relative w-full xl:w-9/12">
            <div className="sponsor_zone_box_bg"></div>
            {/**  */}
            <div className="w-full h-full px-10 py-6 flex flex-col justify-center items-center rounded-2xl">
              {/** reply */}

              {sponsorBountiesDescription.map((item, index) => (
                <div
                  key={index}
                  className="w-full py-8 flex flex-col justify-center items-start gap-10 border-b border-[#f8ffff1f]"
                >
                  {/** logo + descrizone */}
                  <div className="w-full flex justify-start items-center gap-10">
                    <Image
                      src={item.logo}
                      alt="logo"
                      width={80}
                      height={80}
                    ></Image>
                    <div className="w-full flex flex-col justify-center items-start">
                      <p className="text-3xl font-semibold outfit text-ethrome-white">
                        {item.title}
                      </p>
                      <p className="text-2xl font-normal text-ethrome-white/65">
                        {item.bounties}
                      </p>
                    </div>
                  </div>
                  {/** about */}
                  <div className="w-full flex flex-col justify-center items-start gap-3">
                    <p className="text-2xl font-semibold outfit text-ethrome-white">
                      About
                    </p>
                    <p className="font-light text-lg text-ethrome-white/80">
                      {item.about}
                    </p>
                  </div>

                  {/** prizes */}
                  <div className="w-full flex flex-col justify-center items-start gap-3">
                    <p className="text-2xl font-semibold outfit text-ethrome-white">
                      Prizes
                    </p>
                    <p className="font-light text-lg text-ethrome-white/80">
                      {item.prizesDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
