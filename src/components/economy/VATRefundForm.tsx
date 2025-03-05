
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface CompanyInfo {
  name: string;
  orgNumber: string;
  vatNumber: string;
  contact: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

interface VehicleInfo {
  brand: string;
  model: string;
  regNumber: string;
  amount: string;
  submissionDate: string;
}

export const VATRefundForm = () => {
  const { toast } = useToast();
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: "",
    orgNumber: "",
    vatNumber: "",
    contact: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    country: "Sverige"
  });

  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo>({
    brand: "",
    model: "",
    regNumber: "",
    amount: "",
    submissionDate: new Date().toISOString().split('T')[0]
  });

  const [description, setDescription] = useState("");

  const handleCompanyInfoChange = (field: keyof CompanyInfo) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyInfo(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleVehicleInfoChange = (field: keyof VehicleInfo) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setVehicleInfo(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Här kan vi hantera inlämningen av formuläret
    console.log({ companyInfo, vehicleInfo, description });
    toast({
      title: "Ansökan skickad",
      description: "Din momsåterbäringsansökan har skickats in.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg text-white">Företagsinformation</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company" className="text-white/80">Företag</Label>
            <Input
              id="company"
              value={companyInfo.name}
              onChange={handleCompanyInfoChange("name")}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="orgNumber" className="text-white/80">Org.nummer</Label>
            <Input
              id="orgNumber"
              value={companyInfo.orgNumber}
              onChange={handleCompanyInfoChange("orgNumber")}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vatNumber" className="text-white/80">VAT-nummer</Label>
            <Input
              id="vatNumber"
              value={companyInfo.vatNumber}
              onChange={handleCompanyInfoChange("vatNumber")}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact" className="text-white/80">Kontakt</Label>
            <Input
              id="contact"
              value={companyInfo.contact}
              onChange={handleCompanyInfoChange("contact")}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/80">E-post</Label>
            <Input
              id="email"
              type="email"
              value={companyInfo.email}
              onChange={handleCompanyInfoChange("email")}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white/80">Telefon</Label>
            <Input
              id="phone"
              value={companyInfo.phone}
              onChange={handleCompanyInfoChange("phone")}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address" className="text-white/80">Adress</Label>
            <Input
              id="address"
              value={companyInfo.address}
              onChange={handleCompanyInfoChange("address")}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="postalCode" className="text-white/80">Postnummer</Label>
            <Input
              id="postalCode"
              value={companyInfo.postalCode}
              onChange={handleCompanyInfoChange("postalCode")}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city" className="text-white/80">Ort</Label>
            <Input
              id="city"
              value={companyInfo.city}
              onChange={handleCompanyInfoChange("city")}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg text-white">Fordonsinformation</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="brand" className="text-white/80">Märke</Label>
            <Input
              id="brand"
              value={vehicleInfo.brand}
              onChange={handleVehicleInfoChange("brand")}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="model" className="text-white/80">Modell</Label>
            <Input
              id="model"
              value={vehicleInfo.model}
              onChange={handleVehicleInfoChange("model")}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="regNumber" className="text-white/80">Reg.nummer</Label>
            <Input
              id="regNumber"
              value={vehicleInfo.regNumber}
              onChange={handleVehicleInfoChange("regNumber")}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-white/80">Belopp</Label>
            <Input
              id="amount"
              value={vehicleInfo.amount}
              onChange={handleVehicleInfoChange("amount")}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg text-white">Beskrivning</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ange beskrivning av momsåterbäring..."
            className="min-h-[100px] bg-black/20 border-white/10 text-white"
          />
        </CardContent>
      </Card>

      <Button type="submit" className="w-full">Skicka in ansökan</Button>
    </form>
  );
};
