"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      id: "01",
      title: "StoreIt",
      description:
        "A web Solution where users can upload there images, documents and other files, share with others and download them whenever they want.",
      image: "/project1.png",
      categories: ["Website", "Next js", "Full stack", "App write"],
      url: "https://example.com/storeit",
    },
    {
      id: "02",
      title: "purplebyte",
      description: "A landing page for a software company",
      image: "/project2.png",
      categories: ["Website", "Next js", "Frontend"],
      url: "https://purplebyte.netlify.app/",
    },
    {
      id: "03",
      title: "chatTick Admin",
      description: "Admin panel for SAAS chat application",
      image: "/project3.png",
      categories: ["Firebase", "Next js", "react echarts"],
      url: "https://chattickadmin.vercel.app/",
    },
    {
      id: "04",
      title: "Packaging Design",
      description: "Elegant packaging solutions for premium products",
      image: "https://i.pravatar.cc/520",
      categories: ["Packaging", "Branding", "Product"],
      url: "https://example.com/packaging-design",
    },
    {
      id: "05",
      title: "Website Design",
      description: "Modern web experiences with responsive layouts",
      image: "https://i.pravatar.cc/510",
      categories: ["Website", "UI/UX", "Development"],
      url: "https://example.com/website-design",
    },
    {
      id: "06",
      title: "Application Design",
      description: "Modern web experiences with responsive layouts",
      image: "https://i.pravatar.cc/481",
      categories: ["Website", "UI/UX", "Development"],
      url: "https://example.com/application-design-2",
    },
    {
      id: "07",
      title: "Branding Identity",
      description: "Modern web experiences with responsive layouts",
      image: "https://i.pravatar.cc/480",
      categories: ["Website", "UI/UX", "Development"],
      url: "https://example.com/branding-identity-2",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center w-full">
          <h2 className="text-4xl font-light mb-6">
            Selected <span className="text-[#1a237e] font-bold">work!</span>
          </h2>
          <p className="text-gray-500 mt-2">
            A collection of our recent projects and collaborations
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Image Section - Alternates between left and right */}
                <div
                  className={`relative h-[300px] sm:h-[400px] w-full bg-gray-100 ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover "
                    />
                  </a>

                  {/* Navigation button */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-black text-white hover:bg-[#242F65] w-14 h-14 sm:w-16 sm:h-16 p-0 flex items-center justify-center border-3 border-white"
                    >
                      <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                  </div>
                </div>

                {/* Content Section - Alternates between left and right */}
                <div
                  className={`flex flex-col justify-center ${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  } pt-8 lg:pt-0`}
                >
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 text-base font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2">
                      {item.categories.map((category, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          className="rounded-full shadow-none border-gray-200 hover:bg-[#242F65] hover:text-white text-gray-700 font-normal text-sm h-8 px-4"
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
      </div>
    </section>
  );
}
