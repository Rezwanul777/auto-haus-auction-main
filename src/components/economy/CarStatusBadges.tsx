import { Truck } from "lucide-react";

interface CarStatusBadgesProps {
  status: string;
  paymentStatus: string;
  deliveryStatus: string | null;
}

export const CarStatusBadges = ({ status, paymentStatus, deliveryStatus }: CarStatusBadgesProps) => {
  return (
    <div className="flex gap-4 mt-6">
      <span className={`px-4 py-2 rounded-full text-sm ${
        status === 'Såld' 
          ? 'bg-blue-500/20 text-blue-300' 
          : 'bg-purple-500/20 text-purple-300'
      }`}>
        {status}
      </span>
      <span className={`px-4 py-2 rounded-full text-sm ${
        paymentStatus === 'Klar' 
          ? 'bg-green-500/20 text-green-300' 
          : 'bg-red-500/20 text-red-300'
      }`}>
        {paymentStatus}
      </span>
      {deliveryStatus && (
        <span className="px-4 py-2 rounded-full text-sm bg-yellow-500/20 text-yellow-300 flex items-center gap-2">
          <Truck className="w-4 h-4" />
          {deliveryStatus}
        </span>
      )}
    </div>
  );
};