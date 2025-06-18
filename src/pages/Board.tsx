import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

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

      {/* Board Members Hierarchy */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Co-Chairman Level */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-primary">Executive Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {boardMembers
                .filter(member => member.role.includes("Co-Chairman"))
                .map((member, index) => (
                  <BoardMemberCard key={index} member={member} featured={true} />
                ))}
            </div>
          </div>

          {/* Directors Level */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-primary">Directors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {boardMembers
                .filter(member => 
                  member.role.includes("Director") && !member.role.includes("Co-Chairman"))
                .map((member, index) => (
                  <BoardMemberCard key={index} member={member} />
                ))}
            </div>
          </div>

          {/* Other Team Members */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-8 text-primary">Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {boardMembers
                .filter(member => 
                  !member.role.includes("Director") && !member.role.includes("Co-Chairman"))
                .map((member, index) => (
                  <BoardMemberCard key={index} member={member} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// BoardMemberCard component for consistent display
const BoardMemberCard = ({ member, featured = false }) => {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${featured ? 'border-primary border-2' : ''}`}>
      <div className="h-48 bg-gray-100 flex justify-center items-center">
        <Avatar className="h-32 w-32">
          <AvatarImage src={member.photo} alt={`${member.name} Photo`} className="object-cover" />
          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
      </div>
      <CardHeader className="py-4">
        <CardTitle className={`text-center ${featured ? 'text-xl' : 'text-lg'}`}>{member.name}</CardTitle>
      </CardHeader>
      <CardContent className="text-center pb-6">
        <p className={`text-gray-600 ${featured ? 'font-semibold' : ''}`}>{member.role}</p>
      </CardContent>
    </Card>
  );
};

const boardMembers = [
  {
    name: "Sanjan Sarang",
    role: "Co-Chairman",
    photo: "/lovable-uploads/sanjan.png",
  },
  {
    name: "Siddharth Jain",
    role: "Co-Chairman",
    photo: "/lovable-uploads/sid.png",
  },
  {
    name: "Aryan Khandelwal",
    role: "Director of Competition",
    photo: "/lovable-uploads/aryan.png",
  },
  {
    name: "Krushal Panda",
    role: "Director of Outreach",
    photo: "/lovable-uploads/krushal.png",
  },
  {
    name: "Satvik Maggavi",
    role: "Director of Fair Play and Equipment",
    photo: "/lovable-uploads/satvik.png",
  },
  {
    name: "Uvanuv Vishnu",
    role: "Outreach Team",
    photo: "/lovable-uploads/uvanuv.png",
  },
  {
    name: "Aarish Handa",
    role: "Outreach Team",
    photo: "/lovable-uploads/aarish.png",
  },
  {
    name: "Saikarthik Swaminathan",
    role: "Outreach Team",
    photo: "/lovable-uploads/sai.png",
  },
  {
    name: "Deva Harsha Tanneru",
    role: "North Houston Division Director",
    photo: "/lovable-uploads/deva.png",
  },
  {
    name: "Chinmay Shastri",
    role: "South Houston Division Director",
    photo: "/lovable-uploads/chinmay.png",
  },
];

export default Board;
