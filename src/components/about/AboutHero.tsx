import { ChevronDown } from "lucide-react";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920')"
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Built by Investors, for Investors
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          We believe wealth creation should be transparent, intelligent, and accessible to every Indian.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="h-8 w-8 text-gold" />
      </div>
    </section>
  );
};
