import { Globe, MapPin, Calendar, Briefcase } from "lucide-react";
import Heading from "./heading";

const ExperienceCard = ({ title, location, date, role, tasks, icon }) => (
  <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm relative overflow-hidden">
    <div className="absolute right-0 top-0 w-40 h-40 bg-blue-100 rounded-full -mr-20 -mt-20"></div>
    <div className="space-y-6 relative z-10">
      <div className="flex items-center gap-2 text-gray-700 font-medium text-xl">
        {icon && <icon className="text-blue-500" size={24} />}
        <span>{title}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-500">
        <MapPin size={20} />
        <span>{location}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-500">
        <Calendar size={20} />
        <span>{date}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-700 font-medium">
        <Briefcase size={20} />
        <span>{role}</span>
      </div>
      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="min-w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
            <span className="text-gray-600">{task}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ExperienceSection() {
  return (
    <div className="bg-blue-50 py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <Heading
          title="Professional Experience"
          subtitle="A showcase of my career journey, impactful roles, and key contributions."
        />
        <ExperienceCard
          title="Freelance"
          location="Remote"
          date="2024 - Present"
          role="MERN Stack Developer"
          tasks={[
            "Developing custom web applications for international clients",
            "Building responsive and scalable frontend interfaces with React",
          ]}
          icon={Globe}
        />
        <ExperienceCard
          title="Salaba Fasteners"
          location="Saudi Arabia (Hybrid)"
          date="2024 - Present"
          role="MERN Stack Developer"
          tasks={[
            "Developed full-fledged ERP system using MERN stack",
            "Designed and implemented RESTful APIs",
            "Created responsive interfaces with React.js and Redux",
          ]}
        />
      </div>
    </div>
  );
}
