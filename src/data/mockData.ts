// Mock data for UNICAP platform

export const marketTickerData = [
  { name: "NIFTY 50", value: "22,147.50", change: "+0.82%", isPositive: true },
  { name: "SENSEX", value: "73,088.33", change: "-0.32%", isPositive: false },
  { name: "NIFTY BANK", value: "47,234.80", change: "+1.15%", isPositive: true },
  { name: "Gold", value: "₹6,340/gm", change: "+1.24%", isPositive: true },
  { name: "Silver", value: "₹76,890/kg", change: "-0.45%", isPositive: false },
  { name: "USD/INR", value: "83.12", change: "+0.08%", isPositive: true },
];

export const features = [
  {
    icon: "Coins",
    title: "Zero Commission",
    description: "Invest directly in mutual funds with absolutely no commission or hidden charges. What you earn is fully yours.",
  },
  {
    icon: "Brain",
    title: "AI-Powered Recommendations",
    description: "Get personalized fund suggestions based on your risk profile, goals, and market conditions using advanced AI.",
  },
  {
    icon: "Calendar",
    title: "One-Click SIP",
    description: "Set up systematic investment plans in seconds. Automate your wealth building with just one click.",
  },
  {
    icon: "TrendingUp",
    title: "Real-Time Tracking",
    description: "Monitor your portfolio performance in real-time with beautiful charts and instant updates.",
  },
  {
    icon: "Shield",
    title: "Tax Optimization",
    description: "Smart tax-loss harvesting and ELSS recommendations to maximize your returns while minimizing tax liability.",
  },
  {
    icon: "Headphones",
    title: "24/7 Expert Support",
    description: "Get help anytime from our team of certified financial advisors. We're here whenever you need us.",
  },
];

export const stats = [
  { value: 2400, suffix: " Cr+", label: "Assets Under Management" },
  { value: 50000, suffix: "+", label: "Happy Investors" },
  { value: 2000, suffix: "+", label: "Partner Distributors" },
  { value: 4.9, suffix: "/5.0", label: "Average Rating", decimals: 1 },
];

export const testimonials = [
  {
    id: 1,
    quote: "UNICAP transformed how I invest. The AI recommendations helped me build a portfolio that's up 24% this year. Absolutely incredible platform!",
    name: "Priya Sharma",
    role: "IT Professional, Bangalore",
    rating: 5,
    avatar: "PS",
  },
  {
    id: 2,
    quote: "As a first-time investor, I was nervous. But UNICAP made everything so simple. The one-click SIP feature is a game-changer!",
    name: "Rahul Mehta",
    role: "Startup Founder, Mumbai",
    rating: 5,
    avatar: "RM",
  },
  {
    id: 3,
    quote: "The tax optimization suggestions alone saved me ₹45,000 last year. Plus, their support team is phenomenal. Highly recommend!",
    name: "Anjali Desai",
    role: "Doctor, Pune",
    rating: 5,
    avatar: "AD",
  },
  {
    id: 4,
    quote: "I've tried multiple platforms, but UNICAP's interface is by far the cleanest. Real-time tracking gives me peace of mind.",
    name: "Vikram Singh",
    role: "Business Owner, Delhi",
    rating: 5,
    avatar: "VS",
  },
  {
    id: 5,
    quote: "Managing my parents' retirement corpus became so easy with UNICAP. The goal tracker helps us stay on track perfectly.",
    name: "Neha Kapoor",
    role: "Marketing Manager, Chennai",
    rating: 5,
    avatar: "NK",
  },
];

export const fundCategories = [
  { id: "large-cap", name: "Large Cap", count: 245 },
  { id: "mid-cap", name: "Mid Cap", count: 189 },
  { id: "small-cap", name: "Small Cap", count: 156 },
  { id: "hybrid", name: "Hybrid", count: 134 },
  { id: "debt", name: "Debt", count: 312 },
  { id: "elss", name: "ELSS", count: 78 },
  { id: "index", name: "Index Funds", count: 92 },
];

export const topFunds = [
  {
    id: 1,
    name: "Axis Bluechip Fund",
    category: "Large Cap",
    amc: "Axis",
    returns: { "1Y": 18.4, "3Y": 14.2, "5Y": 16.8 },
    risk: "Moderate",
    rating: 5,
    nav: 52.34,
    minSIP: 500,
    aum: "34,567 Cr",
  },
  {
    id: 2,
    name: "HDFC Mid-Cap Opportunities",
    category: "Mid Cap",
    amc: "HDFC",
    returns: { "1Y": 28.6, "3Y": 22.4, "5Y": 19.2 },
    risk: "High",
    rating: 5,
    nav: 124.56,
    minSIP: 500,
    aum: "45,234 Cr",
  },
  {
    id: 3,
    name: "SBI Small Cap Fund",
    category: "Small Cap",
    amc: "SBI",
    returns: { "1Y": 35.2, "3Y": 28.9, "5Y": 24.6 },
    risk: "Very High",
    rating: 4,
    nav: 145.78,
    minSIP: 500,
    aum: "23,456 Cr",
  },
  {
    id: 4,
    name: "ICICI Pru Balanced Advantage",
    category: "Hybrid",
    amc: "ICICI",
    returns: { "1Y": 12.4, "3Y": 11.8, "5Y": 13.2 },
    risk: "Moderate",
    rating: 5,
    nav: 67.89,
    minSIP: 1000,
    aum: "56,789 Cr",
  },
  {
    id: 5,
    name: "Mirae Asset Tax Saver",
    category: "ELSS",
    amc: "Mirae",
    returns: { "1Y": 22.8, "3Y": 18.4, "5Y": 17.6 },
    risk: "High",
    rating: 5,
    nav: 38.45,
    minSIP: 500,
    aum: "18,234 Cr",
  },
  {
    id: 6,
    name: "UTI Nifty 50 Index Fund",
    category: "Index",
    amc: "UTI",
    returns: { "1Y": 15.6, "3Y": 13.2, "5Y": 14.8 },
    risk: "Moderate",
    rating: 4,
    nav: 134.56,
    minSIP: 500,
    aum: "12,345 Cr",
  },
];

export const trustBadges = [
  { label: "SEBI Registered", icon: "Shield" },
  { label: "AMFI Member", icon: "Award" },
  { label: "ISO Certified", icon: "CheckCircle" },
  { label: "256-bit Secure", icon: "Lock" },
];

export const footerLinks = {
  products: [
    { label: "Large Cap Funds", href: "/funds/large-cap" },
    { label: "Mid Cap Funds", href: "/funds/mid-cap" },
    { label: "Small Cap Funds", href: "/funds/small-cap" },
    { label: "ELSS Tax Saver", href: "/funds/elss" },
    { label: "Debt Funds", href: "/funds/debt" },
    { label: "Index Funds", href: "/funds/index" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Investment Guides", href: "/guides" },
    { label: "Calculators", href: "/calculators" },
    { label: "FAQs", href: "/faqs" },
    { label: "Glossary", href: "/glossary" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
