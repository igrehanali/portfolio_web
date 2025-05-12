"use client";
import { useEffect, useState } from "react";
import AboutMe from "./Components/about-me";
import ContactSection from "./Components/contact-section";
import EducationSection from "./Components/education";
import Experience from "./Components/experience";
import Footer from "./Components/footer";
import HeroSection from "./Components/hero-section";
import Navbar from "./Components/navbar";
import PortfolioSection from "./Components/portfolio-section";
import SkillsExpertise from "./Components/skills-expertise-section";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowCursor(window.innerWidth >= 768); // Only show cursor on md+ screens
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {showCursor && (
        <AnimatedCursor
          innerSize={8}
          outerSize={40}
          color="255, 255, 255"
          outerAlpha={0.2}
          innerScale={1}
          outerScale={2.5}
          outerStyle={{
            border: "2px solid rgba(26, 35, 62, 0.5)", // Updated border color
          }}
          innerStyle={{
            backgroundColor: "white", // Inner cursor color
          }}
          clickables={["a", "button", ".link"]}
        />
      )}

      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="skills">
        <SkillsExpertise />
      </div>
      <Experience />
      <div id="about">
        <AboutMe />
      </div>

      <div id="projects">
        <PortfolioSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
