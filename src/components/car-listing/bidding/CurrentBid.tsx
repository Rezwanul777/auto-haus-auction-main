import { type ReactNode } from "react";

interface CurrentBidProps {
  currentBid: number;
  taxType: string;
}

const CurrentBid = ({ currentBid, taxType }: CurrentBidProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Aktuellt bud</span>
        <span className="text-3xl font-bold text-accent">
          {currentBid.toLocaleString()} kr
        </span>
      </div>
      <p className="text-sm text-gray-400 bg-black/20 p-2 rounded-lg inline-block">
        {taxType === "moms" ? "Momsbil" : "VMB"}
        {taxType === "moms" && " (25% moms ingår)"}
      </p>
    </div>
  );
};

export default CurrentBid;