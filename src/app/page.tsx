import Header from "./components/header/header";
import Footer from "./components/footer";

import SponsorZone from "./components/sponsorZone";
import AboveFold from "./components/aboveFold";
import Aftermovie from "./components/aftermovie";
import Hackathon from "./components/hackathon";
import Experience from "./components/experience";
import ETHRome23 from "./components/ethrome23";

export default function Home() {
  return (
    <>
      <Header />
      <AboveFold />
      <Aftermovie />
      <Hackathon />
      <Experience />
      <ETHRome23 />
      <SponsorZone />
      <Footer />
    </>
  );
}
