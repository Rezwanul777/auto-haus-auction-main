
import { Button } from "@/components/ui/button";
import { Gavel, Timer } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import BiddingDetails from "./BiddingDetails";

interface BiddingButtonsProps {
  nextMinBid: number;
  buyNowPrice: number;
  currentBid: number;
  location: string;
}

const BiddingButtons = ({ nextMinBid, buyNowPrice, currentBid, location }: BiddingButtonsProps) => {
  return (
    <div className="space-y-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-accent hover:bg-accent/90 gap-2 h-12 text-lg font-semibold">
            <Gavel className="w-5 h-5" />
            Lägg bud ({nextMinBid.toLocaleString()} kr)
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Lägg bud</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <BiddingDetails currentBid={currentBid} location={location} />
          </div>
        </DialogContent>
      </Dialog>
      <Button variant="outline" className="w-full text-white border-accent/20 hover:bg-accent/10 gap-2 h-12">
        <Timer className="w-5 h-5" />
        Köp nu ({buyNowPrice.toLocaleString()} kr)
      </Button>
    </div>
  );
};

export default BiddingButtons;
