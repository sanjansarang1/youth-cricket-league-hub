import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Board = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">Our Board</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Meet the leadership team guiding the Youth Cricket Premier League.
          </p>
        </div>
      </div>

      {/* Board Members Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow text-center"
              >
                <div className="h-48 bg-gray-200 flex justify-center items-center">
                  <img src={member.photo} alt={`${member.name} Photo`} className="h-full w-auto rounded-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const boardMembers = [
  {
    name: "Sanjan Sarang",
    role: "Co-Chairman",
    photo: "/lovable-uploads/sanjan.png",
  },
  // Add other board members here
];

export default Board;
