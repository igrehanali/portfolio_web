// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Linkedin, Github, Mail } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <div className="relative w-full min-h-screen overflow-hidden lg:pt-16 md:pt-20 pt-40 mx-auto max-w-6xl ">
//       <div className="container mx-auto h-screen flex items-center justify-items-stretch">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <div className="px-6 md:px-10 z-10 animate-fade-in">
//             <h1 className="text-[32px] md:text-[48px] leading-tight mb-1 font-normal">
//               Hello I'
//               <span className="text-[#242A41] font-semibold">Rehan Ali</span>.
//             </h1>
//             <h2 className="text-[32px] md:text-[48px] leading-tight mb-1 font-normal">
//               Web
//               <span className="bg-white px-2 font-normal">Developer</span>
//             </h2>

//             <p className="text-gray-600 mb-12 max-w-[460px] text-sm md:text-base leading-relaxed">
//               I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
//               and typesetting industry. Lorem Ipsum has been the industry's
//               standard dummy text ever since the 1500s, when an unknown printer
//               took a galley of type and scrambled it to specimen book.
//             </p>
//             <div className="flex space-x-6">
//               {[
//                 { icon: <Linkedin className="w-5 h-5" />, href: "#" },
//                 { icon: <Github className="w-5 h-5" />, href: "#" },
//                 { icon: <Mail className="w-5 h-5" />, href: "#" },
//               ].map((social, index) => (
//                 <Link
//                   key={index}
//                   href={social.href}
//                   className="w-[52px] h-[52px] rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#1a237e] hover:border-[#1a237e]hover:scale-110 hover:shadow-lg transform transition-all duration-300 ease-out animate-fade-in"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   {social.icon}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className="relative flex justify-end items-end z-10 animate-slide-in">
//             <div className="absolute w-[520px] h-[520px]  transform -translate-x-6" />
//             <div className="relative z-10">
//               <Image
//                 src="/hero.jpg"
//                 width={420}
//                 height={320}
//                 alt="Profile picture"
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import { useEffect } from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-16 bg-gray-100 md:pt-20 pt-28">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Building Scalable & Interactive Web Experiences.
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mt-3">
            Frontend Engineer | React & Next.js Specialist
          </h2>
          <p className="text-gray-600 max-w-xl mt-4 mx-auto lg:mx-0">
            I design and develop high-performance web applications with a strong
            focus on modern frontend technologies like{" "}
            <strong>React, Next.js, and Tailwind CSS.</strong>
            Passionate about crafting seamless user experiences and working with
            dynamic teams.
          </p>
          <p className="text-gray-600 max-w-xl mt-2 mx-auto lg:mx-0">
            Always eager to collaborate, solve complex problems, and push the
            boundaries of web development.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-4 pt-6">
            {[
              { icon: <Linkedin className="w-5 h-5" />, href: "#", delay: 100 },
              { icon: <Github className="w-5 h-5" />, href: "#", delay: 200 },
              { icon: <Mail className="w-5 h-5" />, href: "#", delay: 300 },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center 
                           text-gray-700 hover:text-white hover:bg-gray-800 hover:border-gray-800 
                           hover:scale-110 transition-all duration-300 ease-out"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative flex justify-center items-center">
          <div className="relative">
            <Image
              src="/hero.jpg"
              width={400}
              height={500}
              alt="Rehan - Web Developer"
              className="object-cover w-[200px] sm:w-[250px] md:w-[350px] lg:w-[400px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
