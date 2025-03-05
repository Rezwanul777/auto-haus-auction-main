
import { useParams } from "react-router-dom";
import { useState } from "react";
import CarBasicInfo from "@/components/car-listing/CarBasicInfo";
import EquipmentList from "@/components/car-listing/EquipmentList";
import ServiceHistory from "@/components/car-listing/ServiceHistory";
import ScrollableImages from "@/components/car-listing/ScrollableImages";
import BiddingInfo from "@/components/car-listing/bidding/BiddingInfo";
import BiddingDetails from "@/components/car-listing/bidding/BiddingDetails";
import CarListingLayout from "@/components/car-listing/CarListingLayout";
import TestProtocol from "@/components/car-listing/TestProtocol";
import { useIsMobile } from "@/hooks/use-mobile";

const CarListing = () => {
  const { type, id } = useParams();
  const [timeLeft, setTimeLeft] = useState("2d 4h 35m");
  const [currentBid, setCurrentBid] = useState(289000);
  const [nextMinBid, setNextMinBid] = useState(290000);
  const isMobile = useIsMobile();
  const location = "Hägerstens Allé 10, Stockholm";

  const car = {
    id: Number(id),
    make: "Volvo",
    model: "XC90",
    year: 2024,
    price: 289000,
    mileage: 15000,
    engineType: "Diesel",
    power: "235 hk",
    transmission: "Automatisk",
    taxType: "moms",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd",
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    ],
    equipment: [
      "Läderklädsel",
      "Panoramatak",
      "Navigation",
      "Parkeringssensorer",
      "Uppvärmda säten",
      "Farthållare",
      "Klimatanläggning",
      "Bluetooth",
      "LED-strålkastare",
      "Elstolar",
      "Apple CarPlay",
      "Android Auto"
    ],
    service: {
      history: [
        {
          date: "2023-12-01",
          mileage: "45000",
          description: "Årlig service, oljebyte",
          images: [
            "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
          ]
        },
        {
          date: "2022-12-15",
          mileage: "30000",
          description: "Bromsbyte, filterbyten",
          images: [
            "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
            "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
          ]
        }
      ]
    },
    tireImages: [
      "/path/to/tire1.jpg",
      "/path/to/tire2.jpg",
      "/path/to/tire3.jpg"
    ],
    damageImages: [
      "/path/to/damage1.jpg",
      "/path/to/damage2.jpg"
    ],
    tireInfo: {
      current: {
        front: {
          tireDepth: "6.5",
          brakeCondition: "Bra skick"
        },
        back: {
          tireDepth: "6.2",
          brakeCondition: "Bra skick"
        }
      },
      extra: {
        front: {
          tireDepth: "5.0",
          brakeCondition: "Normalt slitage"
        },
        back: {
          tireDepth: "4.8",
          brakeCondition: "Normalt slitage"
        }
      }
    }
  };

  return (
    <CarListingLayout type={type}>
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 ${isMobile ? 'pb-48' : ''}`}>
        <div className="lg:col-span-2 space-y-6">
          <CarBasicInfo car={car} />
          <EquipmentList equipment={car.equipment} />
          <ServiceHistory service={car.service} />
          <ScrollableImages 
            title="Hjul Info" 
            images={car.tireImages} 
            tireInfo={car.tireInfo}
          />
          <ScrollableImages 
            title="Skador" 
            images={car.damageImages} 
          />
          <TestProtocol />
          {isMobile && (
            <BiddingDetails currentBid={currentBid} location={location} />
          )}
        </div>
        <div className="lg:col-span-1">
          <BiddingInfo
            currentBid={currentBid}
            nextMinBid={nextMinBid}
            timeLeft={timeLeft}
            car={car}
            location={location}
          />
        </div>
      </div>
    </CarListingLayout>
  );
};

export default CarListing;
