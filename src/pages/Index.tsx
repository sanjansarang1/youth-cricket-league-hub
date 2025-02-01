import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SponsorBar from "../components/SponsorBar";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Youth Cricket Premier League
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Empowering young cricketers to achieve their dreams through
            competitive cricket.
          </p>
          <Link
            to="/teams"
            className="inline-flex items-center bg-secondary hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            View Teams <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose YCPL?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-accent rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join YCPL?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards cricket excellence. Learn more about our
            league and how to participate.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Learn More <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Sponsor Bar */}
      <SponsorBar />
    </div>
  );
};

const features = [
  {
    title: "Professional Coaching",
    description:
      "Learn from experienced coaches who have played at the highest level.",
  },
  {
    title: "Competitive Matches",
    description:
      "Regular matches against top youth teams to develop your skills.",
  },
  {
    title: "Development Focus",
    description:
      "Emphasis on both technical skills and personal growth.",
  },
];

export default Index;
