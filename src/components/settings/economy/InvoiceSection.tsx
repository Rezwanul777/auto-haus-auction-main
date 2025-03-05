
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface InvoiceDetails {
  email: string;
  address: string;
  reference: string;
}

interface InvoiceSectionProps {
  invoiceDetails: InvoiceDetails;
  onInvoiceDetailsChange: (field: string, value: string) => void;
}

export const InvoiceSection = ({ invoiceDetails, onInvoiceDetailsChange }: InvoiceSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Fakturainformation</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="invoiceEmail" className="text-white/80">Faktura E-post</Label>
            <Input
              id="invoiceEmail"
              type="email"
              value={invoiceDetails.email}
              onChange={(e) => onInvoiceDetailsChange('email', e.target.value)}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="invoiceReference" className="text-white/80">Fakturareferens</Label>
            <Input
              id="invoiceReference"
              value={invoiceDetails.reference}
              onChange={(e) => onInvoiceDetailsChange('reference', e.target.value)}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="invoiceAddress" className="text-white/80">Fakturaadress</Label>
          <Input
            id="invoiceAddress"
            value={invoiceDetails.address}
            onChange={(e) => onInvoiceDetailsChange('address', e.target.value)}
            className="bg-black/20 border-white/10 text-white"
          />
        </div>
        <Button 
          variant="outline" 
          className="w-full md:w-auto bg-black/20 border-white/10 text-white hover:bg-black/30"
        >
          Spara fakturainformation
        </Button>
      </div>
    </div>
  );
};
