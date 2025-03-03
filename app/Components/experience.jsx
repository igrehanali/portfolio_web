import { Globe, MapPin, Calendar, Briefcase } from "lucide-react";
import Heading from "./heading";

export default function ExperienceSection() {
  return (
    <div className="bg-blue-50 py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <Heading
          title="Professional Experience"
          subtitle="A showcase of my career journey, impactful roles, and key contributions."
        />

        {/* Freelance Experience Card */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 w-40 h-40 bg-blue-100 rounded-full -mr-20 -mt-20"></div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-2 text-gray-700 font-medium text-xl">
              <Globe className="text-blue-500" size={24} />
              <span>Freelance</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={20} />
              <span>Remote</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Calendar size={20} />
              <span>2024 - Present</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Briefcase size={20} />
              <span>MERN Stack Developer</span>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="min-w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <span className="text-gray-600">
                  Developing custom web applications for international clients
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <span className="text-gray-600">
                  Building responsive and scalable frontend interfaces with
                  React
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Salaba Fasteners Experience Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 w-40 h-40 bg-blue-100 rounded-full -mr-20 -mt-20"></div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-2 text-gray-700 font-medium text-xl">
              <span>Salaba Fasteners</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={20} />
              <span>Saudi Arabia (Hybrid)</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Calendar size={20} />
              <span>2024 - Present</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Briefcase size={20} />
              <span>MERN Stack Developer</span>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="min-w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <span className="text-gray-600">
                  Developed full-fledged ERP system using MERN stack
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <span className="text-gray-600">
                  Designed and implemented RESTful APIs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <span className="text-gray-600">
                  Created responsive interfaces with React.js and Redux
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
