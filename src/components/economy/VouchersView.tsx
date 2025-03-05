
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Voucher {
  id: string;
  code: string;
  amount: number;
  description: string;
  expiryDate: string;
  isActive: boolean;
}

// Exempel på kuponger för demonstration
const demoVouchers: Voucher[] = [
  {
    id: "1",
    code: "SOMMAR2024",
    amount: 500,
    description: "Sommarkampanj 2024",
    expiryDate: "2024-08-31",
    isActive: false
  },
  {
    id: "2",
    code: "WELCOME250",
    amount: 250,
    description: "Välkomstkupong för nya användare",
    expiryDate: "2024-12-31",
    isActive: false
  }
];

export const VouchersView = () => {
  const { toast } = useToast();

  const handleActivateVoucher = (voucher: Voucher) => {
    toast({
      title: "Kupong aktiverad",
      description: `Din kupong ${voucher.code} har aktiverats och ${voucher.amount} kr har lagts till ditt saldo.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Mina Kuponger</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {demoVouchers.map((voucher) => (
          <Card key={voucher.id} className="glass-card overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg text-white flex items-center gap-2">
                    <Ticket className="h-5 w-5 text-green-500" />
                    {voucher.code}
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    {voucher.description}
                  </CardDescription>
                </div>
                <div className="text-2xl font-bold text-green-500">
                  {voucher.amount} kr
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/60">
                  Giltigt till: {new Date(voucher.expiryDate).toLocaleDateString()}
                </p>
                <Button
                  onClick={() => handleActivateVoucher(voucher)}
                  className="bg-green-500 hover:bg-green-600"
                >
                  Aktivera
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {demoVouchers.length === 0 && (
        <Card className="glass-card">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Ticket className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-400 text-center">
              Du har inga tillgängliga kuponger just nu.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
