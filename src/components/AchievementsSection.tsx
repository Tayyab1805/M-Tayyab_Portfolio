import { useEffect, useRef, useState } from "react";
import { Trophy, Medal, Lightbulb, Award, Laptop, Globe, Package, Gamepad2, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const achievements = [
  {
    icon: Trophy,
    rank: "1st",
    title: "Statistical Model Competition",
    organizer: "FGEI (All-Pakistan)",
    description: "Secured first position in an All-Pakistan competition organized by Federal Government Educational Institutions, demonstrating exceptional statistical analysis and modeling capabilities.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Lightbulb,
    rank: "3rd",
    title: "Business Idea Competition 2025",
    organizer: "NUML University",
    description: "Awarded third position among 64 competing teams for presenting an innovative and viable business idea, showcasing entrepreneurial thinking and presentation skills.",
    color: "from-accent to-teal-500",
  },
  {
    icon: Medal,
    rank: "3rd",
    title: "Federal Board Academic Excellence",
    organizer: "All Allied Schools (Federal Board)",
    description: "Achieved 3rd position among all Allied Schools affiliated with the Federal Board, demonstrating outstanding academic performance.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Laptop,
    rank: "Merit",
    title: "PM Laptop Scheme 2025",
    organizer: "Government of Pakistan",
    description: "Awarded laptop based on academic merit through the Prime Minister's Laptop Scheme 2025, recognizing exceptional academic achievements.",
    color: "from-emerald-500 to-green-500",
  },
];

const projects = [
  {
    icon: Globe,
    title: "YouTube Video Downloader",
    tech: "Python",
    description: "A functional Python tool that allows users to download YouTube videos in various formats and qualities.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Package,
    title: "Inventory Management System",
    tech: "Web Application",
    description: "A web-based application for business stock tracking, helping businesses manage their inventory efficiently.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Gamepad2,
    title: "Gaming Hub",
    tech: "Frontend Development",
    description: "A curated front-end website for game reviews and news, featuring modern design and responsive layout.",
    color: "from-purple-500 to-violet-500",
  },
];

export const AchievementsSection = () => {
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
      id="achievements"
      ref={sectionRef}
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-accent font-medium mb-3">Recognition & Work</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Projects & Achievements
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Tabs */}
          <Tabs defaultValue="achievements" className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10">
              <TabsTrigger value="achievements" className="gap-2">
                <Trophy className="w-4 h-4" />
                Competitions & Awards
              </TabsTrigger>
              <TabsTrigger value="projects" className="gap-2">
                <Globe className="w-4 h-4" />
                Web Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="achievements">
              {/* Achievement Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className={`group relative transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="h-full p-6 bg-card rounded-2xl border border-border card-elevated relative overflow-hidden">
                      {/* Ribbon */}
                      <div className={`absolute top-4 -right-10 w-36 bg-gradient-to-r ${achievement.color} text-center py-1 transform rotate-45 shadow-lg`}>
                        <span className="text-xs font-bold text-white tracking-wide">
                          {achievement.rank} {achievement.rank !== "Merit" && "Place"}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="mb-4">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${achievement.color} shadow-lg`}>
                          <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="font-display text-lg font-bold text-foreground mb-1 pr-10">
                        {achievement.title}
                      </h3>
                      <p className="text-accent font-medium text-sm mb-3">
                        {achievement.organizer}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects">
              {/* Project Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className={`group transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="h-full p-6 bg-card rounded-2xl border border-border card-elevated">
                      {/* Icon */}
                      <div className="mb-4">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.color} shadow-lg`}>
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Tech Badge */}
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md mb-3">
                        {project.tech}
                      </span>

                      {/* Content */}
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Stats Section */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { value: "4+", label: "Awards & Recognitions" },
              { value: "64+", label: "Teams Competed Against" },
              { value: "3+", label: "Web Projects" },
              { value: "10+", label: "Certifications" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-card rounded-xl border border-border text-center card-elevated"
              >
                <p className="font-display text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
