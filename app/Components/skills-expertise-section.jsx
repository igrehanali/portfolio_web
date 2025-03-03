"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FileCode,
  Type,
  Atom,
  SquareKanban,
  Server,
  Code,
  Send,
  Database,
  Boxes,
  Wind,
  PenTool,
  FlaskConical,
  GitBranch,
} from "lucide-react";
import Heading from "./heading";

export default function SkillsExpertise() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { name: "JavaScript", icon: <FileCode className="text-yellow-400" /> },
    { name: "TypeScript", icon: <Type className="text-blue-500" /> },
    { name: "React", icon: <Atom className="text-cyan-400" /> },
    { name: "Next.js", icon: <SquareKanban className="text-black" /> },
    { name: "Node.js", icon: <Server className="text-green-500" /> },
    { name: "Express.js", icon: <Code className="text-gray-800" /> },
    { name: "Nest.js", icon: <Send className="text-red-500" /> },
    { name: "Socket.io", icon: <Code className="text-black" /> },
    { name: "PostgreSQL", icon: <Database className="text-blue-400" /> },
    { name: "MongoDB", icon: <Database className="text-green-600" /> },
    { name: "Sass/SCSS", icon: <PenTool className="text-pink-500" /> },
    { name: "TailwindCSS", icon: <Wind className="text-blue-400" /> },
    { name: "Figma", icon: <Boxes className="text-purple-500" /> },
    { name: "Cypress", icon: <FlaskConical className="text-green-500" /> },
    { name: "Git", icon: <GitBranch className="text-orange-500" /> },
  ];

  return (
    <div className="w-full py-16 bg-white">
      {/* Top border line */}
      <div className="border-t border-dashed border-gray-300 mb-12"></div>

      <div className="max-w-4xl mx-auto px-4">
        <Heading
          title="Skills&nbsp;& Expertise"
          subtitle="The skills, tools, and technologies I am really good at:"
        />

        <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
              data-aos="fade-up"
              data-aos-delay={100 * index} // Staggered animation effect
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                {skill.icon}
              </div>
              <span className="text-xs text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
