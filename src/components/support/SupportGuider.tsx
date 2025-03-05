
import { Play, FileText, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface GuideCard {
  title: string;
  description: string;
  duration: string;
  icon: "video" | "document";
}

const guideCards: GuideCard[] = [
  {
    title: "Hur skapar man en annons?",
    description: "Steg-för-steg guide för att skapa din första annons",
    duration: "5:30 min",
    icon: "video"
  },
  {
    title: "Hur fungerar auktioner?",
    description: "En komplett guide till vårt auktionssystem",
    duration: "3 min",
    icon: "document"
  },
  {
    title: "Tips för en lyckad försäljning",
    description: "Expertråd för att maximera din försäljning",
    duration: "8:45 min",
    icon: "video"
  },
  {
    title: "Betalning och leverans",
    description: "Information om betalningsalternativ och leveransprocess",
    duration: "4 min",
    icon: "document"
  }
];

export const SupportGuider = () => {
  return (
    <div className="flex flex-col gap-8 mb-8 animate-fade-in">
      <div className="flex items-center gap-2 text-2xl font-semibold text-white">
        <Clock className="w-6 h-6 text-orange-500" />
        <h2>Support Guider</h2>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        {guideCards.map((card, index) => (
          <Card 
            key={index}
            className="relative overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-black/40 border-white/10"
          >
            <div className="p-6 flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-medium text-white">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.description}</p>
                </div>
                <div className="ml-4">
                  {card.icon === "video" ? (
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Play className="w-4 h-4 text-orange-500" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-blue-500" />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">{card.duration}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
