import Header from "./components/header/header";
import Footer from "./components/footer";

import AboveFold from "./components/aboveFold";
import Hackathon from "./components/hackathon";
import SponsorZone from "./components/sponsorZone/sponsorZone";
import Location from "./components/location/location";
import Experience from "./components/experience/experience";
import Aftermovie from "./components/aftermovie";
import BecomeSponsor from "./components/sponsorZone/becomeSponsor";
//import PhotogalleryLanding from "./components/photogallerylanding";

export default function Home() {
  return (
    <>
      <Header />
      <AboveFold />
      <Hackathon />
      <SponsorZone />
      <Location />
      <Experience />     
      <Aftermovie />
      <BecomeSponsor/>
      <Footer />
    </>
  );
}
