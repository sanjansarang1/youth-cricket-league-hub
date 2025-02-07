
import { Trophy, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section with Fade In */}
      <div className="bg-accent py-16 transform transition-all hover:scale-[1.02] duration-300">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 animate-fade-in">About YCPL</h1>
          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Founded in 2024, the Youth Cricket Premier League brings organized cricket to youth across Texas, fostering community and excellence through the sport.
          </p>
        </div>
      </div>

      {/* Mission Section with Fade In on Scroll */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="opacity-0 animate-fade-in [animation-delay:200ms] [animation-fill-mode:forwards] text-center p-6 transform transition-all hover:scale-105 duration-300 bg-white rounded-lg shadow-lg">
              <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                Organizing structured tournaments and leagues across Greater Houston to promote cricket excellence.
              </p>
            </div>
            <div className="opacity-0 animate-fade-in [animation-delay:400ms] [animation-fill-mode:forwards] text-center p-6 transform transition-all hover:scale-105 duration-300 bg-white rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                Uniting 12 schools and 100+ players from diverse backgrounds through cricket.
              </p>
            </div>
            <div className="opacity-0 animate-fade-in [animation-delay:600ms] [animation-fill-mode:forwards] text-center p-6 transform transition-all hover:scale-105 duration-300 bg-white rounded-lg shadow-lg">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-gray-600">
                Creating opportunities for youth aged 12-18 to learn and excel in cricket.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History & Future Section with Fade In on Scroll */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="opacity-0 animate-fade-in [animation-delay:800ms] [animation-fill-mode:forwards] transform transition-all hover:scale-[1.02] duration-300 bg-accent rounded-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-6">Our Journey</h2>
              <p className="text-gray-600">
                Started by three cricket enthusiasts in 2024, YCPL has grown from a single team into a thriving league spanning multiple school districts. We prioritize safety with proper equipment and qualified umpires, making cricket accessible to players of all skill levels.
              </p>
            </div>
            
            <div className="opacity-0 animate-fade-in [animation-delay:1000ms] [animation-fill-mode:forwards] transform transition-all hover:scale-[1.02] duration-300 bg-accent rounded-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-6">Looking Forward</h2>
              <p className="text-gray-600">
                Following the 2024 T20 World Cup's success, we're expanding through summer camps and new teams across Texas, building a comprehensive youth cricket network in Dallas, Austin, and San Antonio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
