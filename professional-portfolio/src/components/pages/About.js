import React, { useEffect } from "react";
import AboutCard from "../AboutCard";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <AboutCard />
    </div>
  );
}

export default About;
