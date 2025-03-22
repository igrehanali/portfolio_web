import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PortfolioSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  const portfolioItems = [
    {
      id: "01",
      title: "Crypto Screener Application",
      description:
        "A powerful cryptocurrency tracking tool that provides real-time price updates, market trends, and technical indicators for traders. Built with Next.js and Tailwind CSS, it offers a sleek and intuitive UI for seamless navigation.",
      image: "https://i.pravatar.cc/500",
    },
    {
      id: "02",
      title: "Euphoria - Fashion Ecommerce Platform",
      description:
        "An elegant and modern e-commerce store specializing in apparel and accessories. Featuring a robust product catalog, secure checkout, and user-friendly filters to enhance the shopping experience. Developed using Next.js, Firebase, and Stripe for payments.",
      image: "https://i.pravatar.cc/481",
    },
    {
      id: "03",
      title: "Creative Design Blog",
      description:
        "A dynamic blogging platform for designers and creatives to showcase their work, share insights, and explore the latest design trends. Built with a headless CMS for easy content management and SEO optimization.",
      image: "https://i.pravatar.cc/480",
    },
  ];

  return (
    <section
      className="py-16 px-4 md:px-6 lg:px-8 bg-[#242F65] transition-all duration-700"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center font-light" data-aos="fade-down">
          <h2 className="text-4xl text-white font-light mb-12 transition-all duration-500 hover:scale-105">
            My <span className="text-white font-bold">Projects</span>
          </h2>
        </div>
        <div className="flex flex-col gap-16">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-gray-100/90 hover:to-gray-50/90 p-6 rounded-lg transform hover:-translate-y-1 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-easing="ease-out-cubic"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div
                  className={`relative overflow-hidden rounded-lg transform transition-all duration-700 ease-in-out group-hover:scale-102 shadow-lg before:absolute before:inset-0 before:bg-black/0 before:transition-all before:duration-700 group-hover:before:bg-black/5 ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 md:order-1 transition-all duration-500">
                  <div className="flex flex-col items-start gap-4">
                    <h3 className="text-4xl font-bold text-white transition-colors duration-500 ease-in-out group-hover:text-[#1a237e]">
                      {item.id}
                    </h3>
                    <h4 className="text-2xl font-semibold text-white transition-colors duration-500 ease-in-out group-hover:text-black">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-white transition-colors duration-500 ease-in-out group-hover:text-black">
                    {item.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 hover:bg-transparent group-hover:text-[#1a237e] transition-all duration-500 ease-in-out hover:translate-x-2"
                  >
                    <ArrowRight className="h-6 w-6 transform transition-all duration-500 ease-in-out group-hover:translate-x-2 text-white group-hover:text-[#1a237e]" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
