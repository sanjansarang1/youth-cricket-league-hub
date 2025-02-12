
import { Trophy } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";

const Teams = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">Our Teams</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Meet the talented teams competing in the Youth Cricket Premier League.
          </p>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-16">
            {teams.map((group, groupIndex) => (
              <div key={groupIndex} className="w-full max-w-3xl">
                <DisplayCards
                  cards={group.map((team, index) => ({
                    icon: <Trophy className="size-4 text-yellow-300" />,
                    title: team.name,
                    description: team.district,
                    date: `Zone: ${team.zone}`,
                    iconClassName: "text-yellow-500",
                    titleClassName: "text-primary",
                    className: getCardStyle(index),
                  }))}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get card styles based on position
const getCardStyle = (index: number) => {
  const styles = [
    "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  ];
  return styles[index] || styles[0];
};

// Group teams into sets of 3 for the stacked card effect
const teams = [
  [
    {
      name: "Texas Royals",
      logo: "/lovable-uploads/royals_logo.png",
      district: "North Houston District",
      zone: "TWHS and TWCP",
    },
    {
      name: "Houston Titans",
      logo: "/lovable-uploads/titans_logo.jpg",
      district: "North Houston District",
      zone: "Brigeland HS",
    },
    {
      name: "Seven Lakes Cricket Club",
      logo: "/lovable-uploads/seven_logo.jpg",
      district: "South Houston Division",
      zone: "Seven Lakes High School",
    },
  ],
];

export default Teams;
