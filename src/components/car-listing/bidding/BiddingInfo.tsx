
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import CurrentBid from "./CurrentBid";
import TimeRemaining from "./TimeRemaining";
import BiddingButtons from "./BiddingButtons";
import BiddingDetails from "./BiddingDetails";
import { useIsMobile } from "@/hooks/use-mobile";

interface BiddingInfoProps {
  currentBid: number;
  nextMinBid: number;
  timeLeft: string;
  car: {
    price: number;
    taxType: string;
  };
  location: string;
}

const BiddingInfo = ({ currentBid, nextMinBid, timeLeft, car, location }: BiddingInfoProps) => {
  const isMobile = useIsMobile();

  return (
    <Card className={`glass-card animate-fade-in ring-1 ring-accent/50 shadow-[0_0_15px_rgba(212,175,55,0.15)] ${
      isMobile ? 'fixed bottom-0 left-0 right-0 rounded-none z-50' : 'sticky top-6 mb-6'
    }`}>
      <div className={`p-4 md:p-6 space-y-4 md:space-y-6 ${isMobile ? 'pb-safe' : ''}`}>
        <CurrentBid currentBid={currentBid} taxType={car.taxType} />
        <TimeRemaining timeLeft={timeLeft} />
        <Progress value={65} className="h-2 bg-black/20" />
        <BiddingButtons 
          nextMinBid={nextMinBid} 
          buyNowPrice={car.price * 1.2} 
          currentBid={currentBid}
          location={location}
        />
        {!isMobile && (
          <BiddingDetails currentBid={currentBid} location={location} />
        )}
      </div>
    </Card>
  );
};

export default BiddingInfo;
