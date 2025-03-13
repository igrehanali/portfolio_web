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
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript size={35} className="text-[#242F65]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={35} className="text-[#242F65]" />,
  },
  { name: "React", icon: <SiReact size={35} className="text-[#242F65]" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={35} className="text-[#242F65]" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={35} className="text-[#242F65]" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={35} className="text-[#242F65]" />,
  },
  { name: "MongoDB", icon: <SiMongodb size={35} className="text-[#242F65]" /> },
  {
    name: "Firebase",
    icon: <SiFirebase size={35} className="text-[#242F65]" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={35} className="text-[#242F65]" />,
  },
  { name: "Figma", icon: <SiFigma size={35} className="text-[#242F65]" /> },
  { name: "Git", icon: <SiGit size={35} className="text-[#242F65]" /> },
  { name: "Redux", icon: <SiRedux size={35} className="text-[#242F65]" /> },
];

const SkillsExpertise = () => {
  return (
    <div className="w-full sm:py-16 lg:py-16 md:py-1 bg-white px-4 mx-auto max-w-6xl">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-light mb-12">
          My <span className="text-[#1a237e] font-bold">Skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 border border-[#242F65] hover:bg-[#242F65] p-4 animate-fade-in group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Icon */}
            <div className="w-[5rem] h-[5rem] mb-2 flex items-center justify-center group-hover:text-white transition-colors duration-300">
              {React.cloneElement(skill.icon, {
                className:
                  "group-hover:text-white transition-colors duration-300",
              })}
            </div>

            {/* Text */}
            <span className="text-xs font-medium text-center group-hover:text-white transition-colors duration-300">
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
