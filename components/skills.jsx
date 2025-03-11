"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "Git", icon: "git" },
  { name: "Javascript", icon: "js" },
  { name: "Sass/Scss", icon: "sass" },
  { name: "Nest.Js", icon: "nest" },
  { name: "Storybook", icon: "storybook" },
  { name: "Git", icon: "git" },
  { name: "Storybook", icon: "storybook" },
  { name: "Socket.io", icon: "socket" },
  { name: "Sass/Scss", icon: "sass" },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-medium text-center mb-12 text-slate-800"
          data-aos="fade-up"
        >
          My <span className="text-slate-700">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-lg p-6 border border-gray-200 flex flex-col items-center justify-center hover:scale-110 hover:shadow-lg hover:border-purple-600 hover:text-purple-600 transform transition-all duration-300 ease-out group"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src={`/icons/${skill.icon}.svg`}
                  alt={`${skill.name} icon`}
                  className="w-full h-full object-contain group-hover:text-purple-600"
                />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-purple-600">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
