
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Our Partners",
  logos = [
    {
      id: "logo-1",
      description: "YCPL Partner 1",
      image: "/lovable-uploads/royals_logo.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-2",
      description: "YCPL Partner 2",
      image: "/lovable-uploads/titans_logo.jpg",
      className: "h-16 w-auto",
    },
    {
      id: "logo-3",
      description: "YCPL Partner 3",
      image: "/lovable-uploads/seven_logo.jpg",
      className: "h-16 w-auto",
    },
    // Duplicate logos for continuous scrolling effect
    {
      id: "logo-4",
      description: "YCPL Partner 1",
      image: "/lovable-uploads/royals_logo.png",
      className: "h-16 w-auto",
    },
    {
      id: "logo-5",
      description: "YCPL Partner 2",
      image: "/lovable-uploads/titans_logo.jpg",
      className: "h-16 w-auto",
    },
    {
      id: "logo-6",
      description: "YCPL Partner 3",
      image: "/lovable-uploads/seven_logo.jpg",
      className: "h-16 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-12 bg-white">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl text-primary">
          {heading}
        </h2>
      </div>
      <div className="pt-10">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{
              loop: true,
              align: "start",
              containScroll: false,
              dragFree: true,
            }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                speed: 0.5, // Slower speed for smoother scrolling
                stopOnInteraction: false, // Continue scrolling after user interaction
                stopOnMouseEnter: true, // Pause on hover
              }),
            ]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/4 justify-center items-center pl-0"
                >
                  <div className="mx-4 flex items-center justify-center h-24">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
