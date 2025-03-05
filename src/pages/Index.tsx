import CarouselSection from "@/components/CarouselSection";
import AuctionGroups from "@/components/index/AuctionGroups";
import FeaturedCars from "@/components/index/FeaturedCars";
import BackgroundEffects from "@/components/index/BackgroundEffects";

const auctionGroups = [
  {
    id: 1,
    title: "Premium Bilhandlare Stockholm",
    description: "Exklusiva bilar från Stockholms ledande återförsäljare",
    type: "dealer",
    totalCars: 12,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    timeLeft: "2 dagar",
  },
  {
    id: 2,
    title: "Företagsbilar Göteborg",
    description: "Leasingbilar från större företag i Göteborgsområdet",
    type: "corporate",
    totalCars: 8,
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd",
    timeLeft: "3 dagar",
  },
  {
    id: 3,
    title: "Privatimport Tyskland",
    description: "Handplockade importbilar från Tyskland",
    type: "import",
    totalCars: 15,
    image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771",
    timeLeft: "4 dagar",
  },
  {
    id: 4,
    title: "Premium Sport",
    description: "Sportbilar och prestandamodeller",
    type: "sport",
    totalCars: 6,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    timeLeft: "5 dagar",
  },
];

const featuredCars = [
  {
    id: 1,
    make: "Volvo",
    model: "XC90",
    year: 2021,
    price: 649000,
    mileage: 45000,
    image: "https://images.unsplash.com/photo-1698433564787-0d9cbf5f9271"
  },
  {
    id: 2,
    make: "BMW",
    model: "M4",
    year: 2022,
    price: 859000,
    mileage: 15000,
    image: "https://images.unsplash.com/photo-1697434210813-d68c6925a88c"
  },
  {
    id: 3,
    make: "Audi",
    model: "e-tron GT",
    year: 2023,
    price: 1249000,
    mileage: 5000,
    image: "https://images.unsplash.com/photo-1697433277636-e56b47eb6943"
  },
  {
    id: 4,
    make: "Porsche",
    model: "911 GT3",
    year: 2022,
    price: 2149000,
    mileage: 8000,
    image: "https://images.unsplash.com/photo-1697432337107-e8165f36ce73"
  },
  {
    id: 5,
    make: "Mercedes-Benz",
    model: "AMG GT",
    year: 2023,
    price: 1849000,
    mileage: 3000,
    image: "https://images.unsplash.com/photo-1697433277636-e56b47eb6943"
  },
  {
    id: 6,
    make: "Tesla",
    model: "Model S Plaid",
    year: 2023,
    price: 1449000,
    mileage: 1000,
    image: "https://images.unsplash.com/photo-1697432337107-e8165f36ce73"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <BackgroundEffects />
      <div className="relative">
        <CarouselSection />
        
        <div className="container mx-auto px-4 py-12">
          <AuctionGroups groups={auctionGroups} />
          <FeaturedCars cars={featuredCars} />
        </div>
      </div>
    </div>
  );
};

export default Index;
