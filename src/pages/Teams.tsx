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
    district: "North Houston Division",
    zone: "The Woodlands",
  },
  {
    name: "Houston Titans",
    logo: "/lovable-uploads/titans_logo.jpg",
    district: "North Houston Division",
    zone: "Katy Area",
  },
  {
    name: "Seven Lakes Cricket Club",
    logo: "/lovable-uploads/seven_logo.jpg",
    district: "South Houston Division",
    zone: "Seven Lakes High School",
  },
  {
    name: "Carnegie Vanguard Cricket Club",
    logo: "/lovable-uploads/cvhs.png",
    district: "South Houston Division",
    zone: "Carnegie Vanguard High School",
  },
  {
    name: "Southwest Warriors Cricket Club",
    logo: "/lovable-uploads/slmc.png",
    district: "South Houston Division",
    zone: "Sugarland & Missouri City",
  },
    {
    name: "Cy-Woods Cricket Club",
    logo: "/lovable-uploads/cywood.jpg",
    district: "North Houston Division",
    zone: "Cypress Woods High School",
  },
  {
    name: "Houston Ballers",
    logo: "/lovable-uploads/ballers.jpg",
    district: "North Houston Division",
    zone: "John Cooper School",
  },
  {
    name: "Bridgeland Cricket Club",
    logo: "/lovable-uploads/bridgeland.png",
    district: "North Houston Division",
    zone: "Bridgeland High School",
  },
    {
    name: "TWHS Cricket Club",
    logo: "/lovable-uploads/twhs.png",
    district: "North Houston Division",
    zone: "The Woodlands High School",
  },
  {
    name: "Tomball Memorial Cricket Club",
    logo: "/lovable-uploads/tmhs.jpg",
    district: "North Houston Division",
    zone: "Tomball Area",
  },
    {
    name: "Houston Gladiators Cricket Club",
    logo: "/lovable-uploads/hgc.png",
    district: "South Houston Division",
    zone: "Sugarland Area",
  },
    {
    name: "Cinco Ranch Cricket Club",
    logo: "/lovable-uploads/crhs.png",
    district: "South Houston Division",
    zone: "Cinco Ranch High School",
  },
    {
    name: "Tomball Cricket Club",
    logo: "/lovable-uploads/ths.png",
    district: "North Houston Division",
    zone: "Tomball High School",
  },
      {
    name: "Obra D. Tompkins HS Cricket Club",
    logo: "/lovable-uploads/oths.png",
    district: "South Houston Division",
    zone: "Obra D. Tompkins High School",
  },
  
];

export default Teams;
