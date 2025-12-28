import { Calculator, TrendingUp, TrendingDown, Target, Clock, ArrowRight } from "lucide-react";
import { CalculatorType } from "@/pages/Calculators";

interface CalculatorHubProps {
  onSelectCalculator: (type: CalculatorType) => void;
}

const calculators = [
  {
    id: "sip" as CalculatorType,
    name: "SIP Calculator",
    description: "Plan your systematic investment and see how small monthly investments grow over time.",
    icon: Calculator,
    color: "from-primary to-primary/80",
    borderColor: "border-primary/30 hover:border-primary",
  },
  {
    id: "lumpsum" as CalculatorType,
    name: "Lumpsum Calculator",
    description: "Calculate returns on one-time investments and plan your lump sum deployment.",
    icon: TrendingUp,
    color: "from-secondary to-secondary/80",
    borderColor: "border-secondary/30 hover:border-secondary",
  },
  {
    id: "swp" as CalculatorType,
    name: "SWP Calculator",
    description: "Plan systematic withdrawals from your investments for regular income.",
    icon: TrendingDown,
    color: "from-gold to-gold/80",
    borderColor: "border-gold/30 hover:border-gold",
  },
  {
    id: "goal" as CalculatorType,
    name: "Goal Planner",
    description: "Set financial goals and discover how much you need to invest to achieve them.",
    icon: Target,
    color: "from-amber to-amber/80",
    borderColor: "border-amber/30 hover:border-amber",
  },
  {
    id: "retirement" as CalculatorType,
    name: "Retirement Calculator",
    description: "Plan your retirement corpus and ensure a financially secure future.",
    icon: Clock,
    color: "from-sky-blue to-sky-blue/80",
    borderColor: "border-sky-blue/30 hover:border-sky-blue",
  },
];

export const CalculatorHub = ({ onSelectCalculator }: CalculatorHubProps) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Financial Calculators
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Plan your investments with our powerful calculators. Get instant insights into your financial future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc, index) => {
          const Icon = calc.icon;
          
          return (
            <button
              key={calc.id}
              onClick={() => onSelectCalculator(calc.id)}
              className={`group text-left bg-card p-6 rounded-2xl border-2 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${calc.borderColor}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${calc.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {calc.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {calc.description}
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Try Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
