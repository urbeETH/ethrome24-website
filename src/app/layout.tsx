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
  title: "ETHRome 25",
  description: "The hackathon for builders by builders",
  metadataBase: new URL('https://ethrome.org'),
  keywords:["Hackathon", "ETHRome", "urbe.eth"],
  authors: [{name:"limone.eth"}, {url: "https://www.limone.lol/"},{name:"vdarph"}, {name:"herminius.eth"}, {url:"https://herminius.eth.limo/"}],
  creator:"urbe.eth",
  //publisher:"",
  openGraph: {
    title: "ETHRome 25",
    description: "The hackathon for builders by builders",
    url: "https://ethrome.org",
    siteName: "ETHRome",
    images: [
      {
        url: "https://www.ethrome.org/opengraph-image.png", 
        width: 800,
        height: 600,
      },
      {
        url: "https://www.ethrome.org/opengraph-image.png",
        width: 1800,
        height: 1600,
        alt: "ETHRome 25",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    site: "https://ethrome.org",
    title: "ETHRome",
    description: "The hackathon for builders by builders",
    images: "https://www.ethrome.org/opengraph-image.png"
  }
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
