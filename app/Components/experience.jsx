"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Briefcase, Code, Globe, Rocket } from "lucide-react"; // Import Icons

const ExperienceCard = ({ company, date, role, description, index }) => {
  const isFirst = index === 0;

  // Assign icons based on company type
  const getIcon = () => {
    switch (company) {
      case "ASTUTE Technologies Inc.":
        return (
          <Briefcase
            size={24}
            className={isFirst ? "text-gray-800" : "text-gray-300"}
          />
        );
      case "CodeCrack":
        return (
          <Code
            size={24}
            className={isFirst ? "text-gray-800" : "text-gray-300"}
          />
        );
      case "Freelancing":
        return (
          <Globe
            size={24}
            className={isFirst ? "text-gray-800" : "text-gray-300"}
          />
        );
      case "BlackByte":
        return (
          <Rocket
            size={24}
            className={isFirst ? "text-gray-800" : "text-gray-300"}
          />
        );
      default:
        return (
          <Briefcase
            size={24}
            className={isFirst ? "text-gray-800" : "text-gray-300"}
          />
        );
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className={`relative p-5 sm:p-6 rounded-xl border 
      ${
        isFirst
          ? "bg-white border-gray-300 shadow-lg"
          : "bg-[#1e2b5e] border-gray-500 text-white"
      } 
      transition-all duration-300 hover:scale-[1.02] md:hover:scale-[1.05]
      flex flex-col gap-3 sm:gap-4`}
    >
      {/* Title & Icon */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-opacity-20">
          {getIcon()} {/* Render relevant icon */}
        </div>
        <h3
          className={`text-lg sm:text-xl font-semibold ${
            isFirst ? "text-black" : "text-white"
          }`}
        >
          {role}
        </h3>
      </div>

      {/* Company & Date */}
      <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
        <span className={isFirst ? "text-gray-700" : "text-gray-300"}>
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
          isFirst ? "text-gray-700" : "text-gray-300"
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
        "Developing high-performance, scalable web applications with React and Next.js. Integrating APIs, enhancing UI/UX, and working on admin panels for enterprise-level applications.",
    },
    // {
    //   company: "Freelancing",
    //   role: "Freelance Frontend Developer",
    //   date: "2022 - Present",
    //   description:
    //     "Designed and developed web applications for international clients on Upwork and Fiverr. Specialized in React, Next.js, and Tailwind CSS, delivering high-quality, scalable solutions.",
    // },
    {
      company: "BlackByte",
      role: "Part-Time Web Developer",
      date: "Sep 2024 - Dec 2024",
      description:
        "Worked with a London-based startup to develop responsive, user-friendly websites. Built and maintained multiple blogging platforms using React, Next.js, and Firebase.",
    },
    {
      company: "CodeCrack",
      role: "Frontend Intern",
      date: "May 2023 - July 2023",
      description:
        "Worked as a frontend intern, responsible for designing and implementing UI components for a company project. Collaborated with designers to ensure a seamless user experience.",
    },
  ];

  return (
    <section className="w-full bg-[#1e2b5e] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl text-white font-light">
            My <span className="font-bold">Experience</span>
          </h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
