
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { NewAddress } from "@/types/settings";

interface AddressFormProps {
  onAddressAdded: () => void;
}

export const AddressForm = ({ onAddressAdded }: AddressFormProps) => {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState<NewAddress[]>([]);
  const [newAddress, setNewAddress] = useState<NewAddress>({
    company_name: "",
    org_number: "",
    contact_person: "",
    street: "",
    postal_code: "",
    city: "",
    country: "Sverige",
  });

  const handleSubmit = () => {
    if (!newAddress.company_name || !newAddress.contact_person || !newAddress.street || !newAddress.postal_code || !newAddress.city) {
      toast.error("Vänligen fyll i alla obligatoriska fält");
      return;
    }

    setAddresses([...addresses, newAddress]);
    setNewAddress({
      company_name: "",
      org_number: "",
      contact_person: "",
      street: "",
      postal_code: "",
      city: "",
      country: "Sverige",
    });
    setShowForm(false);
    toast.success("Adress tillagd");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white mb-4">Sparade adresser</h2>
      
      {addresses.length > 0 && (
        <div className="space-y-2">
          {addresses.map((address, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-black/20 border border-white/10 hover:bg-black/30 transition-colors cursor-pointer"
            >
              <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-white">{address.company_name}</p>
                <p className="text-sm text-gray-400">
                  {address.street}, {address.postal_code} {address.city}, {address.country}
                </p>
              </div>
              {index === 0 && (
                <span className="text-xs px-2 py-1 rounded bg-[#D4AF37]/20 text-[#D4AF37]">
                  Standard
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {!showForm ? (
        <Button 
          onClick={() => setShowForm(true)}
          className="w-full bg-[#D4AF37] text-white hover:bg-[#D4AF37]/80"
        >
          Lägg till ny adress
        </Button>
      ) : (
        <div className="space-y-4 p-4 rounded-lg bg-black/20 border border-white/10">
          <h3 className="text-lg font-semibold text-[#D4AF37]">Lägg till ny adress</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Företagsnamn *"
              value={newAddress.company_name}
              onChange={(e) => setNewAddress({ ...newAddress, company_name: e.target.value })}
              className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Organisationsnummer"
              value={newAddress.org_number}
              onChange={(e) => setNewAddress({ ...newAddress, org_number: e.target.value })}
              className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Kontaktperson *"
              value={newAddress.contact_person}
              onChange={(e) => setNewAddress({ ...newAddress, contact_person: e.target.value })}
              className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Gatuadress *"
              value={newAddress.street}
              onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
              className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Postnummer *"
              value={newAddress.postal_code}
              onChange={(e) => setNewAddress({ ...newAddress, postal_code: e.target.value })}
              className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
            />
            <Input
              placeholder="Stad *"
              value={newAddress.city}
              onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
              className="bg-transparent border-white/20 text-white placeholder:text-gray-400"
            />
            <Select
              value={newAddress.country}
              onValueChange={(value) => setNewAddress({ ...newAddress, country: value })}
            >
              <SelectTrigger className="bg-transparent border-white/20 text-white">
                <SelectValue placeholder="Välj land" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-white/20">
                <SelectItem value="Sverige" className="text-white hover:bg-white/10">Sverige</SelectItem>
                <SelectItem value="Norge" className="text-white hover:bg-white/10">Norge</SelectItem>
                <SelectItem value="Danmark" className="text-white hover:bg-white/10">Danmark</SelectItem>
                <SelectItem value="Finland" className="text-white hover:bg-white/10">Finland</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={handleSubmit}
              className="flex-1 bg-[#D4AF37] text-white hover:bg-[#D4AF37]/80"
            >
              Lägg till adress
            </Button>
            <Button 
              onClick={() => setShowForm(false)}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Avbryt
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
