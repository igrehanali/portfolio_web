import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: "01",
      title: "Crypto Screener Application",
      description:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1000",
      backgroundColor: "bg-[#1a237e]",
    },
    {
      id: "02",
      title: "Euphoria - Ecommerce (Apparels) Website Template",
      description:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. when an unknown printer took a galley of type and scrambled it to specimen book.",
      image:
        "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?q=80&w=1000",
      backgroundColor: "bg-[#1a237e]",
    },
    {
      id: "03",
      title: "Design Blog Website",
      description:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000",
      backgroundColor: "bg-[#1a237e]",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-[#1a237e]">Projects</span>
        </h2>
        <div className="flex flex-col gap-16">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group">
              {item.id === "01" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <h3 className="text-4xl font-bold">{item.id}</h3>
                      <h4 className="text-2xl font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                    <Button
                      variant="ghost"
                      className="p-0 hover:bg-transparent"
                    >
                      <ArrowRight className="h-6 w-6 text-[#1a237e] transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 order-2 md:order-1">
                    <div className="flex items-center gap-4">
                      <h3 className="text-4xl font-bold">{item.id}</h3>
                      <h4 className="text-2xl font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                    <Button
                      variant="ghost"
                      className="p-0 hover:bg-transparent"
                    >
                      <ArrowRight className="h-6 w-6 text-[#1a237e] transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="relative overflow-hidden rounded-lg order-1 md:order-2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
