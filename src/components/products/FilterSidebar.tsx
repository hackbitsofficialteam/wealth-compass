import { fundFilters, quickFilters } from "@/data/fundsData";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, TrendingUp, Shield, Percent, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Star,
  TrendingUp,
  Shield,
  Percent,
};

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedAMC: string;
  setSelectedAMC: (amc: string) => void;
  selectedRisk: string;
  setSelectedRisk: (risk: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  quickFilter: string | null;
  setQuickFilter: (filter: string | null) => void;
  fundCount: number;
}

export const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  selectedAMC,
  setSelectedAMC,
  selectedRisk,
  setSelectedRisk,
  sortBy,
  setSortBy,
  quickFilter,
  setQuickFilter,
  fundCount,
}: FilterSidebarProps) => {
  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="sticky top-24 bg-card rounded-2xl border border-border shadow-card p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            Filters
          </h3>
          <span className="text-sm text-muted-foreground">{fundCount} funds</span>
        </div>

        {/* Quick Filters */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Quick Filters</Label>
          <div className="grid grid-cols-2 gap-2">
            {quickFilters.map((filter) => {
              const Icon = iconMap[filter.icon] || Star;
              const isActive = quickFilter === filter.id;
              
              return (
                <Button
                  key={filter.id}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setQuickFilter(isActive ? null : filter.id)}
                  className={cn(
                    "justify-start text-xs",
                    isActive && "bg-primary text-primary-foreground"
                  )}
                >
                  <Icon className="h-3 w-3 mr-1" />
                  {filter.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Category</Label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fundFilters.categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* AMC Filter */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Fund House (AMC)</Label>
          <Select value={selectedAMC} onValueChange={setSelectedAMC}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fundFilters.amcs.map((amc) => (
                <SelectItem key={amc} value={amc}>
                  {amc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Risk Filter */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Risk Level</Label>
          <Select value={selectedRisk} onValueChange={setSelectedRisk}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fundFilters.riskLevels.map((risk) => (
                <SelectItem key={risk} value={risk}>
                  {risk}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Sort By</Label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fundFilters.sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters */}
        <Button
          variant="ghost"
          className="w-full text-muted-foreground hover:text-foreground"
          onClick={() => {
            setSelectedCategory("All Funds");
            setSelectedAMC("All AMCs");
            setSelectedRisk("All Risks");
            setSortBy("returns-1y");
            setQuickFilter(null);
          }}
        >
          Clear All Filters
        </Button>
      </div>
    </aside>
  );
};
