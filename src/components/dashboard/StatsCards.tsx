
import { Card, CardContent } from "@/components/ui/card";
import { Car, TrendingUp, TrendingDown, DollarSign } from "lucide-react";

const statsCards = [
  {
    title: "Aktiva auktioner",
    value: "12",
    change: "+2",
    trend: "up",
    icon: <Car className="h-4 w-4" />
  },
  {
    title: "Budgivningar",
    value: "48",
    change: "+5",
    trend: "up",
    icon: <TrendingUp className="h-4 w-4" />
  },
  {
    title: "Avslutade affärer",
    value: "156",
    change: "-3",
    trend: "down",
    icon: <TrendingDown className="h-4 w-4" />
  },
  {
    title: "Totalt värde",
    value: "2.4M kr",
    change: "+12%",
    trend: "up",
    icon: <DollarSign className="h-4 w-4" />
  }
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsCards.map((stat, index) => (
        <Card 
          key={index} 
          className="bg-black/20 backdrop-blur-sm border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" 
        >
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-medium text-white/80">
                {stat.title}
              </span>
              <div className="p-2 bg-white/5 rounded-full">
                <div className="text-white/80">
                  {stat.icon}
                </div>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.change}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
