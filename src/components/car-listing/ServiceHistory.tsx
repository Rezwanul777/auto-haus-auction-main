
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceEntry from "./service-history/ServiceEntry";

interface ServiceHistoryProps {
  service: {
    history: Array<{
      date: string;
      mileage: string;
      description: string;
      images?: string[];
    }>;
  };
}

const ServiceHistory = ({ service }: ServiceHistoryProps) => {
  const serviceHistory = service?.history || [];

  return (
    <Card className="glass-card animate-fade-in">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="service-history" className="border-none">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <span className="text-xl font-semibold text-white">Servicehistorik</span>
            <ChevronDown className="h-5 w-5 text-white shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            <div className="space-y-4">
              {serviceHistory.map((entry, index) => (
                <ServiceEntry
                  key={index}
                  date={entry.date}
                  mileage={entry.mileage}
                  description={entry.description}
                  images={entry.images}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default ServiceHistory;
