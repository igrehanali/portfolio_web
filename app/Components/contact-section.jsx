"use client";

import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-16 lg:py-24 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl text-gray-900 mb-6 font-semibold">
          Let's <span className="text-[#2c5364] font-extrabold">Connect</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          I'm actively seeking full-time opportunities where I can contribute my
          front-end skills and passion for UI/UX to innovative teams. Feel free
          to get in touch!
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-lg mx-auto grid grid-cols-1 gap-6 text-center">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-lg rounded-xl flex items-center justify-center space-x-4 border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <item.icon className="w-6 h-6 text-[#203a43]" />
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-800 hover:text-[#2c5364] font-medium"
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-10 flex justify-center gap-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-gray-600 hover:bg-[#203a43] hover:text-white transition-all duration-200"
          >
            <social.icon className="w-6 h-6" />
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
