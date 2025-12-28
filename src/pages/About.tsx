import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { TimelineSection } from "@/components/about/TimelineSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { TeamSection } from "@/components/about/TeamSection";
import { CompanyStats } from "@/components/about/CompanyStats";
import { AwardsSection } from "@/components/about/AwardsSection";
import { AboutCTA } from "@/components/about/AboutCTA";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutHero />
        <TimelineSection />
        <ValuesSection />
        <TeamSection />
        <CompanyStats />
        <AwardsSection />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
