import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { NewAddress } from "@/types/settings";

interface NewDeliveryAddressFormProps {
  address: NewAddress;
  onChange: (address: NewAddress) => void;
  onSubmit: () => void;
}

export const NewDeliveryAddressForm = ({ 
  address, 
  onChange, 
  onSubmit 
}: NewDeliveryAddressFormProps) => {
  return (
    <div className="space-y-4 p-4 rounded-lg bg-black/20 border border-white/10">
      <h3 className="text-lg font-semibold text-[#D4AF37]">Lägg till ny adress</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Företagsnamn"
          value={address.company_name}
          onChange={(e) => onChange({ ...address, company_name: e.target.value })}
          className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
        />
        <Input
          placeholder="Organisationsnummer"
          value={address.org_number}
          onChange={(e) => onChange({ ...address, org_number: e.target.value })}
          className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
        />
        <Input
          placeholder="Kontaktperson"
          value={address.contact_person}
          onChange={(e) => onChange({ ...address, contact_person: e.target.value })}
          className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
        />
        <Input
          placeholder="Gatuadress"
          value={address.street}
          onChange={(e) => onChange({ ...address, street: e.target.value })}
          className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
        />
        <Input
          placeholder="Postnummer"
          value={address.postal_code}
          onChange={(e) => onChange({ ...address, postal_code: e.target.value })}
          className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
        />
        <Input
          placeholder="Stad"
          value={address.city}
          onChange={(e) => onChange({ ...address, city: e.target.value })}
          className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
        />
        <Input
          placeholder="Land"
          value={address.country}
          onChange={(e) => onChange({ ...address, country: e.target.value })}
          className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
        />
      </div>
      <Button 
        onClick={onSubmit}
        className="w-full bg-[#D4AF37] text-white hover:bg-[#D4AF37]/80"
      >
        Lägg till adress
      </Button>
    </div>
  );
};