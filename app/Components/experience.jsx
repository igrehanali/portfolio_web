"use client";

import { Search, Youtube, Apple } from "lucide-react";

const ExperienceCard = ({ company, date, role, description, index }) => {
  const getIcon = (company) => {
    switch (company.toLowerCase()) {
      case "google":
        return (
          <Search
            className={`w-8 h-8 ${index === 1 ? "text-black" : "text-white"}`}
          />
        );
      case "youtube":
        return (
          <Youtube
            className={`w-8 h-8 ${index === 1 ? "text-black" : "text-white"}`}
          />
        );
      case "apple":
        return (
          <Apple
            className={`w-8 h-8 ${index === 1 ? "text-black" : "text-white"}`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative p-6 rounded-xl border border-opacity-10 border-gray-500 ${
        index === 1 ? "bg-white" : "bg-opacity-10 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center">
            {getIcon(company)}
          </div>
          <div className="flex flex-col">
            <h3
              className={`text-xl font-semibold ${
                index === 1 ? "text-black" : "text-white"
              }`}
            >
              {role}
            </h3>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm ${
                  index === 1 ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {company}
              </span>
              <span
                className={`text-sm ${
                  index === 1 ? "text-gray-600" : "text-gray-400"
                }`}
              >
                •
              </span>
              <span
                className={`text-sm ${
                  index === 1 ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {date}
              </span>
            </div>
          </div>
        </div>
        <span
          className={`text-sm ${
            index === 1 ? "text-gray-700" : "text-gray-300"
          }`}
        >
          {index === 0 ? "2021-Present" : index === 1 ? "2017-19" : ""}
        </span>
      </div>
      <p
        className={`text-sm leading-relaxed ${
          index === 1 ? "text-gray-700" : "text-gray-300"
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
      company: "Google",
      role: "Lead Software Engineer at Google",
      date: "Nov 2019 - Present",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
    {
      company: "Youtube",
      role: "Software Engineer at Youtube",
      date: "Jan 2017 - Oct 2019",
      description:
        "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    },
    {
      company: "Apple",
      role: "Junior Software Engineer at Apple",
      date: "Jan 2016 - Dec 2017",
      description:
        "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
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
