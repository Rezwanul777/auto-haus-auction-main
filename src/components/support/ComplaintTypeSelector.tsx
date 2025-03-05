
import { Car, Wrench, Gauge, ScrollText, Truck, User } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ComplaintTypeCard } from "./ComplaintTypeCard";

export type ComplaintType = {
  id: string;
  icon: JSX.Element;
  label: string;
  description: string;
}

const complaintTypes: ComplaintType[] = [
  {
    id: 'body',
    icon: <Car className="w-6 h-6" />,
    label: 'Kaross',
    description: 'Problem med bilens kaross eller exteriör'
  },
  {
    id: 'engine',
    icon: <Wrench className="w-6 h-6" />,
    label: 'Motor',
    description: 'Problem med motor eller motorkomponenter'
  },
  {
    id: 'interior',
    icon: <Car className="w-6 h-6" />,
    label: 'Interiör',
    description: 'Problem med bilens interiör'
  },
  {
    id: 'underbody',
    icon: <Car className="w-6 h-6" />,
    label: 'Underrede',
    description: 'Problem med bilens underrede'
  },
  {
    id: 'tires',
    icon: <Gauge className="w-6 h-6" />,
    label: 'Däck och fälgar',
    description: 'Problem med däck och fälgar'
  },
  {
    id: 'brakes',
    icon: <Gauge className="w-6 h-6" />,
    label: 'Bromsar',
    description: 'Problem med bromssystemet'
  },
  {
    id: 'missing_documents',
    icon: <ScrollText className="w-6 h-6" />,
    label: 'Saknade dokument',
    description: 'Saknade eller felaktiga dokument'
  },
  {
    id: 'mileage',
    icon: <Gauge className="w-6 h-6" />,
    label: 'Mätarställning',
    description: 'Manipulation av mätarställning'
  },
  {
    id: 'incorrect_details',
    icon: <Car className="w-6 h-6" />,
    label: 'Felaktiga uppgifter',
    description: 'Felaktiga fordonsuppgifter'
  },
  {
    id: 'delivery_delay',
    icon: <Truck className="w-6 h-6" />,
    label: 'Leveransförsening',
    description: 'Problem med leveranstiden'
  },
  {
    id: 'other',
    icon: <User className="w-6 h-6" />,
    label: 'Övrigt',
    description: 'Annat problem'
  }
];

interface ComplaintTypeSelectorProps {
  onSelect: (type: ComplaintType) => void;
}

export const ComplaintTypeSelector = ({ onSelect }: ComplaintTypeSelectorProps) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">
      <ScrollArea className="h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
          {complaintTypes.map((type) => (
            <ComplaintTypeCard 
              key={type.id}
              type={type}
              onSelect={onSelect}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

