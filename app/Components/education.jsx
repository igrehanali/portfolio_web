import { GraduationCap, Calendar, Trophy } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-purple-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Education</h2>

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <div className="space-y-6">
            {/* Degree */}
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 mt-1 text-gray-600" />
              <div>
                <h3 className="font-semibold text-lg">
                  Bachelor's Degree in Computer Science
                </h3>
                <p className="text-gray-600">GC University Faisalabad</p>
              </div>
            </div>

            {/* Years */}
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-600" />
              <p className="text-gray-600">2018 - 2022</p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-gray-600" />
                <h4 className="font-medium">Key Achievements:</h4>
              </div>
              <ul className="list-disc list-inside ml-8 space-y-2 text-gray-600">
                <li>Graduated with honors</li>
                <li>
                  Specialized in Web Technologies and Artificial Intelligence
                </li>
                <li>
                  Completed capstone project on 'Intelligent Web Application for
                  Healthcare'
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
