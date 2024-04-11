"use clien";

import Link from "next/link";

export default function ButtonPurple({
  cta,
  route,
  className,
  variant,
}: {
  cta: string;
  route: string;
  className?: string;
  variant: "primary" | "outline";
}) {
  if (variant === "outline") {
    return (
      <Link
        href={route}
        target="_blank"
        className={`flex justify-center items-center w-[164px] h-[44px] bg-transparent text-ethrome-purple text-lg rounded-[22px] border-2 border-ethrome-purple ${className} hover:bg-ethrome-purple hover:text-ethrome-white`}
      >
        {cta}
      </Link>
    );
  }
  return (
    <Link
      href={route}
      target="_blank"
      className={`flex justify-center items-center w-[164px] h-[44px] bg-ethrome-purple text-ethrome-white text-lg rounded-[22px] drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] ${className} hover:bg-ethrome-dark-purple`}
    >
      {cta}
    </Link>
  );
}
