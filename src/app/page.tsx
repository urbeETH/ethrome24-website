import Header from "./components/header/header";
import Footer from "./components/footer";

import SponsorZone from "./components/sponsorZone";
import AboveFold from "./components/aboveFold";
import Aftermovie from "./components/aftermovie";
import Hackathon from "./components/hackathon";
import Experience from "./components/experience/experience";
import ETHRome23 from "./components/ethrome23";

import SponsorZoneMobile from "./components/sponsorZoneMobile";

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
      <SponsorZoneMobile className="xl:hidden"/>
      <Footer />
    </>
  );
}
