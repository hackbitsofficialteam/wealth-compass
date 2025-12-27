import { fundCategories, topFunds } from "@/data/mockData";
import { useState } from "react";
import { Star, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FundCategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState("large-cap");

  const filteredFunds = topFunds.filter(
    (fund) =>
      activeCategory === "all" ||
      fund.category.toLowerCase().replace(" ", "-") === activeCategory
  );

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low":
        return "bg-green-500/10 text-green-600 border-green-500/30";
      case "moderate":
        return "bg-gold/10 text-gold border-gold/30";
      case "high":
        return "bg-orange-500/10 text-orange-600 border-orange-500/30";
      case "very high":
        return "bg-destructive/10 text-destructive border-destructive/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-heading text-foreground mb-4">
            Explore <span className="gradient-text">Top Performing</span> Funds
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Curated selections across all risk profiles and investment goals
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-elegant scale-105"
                : "bg-card border-2 border-sky text-foreground hover:border-primary"
            }`}
          >
            All Funds
          </button>
          {fundCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-elegant scale-105"
                  : "bg-card border-2 border-sky text-foreground hover:border-primary"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Funds Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeCategory === "all" ? topFunds : filteredFunds).map((fund) => (
            <div
              key={fund.id}
              className="group bg-card rounded-2xl p-6 shadow-card border border-border/30 hover:shadow-card-hover hover:border-primary/30 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center font-bold text-primary">
                    {fund.amc.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {fund.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{fund.category}</p>
                  </div>
                </div>
              </div>

              {/* Returns */}
              <div className="flex gap-2 mb-4">
                {Object.entries(fund.returns).map(([period, value]) => (
                  <Badge
                    key={period}
                    variant="secondary"
                    className="bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20"
                  >
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {period}: +{value}%
                  </Badge>
                ))}
              </div>

              {/* Risk & Rating */}
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className={getRiskColor(fund.risk)}>
                  {fund.risk} Risk
                </Badge>
                <div className="flex items-center gap-1">
                  {Array.from({ length: fund.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                  {Array.from({ length: 5 - fund.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-muted" />
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 pb-4 border-b border-border/50">
                <span>NAV: ₹{fund.nav}</span>
                <span>Min SIP: ₹{fund.minSIP}</span>
              </div>

              {/* CTAs */}
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  className="flex-1 text-primary hover:bg-primary/10"
                >
                  View Details
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-elegant group/btn">
                  Invest Now
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View All 5,000+ Funds
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FundCategoriesSection;
