import { awardsData } from "@/data/aboutData";
import { Trophy } from "lucide-react";

export const AwardsSection = () => {
  return (
    <section className="section-padding">
      <div className="custom-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized for excellence in the fintech industry
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {awardsData.map((award, index) => (
            <div
              key={award.title}
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-gold/10 to-amber/10 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)] min-w-[200px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-amber flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-center font-bold text-foreground mb-1">
                {award.title}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                {award.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
