import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, CheckCircle, Lock } from "lucide-react";
import { useState, useEffect } from "react";

const words = ["Smarter.", "Faster.", "Better."];

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-[15%] w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-sky/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-[5%] w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-hero font-extrabold leading-tight">
                <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  Invest
                </span>
                <span 
                  className={`block text-primary transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
                  style={{ animationDelay: "0.3s" }}
                >
                  {words[currentWordIndex]}
                </span>
                <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                  Grow <span className="gradient-text">Wealth.</span>
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              India's most intelligent mutual fund platform—trusted by{" "}
              <span className="font-semibold text-foreground">50,000+ investors</span> and{" "}
              <span className="font-semibold text-foreground">2,000+ advisors</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-destructive hover:to-destructive/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group animate-pulse-glow"
              >
                Start Investing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg rounded-xl border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                Explore Funds
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.1s" }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>SEBI Registered</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-gold" />
                <span>AMFI Member</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4 text-primary" />
                <span>256-bit Secure</span>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Fund Cards */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Equity Card */}
            <div 
              className="absolute top-0 right-8 w-64 h-40 bg-card rounded-2xl shadow-card p-6 border border-primary/20 transform rotate-6 hover:rotate-0 transition-all duration-500 animate-float cursor-pointer hover:shadow-card-hover"
              style={{ animationDelay: "0s" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Equity Funds</span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">EQ</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-foreground">+24.5%</p>
                <p className="text-sm text-muted-foreground">Avg. 3Y Returns</p>
              </div>
            </div>

            {/* Debt Card */}
            <div 
              className="absolute top-32 left-0 w-64 h-40 bg-card rounded-2xl shadow-card p-6 border border-secondary/20 transform -rotate-3 hover:rotate-0 transition-all duration-500 animate-float cursor-pointer hover:shadow-card-hover"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Debt Funds</span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-sky flex items-center justify-center">
                  <span className="text-xs font-bold text-secondary-foreground">DT</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-foreground">+8.2%</p>
                <p className="text-sm text-muted-foreground">Avg. 3Y Returns</p>
              </div>
            </div>

            {/* Hybrid Card */}
            <div 
              className="absolute top-64 right-16 w-64 h-40 bg-card rounded-2xl shadow-card p-6 border border-accent/30 transform rotate-2 hover:rotate-0 transition-all duration-500 animate-float cursor-pointer hover:shadow-card-hover"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Hybrid Funds</span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-gold flex items-center justify-center">
                  <span className="text-xs font-bold text-accent-foreground">HY</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-foreground">+14.8%</p>
                <p className="text-sm text-muted-foreground">Avg. 3Y Returns</p>
              </div>
            </div>

            {/* ELSS Card */}
            <div 
              className="absolute bottom-0 left-16 w-64 h-40 bg-card rounded-2xl shadow-card p-6 border border-gold/30 transform -rotate-6 hover:rotate-0 transition-all duration-500 animate-float cursor-pointer hover:shadow-card-hover"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">ELSS Tax Saver</span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gold to-accent flex items-center justify-center">
                  <span className="text-xs font-bold text-gold-foreground">TX</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-foreground">+18.9%</p>
                <p className="text-sm text-muted-foreground">Avg. 3Y Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce-subtle" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
