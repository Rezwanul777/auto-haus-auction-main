import { Card } from "@/components/ui/card";
import VehicleHeader from "./VehicleHeader";
import InfoSection from "./InfoSection";

interface CarBasicInfoProps {
  car: {
    make: string;
    model: string;
    year: number;
    mileage: number;
    engineType: string;
    transmission: string;
    images?: string[];
  };
}

const CarBasicInfo = ({ car }: CarBasicInfoProps) => {
  const vehicleInfo = [
    { label: "Reg nr", value: "ABC123" },
    { label: "VIN nummer", value: "12345678901234567" },
    { label: "Modell", value: `${car.make} ${car.model}` },
    { label: "Årsmodell", value: car.year },
    { label: "Växellåda", value: car.transmission },
    { label: "Miltal", value: `${car.mileage} km` },
    { label: "Chassi", value: "123456" },
    { label: "Drivmedel", value: car.engineType },
    { label: "Färg", value: "Svart" },
    { label: "Antal säten", value: "5" },
  ];

  const additionalInfo = [
    { label: "Antal ägare", value: "2" },
    { label: "Antal nycklar", value: "2" },
    { label: "Ursprungsland", value: "Sverige" },
    { label: "Senaste registrering", value: "2023" },
    { label: "Motor", value: "2.0L T5" },
    { label: "Hästkrafter", value: "250" },
    { label: "Motorvolym", value: "2.0L" },
    { label: "Miljöklass", value: "Euro 6" },
    { label: "Olycksfordon", value: "Nej" },
    { label: "Antal dörrar", value: "5" },
    { label: "Besiktning utlöper", value: "2024-12" },
    { label: "Klädsel", value: "Svart läder" },
  ];

  return (
    <Card className="glass-card overflow-hidden animate-fade-in">
      <div className="p-6 space-y-6">
        <VehicleHeader 
          make={car.make} 
          model={car.model} 
          year={car.year} 
          images={car.images}
        />
        <InfoSection title="Fordonsuppgifter" items={vehicleInfo} />
        <InfoSection title="Ytterligare information" items={additionalInfo} />
      </div>
    </Card>
  );
};

export default CarBasicInfo;