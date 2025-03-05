import { DeliveryAddressCard } from "./DeliveryAddressCard";
import type { DeliveryAddress } from "@/types/settings";

interface AddressListProps {
  addresses: DeliveryAddress[];
  onSetDefault: (id: number) => void;
}

export const AddressList = ({ addresses, onSetDefault }: AddressListProps) => {
  return (
    <div className="space-y-4">
      {addresses.map((address) => (
        <DeliveryAddressCard
          key={address.id}
          address={address}
          onSetDefault={onSetDefault}
        />
      ))}
    </div>
  );
};