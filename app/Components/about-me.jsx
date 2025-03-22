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
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">
                Bachelor's Degree in Computer Science
              </p>
              <p className="text-gray-600">GC University Faisalabad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
