import Header from "./components/header/header";
import Footer from "./components/footer";

import AboveFold from "./components/aboveFold";
import Aftermovie from "./components/aftermovie";
import Hackathon from "./components/hackathon";
import Experience from "./components/experience/experience";
import Location from "./components/location";

import SponsorZone from "./components/sponsorZone";

export default function Home() {
  return (
    <>
      <Header />
      <AboveFold />
      <Aftermovie />
      <Hackathon />
      <Experience />
      <Location />
      <SponsorZone />
      <Footer />
    </>
  );
}
