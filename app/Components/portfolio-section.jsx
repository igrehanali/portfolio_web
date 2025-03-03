import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "Re-Design For WEb designer Portfolio",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      tags: ["User Research", "UX Design"],
      image: "/placeholder.svg?height=600&width=400",
      backgroundColor: "bg-sky-50",
    },
    {
      id: 2,
      title: "Re-Design For WEb designer Portfolio",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      tags: ["User Research", "UX Design"],
      image: "/placeholder.svg?height=600&width=400",
      backgroundColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>

      <div className="flex flex-col gap-8">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className={`${item.backgroundColor} rounded-3xl overflow-hidden p-6 md:p-8 lg:p-10`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-white text-slate-700 hover:bg-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <p className="text-slate-700">{item.description}</p>

                <Button
                  variant="default"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
                >
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt="Portfolio preview"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />

                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <span className="text-indigo-600 font-bold">W</span>
                    </div>
                    <div className="bg-black rounded-full p-2 shadow-md">
                      <span className="text-white font-bold">F</span>
                    </div>
                    <div className="bg-orange-500 rounded-full p-2 shadow-md">
                      <span className="text-white font-bold">D</span>
                    </div>
                    <div className="bg-blue-500 rounded-full p-2 shadow-md">
                      <span className="text-white font-bold">L</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
