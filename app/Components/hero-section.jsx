"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import { useEffect } from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-6 sm:px-10 lg:px-16 bg-gray-100 md:pt-20 pt-28">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            👋🏻Hey i'm Rehan
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mt-3">
            Frontend Engineer | React & Next.js Specialist
          </h2>
          <p className="text-gray-600 max-w-xl mt-4 mx-auto lg:mx-0">
            I specialize in designing and developing high-performance web
            applications that leverage cutting-edge frontend technologies like
            <strong>React, Next.js, and Tailwind CSS.</strong> My passion lies
            in creating exceptional user experiences while collaborating
            effectively with dynamic teams to bring innovative ideas to life.
          </p>
          <p className="text-gray-600 max-w-xl mt-2 mx-auto lg:mx-0">
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
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center 
                           text-gray-700 hover:text-white hover:bg-[#1a237e] hover:border-[#1a237e] 
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
