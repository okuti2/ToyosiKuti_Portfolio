import { SectionWrapper } from "../hoc";
import { TechCarousel } from "./canvas";
import { BallCanvas } from "./canvas";
import { technologies2 } from "../constants";
import { useState, useEffect } from "react";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check the screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set threshold for mobile devices
    };

    // Add event listener to check when the window resizes
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {isMobile ? (
        // Render BallCanvas on mobile
        technologies2.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))
      ) : (
        // Render TechCarousel on larger screens
        <TechCarousel />
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
