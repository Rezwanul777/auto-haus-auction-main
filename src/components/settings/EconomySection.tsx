
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { BankSection } from "./economy/BankSection";
import { InvoiceSection } from "./economy/InvoiceSection";

export const EconomySection = () => {
  const { toast } = useToast();
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    bankAddress: "",
    iban: "",
    swift: "",
  });

  const [invoiceDetails, setInvoiceDetails] = useState({
    email: "",
    address: "",
    reference: "",
  });

  const [bankAccounts, setBankAccounts] = useState([
    { id: 1, accountNumber: "1234-5678", bankName: "Swedbank", isDefault: true },
    { id: 2, accountNumber: "8765-4321", bankName: "SEB", isDefault: false },
  ]);

  const handleBankDetailsChange = (field: string, value: string) => {
    setBankDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInvoiceDetailsChange = (field: string, value: string) => {
    setInvoiceDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddBankAccount = () => {
    if (bankDetails.bankName && bankDetails.iban) {
      const newAccount = {
        id: bankAccounts.length + 1,
        accountNumber: bankDetails.iban,
        bankName: bankDetails.bankName,
        isDefault: bankAccounts.length === 0,
      };
      
      setBankAccounts([...bankAccounts, newAccount]);
      setBankDetails({
        bankName: "",
        bankAddress: "",
        iban: "",
        swift: "",
      });

      toast({
        title: "Bankkonto tillagt",
        description: "Ditt nya bankkonto har lagts till.",
      });
    }
  };

  const handleSave = () => {
    toast({
      title: "Ekonomiinställningar uppdaterade",
      description: "Dina ekonomiinställningar har sparats.",
    });
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg text-white">Ekonomiinställningar</CardTitle>
        <CardDescription className="text-white/60">
          Hantera dina ekonomiska preferenser och betalningsmetoder
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <InvoiceSection 
          invoiceDetails={invoiceDetails}
          onInvoiceDetailsChange={handleInvoiceDetailsChange}
        />

        <Separator className="bg-white/10" />

        <BankSection 
          bankDetails={bankDetails}
          bankAccounts={bankAccounts}
          onBankDetailsChange={handleBankDetailsChange}
          onAddBankAccount={handleAddBankAccount}
        />

        <Button onClick={handleSave} className="w-full md:w-auto">
          Spara ekonomiinställningar
        </Button>
      </CardContent>
    </Card>
  );
};
