import { valuesData } from "@/data/aboutData";
import { Eye, Lightbulb, Shield, Award, Heart, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Eye,
  Lightbulb,
  Shield,
  Award,
  Heart,
  Scale,
};

const colorMap: Record<string, string> = {
  "royal-blue": "border-l-primary",
  "gold": "border-l-gold",
  "ocean-blue": "border-l-secondary",
  "amber": "border-l-amber",
  "sky-blue": "border-l-sky-blue",
  "alert-red": "border-l-destructive",
};

const iconColorMap: Record<string, string> = {
  "royal-blue": "text-primary",
  "gold": "text-gold",
  "ocean-blue": "text-secondary",
  "amber": "text-amber",
  "sky-blue": "text-sky-blue",
  "alert-red": "text-destructive",
};

export const ValuesSection = () => {
  return (
    <section className="section-padding">
      <div className="custom-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every decision we make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuesData.map((value, index) => {
            const Icon = iconMap[value.icon] || Shield;
            const borderColor = colorMap[value.color] || "border-l-primary";
            const iconColor = iconColorMap[value.color] || "text-primary";

            return (
              <div
                key={value.title}
                className={cn(
                  "group bg-card p-8 rounded-2xl border border-border shadow-card hover:shadow-elegant transition-all duration-300",
                  "border-l-[6px]",
                  borderColor
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={cn("w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", iconColor)}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
