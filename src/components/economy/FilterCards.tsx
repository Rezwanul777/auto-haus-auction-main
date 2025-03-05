
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface FilterCardsProps {
  filter: string;
  setFilter: (value: string) => void;
  cars: any[];
}

export const FilterCards = ({ filter, setFilter, cars }: FilterCardsProps) => {
  const filterOptions = [
    { value: "all", label: "Alla" },
    { value: "köpta", label: "Köpta" },
    { value: "sålda", label: "Sålda" },
    { value: "obetalda", label: "Obetalda" },
    { value: "klara", label: "Klara" }
  ];

  const getFilteredCount = (value: string) => {
    return cars.filter(car => 
      value === "all" ? true :
      value === "köpta" ? car.status === "Köpt" :
      value === "sålda" ? car.status === "Såld" :
      value === "obetalda" ? car.paymentStatus === "Obetald" :
      car.paymentStatus === "Klar"
    ).length;
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8 mt-8 md:mt-12">
      {filterOptions.map(({ value, label }) => (
        <Card 
          key={value}
          className={`glass-card hover-scale cursor-pointer transition-all h-24 md:h-32 ${
            filter === value ? 'ring-2 ring-accent' : ''
          }`}
          onClick={() => setFilter(value)}
        >
          <CardContent className="p-4 md:p-6 text-center flex flex-col justify-center h-full">
            <h3 className="text-sm md:text-xl font-semibold text-white capitalize">
              {label}
            </h3>
            <p className="text-xs md:text-sm text-white/60 mt-1 md:mt-2">
              {getFilteredCount(value)} bilar
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
