// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Linkedin, Github, Mail } from "lucide-react";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function HeroSection() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/40"> 
//       <div className="container mx-auto h-screen flex items-center px-4 md:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
//           {/* Left content */}
//           <div className="px-4 sm:px-6 md:px-8 z-10" data-aos="fade-up">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
//               HEY! I'm <span className="text-slate-700">Laura</span>,
//             </h1>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-800 mb-4 sm:mb-6">
//               UI/UX <span className="text-slate-700">designer</span>
//             </h2>
//             <p className="text-gray-600 mb-8 sm:mb-10 max-w-md text-sm sm:text-base">
//               Agency-quality Webflow websites with the personal touch of a
//               freelancer.
//             </p>

//             {/* Social icons */}
//             <div className="flex space-x-3 sm:space-x-4">
//               {[
//                 {
//                   icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
//                   href: "#",
//                   delay: 100,
//                 },
//                 {
//                   icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
//                   href: "#",
//                   delay: 200,
//                 },
//                 {
//                   icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
//                   href: "#",
//                   delay: 300,
//                 },
//               ].map((social, index) => (
//                 <Link
//                   key={index}
//                   href={social.href}
//                   data-aos="fade-up"
//                   data-aos-delay={social.delay}
//                   className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 hover:border-purple-600 hover:scale-110 hover:shadow-lg transform transition-all duration-300 ease-out"
//                 >
//                   {social.icon}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Right content - Image with glow effect */}
//           <div
//             className="relative flex justify-center items-center z-10 mt-8 md:mt-0"
//             data-aos="fade-left"
//             data-aos-delay="200"
//           >
//             {/* Glowing circle background */}
//             <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-purple-100/80 rounded-full shadow-[0_0_120px_rgba(168,85,247,0.15)] transform -translate-x-6" />

//             {/* Person image */}
//             <div className="relative z-10">
//               <Image
//                 src="/placeholder.svg?height=500&width=400"
//                 width={400}
//                 height={500}
//                 alt="Laura - UI/UX Designer"
//                 className="object-cover w-[240px] sm:w-[300px] md:w-[400px] h-auto"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Bottom right decorative dot */}
//       <div className="absolute bottom-6 right-6 h-3 w-3 rounded-full bg-red-400" />
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
        delay: 100,
      });
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/40"> 
      <div className="container mx-auto h-screen flex items-center px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          {/* Left content */}
          <div className="px-4 sm:px-6 md:px-8 z-10" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
              HEY! I'm <span className="text-slate-700">Rehan</span>,
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-800 mb-4 sm:mb-6">
              Full-Stack <span className="text-slate-700">Web Developer</span>
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-10 max-w-md text-sm sm:text-base">
              I build high-performance, scalable web applications using React, Next.js, TypeScript, and Firebase.
              Let's create something amazing together!
            </p>

            {/* Social icons */}
            <div className="flex space-x-3 sm:space-x-4">
              {[
                {
                  icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, 
                  href: "#", 
                  delay: 100,
                },
                {
                  icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />, 
                  href: "#", 
                  delay: 200,
                },
                {
                  icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, 
                  href: "#", 
                  delay: 300,
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  data-aos="fade-up"
                  data-aos-delay={social.delay}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 hover:border-purple-600 hover:scale-110 hover:shadow-lg transform transition-all duration-300 ease-out"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right content - Image with glow effect */}
          <div
            className="relative flex justify-center items-center z-10 mt-8 md:mt-0"
            data-aos="fade-left"
          >
            {/* Glowing circle background */}
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-purple-100/80 rounded-full shadow-[0_0_120px_rgba(168,85,247,0.15)] transform -translate-x-6" />

            {/* Person image */}
            <div className="relative z-10">
              <Image
                src="/your-profile-image.png"
                width={400}
                height={500}
                alt="Rehan - Web Developer"
                className="object-cover w-[240px] sm:w-[300px] md:w-[400px] h-auto rounded-xl shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom right decorative dot */}
      <div className="absolute bottom-6 right-6 h-3 w-3 rounded-full bg-red-400" />
    </div>
  );
}