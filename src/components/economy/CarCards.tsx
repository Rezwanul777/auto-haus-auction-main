
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Receipt } from "lucide-react";
import { motion } from "framer-motion";
import { CarStatusBadges } from "./CarStatusBadges";
import { CarTrackingInfo } from "./CarTrackingInfo";
import { CarDetailedInfo } from "./CarDetailedInfo";

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  status: string;
  paymentStatus: string;
  deliveryStatus: string | null;
  contractId: string;
  invoiceId: string;
  price: string;
  purchaseDate?: string;
  paymentDate?: string;
  deliveryAddress?: {
    name: string;
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  documentAddress?: {
    name: string;
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  tracking?: {
    status: string;
    code: string;
    timeline: {
      ordered: string;
      sent: string;
      delivered: string;
    };
  };
}

interface CarCardsProps {
  cars: Car[];
  selectedCar: number | null;
  setSelectedCar: (id: number | null) => void;
}

export const CarCards = ({ cars, selectedCar, setSelectedCar }: CarCardsProps) => {
  return (
    <div className="space-y-4 md:space-y-6">
      {cars.map((car, index) => (
        <motion.div
          key={car.id}
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card 
            className="glass-card hover-scale w-full mx-auto"
            onClick={() => setSelectedCar(selectedCar === car.id ? null : car.id)}
          >
            <CardContent className="p-4 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
                <h3 className="text-lg md:text-2xl font-semibold text-white">
                  {car.make} {car.model} {car.year}
                </h3>
                <span className="text-xl md:text-3xl font-bold text-accent">{car.price}</span>
              </div>
              
              <CarStatusBadges 
                status={car.status}
                paymentStatus={car.paymentStatus}
                deliveryStatus={car.deliveryStatus}
              />

              {selectedCar === car.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/10 space-y-4 md:space-y-6"
                >
                  <CarDetailedInfo 
                    purchaseDate={car.purchaseDate}
                    paymentDate={car.paymentDate}
                    deliveryAddress={car.deliveryAddress}
                  />

                  {car.tracking && (
                    <CarTrackingInfo 
                      status={car.tracking.status}
                      timeline={car.tracking.timeline}
                    />
                  )}

                  <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="flex-1 gap-3 text-sm md:text-base"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Viewing contract:', car.contractId);
                      }}
                    >
                      <FileText className="w-4 h-4 md:w-5 md:h-5" />
                      Visa Kontrakt
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="flex-1 gap-3 text-sm md:text-base"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Viewing invoice:', car.invoiceId);
                      }}
                    >
                      <Receipt className="w-4 h-4 md:w-5 md:h-5" />
                      Visa Faktura
                    </Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
