import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "sonner";
import { AddressList } from "./delivery/AddressList";
import { AddressForm } from "./delivery/AddressForm";
import type { DeliveryAddress } from "@/types/settings";

export const DeliverySection = () => {
  const [addresses, setAddresses] = useState<DeliveryAddress[]>([]);
  const supabase = useSupabaseClient();

  const fetchAddresses = async () => {
    try {
      const { data: contactsData, error } = await supabase
        .from("contacts")
        .select("*")
        .eq("source", "delivery_address");

      if (error) throw error;

      const transformedAddresses = contactsData.map(contact => ({
        id: contact.id,
        company_name: contact.message.split(",")[0] || "",
        org_number: contact.message.split(",")[1] || "",
        contact_person: contact.message.split(",")[2] || "",
        street: contact.message.split(",")[3] || "",
        postal_code: contact.message.split(",")[4] || "",
        city: contact.message.split(",")[5] || "",
        country: contact.message.split(",")[6] || "",
        is_default: contact.source === "delivery_address_default"
      }));

      setAddresses(transformedAddresses);
    } catch (error) {
      console.error("Error fetching addresses:", error);
      toast.error("Kunde inte hämta adresser");
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleSetDefault = async (addressId: number) => {
    try {
      await supabase
        .from("contacts")
        .update({ source: "delivery_address" })
        .eq("source", "delivery_address_default");

      const { error } = await supabase
        .from("contacts")
        .update({ source: "delivery_address_default" })
        .eq("id", addressId);

      if (error) throw error;

      toast.success("Standard leveransadress uppdaterad");
      fetchAddresses();
    } catch (error) {
      console.error("Error setting default address:", error);
      toast.error("Kunde inte uppdatera standard leveransadress");
    }
  };

  return (
    <div className="space-y-6 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#D4AF37]">Leveransadresser</h2>
        
        <AddressList 
          addresses={addresses} 
          onSetDefault={handleSetDefault} 
        />

        <AddressForm onAddressAdded={fetchAddresses} />
      </div>
    </div>
  );
};