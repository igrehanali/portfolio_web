"use client";
import React, { memo } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiRedux,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 size={35} className="text-[#242F65]" /> },
  { name: "CSS", icon: <SiCss3 size={35} className="text-[#242F65]" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript size={35} className="text-[#242F65]" />,
  },
  { name: "React", icon: <SiReact size={35} className="text-[#242F65]" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={35} className="text-[#242F65]" />,
  },
  { name: "Redux", icon: <SiRedux size={35} className="text-[#242F65]" /> },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={35} className="text-[#242F65]" />,
  },
  { name: "Figma", icon: <SiFigma size={35} className="text-[#242F65]" /> },
  {
    name: "Firebase",
    icon: <SiFirebase size={35} className="text-[#242F65]" />,
  },
  { name: "Git", icon: <SiGit size={35} className="text-[#242F65]" /> },
];

const SkillsExpertise = () => {
  return (
    <div className="w-full sm:py-16 lg:py-16 md:py-1 bg-white px-4 mx-auto max-w-6xl">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-light mb-12">
          My <span className="text-[#1a237e] font-bold">Skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:scale-105 border border-[#242F65] hover:bg-[#242F65] hover:shadow-lg p-4 animate-fade-in group rounded-md"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Icon */}
            <div className="w-[5rem] h-[5rem] mb-2 flex items-center justify-center group-hover:text-white transition-all duration-500 ease-in-out">
              {React.cloneElement(skill.icon, {
                className:
                  "group-hover:text-white transition-all duration-500 ease-in-out",
              })}
            </div>

            {/* Text */}
            <span className="text-xs font-medium text-center group-hover:text-white transition-all duration-500 ease-in-out">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default memo(SkillsExpertise);
