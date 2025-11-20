
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Newsletter {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  linkText?: string;
  linkUrl?: string;
  image: string;
}

const newsletters: Newsletter[] = [
  {
    id: "1",
    title: "Exposure in the Local Media",
    author: "Krushal Panda, Sanjan Sarang",
    date: "May 5, 2025",
    content:
      "The YCPL has recently launched an exciting campaign to broaden its public presence through partnerships with local news outlets. This initiative has already seen success with the publication of an article in the Woodlands Online, a leading news source in The Woodlands, Texas. Furthermore, YCPL's digital presence continues to grow. The Instagram page has seen significant engagement, with posts reaching over 1,300 accounts. These measurable gains demonstrate a commitment to expanding the reach and impact of youth cricket in the Houston area.",
    linkText: "Read the article on Woodlands Online",
    linkUrl: "https://www.woodlandsonline.com/npps/story.cfm?nppage=81431",
    image: "/lovable-uploads/65ace1b5-3c4d-44e2-bf86-1593875883a8.png",
  },
  {
    id: "2",
    title: "North Houston YCPL Development Workshop",
    author: "Krushal Panda, Sanjan Sarang",
    date: "June 20, 2025",
    content:
      "Last weekend’s player development workshop brought together YCPL athletes from across North Houston for a focused training camp designed to elevate their cricketing skills and deepen their engagement with the sport. This community-building event gave many of our newer players valuable insight into what it means to play cricket as part of a team, while introducing them to different formats of the game. Participants trained with both leather balls and tape balls in guided sessions that emphasized safety, technique, and confidence. Throughout the workshop, we continued to nurture talent and strengthen the growing YCPL community. Player Shown: Arjun Paripelli",
    image: "/lovable-uploads/arjunhardball.jpg",
  },
  {
    id: "3",
    title: "Inaugural Team-Building Day",
    author: "Krushal Panda, Sanjan Sarang",
    date: "October 8, 2024",
    content:
      "This weekend, YCPL players kicked off a team-building day as athletes from across Houston gathered at our main ground in The Woodlands to focus on endurance and game awareness. Before practice began, the YCPL board met to discuss upcoming growth initiatives, setting the tone for a productive and forward-looking session. Players then moved into group drills, including sprint relays, catching circuits, and footwork exercises designed to improve match-day coordination and overall conditioning. Between sessions, new and returning players connected with teammates from all over Houston, strengthening the camaraderie that makes the YCPL community so unique. More development days are already in the works as we continue to elevate youth cricket throughout Houston.",
    image: "/lovable-uploads/camp.jpg",
  },
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
              <p className={expandedId === newsletter.id ? "" : "line-clamp-6"}>
                {newsletter.content}
              </p>
              {newsletter.linkUrl && (
                <a
                  href={newsletter.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mt-2 block"
                >
                  {newsletter.linkText}
                </a>
              )}
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
