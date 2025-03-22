export default function AboutMeSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-4 bg-white max-w-6xl  mx-auto w-full ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-start">
          {/* Left Column - Illustration */}
          <div className="flex justify-center">
            <img
              src="/about.png"
              alt="Developer Illustration"
              className="w-full max-w-md"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl text-black font-light mb-12">
              About <span className="text-[#1a237e] font-bold">Me</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              I’m a passionate frontend developer specializing in React.js and
              Next.js,. I love turning ideas into interactive, high-performance
              digital experiences. From crafting pixel-perfect UI designs to
              ensuring smooth user interactions, I focus on delivering clean,
              maintainable, and efficient code.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I started my web development journey a few years ago and have been
              continuously learning and evolving ever since. Over time, I’ve
              worked on scalable web applications, admin panels, and SaaS
              platforms, using modern technologies like TypeScript, Tailwind
              CSS, Firebase, and Supabase. My goal is to build fast, accessible,
              and user-friendly applications that make an impact.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">
                Bachelor's Degree in Computer Science
              </p>
              <p className="text-gray-600">
                <strong>IUB</strong> Islamia University of Bahawalpur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
