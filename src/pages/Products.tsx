import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ProductsHero } from "@/components/products/ProductsHero";
import { FilterSidebar } from "@/components/products/FilterSidebar";
import { FundGrid } from "@/components/products/FundGrid";
import { FundDetailModal } from "@/components/products/FundDetailModal";
import { allFunds } from "@/data/fundsData";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Funds");
  const [selectedAMC, setSelectedAMC] = useState("All AMCs");
  const [selectedRisk, setSelectedRisk] = useState("All Risks");
  const [sortBy, setSortBy] = useState("returns-1y");
  const [selectedFund, setSelectedFund] = useState<typeof allFunds[0] | null>(null);
  const [quickFilter, setQuickFilter] = useState<string | null>(null);

  const filteredFunds = useMemo(() => {
    let funds = [...allFunds];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      funds = funds.filter(
        (fund) =>
          fund.name.toLowerCase().includes(query) ||
          fund.amc.toLowerCase().includes(query) ||
          fund.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== "All Funds") {
      funds = funds.filter((fund) => fund.category === selectedCategory);
    }

    // AMC filter
    if (selectedAMC !== "All AMCs") {
      funds = funds.filter((fund) => fund.amc === selectedAMC);
    }

    // Risk filter
    if (selectedRisk !== "All Risks") {
      funds = funds.filter((fund) => fund.risk === selectedRisk);
    }

    // Quick filters
    if (quickFilter) {
      switch (quickFilter) {
        case "top-rated":
          funds = funds.filter((fund) => fund.rating === 5);
          break;
        case "high-returns":
          funds = funds.filter((fund) => fund.returns["1Y"] > 20);
          break;
        case "low-risk":
          funds = funds.filter((fund) => fund.risk === "Low" || fund.risk === "Moderate");
          break;
        case "tax-saving":
          funds = funds.filter((fund) => fund.category === "ELSS");
          break;
      }
    }

    // Sorting
    switch (sortBy) {
      case "returns-1y":
        funds.sort((a, b) => b.returns["1Y"] - a.returns["1Y"]);
        break;
      case "returns-3y":
        funds.sort((a, b) => b.returns["3Y"] - a.returns["3Y"]);
        break;
      case "rating":
        funds.sort((a, b) => b.rating - a.rating);
        break;
      case "aum":
        funds.sort((a, b) => {
          const aumA = parseFloat(a.aum.replace(/[^0-9.]/g, ""));
          const aumB = parseFloat(b.aum.replace(/[^0-9.]/g, ""));
          return aumB - aumA;
        });
        break;
      case "name":
        funds.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return funds;
  }, [searchQuery, selectedCategory, selectedAMC, selectedRisk, sortBy, quickFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ProductsHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <section className="section-padding">
          <div className="custom-container">
            <div className="flex flex-col lg:flex-row gap-8">
              <FilterSidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedAMC={selectedAMC}
                setSelectedAMC={setSelectedAMC}
                selectedRisk={selectedRisk}
                setSelectedRisk={setSelectedRisk}
                sortBy={sortBy}
                setSortBy={setSortBy}
                quickFilter={quickFilter}
                setQuickFilter={setQuickFilter}
                fundCount={filteredFunds.length}
              />
              <FundGrid funds={filteredFunds} onFundClick={setSelectedFund} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FundDetailModal fund={selectedFund} onClose={() => setSelectedFund(null)} />
    </div>
  );
};

export default Products;
