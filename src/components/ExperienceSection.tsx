import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
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
      id="experience"
      ref={sectionRef}
      className="py-24 bg-secondary/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-accent font-medium mb-3">Professional Background</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Experience Card */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="p-8 sm:p-10 bg-card rounded-2xl border border-border card-elevated relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <Briefcase className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                      Production & Warehouse Manager
                    </h3>
                    <p className="text-lg text-accent font-medium">
                      Dressy (Wholesale Shop)
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                    Current
                  </span>
                </div>

                <div className="flex flex-wrap gap-6 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>June 2023 – Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Pakistan</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Responsible for overseeing production workflows and managing warehouse inventory 
                  and operations for a wholesale business. This role demonstrates practical skills in:
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {["Logistics Management", "Process Optimization", "Team Leadership"].map((skill, index) => (
                    <div
                      key={skill}
                      className={`p-4 bg-secondary/50 rounded-xl text-center transition-all duration-500 ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <span className="font-medium text-foreground">{skill}</span>
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
