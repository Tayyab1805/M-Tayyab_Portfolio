import { useEffect, useRef, useState } from "react";
import { Award, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Introduction to Data Science",
    platform: "Cisco",
    verified: true,
    color: "from-blue-600 to-blue-400",
  },
  {
    title: "Pandas (Python)",
    platform: "Kaggle",
    verified: true,
    color: "from-cyan-500 to-teal-400",
  },
  {
    title: "Modern Web Design (HTML & CSS)",
    platform: "Alison",
    verified: true,
    color: "from-purple-600 to-purple-400",
  },
  {
    title: "Advanced Excel 2021",
    platform: "Alison",
    verified: true,
    color: "from-green-600 to-green-400",
  },
  {
    title: "Introduction to Modern AI",
    platform: "Alison",
    verified: true,
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "Management Information Systems",
    platform: "Alison",
    verified: true,
    color: "from-indigo-600 to-indigo-400",
  },
  // Additional courses (hidden by default)
  {
    title: "NumPy (Python)",
    platform: "Kaggle",
    verified: true,
    color: "from-cyan-500 to-teal-400",
  },
  {
    title: "Warehouse Management",
    platform: "Alison",
    verified: true,
    color: "from-rose-500 to-pink-400",
  },
  {
    title: "Introduction to Database Concepts",
    platform: "Alison",
    verified: true,
    color: "from-violet-600 to-violet-400",
  },
  {
    title: "HTML, CSS, & JavaScript: Building a Website",
    platform: "LinkedIn Learning",
    verified: true,
    color: "from-blue-700 to-blue-500",
  },
];

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case "Cisco":
      return "🌐";
    case "Kaggle":
      return "📊";
    case "Alison":
      return "🎓";
    case "LinkedIn Learning":
      return "💼";
    default:
      return "📚";
  }
};

export const CoursesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
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

  const displayedCourses = showAll ? courses : courses.slice(0, 6);

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="py-24 bg-secondary/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-accent font-medium mb-3">Courses & Certifications</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Continuous Learning
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Courses Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCourses.map((course, index) => (
              <div
                key={course.title}
                className={`group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${100 + (index % 6) * 100}ms` }}
              >
                <div className="h-full p-6 bg-card rounded-xl border border-border card-elevated relative overflow-hidden">
                  {/* Platform Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${course.color} text-white text-sm font-medium shadow-sm`}>
                      <span>{getPlatformIcon(course.platform)}</span>
                      <span>{course.platform}</span>
                    </div>
                    {course.verified && (
                      <div className="flex items-center gap-1 text-accent">
                        <Award className="w-4 h-4" />
                        <span className="text-xs font-medium">Verified</span>
                      </div>
                    )}
                  </div>

                  {/* Course Title */}
                  <h3 className="font-display text-lg font-semibold text-foreground leading-tight group-hover:text-accent transition-colors">
                    {course.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          {courses.length > 6 && (
            <div className={`flex justify-center mt-10 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="gap-2 px-6"
              >
                {showAll ? "Show Less" : "See More Courses"}
                <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
