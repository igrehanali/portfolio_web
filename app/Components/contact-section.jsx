"use client";

import { Button } from "@/components/ui/button";
import { FaFacebook, FaReddit, FaDiscord } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="text-[#1a237e]">talk</span> for
            <br />
            Something special
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-sm border border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-sm border border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Your website (If exists)"
                className="w-full px-4 py-3 rounded-sm border border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] outline-none transition-all"
              />
              <textarea
                placeholder="How can I help?*"
                rows="4"
                className="w-full px-4 py-3 rounded-sm border border-[#1a237e] focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] outline-none transition-all resize-none"
              ></textarea>
            </div>
            <div className="flex items-center justify-start space-x-4">
              <Button className="bg-[#1a237e] hover:bg-[#1a237e]/90 text-white px-8 py-5 transition-all transform hover:scale-105">
                Get In Touch
              </Button>
              <div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12  rounded-sm border border-[#1a237e] flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#1a237e] hover:border-[#1a237e] transition-all"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-sm border border-[#1a237e] flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#1a237e] hover:border-[#1a237e] transition-all"
                  >
                    <FaReddit className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-sm border border-[#1a237e] flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#1a237e] hover:border-[#1a237e] transition-all"
                  >
                    <FaDiscord className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-12 ">
            <div className="space-y-8">
              <div>
                <div className=" mb-12">
                  <h2 className="text-4xl font-bold mb-4">
                    Let's <span className="text-[#1a237e]">talk</span> for
                    <br />
                    Something special
                  </h2>
                  <p className="text-gray-600 max-w-xl mx-auto">
                    I seek to push the limits of creativity to create
                    high-engaging, user-friendly, and memorable interactive
                    experiences.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="flex items-center space-x-3">
                    <span className="text-gray-600">Email:</span>
                    <a
                      href="mailto:Youremail@gmail.com"
                      className="text-[#1a237e] hover:underline"
                    >
                      Youremail@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span className="text-gray-600">Phone:</span>
                    <a
                      href="tel:1234567890"
                      className="text-[#1a237e] hover:underline"
                    >
                      1234567890
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
