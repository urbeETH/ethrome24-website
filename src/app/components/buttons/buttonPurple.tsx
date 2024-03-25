"use clien";

import Link from "next/link";

export default function ButtonPurple({
  cta,
  route,
  className,
}: {
  cta: string;
  route: string;
  className?: string;
}) {
  return (
    <Link
      href={route}
      className={`flex justify-center items-center w-[164px] h-[44px] bg-ethrome-purple text-ethrome-white text-lg rounded-[22px] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] ${className} hover:bg-ethrome-dark-purple`}
    >
      {cta}
    </Link>
  );
}
