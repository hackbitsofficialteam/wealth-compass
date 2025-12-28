import { timelineData } from "@/data/aboutData";
import { Rocket, Shield, TrendingUp, Users, Brain, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Shield,
  TrendingUp,
  Users,
  Brain,
  Star,
};

export const TimelineSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="section-padding bg-muted/30">
      <div className="custom-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From a vision to India's most trusted investment platform
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-gold to-secondary md:-translate-x-1/2" />

          {timelineData.map((item, index) => {
            const Icon = iconMap[item.icon] || Rocket;
            const isEven = index % 2 === 0;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={item.year}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-primary border-4 border-background shadow-elegant flex items-center justify-center md:-translate-x-1/2 z-10">
                  <Icon className="h-4 w-4 text-white" />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] p-6 bg-card rounded-2xl shadow-card border border-border transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } ${isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                >
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold rounded-full text-sm mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
