
import { Star } from "lucide-react";
import CarCard from "@/components/auctions/CarCard";

interface FeaturedCar {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  image: string;
}

interface FeaturedCarsProps {
  cars: FeaturedCar[];
}

const FeaturedCars = ({ cars }: FeaturedCarsProps) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
        <Star className="w-6 h-6 text-accent" />
        Utvalda bilar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isFavorite={false}
            onFavoriteToggle={() => console.log('Toggle favorite:', car.id)}
            onCardClick={() => console.log('Card clicked:', car.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCars;
