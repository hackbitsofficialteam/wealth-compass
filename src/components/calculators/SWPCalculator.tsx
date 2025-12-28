import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Wallet, TrendingDown } from "lucide-react";

interface SWPCalculatorProps {
  onBack: () => void;
}

export const SWPCalculator = ({ onBack }: SWPCalculatorProps) => {
  const [corpus, setCorpus] = useState(5000000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(25000);
  const [years, setYears] = useState(20);
  const [expectedReturn, setExpectedReturn] = useState(8);

  const results = useMemo(() => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = years * 12;
    const totalWithdrawn = monthlyWithdrawal * months;
    
    // Calculate remaining corpus after SWP
    let remainingCorpus = corpus;
    for (let i = 0; i < months; i++) {
      remainingCorpus = remainingCorpus * (1 + monthlyRate) - monthlyWithdrawal;
      if (remainingCorpus < 0) {
        remainingCorpus = 0;
        break;
      }
    }
    
    return {
      totalWithdrawn,
      remainingCorpus: Math.round(Math.max(remainingCorpus, 0)),
      monthsLast: remainingCorpus > 0 ? months : Math.floor(corpus / monthlyWithdrawal),
    };
  }, [corpus, monthlyWithdrawal, years, expectedReturn]);

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
          SWP Calculator
        </h1>
        <p className="text-muted-foreground">
          Plan systematic withdrawals for regular income
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="bg-card rounded-2xl border border-border shadow-card p-6 space-y-8">
          {/* Initial Corpus */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Initial Investment</label>
              <span className="font-bold text-gold">{formatCurrency(corpus)}</span>
            </div>
            <Slider
              value={[corpus]}
              onValueChange={(v) => setCorpus(v[0])}
              min={500000}
              max={50000000}
              step={100000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>₹5 L</span>
              <span>₹5 Cr</span>
            </div>
          </div>

          {/* Monthly Withdrawal */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Monthly Withdrawal</label>
              <span className="font-bold text-gold">{formatCurrency(monthlyWithdrawal)}</span>
            </div>
            <Slider
              value={[monthlyWithdrawal]}
              onValueChange={(v) => setMonthlyWithdrawal(v[0])}
              min={5000}
              max={200000}
              step={5000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>₹5,000</span>
              <span>₹2,00,000</span>
            </div>
          </div>

          {/* Time Period */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Withdrawal Period</label>
              <span className="font-bold text-gold">{years} Years</span>
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
              <span className="font-bold text-gold">{expectedReturn}%</span>
            </div>
            <Slider
              value={[expectedReturn]}
              onValueChange={(v) => setExpectedReturn(v[0])}
              min={1}
              max={15}
              step={0.5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>1%</span>
              <span>15%</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gold/10 to-amber/10 rounded-2xl border border-gold/20 p-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <TrendingDown className="h-5 w-5" />
              <span className="text-sm">Total Withdrawn</span>
            </div>
            <p className="text-4xl md:text-5xl font-bold text-gold">
              {formatCurrency(results.totalWithdrawn)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-xl border border-border p-4">
              <p className="text-sm text-muted-foreground mb-1">Monthly Income</p>
              <p className="text-xl font-bold text-foreground">{formatCurrency(monthlyWithdrawal)}</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4">
              <p className="text-sm text-muted-foreground mb-1">Remaining Corpus</p>
              <p className="text-xl font-bold text-green-600">{formatCurrency(results.remainingCorpus)}</p>
            </div>
          </div>

          {/* Visual Chart */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <div className="flex items-center gap-2 mb-4">
              <Wallet className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Corpus Status After {years} Years</span>
            </div>
            <div className="relative h-6 bg-muted rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-gold rounded-full transition-all duration-500"
                style={{ width: `${Math.min((results.remainingCorpus / corpus) * 100, 100)}%` }}
              />
            </div>
            <div className="flex justify-between mt-3 text-sm">
              <span className="text-muted-foreground">Remaining: {((results.remainingCorpus / corpus) * 100).toFixed(0)}%</span>
              <span className="text-muted-foreground">Withdrawn: {((1 - results.remainingCorpus / corpus) * 100).toFixed(0)}%</span>
            </div>
          </div>

          <Button className="w-full bg-gold hover:bg-gold/90 text-foreground" size="lg">
            Start SWP
          </Button>
        </div>
      </div>
    </div>
  );
};
