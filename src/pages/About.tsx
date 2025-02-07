
import { Trophy, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">About YCPL</h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            The Youth Cricket Premier League is dedicated to developing the sport of cricket and increasing its accessibility across Texas.
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
                Promoting cricket excellence through organized tournaments and structured league formats across the Greater Houston Area.
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                Building a vibrant cricket community involving 12 schools and over 100 players from various school districts.
              </p>
            </div>
            <div className="text-center p-6">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-gray-600">
                Fostering the growth of cricket among youth aged 12-18, welcoming players of all skill levels.
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
              Founded in August 2024, YCPL emerged from the vision of three passionate cricket enthusiasts: Sanjan Sarang, Siddharth Jain, and Ashutosh Sahu. As founders of the Texas Royals youth team in July 2022, they recognized the need for organized cricket competitions in the region.
            </p>
            <p className="text-gray-600 mb-6">
              Today, YCPL operates across the Greater Houston Area, encompassing schools in Conroe, Tomball, Katy, Fort Bend, Cypress-Fairbanks, and Klein ISDs, along with various private schools. Our diverse community includes both novice players and experienced cricketers with up to 10 years of playing experience.
            </p>
            <p className="text-gray-600 mb-6">
              Safety and inclusivity are our top priorities. We mandate proper protective equipment including gloves and abdomen guards, with qualified umpires present at every match. To minimize injury risks, we utilize tape balls during matches and practices as a safer alternative to traditional leather balls.
            </p>
          </div>
        </div>
      </div>

      {/* Future Growth Section */}
      <div className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Future Growth</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              YCPL is committed to expanding cricket's reach through innovative initiatives including summer camps designed to introduce new players to the sport. We're actively establishing additional teams in Northern Houston to improve match accessibility and reduce travel distances.
            </p>
            <p className="text-gray-600">
              Following the successful 2024 Men's T20 World Cup hosted by the United States and West Indies, YCPL aims to expand its presence beyond Houston into Dallas, Austin, and San Antonio, creating a comprehensive Texas-wide cricket network for youth players.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
