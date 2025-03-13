// "use client";
// import {
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiNextdotjs,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiFirebase,
//   SiTailwindcss,
//   SiFigma,
//   SiGit,
//   SiRedux,
// } from "react-icons/si";
// import Heading from "./heading";

// const skills = [
//   {
//     name: "JavaScript",
//     icon: <SiJavascript size={35} className="text-yellow-400" />,
//   },
//   {
//     name: "TypeScript",
//     icon: <SiTypescript size={35} className="text-blue-500" />,
//   },
//   { name: "React", icon: <SiReact size={35} className="text-cyan-400" /> },
//   { name: "Next.js", icon: <SiNextdotjs size={35} className="text-black" /> },
//   {
//     name: "Node.js",
//     icon: <SiNodedotjs size={35} className="text-green-500" />,
//   },
//   {
//     name: "Express.js",
//     icon: <SiExpress size={35} className="text-gray-800" />,
//   },
//   { name: "MongoDB", icon: <SiMongodb size={35} className="text-green-600" /> },
//   {
//     name: "Firebase",
//     icon: <SiFirebase size={35} className="text-orange-400" />,
//   },
//   {
//     name: "TailwindCSS",
//     icon: <SiTailwindcss size={35} className="text-blue-400" />,
//   },
//   { name: "Figma", icon: <SiFigma size={35} className="text-purple-500" /> },
//   { name: "Git", icon: <SiGit size={35} className="text-orange-500" /> },
//   { name: "Redux", icon: <SiRedux size={35} className="text-purple-600" /> },
// ];

// export default function SkillsExpertise() {
//   return (
//     <div className="w-full py-16 bg-white px-4 mx-auto max-w-6xl">
//       <Heading
//         title="Skills Expertise"
//         subtitle="The skills, tools, and technologies I am really good at:"
//       />

//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 ">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center transition-transform duration-300 border-1 border-[#242F65] hover:bg-[#242F65] p-4  animate-fade-in"
//             style={{ animationDelay: `${index * 50}ms` }}
//           >
//             <div className="w-[5rem] h-[5rem] mb-2 flex items-center justify-center  ">
//               {skill.icon}
//             </div>
//             <span className="text-2xs  font-medium text-center hover:text-white ">
//               {skill.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
" use client ";
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
import Heading from "./heading";

const skills = [
  {
    name: "JavaScript",
    icon: (
      <SiJavascript
        size={35}
        className="text-[##242F65] transition-colors duration-300 group-hover:text-white"
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <SiTypescript
        size={35}
        className="text-[##242F65] transition-colors duration-300 group-hover:text-white"
      />
    ),
  },
  {
    name: "React",
    icon: (
      <SiReact
        size={35}
        className="text-[##242F65] transition-colors duration-300 group-hover:text-white"
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs
        size={35}
        className="text-[##242F65] transition-colors duration-300 group-hover:text-white"
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <SiNodedotjs
        size={35}
        className="text-[##242F65] transition-colors duration-300 group-hover:text-white"
      />
    ),
  },
  {
    name: "Express.js",
    icon: (
      <SiExpress
        size={35}
        className="text-[##242F65] transition-colors duration-300 group-hover:text-white"
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <SiMongodb
        size={35}
        className="text-[##242F65] transition-colors duration-300 group-hover:text-white"
      />
    ),
  },
  {
    name: "Firebase",
    icon: (
      <SiFirebase
        size={35}
        className="text-[##242F65] transition-colors duration-300 group-hover:text-white"
      />
    ),
  },
  {
    name: "TailwindCSS",
    icon: (
      <SiTailwindcss
        size={35}
        className="text-[##242F65] transition-colors duration-300 group-hover:text-white"
      />
    ),
  },
  {
    name: "Figma",
    icon: (
      <SiFigma
        size={35}
        className="text-[##242F65]transition-colors duration-300 group-hover:text-white"
      />
    ),
  },
  {
    name: "Git",
    icon: (
      <SiGit
        size={35}
        className="text-[##242F65] transition-colors duration-300 group-hover:text-white"
      />
    ),
  },
  {
    name: "Redux",
    icon: (
      <SiRedux
        size={35}
        className="text-[##242F65] transition-colors duration-300 group-hover:text-white"
      />
    ),
  },
];

export default function SkillsExpertise() {
  return (
    <div className="w-full py-16 bg-white px-4 mx-auto max-w-6xl">
      {/* <Heading
        title="Skills Expertise"
        subtitle="The skills, tools, and technologies I am really good at:"
      /> */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-[#1a237e]">Skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 border border-[#242F65] hover:bg-[#242F65] p-4 animate-fade-in group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="w-[5rem] h-[5rem] mb-2 flex items-center justify-center">
              <div className="group-hover:text-white transition-colors duration-300">
                {skill.icon}
              </div>
            </div>
            <span className="text-xs font-medium text-center group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
