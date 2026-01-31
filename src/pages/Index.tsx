import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CoursesSection } from "@/components/CoursesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <CoursesSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
