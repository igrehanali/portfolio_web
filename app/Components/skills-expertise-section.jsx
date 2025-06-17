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
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import GlareHover from "../../src/blocks/Animations/GlareHover/GlareHover";

const skills = [
  { name: "HTML", icon: <SiHtml5 size={35} className="text-[#FF5733]" /> },
  { name: "CSS", icon: <SiCss3 size={35} className="text-[#61DAFB]" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript size={35} className="text-[#F7DF1E]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={35} className="text-[#007ACC]" />,
  },
  { name: "React", icon: <SiReact size={35} className="text-[#61DAFB]" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={35} className="text-[#000000]" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={35} className="text-[#06B6D4]" />,
  },
  { name: "Figma", icon: <SiFigma size={35} className="text-[#F24E1E]" /> },
  {
    name: "Firebase",
    icon: <SiFirebase size={35} className="text-[#FFCB2B]" />,
  },
  { name: "Git", icon: <SiGit size={35} className="text-[#F05032]" /> },
];

const SkillsExpertise = () => {
  return (
    <div className="w-full sm:py-16 lg:py-16 md:py-1 bg-white mx-auto max-w-6xl py-6 lg:px-0 px-6">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-light mb-2">
          My <span className="text-[#2c5364] font-bold">Skills</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          The technologies I work with to build amazing digital experiences.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-all duration-500 ease-in-out transform hover:scale-105 border border-[#305c6e] hover:bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] hover:shadow-lg p-4 animate-fade-in group rounded-md"
            style={{ animationDelay: `${index * 50}ms` }}
          >
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
