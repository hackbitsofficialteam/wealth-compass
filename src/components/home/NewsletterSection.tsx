import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our weekly market insights.",
    });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="text-heading text-foreground mb-4">
            Get <span className="gradient-text">Weekly</span> Market Insights
          </h2>

          {/* Subtext */}
          <p className="text-body-lg text-muted-foreground mb-8">
            Join <span className="font-semibold text-foreground">30,000+</span> investors receiving our expert analysis, fund recommendations, and market updates every week.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 rounded-xl border-2 border-border focus:border-primary text-lg"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold shadow-elegant hover:shadow-glow transition-all group"
              >
                {isLoading ? (
                  <span className="animate-pulse">Subscribing...</span>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 p-6 bg-green-50 dark:bg-green-950/20 rounded-2xl max-w-lg mx-auto">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="h-6 w-6 text-white" />
              </div>
              <p className="text-lg font-medium text-green-700 dark:text-green-400">
                You're subscribed! Check your inbox soon.
              </p>
            </div>
          )}

          {/* Privacy note */}
          <p className="text-sm text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime. Read our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
