"use client";

import { Search, Youtube, Apple, Briefcase } from "lucide-react";

const ExperienceCard = ({ company, date, role, description, index }) => {
  const getIcon = (company) => {
    switch (company.toLowerCase()) {
      case "google":
        return (
          <Search
            className={`w-8 h-8 ${
              index === 1 || index === 3 ? "text-black" : "text-white"
            }`}
          />
        );
      case "youtube":
        return (
          <Youtube
            className={`w-8 h-8 ${
              index === 1 || index === 3 ? "text-black" : "text-white"
            }`}
          />
        );
      case "apple":
        return (
          <Apple
            className={`w-8 h-8 ${
              index === 1 || index === 3 ? "text-black" : "text-white"
            }`}
          />
        );
      default:
        return (
          <Briefcase
            className={`w-8 h-8 ${
              index === 1 || index === 3 ? "text-black" : "text-white"
            }`}
          />
        );
    }
  };

  return (
    <div
      className={`relative p-6 rounded-xl border border-opacity-10 border-gray-500 ${
        index === 1 || index === 3
          ? "bg-white"
          : "bg-opacity-10 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          {getIcon(company)}
          <div className="flex flex-col">
            <h3
              className={`text-xl font-semibold ${
                index === 1 || index === 3 ? "text-black" : "text-white"
              }`}
            >
              {role}
            </h3>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm ${
                  index === 1 || index === 3 ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {company}
              </span>
              <span
                className={`text-sm ${
                  index === 1 || index === 3 ? "text-gray-600" : "text-gray-400"
                }`}
              >
                •
              </span>
              <span
                className={`text-sm ${
                  index === 1 || index === 3 ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p
        className={`text-sm leading-relaxed ${
          index === 1 || index === 3 ? "text-gray-700" : "text-gray-300"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default function ExperienceSection() {
  const experiences = [
    {
      company: "CodeCrack",
      role: "Frontend Intern",
      date: "May 2023 - July 2023",
      description:
        "Worked as a frontend intern, responsible for designing and implementing UI components for a company project. Collaborated with designers to ensure a seamless user experience and gained hands-on experience with modern frontend technologies.",
    },
    {
      company: "ASTUTE Technologies Inc.",
      role: "Frontend Developer",
      date: "July 2023 - Present",
      description:
        "Developing high-performance, scalable web applications with React and Next.js. Integrating APIs, enhancing UI/UX, and working on admin panels for enterprise-level applications. Responsible for ensuring pixel-perfect implementation and smooth user interactions.",
    },
    {
      company: "BlackByte",
      role: "Part-Time Web Developer",
      date: "Sep 2024 - Dec 2024",
      description:
        "Worked with a London-based startup to develop responsive, user-friendly websites. Built and maintained multiple blogging platforms using React, Next.js, and Firebase. Integrated CMS solutions and optimized web performance for better user engagement.",
    },
    {
      company: "Freelancing",
      role: "Freelance Frontend Developer",
      date: "2022 - Present",
      description:
        "Designed and developed web applications for international clients on Upwork and Fiverr. Specialized in React, Next.js, and Tailwind CSS, delivering high-quality, scalable solutions. Collaborated with clients to build landing pages, dashboards, and SaaS platforms.",
    },
  ];

  return (
    <section className="w-full bg-[#1e2b5e] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center font-light">
          <h2 className="text-4xl text-white font-light mb-12">
            My <span className="text-white font-bold">Experience</span>
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
