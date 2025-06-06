"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 bg-[#f3f5f5] pt-28 sm:pt-24 md:pt-20">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div
          className="text-center lg:text-left px-2 sm:px-4"
          data-aos="fade-right"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            👋🏻Hey I'm Rehan
          </h1>
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mt-3">
            Frontend Engineer | React & Next.js Specialist
          </h2>
          <p className="text-gray-600 mt-4 max-w-md sm:max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            I specialize in designing and developing high-performance web
            applications using{" "}
            <strong>React, Next.js, and Tailwind CSS.</strong> My passion lies
            in creating exceptional user experiences and collaborating on
            innovative ideas.
          </p>
          <p className="text-gray-600 mt-2 max-w-md sm:max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            Always eager to collaborate, solve complex problems, and push the
            boundaries of web development.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-4 pt-6">
            {[
              {
                icon: <Linkedin className="w-5 h-5" />,
                href: "https://www.linkedin.com/in/muhammad-rehan-ali-541277263/",
                delay: 100,
              },
              {
                icon: <Github className="w-5 h-5" />,
                href: "https://github.com/igrehanali",
                delay: 200,
              },
              {
                icon: <Mail className="w-5 h-5" />,
                href: "mailto:webwithrehan@gmail.com",
                delay: 300,
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#2c5364] flex items-center justify-center 
text-[#2c5364] bg-white shadow-md hover:text-white hover:bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] 
hover:border-transparent hover:scale-110 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#203a43]"
                data-aos="fade-up"
                data-aos-delay={social.delay}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center items-center" data-aos="fade-left">
          <Image
            src="/hero.jpg"
            width={300}
            height={400}
            alt="Rehan - Web Developer"
            className="object-cover w-[160px] xs:w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
