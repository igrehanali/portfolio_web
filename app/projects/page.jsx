"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Filter,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/navbar";
import AnimatedCursor from "react-animated-cursor";

const mockProjects = [
  {
    id: 1,
    name: "Cosmic Admin",
    description:
      "A modern and intuitive admin dashboard designed for managing AI chat characters. It offers comprehensive statistics, character management tools.",
    image: "/cosmic-project.png",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Firebase",
      "AI",
      "Admin Panel",
    ],
    type: "Admin Panel",
    liveUrl: "https://cosmos-admin.vercel.app/",
    githubUrl: null,
    date: "December 2024",
    featured: true,
  },
  {
    id: 2,
    name: "Point Of Sales",
    description:
      "A responsive and scalable POS system featuring inventory management, billing, and multi-store support. Users can log in, select their companies, and branches.",
    image: "/POS-project.png",
    tags: ["React", "SaaS", "Firebase"],
    type: "SaaS",
    liveUrl: "https://pointofsaless.netlify.app",
    githubUrl: null,
    date: "June 2025",
    featured: false,
  },
  {
    id: 3,
    name: "OneR Education",
    description:
      "An admin panel for managing institutes, reviewing student applications, and tracking platform stats.",
    image: "/onereducation-project.png",
    tags: ["React.js", "Tailwind CSS", "Firebase", "Admin Panel"],
    type: "Admin Panel",
    liveUrl: "https://onereducation.netlify.app",
    githubUrl: null,
    date: "April 2024",
    featured: false,
  },
  {
    id: 4,
    name: "Django clone",
    description: "A simple minimalistic clone of Django main app.",
    image: "/django-project.png",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "landing page",
    liveUrl: "https://dijango.netlify.app",
    githubUrl: null,
    date: "Mar 2025",
    featured: false,
  },
  {
    id: 5,
    name: "Yegod",
    description:
      "A blogging website with an admin panel, built using Sanity CMS for creating and managing blog content.",
    image: "/yegod-project.png",
    tags: ["Next.js", "Tailwind CSS", "CMS"],
    type: "Web App",
    liveUrl: "https://yegod.netlify.app",
    githubUrl: null,
    date: "Feb 2024",
    featured: false,
  },
  {
    id: 6,
    name: "Zux blog",
    description:
      "A clean and modern blogging platform with a minimalist design, built using Sanity CMS for backend",
    image: "/mux-project.png",
    tags: ["Next.js", "CMS", "Tailwind CSS"],
    type: "Blog Platform",
    liveUrl: "https://zux.netlify.app",
    githubUrl: null,
    date: "Jan 2024",
    featured: false,
  },
  {
    id: 7,
    name: "DateGoal",
    description:
      "A modern landing page for a dating platform, designed with a clean layout and responsive UI.",
    image: "/dategoal-project.png",
    tags: ["React", "Tailwind CSS"],
    type: "Landing Page",
    liveUrl: "https://dategoal.com",
    githubUrl: null,
    date: "February 2025",
    featured: false,
  },
  {
    id: 8,
    name: "Dispatcher PAK",
    description:
      "A landing page for an American dispatching company, showcasing services with smooth animations and a modern layout.",
    image: "/dispatcher-project.png",
    tags: ["Next.js", "AOS Animation", "Tailwind CSS"],
    type: "Landing Page",
    liveUrl: "https://dispatcher-pak.netlify.app",
    githubUrl: null,
    date: "June 2024",
    featured: false,
  },
  {
    id: 9,
    name: "ShipPacks",
    description:
      "A shipping platform where users can place and track orders in real time. Web, mobile, and desktop apps are all connected via Firebase for seamless updates.",
    image: "/shippack-project.png",
    tags: ["React", "Framer Motion", "services"],
    type: "Web App",
    liveUrl: "https://shippacks.com",
    githubUrl: null,
    date: "august 2023",
    featured: false,
  },
  {
    id: 10,
    name: "PurpleByte",
    description: "A portfolio site with deep purple-themed aesthetics.",
    image: "/purplebyte-project.png",
    tags: ["Next.js", "Tailwind", "landing page"],
    type: "Portfolio",
    liveUrl: "https://purplebyte.netlify.app",
    githubUrl: null,
    date: "Sep 2024",
    featured: true,
  },

  {
    id: 12,
    name: "Balizar",
    description:
      "An admin panel for a buy-and-sell platform, similar to OLX. Admins can manage listings, users, and view app statistics.",
    image: "/balizar-project.png",
    tags: ["Next.js", "Node.js", "API Integration"],
    type: "Admin Panel",
    liveUrl: "https://balizar.netlify.app",
    githubUrl: null,
    date: "December 2023",
    featured: false,
  },
  {
    id: 13,
    name: "Mayeen",
    description:
      "An admin panel for a marine travel app where users can book seats on boats and yachts. Admins can manage ship layouts, block users, and monitor app statistics.",
    image: "/mayeen-project.png",
    tags: ["React", "Firebase", "Admin Panel"],
    type: "Admin panel",
    liveUrl: "https://mayen.netlify.app",
    githubUrl: null,
    date: "December 2024",
    featured: false,
  },
  {
    id: 14,
    name: "Recipe web",
    description:
      "A recipe website with filters and categorized meals. Users can view, add, and review recipes with a smooth user experience.",
    image: "/recipe-project.png",
    tags: ["React.js", "Firebase", "UI/UX"],
    type: "Web App",
    liveUrl: "https://recipe-rehan.netlify.app",
    githubUrl: null,
    date: "November 2024",
    featured: false,
  },
  {
    id: 15,
    name: "Unidocc",
    description:
      "An admin panel for managing construction worker contracts. Supports different roles for admins and staff to handle documents and data efficiently.",
    image: "/unidoc-project.png",
    tags: ["Next.js", "Tailwind CSS", "Contentlayer"],
    type: "Web App",
    liveUrl: "https://unidocc.netlify.app",
    githubUrl: null,
    date: "October 2023",
    featured: false,
  },
  {
    id: 16,
    name: "Pig Game",
    description: "A browser-based JavaScript dice game.",
    image: "/piggame-project.png",
    tags: ["JavaScript", "HTML", "CSS"],
    type: "Game",
    liveUrl: "https://pig-game-rehan.netlify.app",
    githubUrl: null,
    date: "Mar 2023",
    featured: false,
  },
  {
    id: 17,
    name: "Bankist",
    description: "A minimal banking UI simulation.",
    image: "/bankist-project.png",
    tags: ["JavaScript", "CSS", "DOM"],
    type: "Demo App",
    liveUrl: "https://bankist-rehan.netlify.app",
    githubUrl: null,
    date: "Oct 2024",
    featured: false,
  },
  {
    id: 18,
    name: "Omni Food",
    description: "Healthy food delivery landing page with clean layout.",
    image: "/omnifood-project.png",
    tags: ["HTML", "CSS", "JS"],
    type: "Landing Page",
    liveUrl: "https://omni-food-rehan.netlify.app",
    githubUrl: null,
    date: "Oct 2024",
    featured: false,
  },
  {
    id: 19,
    name: "Mapty",
    description: "Workout location tracker using Geolocation API.",
    image: "/mapty.png",
    tags: ["JavaScript", "Leaflet", "HTML"],
    type: "Web App",
    liveUrl: "https://mapty-rehan.netlify.app",
    githubUrl: null,
    date: "Sep 2024",
    featured: false,
  },
  {
    id: 20,
    name: "Bankist 2",
    description: "A follow-up to Bankist with extended features.",
    image: "/bankist-project.png",
    tags: ["JavaScript", "CSS", "DOM"],
    type: "Demo App",
    liveUrl: "https://bankist2-rehan.netlify.app",
    githubUrl: null,
    date: "Sep 2024",
    featured: false,
  },
  {
    id: 21,
    name: "Konto POS Admin",
    description:
      "A full-featured POS admin dashboard with modern UI components.",
    image: "/POS-project.png",
    tags: ["Next.js", "Shadcn UI", "Tailwind"],
    type: "Admin Panel",
    liveUrl: "https://konto-pos-admin.vercel.app",
    githubUrl: null,
    date: "Aug 2024",
    featured: true,
  },
  {
    id: 22,
    name: "Chattick Admin",
    description:
      "Admin panel for managing users, messages, and analytics of a chat app.",
    image: "/chattick-admin-project.png",
    tags: ["Next.js", "Prisma", "Tailwind"],
    type: "Admin Panel",
    liveUrl: "https://chattickadmin.vercel.app/auth/login",
    githubUrl: null,
    date: "Aug 2024",
    featured: false,
  },
  {
    id: 23,
    name: "Otoobe Admin",
    description:
      "An admin panel for Otoobe, an event management app. Admins can create, update, and manage events, as well as monitor platform statistics.",
    image: "/otoobe-admin.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    type: "Admin Panel",
    liveUrl: "https://otoobe-admin.vercel.app",
    githubUrl: null,
    date: "July 2024",
    featured: false,
  },
  {
    id: 24,
    name: "Otoobe",
    description:
      "The client-side interface of the Otoobe platform where users can browse, search, and filter events, buy tickets, and create their own events after signing up.",
    image: "/otoobe-project.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    type: "Web App",
    liveUrl: "https://otoobe.vercel.app",
    githubUrl: null,
    date: "July 2024",
    featured: false,
  },
  {
    id: 25,
    name: "Spiaggia Bonetti",
    description:
      "An admin panel for a beach and hotel booking platform. Admins can manage sunbed layouts, handle bookings with full CRUD functionality, view user stats, and switch between Italian and English.",
    image: "/beach-project.png",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    type: "Admin Panel",
    liveUrl: "https://spiaggia-bonetti.vercel.app",
    githubUrl: null,
    date: "July 2024",
    featured: true,
  },
  {
    id: 26,
    name: "Deliver Me",
    description:
      "Delivery and courier service dashboard with real-time tracking features.",
    image: "/deliverme-project.png",
    tags: ["Next.js", "Tailwind", "Shadcn UI"],
    type: "Admin Panel",
    liveUrl: "https://deliver-me-beta.vercel.app",
    githubUrl: null,
    date: "Apr 2025",
    featured: false,
  },

  {
    id: 28,
    name: "Leklok",
    description:
      "A minimalist portfolio or startup landing with clean transitions.",
    image: "/leklok-project.png",
    tags: ["Next.js", "Nest js", "API integration"],
    type: "Landing Page",
    liveUrl: "https://leklok.vercel.app",
    githubUrl: null,
    date: "May 2025",
    featured: false,
  },
  {
    id: 29,
    name: "Take Kare",
    description:
      "Admin panel for takekare app where admin can manage stats of app",
    image: "/takekare-project.png",
    tags: ["React", "Tailwind", "Accessibility"],
    type: "Web App",
    liveUrl: "https://take-kare.vercel.app",
    githubUrl: null,
    date: "Feb 2025",
    featured: false,
  },
  {
    id: 30,
    name: "Woove",
    description: "Admin panel of fitness and tracking app for user activity",
    image: "/woovy-project.png",
    tags: ["React", "Next.js", "Tailwind"],
    type: "Web App",
    liveUrl: "https://woove.vercel.app",
    githubUrl: null,
    date: "Sep 2024",
    featured: true,
  },
  {
    id: 32,
    name: "Framer Website",
    description: "A design-forward dark theme modern ui based website.",
    image: "/framer-project.png",
    tags: ["Framer", "Design", "Animation"],
    type: "Portfolio",
    liveUrl: "https://framerwebsite-blush.vercel.app",
    githubUrl: null,
    date: "Mar 2024",
    featured: false,
  },
];

