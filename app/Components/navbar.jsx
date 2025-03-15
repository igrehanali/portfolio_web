"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const menuItems = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Project" },
  { id: "contact", label: "Contact Me" },
];

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

  const NavButton = ({ id, label, className = "" }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`text-black hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105 cursor-pointer ${className}`}
    >
      {label}
    </button>
  );

  return (
    <nav
      className={`${isSticky ? "sticky shadow-lg" : "fixed"} top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-black font-bold text-xl hover:text-gray-600 transition-colors duration-300"
            >
              Personal
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <NavButton key={item.id} {...item} />
              ))}
              <a
                href="/resume.pdf"
                className="bg-[#1a237e] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform cursor-pointer"
                download
              >
                Resume
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-600 hover:bg-gray-100 transition-all duration-300 focus:outline-none"
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
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 h-screen ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed inset-y-0 left-0 w-72 bg-white shadow-lg transform transition-all duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 space-y-8">
            {menuItems.map((item) => (
              <NavButton
                key={item.id}
                {...item}
                className="w-full text-left py-2 text-base hover:bg-gray-100 rounded-lg"
              />
            ))}
            <a
              href="/resume.pdf"
              className="bg-[#1a237e] text-white block w-full text-center p-2 w-[30vw] rounded-lg text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform mt-6"
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
