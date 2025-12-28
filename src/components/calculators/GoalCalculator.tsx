import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Target, Calendar } from "lucide-react";

interface GoalCalculatorProps {
  onBack: () => void;
}

export const GoalCalculator = ({ onBack }: GoalCalculatorProps) => {
  const [targetAmount, setTargetAmount] = useState(5000000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const results = useMemo(() => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = years * 12;
    
    // Calculate required monthly SIP
    const monthlyRequired = targetAmount / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate * (1 + monthlyRate));
    
    // Calculate required lumpsum
    const lumpsumRequired = targetAmount / Math.pow(1 + expectedReturn / 100, years);
    
    return {
      monthlyRequired: Math.round(monthlyRequired),
      lumpsumRequired: Math.round(lumpsumRequired),
      totalSIPInvestment: Math.round(monthlyRequired * months),
    };
  }, [targetAmount, years, expectedReturn]);

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Calculators
      </Button>

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Goal Planner
        </h1>
        <p className="text-muted-foreground">
          Calculate how much you need to invest to reach your goal
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="bg-card rounded-2xl border border-border shadow-card p-6 space-y-8">
          {/* Target Amount */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Target Amount</label>
              <span className="font-bold text-amber">{formatCurrency(targetAmount)}</span>
            </div>
            <Slider
              value={[targetAmount]}
              onValueChange={(v) => setTargetAmount(v[0])}
              min={100000}
              max={100000000}
              step={100000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>₹1 L</span>
              <span>₹10 Cr</span>
            </div>
          </div>

          {/* Time Period */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Time to Achieve Goal</label>
              <span className="font-bold text-amber">{years} Years</span>
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
              <span className="font-bold text-amber">{expectedReturn}%</span>
            </div>
            <Slider
              value={[expectedReturn]}
              onValueChange={(v) => setExpectedReturn(v[0])}
              min={1}
              max={20}
              step={0.5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>1%</span>
              <span>20%</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-amber/10 to-gold/10 rounded-2xl border border-amber/20 p-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Target className="h-5 w-5" />
              <span className="text-sm">Your Goal</span>
            </div>
            <p className="text-4xl md:text-5xl font-bold text-amber">
              {formatCurrency(targetAmount)}
            </p>
            <p className="text-muted-foreground mt-2 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              in {years} years
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6">
            <h4 className="font-semibold mb-4">Investment Required</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/20">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly SIP Required</p>
                  <p className="text-2xl font-bold text-primary">{formatCurrency(results.monthlyRequired)}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Total Investment</p>
                  <p className="text-sm font-medium">{formatCurrency(results.totalSIPInvestment)}</p>
                </div>
              </div>

              <div className="text-center text-muted-foreground text-sm">OR</div>

              <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-xl border border-secondary/20">
                <div>
                  <p className="text-sm text-muted-foreground">Lumpsum Required</p>
                  <p className="text-2xl font-bold text-secondary">{formatCurrency(results.lumpsumRequired)}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">One-time Investment</p>
                  <p className="text-sm font-medium">Today</p>
                </div>
              </div>
            </div>
          </div>

          <Button className="w-full bg-amber hover:bg-amber/90 text-foreground" size="lg">
            Start Investing for Your Goal
          </Button>
        </div>
      </div>
    </div>
  );
};
