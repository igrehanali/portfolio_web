"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden lg:pt-16 md:pt-20 pt-40 mx-auto">
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="px-6 md:px-10 z-10 animate-fade-in">
            <h1 className="text-[32px] md:text-[48px] leading-tight mb-1 font-normal">
              Hello I'
              <span className="text-[#242A41] font-semibold">Rehan Ali</span>.
            </h1>
            <h2 className="text-[32px] md:text-[48px] leading-tight mb-1 font-normal">
              Web
              <span className="bg-white px-2 font-normal">Developer</span>
            </h2>

            <p className="text-gray-600 mb-12 max-w-[460px] text-sm md:text-base leading-relaxed">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>
            <div className="flex space-x-6">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Github className="w-5 h-5" />, href: "#" },
                { icon: <Mail className="w-5 h-5" />, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-[52px] h-[52px] rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 hover:border-purple-600 hover:scale-110 hover:shadow-lg transform transition-all duration-300 ease-out animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center items-center z-10 animate-slide-in">
            <div className="absolute w-[520px] h-[520px]  transform -translate-x-6" />
            <div className="relative z-10">
              <Image
                src="/hero.jpg"
                width={420}
                height={320}
                alt="Profile picture"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
