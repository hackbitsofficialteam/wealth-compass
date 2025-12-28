import { allFunds } from "@/data/fundsData";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Download, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FundDetailModalProps {
  fund: typeof allFunds[0] | null;
  onClose: () => void;
}

export const FundDetailModal = ({ fund, onClose }: FundDetailModalProps) => {
  if (!fund) return null;

  return (
    <Dialog open={!!fund} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-lg font-bold text-primary shrink-0">
              {fund.amc.substring(0, 2)}
            </div>
            <div className="flex-1">
              <DialogTitle className="text-xl font-bold mb-2">{fund.name}</DialogTitle>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="secondary">{fund.category}</Badge>
                <Badge variant="outline">{fund.amc}</Badge>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < fund.rating ? "fill-gold text-gold" : "fill-muted text-muted"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="returns">Returns</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6 space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">NAV</p>
                <p className="text-xl font-bold">₹{fund.nav.toFixed(2)}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">AUM</p>
                <p className="text-xl font-bold">₹{fund.aum}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">Expense Ratio</p>
                <p className="text-xl font-bold">{fund.expenseRatio}%</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">Min SIP</p>
                <p className="text-xl font-bold">₹{fund.minSIP}</p>
              </div>
            </div>

            {/* Fund Info */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h4 className="font-semibold">Fund Information</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Fund Manager</p>
                  <p className="font-medium">{fund.fundManager}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Benchmark</p>
                  <p className="font-medium">{fund.benchmark}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Launch Date</p>
                  <p className="font-medium">{fund.launchDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Exit Load</p>
                  <p className="font-medium">{fund.exitLoad}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="returns" className="mt-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-semibold mb-4">Historical Returns</h4>
              <div className="space-y-4">
                {Object.entries(fund.returns).map(([period, value]) => (
                  <div key={period} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{period} Returns</span>
                    <div className="flex items-center gap-3">
                      <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full",
                            value > 0 ? "bg-green-500" : "bg-red-500"
                          )}
                          style={{ width: `${Math.min(Math.abs(value) * 2, 100)}%` }}
                        />
                      </div>
                      <span className={cn("font-bold min-w-[60px] text-right", value > 0 ? "text-green-600" : "text-red-600")}>
                        {value > 0 ? "+" : ""}{value}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="mt-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-semibold mb-4">Top Holdings</h4>
              <p className="text-muted-foreground">Portfolio details will be available soon.</p>
            </div>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <div className="space-y-3">
              {["Scheme Information Document", "Key Information Memorandum", "Factsheet"].map((doc) => (
                <div key={doc} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                  <span className="font-medium">{doc}</span>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-background pt-4 border-t border-border mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Min Investment</p>
            <p className="font-bold">SIP: ₹{fund.minSIP} | Lumpsum: ₹{fund.minLumpsum}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Add to Watchlist</Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <TrendingUp className="h-4 w-4 mr-2" />
              Invest Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
