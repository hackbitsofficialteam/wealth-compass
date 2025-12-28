import { allFunds } from "@/data/fundsData";
import { Star, Bookmark, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FundGridProps {
  funds: typeof allFunds;
  onFundClick: (fund: typeof allFunds[0]) => void;
}

const riskColors: Record<string, string> = {
  "Low": "bg-green-500",
  "Moderate": "bg-yellow-500",
  "High": "bg-orange-500",
  "Very High": "bg-red-500",
};

export const FundGrid = ({ funds, onFundClick }: FundGridProps) => {
  if (funds.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No funds found</h3>
          <p className="text-muted-foreground">Try adjusting your filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {funds.map((fund, index) => (
          <div
            key={fund.id}
            className="group bg-card rounded-2xl border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={() => onFundClick(fund)}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Header */}
            <div className="p-5 pb-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-sm font-bold text-primary">
                    {fund.amc.substring(0, 2)}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {fund.category}
                  </Badge>
                </div>
                <button
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Bookmark functionality
                  }}
                >
                  <Bookmark className="h-4 w-4 text-muted-foreground hover:text-gold transition-colors" />
                </button>
              </div>

              <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                {fund.name}
              </h3>

              {/* Returns */}
              <div className="flex gap-2 mb-4">
                {Object.entries(fund.returns).map(([period, value]) => (
                  <Badge
                    key={period}
                    variant="outline"
                    className={cn(
                      "text-xs font-medium",
                      value > 0 ? "border-green-500/50 text-green-600" : "border-red-500/50 text-red-600"
                    )}
                  >
                    {period}: {value > 0 ? "+" : ""}{value}%
                  </Badge>
                ))}
              </div>

              {/* Risk Indicator */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Risk</span>
                  <span className="font-medium">{fund.risk}</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className={cn("h-full rounded-full transition-all", riskColors[fund.risk])}
                    style={{
                      width: fund.risk === "Low" ? "25%" : fund.risk === "Moderate" ? "50%" : fund.risk === "High" ? "75%" : "100%"
                    }}
                  />
                </div>
              </div>

              {/* Info Row */}
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <span>NAV: ₹{fund.nav.toFixed(2)}</span>
                <span>Min SIP: ₹{fund.minSIP}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < fund.rating ? "fill-gold text-gold" : "fill-muted text-muted"
                    )}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">
                  ({fund.investorCount?.toLocaleString()} investors)
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 bg-muted/30 border-t border-border flex items-center justify-between">
              <button className="text-sm text-primary font-medium hover:underline">
                View Details
              </button>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <TrendingUp className="h-4 w-4 mr-1" />
                Invest Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
