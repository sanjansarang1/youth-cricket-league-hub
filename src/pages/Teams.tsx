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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teams.map((team, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex justify-center items-center">
                  <img src={team.logo} alt={`${team.name} Logo`} className="h-full w-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
                  <p className="text-gray-600 mb-4">{team.district}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Zone: {team.zone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const teams = [
  {
    name: "Texas Royals",
    logo: "/lovable-uploads/royals_logo.png",
    district: "North Houston District",
    zone: "TWHS and TWCP",
  },
  {
    name: "Houston Titans",
    logo: "/lovable-uploads/titans_logo.png",
    district: "North Houston District",
    zone: "Brigeland HS",
  },
  {
    name: "Rising Stars",
    location: "West District",
    founded: "2017",
    ageGroup: "U-13",
  },
];

export default Teams;
