"use client";

import AboutMe from "./Components/about-me";
import EducationSection from "./Components/education";
import Experience from "./Components/experience";
import HeroSection from "./Components/hero-section";
import PortfolioSection from "./Components/portfolio-section";
import SkillsExpertise from "./Components/skills-expertise-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <SkillsExpertise />
      <Experience />
      <PortfolioSection />
      <EducationSection />
    </main>
  );
}
