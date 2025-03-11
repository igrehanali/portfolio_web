"use client";
import Heading from "./heading";

const ExperienceCard = ({ company, date, role, description }) => (
  <div className="relative p-6 rounded-xl border border-opacity-10 border-white bg-opacity-10 backdrop-blur-sm">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 flex items-center justify-center">
        <img
          src={`/icons/${company.toLowerCase()}.svg`}
          alt={`${company} logo`}
          className="w-8 h-8"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-white">{role}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">{company}</span>
          <span className="text-sm text-gray-400">•</span>
          <span className="text-sm text-gray-300">{date}</span>
        </div>
      </div>
    </div>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

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
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">My Experience</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
