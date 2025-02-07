import { Trophy, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">About YCPL</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            The Youth Cricket Premier League is dedicated to developing the sport of cricket and increasing its accessibility.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                The YCPL is committed to making cricket more accessible and increasing its .
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                Through the sport of cricket, the YCPL intends to bring communities together through invol.
              </p>
            </div>
            <div className="text-center p-6">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-gray-600">
                The YCPL strives to develop the increasingly popular sport of cricket among high school students.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              ADD HERE
            </p>
            <p className="text-gray-600 mb-6">
              ADD HERE
            </p>
            <p className="text-gray-600">
              ADD HERE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
