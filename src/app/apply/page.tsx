import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Apply to ETHRome 25",
  description:
    "The hackathon for builders by builders, on AI, DeFi & Privacy; from October 2025",
  metadataBase: new URL("https://ethrome.org/apply"),
  keywords: ["Hackathon", "ETHRome", "urbe.eth"],
  authors: [
    { name: "limone.eth" },
    { url: "https://www.limone.lol/" },
    { name: "herminius.eth" },
    { url: "https://herminius.eth.limo/" },
  ],
  creator: "urbe.eth",
  publisher: "herminius.eth",
  openGraph: {
    title: "Apply to ETHRome 25",
    description:
      "The hackathon for builders by builders, on AI, DeFi & Privacy; from October 2025",
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
    card: "summary_large_image",
    site: "https://ethrome.org",
    title: "Apply to ETHRome 25",
    description:
      "The hackathon for builders by builders, on AI, DeFi & Privacy; from October 2025",
    images: "https://www.ethrome.org/opengraph-image.png",
  },
};

const Apply = () => {
  return redirect("https://form.jotform.com/241011812625343");
};

export default Apply;
