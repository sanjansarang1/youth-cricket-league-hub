import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Board = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-12">Our Board Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {boardMembers.map((member, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const boardMembers = [
  {
    name: "John Smith",
    role: "President",
    description: "Dedicated to promoting youth cricket in Houston for over 10 years.",
  },
  {
    name: "Sarah Johnson",
    role: "Vice President",
    description: "Former cricket player with a passion for youth sports development.",
  },
  {
    name: "Michael Chen",
    role: "Secretary",
    description: "Experienced in organizing youth sports leagues and community events.",
  },
  {
    name: "David Patel",
    role: "Treasurer",
    description: "Financial expert ensuring sustainable growth of the league.",
  },
  {
    name: "Lisa Rodriguez",
    role: "Events Coordinator",
    description: "Specializes in creating engaging cricket tournaments and community programs.",
  },
  {
    name: "James Wilson",
    role: "Youth Development Director",
    description: "Focuses on player development and coaching programs.",
  },
];

export default Board;