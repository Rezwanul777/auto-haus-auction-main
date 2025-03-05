
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Phone, Mail, Home, CreditCard, BadgeEuro, Globe } from "lucide-react";

interface CompanyFormData {
  companyName: string;
  orgNumber: string;
  vatNumber: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
  };
}

export const CompanyInfoForm = () => {
  const [formData, setFormData] = useState<CompanyFormData>({
    companyName: "",
    orgNumber: "",
    vatNumber: "",
    address: {
      street: "",
      postalCode: "",
      city: "",
      country: "Sverige"
    },
    contact: {
      phone: "",
      email: ""
    }
  });

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [section, key] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...(prev[section as keyof typeof prev] as Record<string, string>),
          [key]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Company Name Section */}
      <div className="space-y-2">
        <Label htmlFor="companyName" className="text-white/80 flex items-center gap-2">
          <Building2 className="h-4 w-4" /> Företagsnamn
        </Label>
        <Input
          id="companyName"
          value={formData.companyName}
          onChange={(e) => handleInputChange('companyName', e.target.value)}
          className="bg-black/20 border-white/10 text-white"
        />
      </div>

      {/* Registration Numbers Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="orgNumber" className="text-white/80 flex items-center gap-2">
            <CreditCard className="h-4 w-4" /> Organisationsnummer
          </Label>
          <Input
            id="orgNumber"
            value={formData.orgNumber}
            onChange={(e) => handleInputChange('orgNumber', e.target.value)}
            className="bg-black/20 border-white/10 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vatNumber" className="text-white/80 flex items-center gap-2">
            <BadgeEuro className="h-4 w-4" /> Momsregistreringsnummer
          </Label>
          <Input
            id="vatNumber"
            value={formData.vatNumber}
            onChange={(e) => handleInputChange('vatNumber', e.target.value)}
            className="bg-black/20 border-white/10 text-white"
          />
        </div>
      </div>

      {/* Address Section */}
      <div className="space-y-2">
        <Label className="text-white/80 flex items-center gap-2">
          <Home className="h-4 w-4" /> Adress
        </Label>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <Input
              placeholder="Gatuadress"
              value={formData.address.street}
              onChange={(e) => handleInputChange('address.street', e.target.value)}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            <Input
              placeholder="Postnummer"
              value={formData.address.postalCode}
              onChange={(e) => handleInputChange('address.postalCode', e.target.value)}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="col-span-5 md:col-span-2">
            <Input
              placeholder="Ort"
              value={formData.address.city}
              onChange={(e) => handleInputChange('address.city', e.target.value)}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <Select 
              value={formData.address.country} 
              onValueChange={(value) => handleInputChange('address.country', value)}
            >
              <SelectTrigger className="bg-black/20 border-white/10 text-white h-10">
                <Globe className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sverige">Sverige</SelectItem>
                <SelectItem value="Norge">Norge</SelectItem>
                <SelectItem value="Danmark">Danmark</SelectItem>
                <SelectItem value="Finland">Finland</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white/80 flex items-center gap-2">
            <Phone className="h-4 w-4" /> Telefon
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.contact.phone}
            onChange={(e) => handleInputChange('contact.phone', e.target.value)}
            className="bg-black/20 border-white/10 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white/80 flex items-center gap-2">
            <Mail className="h-4 w-4" /> Email
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.contact.email}
            onChange={(e) => handleInputChange('contact.email', e.target.value)}
            className="bg-black/20 border-white/10 text-white"
          />
        </div>
      </div>

      <Button type="submit" className="w-full md:w-auto">Spara ändringar</Button>
    </form>
  );
};
