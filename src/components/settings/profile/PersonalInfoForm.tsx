
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Phone, Mail, Home, CreditCard, Globe } from "lucide-react";

export const PersonalInfoForm = () => {
  const { toast } = useToast();
  const [fullName, setFullName] = useState("");
  const [personalNumber, setPersonalNumber] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("Sverige");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profil uppdaterad",
      description: "Dina personliga uppgifter har sparats.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-white/80 flex items-center gap-2">
            <User className="h-4 w-4" /> Fullständigt namn
          </Label>
          <Input
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="bg-black/20 border-white/10 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="personalNumber" className="text-white/80 flex items-center gap-2">
            <CreditCard className="h-4 w-4" /> Personnummer
          </Label>
          <Input
            id="personalNumber"
            value={personalNumber}
            onChange={(e) => setPersonalNumber(e.target.value)}
            className="bg-black/20 border-white/10 text-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-white/80 flex items-center gap-2">
          <Home className="h-4 w-4" /> Adress
        </Label>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <Input
              placeholder="Gatuadress"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            <Input
              placeholder="Postnummer"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="col-span-5 md:col-span-2">
            <Input
              placeholder="Ort"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="col-span-3 md:col-span-2">
            <Select value={country} onValueChange={setCountry}>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white/80 flex items-center gap-2">
            <Phone className="h-4 w-4" /> Telefon
          </Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black/20 border-white/10 text-white"
          />
        </div>
      </div>

      <Button type="submit" className="w-full md:w-auto">Spara ändringar</Button>
    </form>
  );
};
