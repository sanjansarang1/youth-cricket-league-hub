
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Newsletter {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
}

const newsletters: Newsletter[] = [
  {
    id: "1",
    title: "Exposure in the Local Media",
    author: "Krushal Panda, Sanjan Sarang",
    date: "May 5, 2025",
    content: "The YCPL has recently launched an exciting campaign to broaden its public presence through partnerships with local news outlets. This initiative has already seen success with the publication of an article in the Woodlands Online, a leading news source in The Woodlands, Texas. Furthermore, YCPL's digital presence continues to grow. The Instagram page has seen significant engagement, with posts reaching over 1,300 accounts. These measurable gains demonstrate a commitment to expanding the reach and impact of youth cricket in the Houston area. ",
    image: "/lovable-uploads/65ace1b5-3c4d-44e2-bf86-1593875883a8.png"
  },
  {
    id: "2",
    title: "Player Development Workshop",
    author: "Coach Patel",
    date: "April 20, 2025",
    content: "Last weekend's player development workshop was a huge success with over 50 young cricketers in attendance. Professional coaches from around the region led sessions on batting technique, bowling strategy, and fielding skills. The workshop concluded with a Q&A session where players could ask advice about training regimens and match preparation. We're planning additional workshops throughout the summer - stay tuned for dates!",
    image: "/lovable-uploads/ballers.jpg"
  },
  {
    id: "3",
    title: "Community Outreach Program",
    author: "Outreach Committee",
    date: "April 10, 2025",
    content: "Our community outreach initiative continues to grow, with more schools adopting our cricket curriculum for physical education classes. The YCPL has donated equipment to five local elementary schools this past month, and our volunteer coaches have been visiting weekly to introduce students to the game. We've seen tremendous enthusiasm from students who are experiencing cricket for the first time!",
    image: "/lovable-uploads/tmhs.jpg"
  }
];

const Newsletters = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">YCPL Newsletters</h1>
      <p className="text-lg text-gray-600 mb-10 text-center">
        Stay updated with the latest news, events, and stories from the Youth Cricket Premier League
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsletters.map((newsletter) => (
          <Card key={newsletter.id} className="overflow-hidden h-full flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">{newsletter.title}</CardTitle>
              <CardDescription>
                By {newsletter.author} | {newsletter.date}
              </CardDescription>
            </CardHeader>
            
            <AspectRatio ratio={16 / 9} className="bg-gray-100 mb-2">
              <img
                src={newsletter.image}
                alt={newsletter.title}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            
            <CardContent className="flex-grow">
              <p className={expandedId === newsletter.id ? "" : "line-clamp-4"}>
                {newsletter.content}
              </p>
            </CardContent>
            
            <CardFooter className="pt-2 flex justify-end">
              <button
                onClick={() => toggleExpand(newsletter.id)}
                className="text-primary font-medium hover:underline"
              >
                {expandedId === newsletter.id ? "Read Less" : "Read More"}
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Newsletters;
