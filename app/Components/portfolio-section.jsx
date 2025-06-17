"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./common/header";
import Link from "next/link";

export default function PortfolioSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const portfolioItems = [
    {
      id: "02",
      title: "StoreIt Cloud – File Management Platform",
      description:
        "A secure, cloud-based platform designed for storing, managing, and sharing files with seamless real-time access.",
      image: "/project1.png",
      categories: ["Full Stack", "Next.js", "Appwrite", "Storage"],
      url: "https://storage-management-solution.vercel.app/",
    },
    {
      id: "03",
      title: "PurpleByte – Software Landing Page",
      description:
        "A sleek, modern, and responsive landing page for a futuristic software company—built to impress from first glance.",
      image: "/project2.png",
      categories: ["Frontend", "Next.js", "Tailwind CSS"],
      url: "https://purplebyte.netlify.app/",
    },
    {
      id: "04",
      title: "ChatTick Admin – SaaS Dashboard",
      description:
        'An intuitive and powerful admin dashboard for managing users, messages, and analytics in a SaaS chat app."',
      image: "/project3.png",
      categories: ["Next.js", "Firebase", "React ECharts"],
      url: "https://chattickadmin.vercel.app/",
    },
    {
      id: "05",
      title: "Diagram Web – Logistics Platform",
      description:
        "Developed a modern, responsive design tools showcase website using React js, featuring interactive UI sections and smooth animations.",
      image: "/project4.png",
      categories: ["E-commerce", "Logistics", "Branding"],
      url: "https://diagramweb.netlify.app/",
    },
    {
      id: "06",
      title: "Data AI – Analytics & Visualization",
      description:
        "A dynamic platform leveraging AI to deliver smart insights and beautiful visualizations with cutting-edge UI components.",
      image: "/project5.png",
      categories: ["AI", "Next.js", "Tailwind CSS", "AOS"],
      url: "https://framerwebsite-blush.vercel.app/",
    },
  ];

  return (
    <section className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <div className="max-w-6xl mx-auto">
        <Header
          heading="Selected work"
          subHeading="A collection of our recent projects and collaborations"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-gradient-to-br from-white/80 to-white/60 border-white/30 shadow-2xl`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Section */}
              <div className="relative h-[220px] sm:h-[200px] w-full bg-gray-900 overflow-hidden rounded-t-2xl">
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>

                {/* Floating Nav Button */}
                {/* <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-10">
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-tr from-[#0f2027] to-[#2c5364] text-white w-14 h-14 p-0 flex items-center justify-center shadow-lg border-4 border-white/20 hover:scale-105 transition-transform"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div> */}
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between px-4 pt-4 pb-3 text-white">
                <h2 className="text-xl font-semibold mb-3 text-black">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed mb-4  text-gray-700">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.categories.map((category, idx) => (
                    <button
                      key={idx}
                      variant="outline"
                      className="px-2 py-1 rounded-md text-xs bg-gray-200 text-gray-700"
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-slate-800 text-white hover:bg-slate-700 my-4`}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center w-full">
          <Link href="/projects">
            <button
              className="group relative mt-12 px-6 py-4 rounded-lg bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] 
      text-white font-semibold text-base sm:text-lg shadow-[0_8px_24px_rgba(0,0,0,0.4)] 
      hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:scale-105 transition-all duration-300 ease-out focus:outline-none"
            >
              <span className="absolute inset-0 rounded-full bg-white opacity-10 blur-md group-hover:opacity-20 transition-opacity duration-300" />
              <span className="inline-flex items-center gap-2 relative z-10">
                <FolderOpen className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                View All Projects
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
