"use client";

import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-16 px-4 md:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl text-gray-900 mb-6 font-bold">
          Let's <span className="text-[#1a237e]">Connect</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
          I'm actively seeking full-time opportunities where I can contribute my
          front-end skills and passion for UI/UX to innovative teams. Feel free
          to get in touch!
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-lg mx-auto grid grid-cols-1 gap-6 text-center">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg flex items-center justify-center space-x-3 border border-gray-200"
          >
            <item.icon className="w-6 h-6 text-[#1a237e]" />
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-800 hover:underline"
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-8 flex justify-center gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-gray-600 hover:bg-[#1a237e] hover:text-white transition-all"
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </section>
  );
}

const contactDetails = [
  {
    icon: Mail,
    text: "webwithrehan@gmail.com",
    link: "mailto:webwithrehan@gmail.com",
  },
  { icon: Phone, text: "+92 3082444723", link: "tel:+923082444723" },
];

const socialLinks = [
  { icon: FaGithub, link: "https://github.com/igrehanali" },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/muhammad-rehan-ali-541277263/",
  },
  { icon: FaWhatsapp, link: "https://wa.me/923082444723" },
];
