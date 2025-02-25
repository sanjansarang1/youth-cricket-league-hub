
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RainbowButton } from "../components/ui/rainbow-button";
import { HeroGeometric } from "../components/ui/shape-landing-hero";
import { Logos3 } from "../components/ui/logos3";

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

const sponsorLogos = [
  { 
    id: 1, 
    name: "CricketerShop", 
    src: "/lovable-uploads/0f34fc8f-81cc-4303-a854-a349338cccdd.png",
    href: "https://cricketershop.com/"
  },
  { 
    id: 2, 
    name: "YCPLLogo", 
    src: "/lovable-uploads/33b9ec1e-1d13-4d40-8409-1ad094805986.png",
    href: "https://ycpl.org/"
  },
  { 
    id: 3, 
    name: "InGenius", 
    src: "/lovable-uploads/b50443ea-556a-43b3-91c4-7052c4d6d500.png",
    href: "https://hubs.la/Q036G_c20"
  },
  { 
    id: 4, 
    name: "SQUAD", 
    src: "/lovable-uploads/9648132b-38ae-48be-9167-79f1bcd93140.png",
    href: "https://apps.apple.com/us/app/squad-sports-matchmaker/id6624296404"
  }
  {
    id: 5,
    name: "htw",
    src: "/lovable-uploads/htw.png",
    href: "https://www.woodlandshindutemple.org/youth/#"
}
];

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroGeometric 
        badge="Youth Cricket Premier League"
        title1="Making Cricket"
        title2="More Accessible"
      />

      {/* Sponsors Section */}
      <div className="py-16 bg-white">
        <div className="text-center space-y-4 mb-12">
          <p className="text-sm font-medium tracking-widest text-muted-foreground">
            PROUD PARTNERS & SUPPORTERS
          </p>
          <h2 className="text-3xl font-bold tracking-tight">
            Supporting Youth Cricket Excellence
          </h2>
        </div>
        <Logos3 logos={sponsorLogos} />
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
          <Link to="/about">
            <RainbowButton className="inline-flex items-center bg-white text-primary">
              Learn More <ArrowRight className="ml-2" />
            </RainbowButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;

