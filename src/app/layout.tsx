import type { Metadata } from "next";
//import { Outfit } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";

import locaFont from "next/font/local";

import "./globals.css";

//const outfit = Outfit({ subsets: ["latin"] });

const outfit = locaFont({
  src: "./Outfit-VariableFont_wght.woff2",
  variable: "--font-outfit",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
});

export const metadata: Metadata = {
  title: "ETHRome 24",
  description: "The hackathon for builders by builders",
  openGraph: {
    title: "ETHRome 24",
    description: "The hackathon for builders by builders",
    url: "https://ethrome.org",
    siteName: "ETHRome",
    images: [
      {
        url: "https://ethrome24-website.vercel.app/img/aboveFold/ethRomeLogo_aboveFold.svg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://ethrome24-website.vercel.app/img/aboveFold/ethRomeLogo_aboveFold.svg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "ETHRome 24",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{ scrollBehavior: "smooth" }} lang="en">
      <body
        className={`${outfit.variable} ${redHatDisplay.variable} bg-ethrome-BlackerThanPurple outfit`}
      >
        {children}
      </body>
    </html>
  );
}
