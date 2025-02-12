
import DisplayCards from "@/components/ui/display-cards";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

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
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <DisplayCards
                      cards={group.map((team, index) => ({
                        icon: (
                          <img
                            src={team.logo}
                            alt={`${team.name} logo`}
                            className="size-4 object-contain"
                          />
                        ),
                        title: team.name,
                        description: team.district,
                        date: `Zone: ${team.zone}`,
                        iconClassName: "bg-white",
                        titleClassName: "text-primary",
                        className: getCardStyle(index),
                      }))}
                    />
                    <ChevronDown className="mx-auto mt-4 h-6 w-6 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4">
                    {group.map((team) => (
                      <div key={team.name} className="rounded-lg bg-accent p-6">
                        <div className="flex items-center gap-4">
                          <img src={team.logo} alt={`${team.name} logo`} className="h-16 w-16 object-contain" />
                          <div>
                            <h3 className="text-xl font-bold text-primary">{team.name}</h3>
                            <p className="text-muted-foreground">{team.district}</p>
                            <p className="text-sm text-muted-foreground">Zone: {team.zone}</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-semibold text-primary">Team Details</h4>
                          <p className="mt-2 text-muted-foreground">{team.description}</p>
                          <div className="mt-4">
                            <h4 className="font-semibold text-primary">Achievements</h4>
                            <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                              {team.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
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

// Teams data with expanded information
const teams = [
  [
    {
      name: "Texas Royals",
      logo: "/lovable-uploads/royals_logo.png",
      district: "North Houston District",
      zone: "TWHS and TWCP",
      description: "A powerhouse team known for their aggressive batting and disciplined bowling attack.",
      achievements: [
        "District Champions 2023",
        "Best Batting Average in League",
        "Most Sixes in a Season"
      ]
    },
    {
      name: "Houston Titans",
      logo: "/lovable-uploads/titans_logo.jpg",
      district: "North Houston District",
      zone: "Brigeland HS",
      description: "Rising stars with a focus on youth development and tactical excellence.",
      achievements: [
        "Runner-up District Championship 2023",
        "Best Fielding Team Award",
        "Most Improved Team 2023"
      ]
    },
    {
      name: "Seven Lakes Cricket Club",
      logo: "/lovable-uploads/seven_logo.jpg",
      district: "South Houston Division",
      zone: "Seven Lakes High School",
      description: "Known for their exceptional spin bowling and strong team spirit.",
      achievements: [
        "Division Champions 2023",
        "Best Economy Rate in League",
        "Most Wickets in a Season"
      ]
    }
  ],
  [
    {
      name: "Katy Warriors",
      logo: "/lovable-uploads/royals_logo.png",
      district: "West Houston Division",
      zone: "Katy Area",
      description: "A team built on strong fundamentals and exceptional teamwork.",
      achievements: [
        "West Division Champions 2023",
        "Best Team Spirit Award",
        "Most Partnerships Over 50"
      ]
    },
    {
      name: "Cypress Thunder",
      logo: "/lovable-uploads/titans_logo.jpg",
      district: "Northwest Houston",
      zone: "Cypress Region",
      description: "Known for their explosive batting and athletic fielding.",
      achievements: [
        "Highest Team Score in 2023",
        "Most Catches in a Season",
        "Best PowerPlay Performance"
      ]
    },
    {
      name: "Woodlands Eagles",
      logo: "/lovable-uploads/seven_logo.jpg",
      district: "North District",
      zone: "Woodlands Area",
      description: "A well-balanced side with strong all-rounders.",
      achievements: [
        "North District Champions",
        "Most All-Round Performance",
        "Best Net Run Rate"
      ]
    }
  ],
  [
    {
      name: "Sugar Land Knights",
      logo: "/lovable-uploads/royals_logo.png",
      district: "Southwest Division",
      zone: "Sugar Land Area",
      description: "Technical excellence combined with aggressive gameplay.",
      achievements: [
        "Southwest Champions 2023",
        "Most Centuries in Season",
        "Best Death Bowling"
      ]
    },
    {
      name: "Pearland Strikers",
      logo: "/lovable-uploads/titans_logo.jpg",
      district: "Southeast Division",
      zone: "Pearland Region",
      description: "Known for their strategic approach and consistency.",
      achievements: [
        "Most Consecutive Wins",
        "Best Bowling Figures",
        "Fair Play Award 2023"
      ]
    },
    {
      name: "Memorial Hurricanes",
      logo: "/lovable-uploads/seven_logo.jpg",
      district: "Central Houston",
      zone: "Memorial Area",
      description: "A dynamic team with a perfect blend of youth and experience.",
      achievements: [
        "Central Division Winners",
        "Most Improved Batting",
        "Best Team Average"
      ]
    }
  ]
];

export default Teams;
