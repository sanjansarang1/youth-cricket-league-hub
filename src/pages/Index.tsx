


import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RainbowButton } from "../components/ui/rainbow-button";
import { HeroGeometric } from "../components/ui/shape-landing-hero";
import { Logos3 } from "../components/ui/logos3";
import { CountUp } from "../components/ui/count-up";
import {ShineBorder} from "../components/ui/shine-border";

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
    name: "powerplay", 
    src: "/lovable-uploads/powerplaylogo.png",
    href: "https://powerplayindoorsports.com/"
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
  },
  {
    id: 5,
    name: "htw",
    src: "/lovable-uploads/htw.png",
    href: "https://www.woodlandshindutemple.org/youth/#"
  },
  {
    id: 6,
    name: "ASU",
    src: "/lovable-uploads/c381befc-0b5e-4add-9ffd-9f34655ec90f.png",
    href: "https://academystudentunion.weebly.com/"
  }
];

const stats = [
  { value: 150, label: "Players", suffix: "+" },
  { value: 12, label: "Teams", suffix: "+" },
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

      {/* Stats Section */}
      <div className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Our Impact by the Numbers</h2>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      <CountUp 
                        end={stat.value} 
                        suffix={stat.suffix} 
                        duration={1800}
                      />
                    </div>
                    <div className="text-lg text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-4">
                Growing Houston's cricket community one player at a time.
              </p>
            </div>
            <ShineBorder
              borderRadius={12}
              borderWidth={2}
              duration={12}
              color={["#facc15", "#3b82f6"]}
              className="overflow-hidden shadow-lg"
              >
              <img 
                src="/lovable-uploads/65ace1b5-3c4d-44e2-bf86-1593875883a8.png" 
                alt="YCPL Team" 
                className="w-full h-auto object-cover"
              />
            </ShineBorder>
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
