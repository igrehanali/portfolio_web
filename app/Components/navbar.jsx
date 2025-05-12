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
      className={`text-white  px-5 py-3 rounded-lg text-base font-semibold transition-all duration-300 hover:bg-[#2c5364] hover:scale-105 cursor-pointer  hover:text-white ${className}`}
    >
      {label}
    </button>
  );

  return (
    <nav
      className={`${
        isSticky ? "sticky top-0 shadow-xl" : "fixed"
      } w-full bg-gradient-to-br from-[#0f2027] via-[#203a43]  to-[#2c5364] backdrop-blur-lg z-50 transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link
              href="#hero"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                scrollToSection("hero");
              }}
              className="text-white font-bold text-2xl md:text-3xl hover:text-[#2c5364] transition-all duration-300"
            >
              Rehan 🧑🏻‍💻
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavButton key={item.id} {...item} />
            ))}
            <a
              href="/Rehan-resume-web-dev.pdf"
              className="relative shadow-lg bg-[#2c5364] text-white px-6 py-4 rounded-lg text-sm font-medium transform transition-all duration-300 hover:bg-[#2c5364] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2c5364] cursor-pointer border border-white/10"
              download
            >
              Download Resume
              <span className="absolute -top-1 -right-1 mr-2 mt-2 flex items-center justify-center">
                <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-[#2c5364] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ffffff]"></span>
              </span>
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#2c5364] hover:bg-gray-100 transition-all duration-300 focus:outline-none"
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
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 h-screen ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed inset-y-0 left-0 w-72 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-lg transform transition-all duration-300 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 space-y-8">
            {menuItems.map((item) => (
              <NavButton
                key={item.id}
                {...item}
                className="w-full text-left py-3 text-lg font-medium hover:bg-[#2c5364] rounded-lg"
              />
            ))}
            <a
              href="/Rehan-resume-web-dev.pdf"
              className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white block text-center py-3 px-6 w-full rounded-lg text-lg font-medium hover:bg-[#2c5364] transition-all duration-300"
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
