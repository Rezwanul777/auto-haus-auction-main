import { useState } from "react";
import { DeliveryMethodSelector } from "./DeliveryMethodSelector";
import { AddressDisplay } from "./AddressDisplay";
import { PurchaseStatus } from "./PurchaseStatus";

interface Address {
  name: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

interface CarDetailedInfoProps {
  purchaseDate?: string;
  paymentDate?: string;
  deliveryAddress?: Address;
  pickupAddress?: Address;
}

export const CarDetailedInfo = ({ 
  purchaseDate, 
  paymentDate, 
  deliveryAddress,
  pickupAddress = {
    name: "Bilcenter Stockholm",
    street: "Industrivägen 12",
    postalCode: "172 68",
    city: "Stockholm",
    country: "Sweden"
  }
}: CarDetailedInfoProps) => {
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');

  return (
    <div className="space-y-6">
      <PurchaseStatus 
        purchaseDate={purchaseDate}
        paymentDate={paymentDate}
      />
      
      <DeliveryMethodSelector 
        value={deliveryMethod}
        onChange={setDeliveryMethod}
      />

      {deliveryMethod === 'pickup' && (
        <AddressDisplay type="pickup" address={pickupAddress} />
      )}

      {deliveryMethod === 'delivery' && (
        <AddressDisplay type="delivery" address={deliveryAddress} />
      )}
    </div>
  );
};