"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const experiences = [
    {
      role: "Sr. Frontend Developer",
      period: "Nov 2021 - Present",
      company: "Upwork",
      responsibilities: [
        "Developed scalable and maintainable frontend applications.",
        "Integrated modern UI/UX principles to enhance user experience.",
        "Collaborated with teams across different time zones.",
        "Optimized website performance for better user engagement.",
      ],
    },
    {
      role: "Team Lead",
      period: "Jul 2017 - Oct 2021",
      company: "Upwork",
      responsibilities: [
        "Managed a team of developers and ensured project deadlines.",
        "Reviewed and optimized code for best practices.",
        "Mentored junior developers in frontend and backend technologies.",
        "Led agile meetings and sprint planning sessions.",
      ],
    },
    {
      role: "Full Stack Developer",
      period: "Dec 2015 - May 2017",
      company: "Upwork",
      responsibilities: [
        "Built and deployed full-stack applications using modern frameworks.",
        "Implemented RESTful APIs and database structures.",
        "Designed intuitive and user-friendly interfaces.",
      ],
    },
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-8">
          <span
            className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold"
            data-aos="fade-up"
          >
            Experience
          </span>
        </div>

        <p
          className="text-center mb-12 text-gray-600"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Here is a quick summary of my professional journey:
        </p>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg  border border-gray-200 transition-all duration-300 transition-duration-300 ease-out"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <div className="flex items-center gap-4 mb-2 sm:mb-0">
                  <div className="w-[100px]">
                    <svg viewBox="0 0 102 32" className="h-8 w-24">
                      <path
                        d="M70.63 4.88c-.98-.53-2.19-.82-3.54-.82s-2.56.29-3.54.82c-.93.5-1.68 1.13-2.18 1.86v-2.3h-3.76v17.55h3.76v-9.54c0-1.45.4-2.64 1.19-3.52.79-.89 1.8-1.33 3.05-1.33 1.25 0 2.26.44 3.05 1.33.79.88 1.19 2.07 1.19 3.52v9.54h3.76v-9.54c0-2.25-.66-4.09-1.98-5.53-.98-1.07-2.19-1.71-3.54-1.86zM84.05 4.88c-.98-.53-2.19-.82-3.54-.82s-2.56.29-3.54.82c-.93.5-1.68 1.13-2.18 1.86v-2.3H71.03v17.55h3.76v-9.54c0-1.45.4-2.64 1.19-3.52.79-.89 1.8-1.33 3.05-1.33 1.25 0 2.26.44 3.05 1.33.79.88 1.19 2.07 1.19 3.52v9.54h3.76v-9.54c0-2.25-.66-4.09-1.98-5.53-.98-1.07-2.19-1.71-3.54-1.86z"
                        fill="#14a800"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {experience.role}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {experience.company}
                    </p>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">
                  {experience.period}
                </span>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 text-sm leading-relaxed"
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
