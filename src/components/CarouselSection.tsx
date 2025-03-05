
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Car, Shield, CheckCircle } from "lucide-react";

// Mock data - in a real app this would come from an API
const upcomingAuctions = [
  {
    id: 1,
    image: "/placeholder.svg",
    title: "BMW X5 2021",
    startPrice: "350 000 kr",
    startDate: "2024-03-15",
    timeLeft: "2 dagar",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    title: "Volvo XC90 2022",
    startPrice: "420 000 kr",
    startDate: "2024-03-16",
    timeLeft: "3 dagar",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    title: "Tesla Model 3 2023",
    startPrice: "375 000 kr",
    startDate: "2024-03-17",
    timeLeft: "4 dagar",
  },
  {
    id: 4,
    image: "/placeholder.svg",
    title: "Audi e-tron 2022",
    startPrice: "580 000 kr",
    startDate: "2024-03-18",
    timeLeft: "5 dagar",
  },
];

const CarouselSection = () => {
  return (
    <section className="py-4 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto px-2">
        <div className="relative bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <Car className="w-8 h-8 text-accent" />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
          <p className="text-white text-sm md:text-base text-center leading-relaxed animate-fade-in max-w-3xl mx-auto">
            Här hittar du ett brett urval av begagnade bilar från olika bilmärken, tillgängliga både via auktion och till fast pris. Varje fordon har genomgått en noggrann kontroll, och testresultaten redovisas transparent i annonsen. Vissa bilar är i utmärkt skick, medan andra kan behöva mindre justeringar. Oavsett vilket alternativ du väljer erbjuder vi en trygg och smidig köpprocess.
          </p>
        </div>
        
        <h2 className="text-lg font-bold text-center mb-4 text-primary">
          Kommande Auktioner
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {upcomingAuctions.map((auction, index) => (
              <CarouselItem 
                key={auction.id} 
                className="pl-2 md:basis-1/3 lg:basis-1/4"
                style={{
                  opacity: 0,
                  transform: 'translateX(100%)',
                  animation: `
                    fadeIn 0.5s ease-out ${index * 200}ms forwards,
                    slideIn 0.8s ease-out ${index * 200}ms forwards
                  `
                }}
              >
                <Card className="hover-scale">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={auction.image}
                        alt={auction.title}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-accent text-white text-[10px]">
                        {auction.startPrice}
                      </Badge>
                    </div>
                    <div className="p-2">
                      <h3 className="font-medium text-sm mb-1">{auction.title}</h3>
                      <div className="flex items-center gap-2 text-[10px] text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{auction.startDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{auction.timeLeft}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-3 h-6 w-6" />
          <CarouselNext className="hidden md:flex -right-3 h-6 w-6" />
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSection;
