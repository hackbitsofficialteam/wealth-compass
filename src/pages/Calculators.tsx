import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CalculatorHub } from "@/components/calculators/CalculatorHub";
import { SIPCalculator } from "@/components/calculators/SIPCalculator";
import { LumpsumCalculator } from "@/components/calculators/LumpsumCalculator";
import { SWPCalculator } from "@/components/calculators/SWPCalculator";
import { GoalCalculator } from "@/components/calculators/GoalCalculator";
import { RetirementCalculator } from "@/components/calculators/RetirementCalculator";

export type CalculatorType = "hub" | "sip" | "lumpsum" | "swp" | "goal" | "retirement";

const Calculators = () => {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>("hub");

  const renderCalculator = () => {
    switch (activeCalculator) {
      case "sip":
        return <SIPCalculator onBack={() => setActiveCalculator("hub")} />;
      case "lumpsum":
        return <LumpsumCalculator onBack={() => setActiveCalculator("hub")} />;
      case "swp":
        return <SWPCalculator onBack={() => setActiveCalculator("hub")} />;
      case "goal":
        return <GoalCalculator onBack={() => setActiveCalculator("hub")} />;
      case "retirement":
        return <RetirementCalculator onBack={() => setActiveCalculator("hub")} />;
      default:
        return <CalculatorHub onSelectCalculator={setActiveCalculator} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="section-padding">
        <div className="custom-container">
          {renderCalculator()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calculators;
