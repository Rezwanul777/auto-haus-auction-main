import { CheckCircle2 } from "lucide-react";

interface PurchaseStatusProps {
  purchaseDate?: string;
  paymentDate?: string;
}

export const PurchaseStatus = ({ purchaseDate, paymentDate }: PurchaseStatusProps) => {
  return (
    <div className="space-y-6">
      {purchaseDate && (
        <div className="flex items-center gap-3 text-white/80">
          <CheckCircle2 className="w-5 h-5 text-blue-400" />
          <div>
            <div className="font-semibold">Inköpsdatum</div>
            <div>{purchaseDate}</div>
          </div>
        </div>
      )}
      
      {paymentDate && (
        <div className="flex items-center gap-3 text-white/80">
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <div>
            <div className="font-semibold">Betalning mottagen</div>
            <div>{paymentDate}</div>
          </div>
        </div>
      )}
    </div>
  );
};