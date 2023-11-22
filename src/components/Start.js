
import Profiles from "./Profiles";
import HeroSection from "./HeroSection";
import Statistics from "./Statistics";
import Securityupdate from "./Securityupdate";
import Contact from "./Contact";

function Start() {
  return (
    <>
      <div>
        <HeroSection />
        <Profiles />
        <Statistics />
        <Securityupdate />

        <Contact />
      </div>
    </>
  );
}

export default Start;
