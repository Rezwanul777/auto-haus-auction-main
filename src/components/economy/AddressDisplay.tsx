import { MapPin, Truck } from "lucide-react";

interface Address {
  name: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

interface AddressDisplayProps {
  type: 'pickup' | 'delivery';
  address?: Address;
}

export const AddressDisplay = ({ type, address }: AddressDisplayProps) => {
  const Icon = type === 'pickup' ? MapPin : Truck;
  const title = type === 'pickup' ? 'Upphämtningsadress' : 'Leveransadress';

  return (
    <div className="flex items-start gap-3 text-white/80 mt-4">
      <Icon className="w-5 h-5 text-yellow-400 mt-1" />
      <div>
        <div className="font-semibold">{title}</div>
        {address ? (
          <>
            <div>{address.name}</div>
            <div>{address.street}</div>
            <div>
              {address.postalCode} {address.city}
            </div>
            <div>{address.country}</div>
          </>
        ) : (
          <div className="text-yellow-400">
            Vänligen fyll i din leveransadress i inställningar
          </div>
        )}
      </div>
    </div>
  );
};