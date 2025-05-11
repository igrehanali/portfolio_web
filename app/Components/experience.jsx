"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Briefcase, Code, Globe, Rocket } from "lucide-react";
import Header from "./common/header";

const ExperienceCard = ({ company, date, role, description, index }) => {
  const isFirst = index === 0;

  const getIcon = () => {
    const baseClass = `transition-all duration-300 group-hover:scale-110`;
    const color = isFirst ? "text-white" : "text-white/70";

    const iconProps = {
      size: 26,
      className: `${baseClass} ${color} drop-shadow-sm`,
    };

    switch (company) {
      case "ASTUTE Technologies Inc.":
        return <Briefcase {...iconProps} />;
      case "CodeCrack":
        return <Code {...iconProps} />;
      case "Freelancing":
        return <Globe {...iconProps} />;
      case "BlackByte":
        return <Rocket {...iconProps} />;
      default:
        return <Briefcase {...iconProps} />;
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className={`group relative p-6 rounded-2xl border 
      transition-all duration-300 hover:scale-[1.02] md:hover:scale-[1.05] hover:shadow-xl
      ${
        isFirst
          ? "bg-gradient-to-br from-white/80 to-white/60 border-white/30 shadow-2xl"
          : "bg-white/5 border-white/10 backdrop-blur-xl"
      }`}
    >
      {/* Icon + Role */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`p-3 rounded-xl bg-white/10 backdrop-blur-md 
          ${isFirst ? "shadow-lg" : "shadow-md"} transition-all duration-300`}
        >
          {getIcon()}
        </div>
        <h3
          className={`text-xl sm:text-2xl font-semibold tracking-wide ${
            isFirst ? "text-black" : "text-white"
          }`}
        >
          {role}
        </h3>
      </div>

      {/* Company & Date */}
      <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base mb-3">
        <span
          className={isFirst ? "text-gray-800 font-medium" : "text-gray-300"}
        >
          {company}
        </span>
        <span className={isFirst ? "text-gray-600" : "text-gray-400"}>•</span>
        <span className={isFirst ? "text-gray-700" : "text-gray-300"}>
          {date}
        </span>
      </div>

      {/* Description */}
      <p
        className={`text-sm sm:text-base leading-relaxed ${
          isFirst ? "text-gray-800" : "text-gray-300"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default function ExperienceSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  const experiences = [
    {
      company: "ASTUTE Technologies Inc.",
      role: "Frontend Developer",
      date: "July 2023 - Present",
      description:
        "Crafting high-performance enterprise apps with React and Next.js. Collaborated on admin dashboards, responsive UIs, and integrated multiple APIs for real-time workflows.",
    },
    {
      company: "BlackByte",
      role: "Part-Time Web Developer",
      date: "Sep 2024 - Dec 2024",
      description:
        "Built stunning blogging platforms for a London-based startup. Leveraged React, Next.js, and Firebase to deliver seamless user experience across devices.",
    },
    {
      company: "CodeCrack",
      role: "Frontend Intern",
      date: "May 2023 - July 2023",
      description:
        "Designed clean, modern UI components. Collaborated closely with the design team to ensure pixel-perfect implementation and optimal performance.",
    },
  ];

  return (
    <section className="w-full py-24 px-4 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <div className="max-w-6xl mx-auto">
        <Header
          heading="My Experience"
          subHeading="Companies and startups I've helped build and scale through code."
        />
        <div className="space-y-10 sm:space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
