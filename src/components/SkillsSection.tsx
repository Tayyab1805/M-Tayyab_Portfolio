import { useEffect, useRef, useState } from "react";

const softSkills = [
  { name: "Communication", level: 90 },
  { name: "Problem Solving", level: 95 },
  { name: "Team Leadership", level: 85 },
  { name: "Critical Thinking", level: 88 },
];

const technicalSkills = [
  { name: "Python Analytics", level: 70, label: "Intermediate" },
  { name: "MS Office Suite", level: 90, label: "Advanced" },
  { name: "Frontend Development", level: 50, label: "Basic" },
  { name: "Data Visualization", level: 65, label: "Intermediate" },
];

export const SkillsSection = () => {
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
      id="skills"
      ref={sectionRef}
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-accent font-medium mb-3">What I Bring</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Soft Skills */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="p-8 bg-card rounded-2xl border border-border card-elevated h-full">
                <h3 className="font-display text-2xl font-bold text-foreground mb-8">
                  Soft Skills
                </h3>
                <div className="space-y-6">
                  {softSkills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${400 + index * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="p-8 bg-card rounded-2xl border border-border card-elevated h-full">
                <h3 className="font-display text-2xl font-bold text-foreground mb-8">
                  Technical & Analytical
                </h3>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full font-medium">
                          {skill.label}
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${500 + index * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
