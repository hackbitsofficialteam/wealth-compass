import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Clock, TrendingUp, Wallet } from "lucide-react";

interface RetirementCalculatorProps {
  onBack: () => void;
}

export const RetirementCalculator = ({ onBack }: RetirementCalculatorProps) => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
  const [currentSavings, setCurrentSavings] = useState(500000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [inflation, setInflation] = useState(6);

  const results = useMemo(() => {
    const yearsToRetirement = retirementAge - currentAge;
    const yearsInRetirement = 25; // Assuming 25 years of retirement
    
    // Adjust expenses for inflation at retirement
    const expensesAtRetirement = monthlyExpenses * Math.pow(1 + inflation / 100, yearsToRetirement);
    const annualExpensesAtRetirement = expensesAtRetirement * 12;
    
    // Calculate corpus needed (25 years of expenses adjusted for inflation)
    const realReturn = (expectedReturn - inflation) / 100;
    const corpusNeeded = annualExpensesAtRetirement * ((1 - Math.pow(1 + realReturn, -yearsInRetirement)) / realReturn);
    
    // Future value of current savings
    const futureValueOfSavings = currentSavings * Math.pow(1 + expectedReturn / 100, yearsToRetirement);
    
    // Gap to fill
    const gap = Math.max(corpusNeeded - futureValueOfSavings, 0);
    
    // Monthly SIP needed
    const monthlyRate = expectedReturn / 12 / 100;
    const months = yearsToRetirement * 12;
    const monthlySIPNeeded = gap / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate * (1 + monthlyRate));
    
    return {
      corpusNeeded: Math.round(corpusNeeded),
      expensesAtRetirement: Math.round(expensesAtRetirement),
      yearsToRetirement,
      monthlySIPNeeded: Math.round(Math.max(monthlySIPNeeded, 0)),
      futureValueOfSavings: Math.round(futureValueOfSavings),
    };
  }, [currentAge, retirementAge, monthlyExpenses, currentSavings, expectedReturn, inflation]);

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
          Retirement Calculator
        </h1>
        <p className="text-muted-foreground">
          Plan for a financially secure retirement
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="bg-card rounded-2xl border border-border shadow-card p-6 space-y-6">
          {/* Current Age */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Current Age</label>
              <span className="font-bold text-sky-blue">{currentAge} years</span>
            </div>
            <Slider
              value={[currentAge]}
              onValueChange={(v) => setCurrentAge(v[0])}
              min={18}
              max={55}
              step={1}
              className="w-full"
            />
          </div>

          {/* Retirement Age */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Retirement Age</label>
              <span className="font-bold text-sky-blue">{retirementAge} years</span>
            </div>
            <Slider
              value={[retirementAge]}
              onValueChange={(v) => setRetirementAge(v[0])}
              min={45}
              max={70}
              step={1}
              className="w-full"
            />
          </div>

          {/* Monthly Expenses */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Monthly Expenses (Today)</label>
              <span className="font-bold text-sky-blue">{formatCurrency(monthlyExpenses)}</span>
            </div>
            <Slider
              value={[monthlyExpenses]}
              onValueChange={(v) => setMonthlyExpenses(v[0])}
              min={10000}
              max={500000}
              step={5000}
              className="w-full"
            />
          </div>

          {/* Current Savings */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Current Retirement Savings</label>
              <span className="font-bold text-sky-blue">{formatCurrency(currentSavings)}</span>
            </div>
            <Slider
              value={[currentSavings]}
              onValueChange={(v) => setCurrentSavings(v[0])}
              min={0}
              max={50000000}
              step={100000}
              className="w-full"
            />
          </div>

          {/* Expected Return */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Expected Return</label>
              <span className="font-bold text-sky-blue">{expectedReturn}%</span>
            </div>
            <Slider
              value={[expectedReturn]}
              onValueChange={(v) => setExpectedReturn(v[0])}
              min={6}
              max={18}
              step={0.5}
              className="w-full"
            />
          </div>

          {/* Inflation */}
          <div>
            <div className="flex justify-between mb-3">
              <label className="font-medium">Expected Inflation</label>
              <span className="font-bold text-sky-blue">{inflation}%</span>
            </div>
            <Slider
              value={[inflation]}
              onValueChange={(v) => setInflation(v[0])}
              min={3}
              max={10}
              step={0.5}
              className="w-full"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-sky-blue/10 to-secondary/10 rounded-2xl border border-sky-blue/20 p-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Wallet className="h-5 w-5" />
              <span className="text-sm">Retirement Corpus Needed</span>
            </div>
            <p className="text-4xl md:text-5xl font-bold text-sky-blue">
              {formatCurrency(results.corpusNeeded)}
            </p>
            <p className="text-muted-foreground mt-2 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              in {results.yearsToRetirement} years
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-xl border border-border p-4">
              <p className="text-sm text-muted-foreground mb-1">Monthly Expenses at Retirement</p>
              <p className="text-lg font-bold text-foreground">{formatCurrency(results.expensesAtRetirement)}</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-4">
              <p className="text-sm text-muted-foreground mb-1">Current Savings Will Grow To</p>
              <p className="text-lg font-bold text-green-600">{formatCurrency(results.futureValueOfSavings)}</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl border-2 border-primary p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-semibold">Monthly SIP Required</span>
            </div>
            <p className="text-3xl font-bold text-primary mb-2">
              {formatCurrency(results.monthlySIPNeeded)}
            </p>
            <p className="text-sm text-muted-foreground">
              Start investing this amount monthly to retire comfortably
            </p>
          </div>

          <Button className="w-full bg-sky-blue hover:bg-sky-blue/90 text-foreground" size="lg">
            Start Retirement Planning
          </Button>
        </div>
      </div>
    </div>
  );
};
