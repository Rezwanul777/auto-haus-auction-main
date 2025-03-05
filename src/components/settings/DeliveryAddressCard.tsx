import { Button } from "@/components/ui/button";
import type { DeliveryAddress } from "@/types/settings";

interface DeliveryAddressCardProps {
  address: DeliveryAddress;
  onSetDefault: (id: number) => void;
}

export const DeliveryAddressCard = ({ address, onSetDefault }: DeliveryAddressCardProps) => {
  return (
    <div className="p-4 rounded-lg bg-black/20 border border-white/10 flex justify-between items-center">
      <div>
        <p className="font-semibold text-[#D4AF37]">{address.company_name}</p>
        <p className="text-sm text-gray-300">
          {address.org_number && `Org.nr: ${address.org_number}, `}
          {address.contact_person && `Kontakt: ${address.contact_person}`}
        </p>
        <p className="text-sm text-gray-300">
          {address.street}, {address.postal_code} {address.city}, {address.country}
        </p>
        {address.is_default && (
          <span className="text-xs text-[#D4AF37]">Standard leveransadress</span>
        )}
      </div>
      {!address.is_default && (
        <Button 
          variant="outline"
          className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
          onClick={() => onSetDefault(address.id)}
        >
          Sätt som standard
        </Button>
      )}
    </div>
  );
};