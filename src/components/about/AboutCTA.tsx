import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";

export const AboutCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-2xl" />

      <div className="custom-container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join India's Fastest Growing Investment Community
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Start your wealth creation journey today with UNICAP. Zero commission, expert guidance, and powerful tools at your fingertips.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold shadow-elegant group"
            >
              Open Free Account
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 font-semibold"
            >
              <Handshake className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
