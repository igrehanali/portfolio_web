"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TextPressure from "../../src/blocks/TextAnimations/TextPressure/TextPressure";
export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full h-[99vh] flex items-center justify-center px-4 sm:px-1 bg-[#f3f5f5] pt-28 sm:pt-24 md:pt-20">
      <div className="max-w-6xl w-full flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div
          className="text-center lg:text-left px-2 sm:px-4"
          data-aos="fade-right"
        >
          <div>
            <TextPressure
              text="Hey I'm Rehan"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#000"
              strokeColor="#ff0000"
              minFontSize={48}
            />
          </div>
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
          {/* <div className="flex justify-center lg:justify-start space-x-4 pt-6">
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
          </div> */}
          {/* CTA Button */}
          <div
            className="mt-8 flex justify-center lg:justify-start"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              href="/project"
              className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] 
    text-white font-semibold text-base sm:text-lg shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] focus:outline-none"
            >
              <span className="absolute inset-0 rounded-full bg-white opacity-10 blur-md group-hover:opacity-20 transition-opacity duration-300" />
              🚀 View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
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
