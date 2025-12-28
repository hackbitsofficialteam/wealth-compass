import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, PieChart, TrendingUp } from "lucide-react";

interface LumpsumCalculatorProps {
  onBack: () => void;
}

export const LumpsumCalculator = ({ onBack }: LumpsumCalculatorProps) => {
  const [investment, setInvestment] = useState(100000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const results = useMemo(() => {
    const futureValue = investment * Math.pow(1 + expectedReturn / 100, years);
    const wealthGained = futureValue - investment;
    
    return {
      futureValue: Math.round(futureValue),
      totalInvested: investment,
      wealthGained: Math.round(wealthGained),
    };
  }, [investment, years, expectedReturn]);

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  const investedPercentage = (results.totalInvested / results.futureValue) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Calculators
      </Button>

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Lumpsum Calculator
        </h1>
        <p className="text-muted-foreground">
          Calculate returns on your one-time investment
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="bg-card rounded-2xl border border-border shadow-card p-6 space-y-8">
          {/* Investment Amount */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Investment Amount</label>
              <span className="font-bold text-secondary">{formatCurrency(investment)}</span>
            </div>
            <Slider
              value={[investment]}
              onValueChange={(v) => setInvestment(v[0])}
              min={10000}
              max={10000000}
              step={10000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>₹10,000</span>
              <span>₹1 Cr</span>
            </div>
          </div>

          {/* Time Period */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Investment Period</label>
              <span className="font-bold text-secondary">{years} Years</span>
            </div>
            <Slider
              value={[years]}
              onValueChange={(v) => setYears(v[0])}
              min={1}
              max={30}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>1 Year</span>
              <span>30 Years</span>
            </div>
          </div>

          {/* Expected Return */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Expected Annual Return</label>
              <span className="font-bold text-secondary">{expectedReturn}%</span>
            </div>
            <Slider
              value={[expectedReturn]}
              onValueChange={(v) => setExpectedReturn(v[0])}
              min={1}
              max={30}
              step={0.5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>1%</span>
              <span>30%</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl border border-secondary/20 p-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm">Future Value</span>
            </div>
            <p className="text-4xl md:text-5xl font-bold gradient-text">
              {formatCurrency(results.futureValue)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-xl border border-border p-4">
              <p className="text-sm text-muted-foreground mb-1">Total Invested</p>
              <p className="text-xl font-bold text-foreground">{formatCurrency(results.totalInvested)}</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4">
              <p className="text-sm text-muted-foreground mb-1">Wealth Gained</p>
              <p className="text-xl font-bold text-green-600">{formatCurrency(results.wealthGained)}</p>
            </div>
          </div>

          {/* Visual Chart */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <div className="flex items-center gap-2 mb-4">
              <PieChart className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Investment Breakdown</span>
            </div>
            <div className="relative h-6 bg-muted rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-secondary rounded-full transition-all duration-500"
                style={{ width: `${investedPercentage}%` }}
              />
              <div
                className="absolute top-0 h-full bg-gold rounded-full transition-all duration-500"
                style={{ left: `${investedPercentage}%`, width: `${100 - investedPercentage}%` }}
              />
            </div>
            <div className="flex justify-between mt-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <span>Invested ({investedPercentage.toFixed(0)}%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <span>Returns ({(100 - investedPercentage).toFixed(0)}%)</span>
              </div>
            </div>
          </div>

          <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" size="lg">
            Start Investing Now
          </Button>
        </div>
      </div>
    </div>
  );
};
