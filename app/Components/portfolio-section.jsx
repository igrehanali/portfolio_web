"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
        'An intuitive and powerful admin dashboard for managing users, messages, and analytics in a SaaS chat app. Email: "admin@example.com" Password: "admin1234"',
      image: "/project3.png",
      categories: ["Next.js", "Firebase", "React ECharts"],
      url: "https://chattickadmin.vercel.app/",
    },
    {
      id: "05",
      title: "Diagram Web – Logistics Platform",
      description:
        "Developed a modern, responsive design tools showcase website using React and Tailwind CSS, featuring interactive UI sections and smooth animations.",
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
        <div className="flex flex-col gap-24">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="relative transition-all duration-300 ease-in-out group rounded-2xl bg-white/5 backdrop-blur-sm hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 hover:border-white/20 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 group-hover:scale-[1.01] transition-transform duration-300 ease-in-out">
                {/* Image Section */}
                <div
                  className={`relative h-[300px] sm:h-[400px] w-full bg-gray-900 rounded-xl overflow-hidden ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105 object-cover object-center"
                    />
                  </a>
                  {/* Nav Button */}
                  <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 z-10">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-gradient-to-tr from-[#0f2027] to-[#2c5364] text-white w-14 h-14 sm:w-16 sm:h-16 p-0 flex items-center justify-center shadow-lg border-4 border-white/20 hover:scale-105 transition-transform"
                    >
                      <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`flex flex-col justify-center  p-4 lg:p-6 ${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  } pt-8 lg:pt-0`}
                >
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#89d6eb] transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-gray-300 text-base font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2">
                      {item.categories.map((category, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          className="rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#203a43] text-sm font-medium h-8 px-4 backdrop-blur-md transition-colors cursor-none"
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full">
          <Link href="/projects">
            <button className="mt-12 px-6 py-4  rounded-xl bg-[#2c5364] text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300 ">
              View all projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
