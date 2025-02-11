import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/lovable-uploads/93301242-636d-4b08-a893-3fbde73aee23.png"
              alt="YCPL Logo"
              className="h-32 w-32"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Youth Cricket Premier League
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Making the sport of cricket more accessible to students in the Greater Houston area.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/teams"
              className="inline-flex items-center bg-secondary hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-lg transition-colors"
            >
              View Teams <ArrowRight className="ml-2" />
            </Link>
            <a
              href="https://forms.gle/zsTi7BLGQQBhngiJ9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-secondary hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Join Now <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Who We Are
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-accent rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Ready to Join YCPL?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards cricket excellence. Learn more about our
            league and how to participate.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Learn More <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Houston's Youth Cricket Hub",
    description:
      "Based in Houston, we provide a platform for high school students and younger cricket enthusiasts to develop their skills and passion for the sport.",
  },
  {
    title: "Tapeball Cricket Focus",
    description:
      "We organize exciting tapeball cricket matches, making the sport accessible and fun while fostering community engagement and healthy competition.",
  },
  {
    title: "Community & Health",
    description:
      "Beyond cricket, we build a strong community and promote physical fitness, teamwork, and healthy lifestyle choices among young players.",
  },
];

export default Index;
