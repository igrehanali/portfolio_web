"use client";

import AboutMe from "./Components/about-me";
import EducationSection from "./Components/education";
import Experience from "./Components/experience";
import HeroSection from "./Components/hero-section";
import Navbar from "./Components/navbar";
import PortfolioSection from "./Components/portfolio-section";
import SkillsExpertise from "./Components/skills-expertise-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <SkillsExpertise />
      </div>
      <Experience />
      <div id="projects">
        <PortfolioSection />
      </div>
      <div id="contact">
        <EducationSection />
      </div>
    </main>
  );
}
