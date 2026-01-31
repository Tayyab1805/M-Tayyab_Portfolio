import { useEffect, useState } from "react";
import { ArrowDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = [
  "Business Analytics Student",
  "Aspiring Data Analyst",
  "Problem Solver",
];

export const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Photo - Left Side */}
            <div className="flex-shrink-0 animate-fade-up opacity-0 stagger-1">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-2xl">
                  <img 
                    src={profilePhoto} 
                    alt="Muhammad Tayyab - Business Analytics Student"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/30 scale-110 animate-pulse" />
                {/* Background glow */}
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl scale-125 -z-10" />
              </div>
            </div>

            {/* Text Content - Right Side */}
            <div className="flex-1 text-center lg:text-left">
              {/* Greeting */}
              <p className="text-muted-foreground text-lg mb-3 animate-fade-up opacity-0 stagger-2">
                Hello, I'm
              </p>

              {/* Name */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-up opacity-0 stagger-3">
                Muhammad{" "}
                <span className="text-gradient">Tayyab</span>
              </h1>

              {/* Dynamic Role */}
              <div className="h-10 mb-6 flex items-center justify-center lg:justify-start animate-fade-up opacity-0 stagger-4">
                <span className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground">
                  —
                </span>
                <span
                  className={`text-lg sm:text-xl md:text-2xl font-medium text-accent ml-2 transition-all duration-300 ${
                    isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                  }`}
                >
                  {roles[currentRoleIndex]}
                </span>
              </div>

              {/* Tagline */}
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up opacity-0 stagger-5">
                Turning data into insights and ideas into reality. 
                A passionate student combining analytical thinking with real-world business experience.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => scrollToSection("contact")}
                >
                  Get in Touch
                  <ChevronRight className="ml-1" />
                </Button>
                <Button
                  variant="heroOutline"
                  size="xl"
                  onClick={() => scrollToSection("achievements")}
                >
                  View My Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};
