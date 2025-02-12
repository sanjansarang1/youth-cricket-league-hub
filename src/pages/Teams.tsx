
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
          <div className="flex flex-wrap justify-center gap-8">
            {teams.map((team, index) => (
              <DisplayCards
                key={index}
                cards={[{
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
                  titleClassName: "text-primary"
                }]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Teams data
const teams = [
  {
    name: "Texas Royals",
    logo: "/lovable-uploads/royals_logo.png",
    district: "North Houston District",
    zone: "TWHS and TWCP"
  },
  {
    name: "Houston Titans",
    logo: "/lovable-uploads/titans_logo.jpg",
    district: "North Houston District",
    zone: "Brigeland HS"
  },
  {
    name: "Seven Lakes Cricket Club",
    logo: "/lovable-uploads/seven_logo.jpg",
    district: "South Houston Division",
    zone: "Seven Lakes High School"
  }
];

export default Teams;
