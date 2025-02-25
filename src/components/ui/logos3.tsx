
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: number | string;
  name: string;
  src: string;
  href: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos: Logo[];
  className?: string;
}

const Logos3 = ({
  heading,
  logos,
  className,
}: Logos3Props) => {
  return (
    <section className={`w-full ${className}`}>
      {heading && (
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold lg:text-4xl">{heading}</h2>
        </div>
      )}
      <div className="relative w-full flex items-center justify-center">
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
              speed: 0.5,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/2 justify-center pl-0"
              >
                <div className="mx-4 flex items-center justify-center h-24">
                  <a href={logo.href} target="_blank" rel="noopener noreferrer">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-16 w-auto"
                    />
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  );
};

export { Logos3 };

