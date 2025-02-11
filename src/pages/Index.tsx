import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Utility function to concatenate class names.
 * If you already have a utility like `classnames` or your own `cn`, you can replace this.
 */
function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Element type to render as. Defaults to "button". */
  as?: React.ElementType;
  /** Optional prop for react-router-dom links */
  to?: string;
  /** Optional prop for external anchor links */
  href?: string;
}

/**
 * RainbowButton Component
 * Supports rendering as a button, a react-router Link, or an anchor element.
 */
export function RainbowButton({
  as: Component = "button",
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <Component
      className={cn(
        // Base styling with rainbow animation and appearance
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        // Before pseudo-element styles for the rainbow glow
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
        // Light mode background layers
        "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        // Dark mode background layers
        "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

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
            {/* Internal link using react-router-dom */}
            <RainbowButton as={Link} to="/teams">
              View Teams <ArrowRight className="ml-2" />
            </RainbowButton>
            {/* External link */}
            <RainbowButton
              as="a"
              href="https://forms.gle/zsTi7BLGQQBhngiJ9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Now <ArrowRight className="ml-2" />
            </RainbowButton>
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
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {feature.title}
                </h3>
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
          <RainbowButton as={Link} to="/about">
            Learn More <ArrowRight className="ml-2" />
          </RainbowButton>
        </div>
      </div>
    </div>
  );
};

export default Index;
