import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bookmark, Archive } from "lucide-react";
import CarCard from "@/components/auctions/CarCard";

const Favorites = () => {
  const [favoritedCars] = useState([
    {
      id: 1,
      make: "Volvo",
      model: "XC90",
      year: 2024,
      price: 289000,
      mileage: 15000,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },
    {
      id: 2,
      make: "BMW",
      model: "X5",
      year: 2023,
      price: 399000,
      mileage: 8000,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    },
  ]);

  const [archivedCars] = useState([
    {
      id: 3,
      make: "Audi",
      model: "Q7",
      year: 2022,
      price: 359000,
      mileage: 25000,
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd",
    },
  ]);

  return (
    <div className="relative min-h-screen animate-fade-in overflow-hidden">
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 75% 25%, rgba(234, 56, 76, 0.15) 0%, transparent 35%),
            radial-gradient(circle at 25% 75%, rgba(234, 56, 76, 0.12) 0%, transparent 35%),
            radial-gradient(circle at 50% 50%, rgba(234, 56, 76, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 15% 25%, rgba(234, 56, 76, 0.08) 0%, transparent 30%),
            radial-gradient(circle at 85% 85%, rgba(234, 56, 76, 0.12) 0%, transparent 35%)
          `
        }}
      />
      
      <div className="container mx-auto p-4 space-y-6 relative z-10">
        <h1 className="text-3xl font-bold text-white mb-8">Mina Sparade Bilar</h1>

        <Tabs defaultValue="favorites" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-black/40 backdrop-blur-sm">
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Bookmark className="w-4 h-4" />
              Favoriter ({favoritedCars.length})
            </TabsTrigger>
            <TabsTrigger value="archived" className="flex items-center gap-2">
              <Archive className="w-4 h-4" />
              Arkiverade ({archivedCars.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="favorites">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favoritedCars.length > 0 ? (
                favoritedCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    isFavorite={true}
                    onFavoriteToggle={() => {}}
                    onCardClick={() => {}}
                  />
                ))
              ) : (
                <p className="text-center text-white/60 col-span-2">Inga favoriter än</p>
              )}
            </div>
          </TabsContent>

          <TabsContent value="archived">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {archivedCars.length > 0 ? (
                archivedCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    isFavorite={false}
                    onFavoriteToggle={() => {}}
                    onCardClick={() => {}}
                  />
                ))
              ) : (
                <p className="text-center text-white/60 col-span-2">Inga arkiverade bilar</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Favorites;