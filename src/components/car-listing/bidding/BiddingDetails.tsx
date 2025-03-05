
import VehicleLocation from "./VehicleLocation";
import CostCalculator from "./CostCalculator";

interface BiddingDetailsProps {
  currentBid: number;
  location: string;
}

const BiddingDetails = ({ currentBid, location }: BiddingDetailsProps) => {
  return (
    <div className="text-sm space-y-2">
      <VehicleLocation location={location} />
      <CostCalculator currentBid={currentBid} />
    </div>
  );
};

export default BiddingDetails;
