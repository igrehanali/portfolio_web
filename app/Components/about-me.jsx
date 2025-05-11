export default function AboutMeSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-4 bg-white max-w-6xl mx-auto w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-gray-900 mb-12 text-center ">
          About <span className="text-[#2c5364] font-bold">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-start">
          {/* Left Column - Illustration */}
          <div className="flex justify-center">
            <img
              src="/about.png"
              alt="Frontend Developer"
              className="w-full max-w-md"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              I'm a <strong>results-driven frontend developer</strong>{" "}
              passionate about building{" "}
              <strong>scalable, high-performance web applications</strong>.
            </p>

            <h2 className="text-2xl font-semibold text-[#203a43]">
              Key Skills & Expertise:
            </h2>
            <ul className="  text-gray-600 leading-relaxed">
              <li>
                ✅ <strong>Frontend Development:</strong> Proficient in React,
                Next.js, and javaScript.
              </li>
              <li>
                ✅ <strong>State & Data Management:</strong> Experience with
                Redux, TanStack Query, and Firebase.
              </li>
              <li>
                ✅ <strong>Performance Optimization:</strong> Writing efficient,
                maintainable code for speed & accessibility.
              </li>
              <li>
                ✅ <strong>API Integration:</strong> Seamless integration of
                REST APIs and third-party services.
              </li>
              <li>
                ✅ <strong>Collaboration:</strong> Agile development, teamwork,
                and problem-solving in fast-paced environments.
              </li>
            </ul>

            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-2 text-[#203a43]">
                Education
              </h3>
              <p className="text-gray-600">
                <strong>Bachelor's Degree in Computer Science</strong>
              </p>
              <p className="text-gray-600">
                Islamia University of Bahawalpur (<strong>IUB</strong>)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
