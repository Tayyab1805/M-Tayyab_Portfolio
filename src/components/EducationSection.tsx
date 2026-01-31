import { useEffect, useRef, useState } from "react";
import { GraduationCap, School, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "BS Business Analytics",
    institution: "International Islamic University Islamabad (IIUI)",
    period: "Expected 2028",
    status: "Currently Pursuing",
    highlight: "4th Semester",
    isCurrent: true,
  },
  {
    icon: School,
    degree: "HSSC (Intermediate)",
    institution: "FG Sir Syed College",
    period: "Completed",
    status: "76% (840/1100)",
    highlight: null,
    isCurrent: false,
  },
  {
    icon: Award,
    degree: "SSC (Matriculation)",
    institution: "Allied School",
    period: "Completed",
    status: "1076/1100 Marks",
    highlight: "Outstanding",
    isCurrent: false,
  },
];

export const EducationSection = () => {
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
      id="education"
      ref={sectionRef}
      className="py-24 bg-secondary/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-accent font-medium mb-3">My Academic Journey</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={item.degree}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className="flex gap-6 items-start">
                    {/* Icon */}
                    <div className={`relative z-10 p-4 rounded-xl shrink-0 ${
                      item.isCurrent 
                        ? "bg-accent text-accent-foreground shadow-lg" 
                        : "bg-card border border-border text-foreground"
                    }`}>
                      <item.icon className="w-6 h-6" />
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 p-6 bg-card rounded-xl border border-border card-elevated ${
                      item.isCurrent ? "border-accent/30" : ""
                    }`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {item.degree}
                        </h3>
                        {item.highlight && (
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.isCurrent 
                              ? "bg-accent/10 text-accent" 
                              : "bg-primary/10 text-primary"
                          }`}>
                            {item.highlight}
                          </span>
                        )}
                      </div>
                      <p className="text-foreground font-medium mb-2">
                        {item.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>{item.period}</span>
                        <span className="text-accent font-medium">{item.status}</span>
                      </div>
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