const projectTypes = [
  "All",
  "Landing Page",
  "SaaS App",
  "E-commerce",
  "Web App",
  "Mobile App",
  "API",
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const projectsPerPage = 9;

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    mockProjects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return mockProjects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesType =
        selectedType === "All" || project.type === selectedType;

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => project.tags.includes(tag));

      return matchesSearch && matchesType && matchesTags;
    });
  }, [searchTerm, selectedType, selectedTags]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  // Reset page when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedType, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <AnimatedCursor
        innerSize={8}
        outerSize={40}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={2.5}
        outerStyle={{
          border: "2px solid rgba(26, 35, 62, 0.5)", // Updated border color
        }}
        innerStyle={{
          backgroundColor: "white", // Inner cursor color
        }}
        clickables={["a", "button", ".link"]}
      />
      <div className="relative z-10 container mx-auto px-4 py-12 pb-40 ">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl  font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-100 to-gray-400 mb-5">
            Featured Projects
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
            A curated collection of standout work — blending functionality,
            design, and performance.
          </p>
        </div>

        {/* Search and Filters */}
        <div
          className="mb-12 space-y-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Filter Toggle */}
          <div className="text-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-8 py-3 bg-white/5 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
            >
              <Filter size={20} className="inline mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              {/* Project Types */}
              <div className="mb-8">
                <h3 className="text-white/90 font-medium mb-4 text-lg">
                  Project Type
                </h3>
                <div className="flex flex-wrap gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-5 py-2.5 rounded-xl transition-all duration-300 ${
                        selectedType === type
                          ? "bg-white/20 text-white"
                          : "bg-white/5 text-white/70 hover:bg-white/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-white/90 font-medium mb-4 text-lg">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 ${
                        selectedTags.includes(tag)
                          ? "bg-white/20 text-white"
                          : "bg-white/5 text-white/70 hover:bg-white/10"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay="200"
              className={`group relative rounded-2xl border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-gradient-to-br from-white/80 to-white/60 border-white/30 shadow-2xl`}
              style={{
                animationDelay: `${index * 120} ms`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <Image
                  src={project.image || `https://i.pravatar.cc/${index + 500}`}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md bg-gradient-to-r }`}
                  >
                    {project.type}
                  </span>
                </div>

                {/* Date */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/30 text-white backdrop-blur-md border border-white/20">
                    {project.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Project Name */}
                <h3
                  className={`text-xl font-semibold mb-3 text-black

                  `}
                >
                  {project.name}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-4  text-gray-700
                  `}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded-md text-xs bg-gray-200 text-gray-700
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span
                      className={`px-2 py-1 rounded-md text-xs bg-gray-200 text-gray-700 `}
                    >
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-slate-800 text-white hover:bg-slate-700 `}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center p-2 rounded-lg transition-all duration-300 bg-gray-200 text-gray-700 hover:bg-gray-300 `}
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div
          className="text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-white/70">
            Showing {paginatedProjects.length} of {filteredProjects.length}{" "}
            projects
          </p>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div
            className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-3 sm:gap-4 mt-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm sm:text-base backdrop-blur-md hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft size={16} />
              <span className="hidden xs:inline">Previous</span>
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide px-1 max-w-full sm:max-w-none">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-[36px] h-9 sm:w-10 sm:h-10 rounded-md text-sm sm:text-base font-medium transition-all duration-300 ${
                      currentPage === page
                        ? "bg-[#203a43] border-[#2c5364] text-white border"
                        : "bg-[#0f2027] border border-[#2c5364] text-white hover:bg-[#203a43]"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm sm:text-base backdrop-blur-md hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <span className="hidden xs:inline">Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No projects found
            </h3>
            <p className="text-white/70 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedType("All");
                setSelectedTags([]);
              }}
              className="px-6 py-3 bg-[#2c5364] border border-white/50 rounded-lg text-white hover:bg-[#2a4957] transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
