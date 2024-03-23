"use clien"

import Link from "next/link"

export default function ButtonPurple ({
    cta,
    route,
    className,
  }: {
    cta: string;
    route: string;
    className?: string;
  }) {

return (
    <Link href={route} className={`flex justify-center items-center w-[164px] h-[44px] bg-ethrome-purple text-ethrome-white text-lg rounded-[22px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] ${className}`} >
        {cta}
    </Link>
)
}