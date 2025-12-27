import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Calculator } from "lucide-react";

const SIPCalculatorSection = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [timePeriod, setTimePeriod] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const calculations = useMemo(() => {
    const monthlyRate = expectedReturn / 100 / 12;
    const months = timePeriod * 12;
    const totalInvestment = monthlyInvestment * months;
    
    // FV = P × (((1 + r)^n - 1) / r) × (1 + r)
    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    
    const estimatedReturns = futureValue - totalInvestment;

    return {
      totalInvestment,
      estimatedReturns,
      futureValue,
    };
  }, [monthlyInvestment, timePeriod, expectedReturn]);

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    }
    return `₹${value.toLocaleString()}`;
  };

  // Calculate percentage for pie chart
  const investmentPercentage = (calculations.totalInvestment / calculations.futureValue) * 100;
  const returnsPercentage = 100 - investmentPercentage;

  return (
    <section className="section-padding bg-sky/10">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Calculator className="h-5 w-5" />
            <span className="font-medium">SIP Calculator</span>
          </div>
          <h2 className="text-heading text-foreground mb-4">
            Invest Like a <span className="gradient-text">Pro</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your wealth journey with our powerful calculator
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calculator Inputs */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border/30">
            {/* Monthly Investment */}
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                <label className="font-medium text-foreground">Monthly Investment</label>
                <span className="text-xl font-bold text-primary">
                  ₹{monthlyInvestment.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[monthlyInvestment]}
                onValueChange={(value) => setMonthlyInvestment(value[0])}
                min={500}
                max={100000}
                step={500}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.bg-primary]:bg-primary"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>₹500</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            {/* Time Period */}
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                <label className="font-medium text-foreground">Time Period</label>
                <span className="text-xl font-bold text-primary">{timePeriod} Years</span>
              </div>
              <Slider
                value={[timePeriod]}
                onValueChange={(value) => setTimePeriod(value[0])}
                min={1}
                max={30}
                step={1}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.bg-primary]:bg-primary"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Expected Return */}
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                <label className="font-medium text-foreground">Expected Return (p.a.)</label>
                <span className="text-xl font-bold text-primary">{expectedReturn}%</span>
              </div>
              <Slider
                value={[expectedReturn]}
                onValueChange={(value) => setExpectedReturn(value[0])}
                min={1}
                max={30}
                step={0.5}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.bg-primary]:bg-primary"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Results Summary */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 rounded-2xl">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Invested</p>
                <p className="font-bold text-foreground">{formatCurrency(calculations.totalInvestment)}</p>
              </div>
              <div className="text-center border-x border-border">
                <p className="text-sm text-muted-foreground mb-1">Est. Returns</p>
                <p className="font-bold text-gold">{formatCurrency(calculations.estimatedReturns)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Total Value</p>
                <p className="font-bold text-primary">{formatCurrency(calculations.futureValue)}</p>
              </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="flex flex-col items-center">
            {/* Donut Chart */}
            <div className="relative w-64 h-64 mb-8">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="12"
                />
                {/* Investment portion */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="12"
                  strokeDasharray={`${investmentPercentage * 2.51} 251`}
                  className="transition-all duration-700 ease-out"
                />
                {/* Returns portion */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--gold))"
                  strokeWidth="12"
                  strokeDasharray={`${returnsPercentage * 2.51} 251`}
                  strokeDashoffset={`${-investmentPercentage * 2.51}`}
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold gradient-text">
                  {formatCurrency(calculations.futureValue)}
                </p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex gap-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">
                  Invested ({investmentPercentage.toFixed(0)}%)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gold" />
                <span className="text-sm text-muted-foreground">
                  Returns ({returnsPercentage.toFixed(0)}%)
                </span>
              </div>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              Start Your SIP Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIPCalculatorSection;
