import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import MarketTicker from "@/components/home/MarketTicker";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FundCategoriesSection from "@/components/home/FundCategoriesSection";
import SIPCalculatorSection from "@/components/home/SIPCalculatorSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MarketTicker />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <FundCategoriesSection />
      <SIPCalculatorSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
