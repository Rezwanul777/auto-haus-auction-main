import { SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortSelectorProps {
  sortBy: string;
  onSortChange: (value: string) => void;
}

const SortSelector = ({ sortBy, onSortChange }: SortSelectorProps) => {
  return (
    <div className="flex items-center gap-2">
      <SlidersHorizontal className="w-4 h-4 text-white" />
      <Select value={sortBy} onValueChange={onSortChange}>
        <SelectTrigger className="w-[180px] bg-black/20 border-white/10 text-white">
          <SelectValue placeholder="Sortera efter" />
        </SelectTrigger>
        <SelectContent className="bg-primary border-white/10">
          <SelectItem value="price-asc">Pris (Lägst först)</SelectItem>
          <SelectItem value="price-desc">Pris (Högst först)</SelectItem>
          <SelectItem value="year-desc">År (Nyast först)</SelectItem>
          <SelectItem value="year-asc">År (Äldst först)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortSelector;