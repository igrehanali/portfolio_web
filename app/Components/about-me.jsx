export default function AboutMeSection() {
  const skills = [
    {
      title: "Product Design",
      description:
        "I can plan and execute end-to-digital products and solve for user interface problems.",
    },
    {
      title: "UI/UX Design",
      description:
        "Delivering strategy and experience through research, wireframes, and user-centered solutions.",
    },
    {
      title: "Interaction Design",
      description:
        "I can create patterns or flows of digital interfaces to make them intuitive.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-12 relative">
          About Me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-400 mt-2"></span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Experience Counter */}
          <div className="space-y-10">
            <h3 className="text-9xl font-bold ">3+</h3>
            <div className="text-gray-700">
              <p className=" text-2xl font-bold">Years</p>
              <p className="text-2xl font-bold">Working</p>
              <p className="text-2xl font-bold">Experience</p>
            </div>
          </div>

          {/* About Text */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              I Am Zaki Ullah. I Am A Product Designer, And I Am Very Passionate
              And Dedicated To My Work. With 3 Years' Experience As A
              Professional Product Designer, I Have Acquired The Skills And
              Knowledge Necessary To Make Your Project Success.
            </p>
            <p className="text-gray-700">
              <a
                href="mailto:zakidesigner01@gmail.com"
                className="text-gray-700 hover:text-gray-900"
              >
                zakidesigner01@gmail.com
              </a>
            </p>
            {/* Skills Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                      <span className="text-gray-500 text-xl">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-3">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function AboutMeSection() {
//   const skills = [
//     {
//       title: "Product Design",
//       description:
//         "I can plan and execute end-to-digital products and solve for user interface problems.",
//     },
//     {
//       title: "UI/UX Design",
//       description:
//         "Delivering strategy and experience through research, wireframes, and user-centered solutions.",
//     },
//     {
//       title: "Interaction Design",
//       description:
//         "I can create patterns or flows of digital interfaces to make them intuitive.",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-2xl font-semibold text-center mb-12 relative">
//           About Me
//           <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-400 mt-2"></span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Experience Counter */}
//           <div className="space-y-2">
//             <h3 className="text-7xl font-bold">3+</h3>
//             <div className="text-gray-700">
//               <p className="font-medium">Years</p>
//               <p className="font-medium">Working</p>
//               <p className="font-medium">Experience</p>
//             </div>
//           </div>

//           {/* About Text */}
//           <div className="md:col-span-2 space-y-4">
//             <p className="text-gray-700 leading-relaxed">
//               I Am Zaki Ullah. I Am A Product Designer, And I Am Very Passionate
//               And Dedicated To My Work. With 3 Years' Experience As A
//               Professional Product Designer, I Have Acquired The Skills And
//               Knowledge Necessary To Make Your Project Success.
//             </p>
//             <p className="text-gray-700">
//               <a
//                 href="mailto:zakidesigner01@gmail.com"
//                 className="text-gray-700 hover:text-gray-900"
//               >
//                 zakidesigner01@gmail.com
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* Skills Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
//             >
//               <div className="mb-4">
//                 <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
//                   <span className="text-gray-500 text-xl">{index + 1}</span>
//                 </div>
//               </div>
//               <h3 className="text-lg font-medium mb-3">{skill.title}</h3>
//               <p className="text-gray-600 text-sm">{skill.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
