// "use client";

// import { Button } from "@/components/ui/button";
// import { FaFacebook, FaReddit, FaDiscord } from "react-icons/fa";

// export default function ContactSection() {
//   return (
//     <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
//       <div className="max-w-6xl mx-auto">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
//           {/* Contact Form */}
//           <div className="space-y-6">
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="w-full px-4 py-3 rounded-sm border border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] outline-none transition-all"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-3 rounded-sm border border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] outline-none transition-all"
//               />
//               <input
//                 type="text"
//                 placeholder="Your website (If exists)"
//                 className="w-full px-4 py-3 rounded-sm border border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] outline-none transition-all"
//               />
//               <textarea
//                 placeholder="How can I help?*"
//                 rows="4"
//                 className="w-full px-4 py-3 rounded-sm border border-[#1a237e] focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] outline-none transition-all resize-none"
//               ></textarea>
//             </div>
//             <div className="flex items-center justify-start space-x-4">
//               <Button className="bg-[#1a237e] hover:bg-[#1a237e]/90 text-white px-8 py-5 transition-all transform hover:scale-105">
//                 Get In Touch
//               </Button>
//               <div>
//                 <div className="flex space-x-4">
//                   <a
//                     href="#"
//                     className="w-12 h-12  rounded-sm border border-[#1a237e] flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#1a237e] hover:border-[#1a237e] transition-all"
//                   >
//                     <FaFacebook className="w-5 h-5" />
//                   </a>
//                   <a
//                     href="#"
//                     className="w-12 h-12 rounded-sm border border-[#1a237e] flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#1a237e] hover:border-[#1a237e] transition-all"
//                   >
//                     <FaReddit className="w-5 h-5" />
//                   </a>
//                   <a
//                     href="#"
//                     className="w-12 h-12 rounded-sm border border-[#1a237e] flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#1a237e] hover:border-[#1a237e] transition-all"
//                   >
//                     <FaDiscord className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="lg:pl-12 ">
//             <div className="space-y-8">
//               <div>
//                 <div className=" mb-12">
//                   <h2 className="text-4xl font-bold mb-4">
//                     Let's <span className="text-[#1a237e]">talk</span> for
//                     <br />
//                     Something special
//                   </h2>
//                   <p className="text-gray-600 max-w-xl mx-auto">
//                     I seek to push the limits of creativity to create
//                     high-engaging, user-friendly, and memorable interactive
//                     experiences.
//                   </p>
//                 </div>

//                 <div className="space-y-4">
//                   <p className="flex items-center space-x-3">
//                     <span className="text-gray-600">Email:</span>
//                     <a
//                       href="mailto:Youremail@gmail.com"
//                       className="text-[#1a237e] hover:underline"
//                     >
//                       Youremail@gmail.com
//                     </a>
//                   </p>
//                   <p className="flex items-center space-x-3">
//                     <span className="text-gray-600">Phone:</span>
//                     <a
//                       href="tel:1234567890"
//                       className="text-[#1a237e] hover:underline"
//                     >
//                       1234567890
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
          Have a project in mind? Feel free to reach out!
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
