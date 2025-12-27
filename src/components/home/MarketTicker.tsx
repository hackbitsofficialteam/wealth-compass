import { marketTickerData } from "@/data/mockData";
import { TrendingUp, TrendingDown } from "lucide-react";

const MarketTicker = () => {
  // Duplicate the data for seamless infinite scroll
  const tickerItems = [...marketTickerData, ...marketTickerData];

  return (
    <section className="bg-foreground py-4 overflow-hidden">
      <div className="relative flex">
        <div className="animate-ticker flex gap-12 whitespace-nowrap">
          {tickerItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-background/60 font-medium">{item.name}</span>
              <span className="text-background font-bold">{item.value}</span>
              <span
                className={`flex items-center gap-1 font-semibold ${
                  item.isPositive ? "text-gold" : "text-destructive"
                }`}
              >
                {item.isPositive ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketTicker;
