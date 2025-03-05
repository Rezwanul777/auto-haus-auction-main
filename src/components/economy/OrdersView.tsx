import { OverviewCards } from "./OverviewCards";
import { SalesChart } from "./SalesChart";
import { FilterCards } from "./FilterCards";
import { CarCards } from "./CarCards";
import { useState } from "react";

const cars = [
  { 
    id: 1,
    make: "Volvo",
    model: "XC60",
    year: 2021,
    status: "Såld",
    paymentStatus: "Klar",
    deliveryStatus: "Under leverans",
    contractId: "CTR-001",
    invoiceId: "INV-001",
    price: "425,000 kr",
    purchaseDate: "2025-01-15",
    paymentDate: "2025-01-21",
    deliveryAddress: {
      name: "Logistikzentrum Kungsängen",
      street: "Symmetrivägen 23 Eurotransport i Sverige AB",
      postalCode: "196 37",
      city: "Kungsängen",
      country: "SE"
    },
    documentAddress: {
      name: "BILENIA AB",
      street: "Hägerstens Allé 10",
      postalCode: "129 37",
      city: "Hägersten-Liljeholmen",
      country: "SE"
    },
    tracking: {
      status: "Delivered",
      code: "Online",
      timeline: {
        ordered: "2025-01-15",
        sent: "2025-01-23",
        delivered: "2025-01-23"
      }
    }
  },
  { 
    id: 2,
    make: "BMW",
    model: "X3",
    year: 2022,
    status: "Köpt",
    paymentStatus: "Obetald",
    deliveryStatus: null,
    contractId: "CTR-002",
    invoiceId: "INV-002",
    price: "385,000 kr"
  },
  { 
    id: 3,
    make: "Audi",
    model: "Q5",
    year: 2023,
    status: "Såld",
    paymentStatus: "Klar",
    deliveryStatus: null,
    contractId: "CTR-003",
    invoiceId: "INV-003",
    price: "395,000 kr"
  },
];

export const OrdersView = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedCar, setSelectedCar] = useState<number | null>(null);

  const filteredCars = cars.filter((car) => {
    if (filter === "all") return true;
    if (filter === "köpta") return car.status === "Köpt";
    if (filter === "sålda") return car.status === "Såld";
    if (filter === "obetalda") return car.paymentStatus === "Obetald";
    if (filter === "klara") return car.paymentStatus === "Klar";
    return true;
  });

  return (
    <div>
      <OverviewCards />
      <SalesChart />
      <FilterCards filter={filter} setFilter={setFilter} cars={cars} />
      <CarCards 
        cars={filteredCars} 
        selectedCar={selectedCar} 
        setSelectedCar={setSelectedCar} 
      />
    </div>
  );
};