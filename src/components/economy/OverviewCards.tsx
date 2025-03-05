
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <Card className="glass-card hover-scale">
        <CardHeader>
          <CardTitle className="text-lg text-white">Totala Intäkter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl md:text-3xl font-bold text-green-400">125,000 kr</p>
          <p className="text-xs md:text-sm text-white/60 mt-2">+12% från förra månaden</p>
        </CardContent>
      </Card>

      <Card className="glass-card hover-scale">
        <CardHeader>
          <CardTitle className="text-lg text-white">Aktiva Auktioner</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl md:text-3xl font-bold text-blue-400">8</p>
          <p className="text-xs md:text-sm text-white/60 mt-2">3 avslutas inom 24h</p>
        </CardContent>
      </Card>

      <Card className="glass-card hover-scale">
        <CardHeader>
          <CardTitle className="text-lg text-white">Genomsnittligt Bud</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl md:text-3xl font-bold text-purple-400">45,000 kr</p>
          <p className="text-xs md:text-sm text-white/60 mt-2">Baserat på senaste 30 dagarna</p>
        </CardContent>
      </Card>
    </div>
  );
};
