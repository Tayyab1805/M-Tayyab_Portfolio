import { useEffect, useRef, useState } from "react";
import { Target, TrendingUp, Users } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Data-Driven",
    description: "Passionate about applying analytical solutions to real-world challenges",
  },
  {
    icon: TrendingUp,
    title: "High Achiever",
    description: "Proven track record with 1st & 3rd positions in national competitions",
  },
  {
    icon: Users,
    title: "Team Leader",
    description: "Hands-on experience managing production and warehouse operations",
  },
];

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-accent font-medium mb-3">Get to Know Me</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Bio Content */}
            <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A dedicated <span className="text-foreground font-medium">4th-semester BS Business Analytics</span> student at the International Islamic University Islamabad (IIUI), expected to graduate in 2028.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I combine strong academic performance with hands-on management experience and a proven track record in analytical competitions. My journey is driven by the passion to apply <span className="text-foreground font-medium">data-driven solutions</span> to real-world business challenges.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's analyzing complex datasets, managing warehouse operations, or developing innovative business ideas, I bring the same level of dedication and analytical rigor to everything I do.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`p-6 bg-card rounded-xl border border-border card-elevated transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
