"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".min-h-screen");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsSticky(window.scrollY >= heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`${
        isSticky ? "sticky" : "fixed"
      } top-0 left-0 w-full bg-white z-50 shadow-sm transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-black font-bold text-xl">
              Personal
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Project
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Me
              </button>
              <a
                href="/resume.pdf"
                className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
                download
              >
                Resume
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 bg-black/70 bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-4 py-6 space-y-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-black hover:text-gray-600 block w-full text-left px-3 py-3 rounded-md text-base font-medium hover:bg-gray-100"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-black hover:text-gray-600 block w-full text-left px-3 py-3 rounded-md text-base font-medium hover:bg-gray-100"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-black hover:text-gray-600 block w-full text-left px-3 py-3 rounded-md text-base font-medium hover:bg-gray-100"
            >
              Project
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black hover:text-gray-600 block w-full text-left px-3 py-3 rounded-md text-base font-medium hover:bg-gray-100"
            >
              Contact Me
            </button>
            <a
              href="/resume.pdf"
              className="bg-black text-white block w-full text-center px-3 py-3 rounded-md text-base font-medium hover:bg-gray-800"
              download
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
