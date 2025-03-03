"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Heading from "./heading";
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
    icon: <SiJavascript size={32} className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={32} className="text-blue-500" />,
  },
  { name: "React", icon: <SiReact size={32} className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} className="text-black" /> },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={32} className="text-green-500" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={32} className="text-gray-800" />,
  },
  { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-600" /> },
  {
    name: "Firebase",
    icon: <SiFirebase size={32} className="text-orange-400" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={32} className="text-blue-400" />,
  },
  { name: "Figma", icon: <SiFigma size={32} className="text-purple-500" /> },
  { name: "Git", icon: <SiGit size={32} className="text-orange-500" /> },
  { name: "Redux", icon: <SiRedux size={32} className="text-purple-600" /> }, // Added one skill to make it even
];

export default function SkillsExpertise() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Smoother and slightly slower animations
      easing: "ease-in-out", // Smooth in and out
      offset: 100, // Start animation when the element is closer to view
      delay: 50, // Small delay to make transitions smoother
      once: false, // Keep animations when scrolling up/down
      mirror: true, // Re-trigger animations on scroll up
    });
  }, []);

  return (
    <div className="w-full py-16 bg-white px-4 mx-auto max-w-6xl">
      <Heading
        title="Skills Expertise"
        subtitle="The skills, tools, and technologies I am really good at:"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:shadow-lg p-4 rounded-lg"
            data-aos="fade-up"
            data-aos-delay={100 * index}
          >
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              {skill.icon}
            </div>
            <span className="text-xs text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
