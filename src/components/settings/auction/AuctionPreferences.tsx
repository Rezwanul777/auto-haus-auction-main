
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AuctionPreferencesProps {
  defaultBidIncrement: string;
  preferredAuctionType: string;
  onBidIncrementChange: (value: string) => void;
  onAuctionTypeChange: (value: string) => void;
}

export const AuctionPreferences = ({
  defaultBidIncrement,
  preferredAuctionType,
  onBidIncrementChange,
  onAuctionTypeChange,
}: AuctionPreferencesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-1">
        <Label htmlFor="bidIncrement" className="text-white/80">Standard budökning (kr)</Label>
        <Input
          id="bidIncrement"
          type="number"
          value={defaultBidIncrement}
          onChange={(e) => onBidIncrementChange(e.target.value)}
          className="bg-black/20 border-white/10 text-white"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="auctionType" className="text-white/80">Föredragen auktionstyp</Label>
        <Select value={preferredAuctionType} onValueChange={onAuctionTypeChange}>
          <SelectTrigger className="bg-black/20 border-white/10 text-white">
            <SelectValue placeholder="Välj auktionstyp" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alla auktioner</SelectItem>
            <SelectItem value="monday-new">Måndagsauktion - Nya bilar</SelectItem>
            <SelectItem value="wednesday-used">Onsdagsauktion - Begagnade bilar</SelectItem>
            <SelectItem value="friday-premium">Fredagsauktion - Premium bilar</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
