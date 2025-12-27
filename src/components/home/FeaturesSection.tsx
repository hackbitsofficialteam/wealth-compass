import { features } from "@/data/mockData";
import { Coins, Brain, Calendar, TrendingUp, Shield, Headphones, LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const iconMap: Record<string, LucideIcon> = {
  Coins,
  Brain,
  Calendar,
  TrendingUp,
  Shield,
  Headphones,
};

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-heading text-foreground mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Build Wealth</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Powerful features designed to make investing simple, smart, and profitable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={index}
                className={`group relative p-8 bg-card rounded-3xl border border-border/50 shadow-card transition-all duration-500 hover:-translate-y-3 hover:shadow-card-hover hover:border-primary/30 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-elegant group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Title with animated underline */}
                <h3 className="text-xl font-semibold text-foreground mb-3 animated-underline">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
