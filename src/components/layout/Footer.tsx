import { footerLinks } from "@/data/mockData";
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin, Shield, Award, CheckCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold">
                UNI<span className="text-primary">CAP</span>
              </span>
            </a>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              Your Partner in Wealth Creation. India's most intelligent mutual fund platform, trusted by thousands of investors.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@unicap.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Bandra Kurla Complex, Mumbai, Maharashtra 400051</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="border-t border-background/10">
        <div className="container-custom py-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-background/60">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>SEBI Registered: INZ000123456</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-gold" />
              <span>AMFI Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© 2024 UNICAP. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <span className="text-destructive">❤️</span> in India
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="/disclaimer" className="hover:text-background transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Disclaimer */}
      <div className="border-t border-background/10 bg-background/5">
        <div className="container-custom py-4">
          <p className="text-xs text-background/40 text-center leading-relaxed">
            Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance is not indicative of future returns. UNICAP is a SEBI registered mutual fund distributor.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
