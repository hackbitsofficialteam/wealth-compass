import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ProductsHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const ProductsHero = ({ searchQuery, setSearchQuery }: ProductsHeroProps) => {
  return (
    <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="custom-container">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            5,000+ Mutual Funds, One Smart Platform
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Find the perfect fund for your goals with our advanced search and filtering tools
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                type="text"
                placeholder="Search funds by name, AMC, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-2xl border-2 border-border focus:border-primary shadow-card focus:shadow-elegant transition-all duration-300 bg-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
