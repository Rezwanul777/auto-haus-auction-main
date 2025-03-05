import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gavel } from "lucide-react";
import { useState } from "react";
import SearchBar from "@/components/auctions/SearchBar";
import SortSelector from "@/components/auctions/SortSelector";
import CarCard from "@/components/auctions/CarCard";

const mockCars = {
  "monday-new": [
    {
      id: 1,
      make: "Volvo",
      model: "XC90",
      year: 2024,
      price: 789000,
      mileage: 0,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },
    {
      id: 2,
      make: "BMW",
      model: "iX",
      year: 2024,
      price: 989000,
      mileage: 100,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    },
  ],
  "wednesday-used": [
    {
      id: 3,
      make: "Audi",
      model: "A6",
      year: 2022,
      price: 459000,
      mileage: 25000,
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd",
    },
    {
      id: 4,
      make: "Tesla",
      model: "Model 3",
      year: 2023,
      price: 389000,
      mileage: 15000,
      image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771",
    },
  ],
  "friday-premium": [
    {
      id: 5,
      make: "Porsche",
      model: "911",
      year: 2024,
      price: 1789000,
      mileage: 500,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },
    {
      id: 6,
      make: "Mercedes-Benz",
      model: "AMG GT",
      year: 2023,
      price: 1589000,
      mileage: 1000,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    },
  ],
};

const AuctionDetails = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const cars = type ? mockCars[type as keyof typeof mockCars] : [];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("price-asc");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredCars = cars
    .filter((car) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        car.make.toLowerCase().includes(searchLower) ||
        car.model.toLowerCase().includes(searchLower) ||
        car.year.toString().includes(searchLower)
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "year-desc":
          return b.year - a.year;
        case "year-asc":
          return a.year - b.year;
        default:
          return 0;
      }
    });

  const toggleFavorite = (carId: number) => {
    setFavorites((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  };

  const handleCarClick = (carId: number) => {
    navigate(`/auctions/${type}/car/${carId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      <div className="container max-w-6xl py-8 px-4">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            className="gap-2 text-white/80 hover:text-white hover:bg-white/10"
            onClick={() => navigate('/auctions')}
          >
            <ArrowLeft className="w-4 h-4" />
            Tillbaka till auktioner
          </Button>
          <div className="flex items-center gap-2">
            <Gavel className="w-6 h-6 text-accent" />
            <h1 className="text-3xl font-bold text-white">Bilar i auktionen</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6 animate-fade-in">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
        </div>

        <div className="grid gap-4">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isFavorite={favorites.includes(car.id)}
              onFavoriteToggle={toggleFavorite}
              onCardClick={handleCarClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuctionDetails;
