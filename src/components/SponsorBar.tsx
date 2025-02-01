import { useEffect, useRef } from "react";

const SponsorBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  const sponsors = [
    {
      name: "Sponsor 1",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop&auto=format",
    },
    {
      name: "Sponsor 2",
      image: "https://images.unsplash.com/photo-1581091226825-a5a2a5aee158?w=200&h=100&fit=crop&auto=format",
    },
    {
      name: "Sponsor 3",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&auto=format",
    },
    // Duplicate sponsors to create continuous scroll effect
    {
      name: "Sponsor 1",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop&auto=format",
    },
    {
      name: "Sponsor 2",
      image: "https://images.unsplash.com/photo-1581091226825-a5a2a5aee158?w=200&h=100&fit=crop&auto=format",
    },
    {
      name: "Sponsor 3",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&auto=format",
    },
  ];

  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex space-x-8 overflow-x-hidden whitespace-nowrap px-4"
      >
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="h-12 w-32 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorBar;