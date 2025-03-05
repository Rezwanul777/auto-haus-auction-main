import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FinancialOptions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="glass-card hover-scale">
        <CardHeader>
          <CardTitle className="text-white">Finansieringsalternativ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <h3 className="font-semibold text-white mb-2">Billån</h3>
            <p className="text-sm text-white/60">Förmånlig ränta från 3.95% med upp till 84 månaders återbetalningstid.</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <h3 className="font-semibold text-white mb-2">Leasing</h3>
            <p className="text-sm text-white/60">Flexibla leasingavtal för både privatpersoner och företag.</p>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <h3 className="font-semibold text-white mb-2">Privatlån</h3>
            <p className="text-sm text-white/60">Snabb hantering och konkurrenskraftiga villkor.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card hover-scale">
        <CardHeader>
          <CardTitle className="text-white">Kostnadsberäkning</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <h3 className="font-semibold text-white mb-2">Månadskostnad</h3>
            <p className="text-sm text-white/60 mb-4">Beräkna din månadskostnad baserat på dina förutsättningar.</p>
            <Button className="w-full bg-white/10 hover:bg-white/20 text-white">Beräkna kostnad</Button>
          </div>
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <h3 className="font-semibold text-white mb-2">Försäkring</h3>
            <p className="text-sm text-white/60 mb-4">Vi samarbetar med ledande försäkringsbolag för bästa villkor.</p>
            <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/10">
              Jämför försäkringar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};