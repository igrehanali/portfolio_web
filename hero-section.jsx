"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Github, Mail } from "lucide-react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    (<div
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/40">
      {/* Dotted border */}
      <div
        className="absolute left-1/2 top-0 h-full w-px border-l border-dashed border-gray-200" />
      <div
        className="absolute bottom-0 left-0 w-full h-px border-t border-dashed border-gray-200" />
      {/* Floating elements */}
      <div
        className="absolute top-[15%] right-[28%] h-10 w-10 rounded-lg bg-purple-600 shadow-lg transform rotate-45 animate-float-slow" />
      <div
        className="absolute top-[35%] right-[18%] h-3 w-3 rounded-full bg-purple-500 animate-float" />
      <div
        className="absolute bottom-[30%] right-[25%] h-8 w-8 rounded-lg bg-cyan-400 shadow-md transform rotate-12 animate-float-medium" />
      <div
        className="absolute top-[65%] right-[22%] h-4 w-4 rounded-full bg-blue-400 animate-float-slow" />
      <div
        className="absolute bottom-[15%] right-[35%] h-2 w-2 rounded-full bg-purple-400 animate-float" />
      <div className="container mx-auto h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="px-6 md:px-10 z-10" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight">
              HEY! I'm <span className="text-slate-700">Laura</span>,
            </h1>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-800 mb-6">
              UI/UX <span className="text-slate-700">designer</span>
            </h2>
            <p className="text-gray-600 mb-10 max-w-md text-sm md:text-base">
              Agency-quality Webflow websites with the personal touch of a freelancer.
            </p>

            {/* Social icons */}
            <div className="flex space-x-4">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: "#", delay: 100 },
                { icon: <Github className="w-5 h-5" />, href: "#", delay: 200 },
                { icon: <Mail className="w-5 h-5" />, href: "#", delay: 300 },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  data-aos="fade-up"
                  data-aos-delay={social.delay}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 hover:border-purple-600 hover:scale-110 hover:shadow-lg transform transition-all duration-300 ease-out">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right content - Image with glow effect */}
          <div
            className="relative flex justify-center items-center z-10"
            data-aos="fade-left"
            data-aos-delay="200">
            {/* Glowing circle background */}
            <div
              className="absolute w-[500px] h-[500px] bg-purple-100/80 rounded-full shadow-[0_0_120px_rgba(168,85,247,0.15)] transform -translate-x-6" />

            {/* Person image */}
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=500&width=400"
                width={400}
                height={500}
                alt="Laura - UI/UX Designer"
                className="object-cover"
                priority />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom right decorative dot */}
      <div className="absolute bottom-6 right-6 h-3 w-3 rounded-full bg-red-400" />
    </div>)
  );
}

