import { Search } from "lucide-react";
import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <div className="lg:w-[200px] sm:w-[140px]">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          <Search className="h-3 w-3 text-gray-400" />
        </div>
        <Input
          type="search"
          placeholder="Sök efter bilar..."
          className="lg:w-full sm:w-1/2 pl-7 py-1 text-xs bg-transparent border-gray-200/20 focus:bg-white/5 transition-colors h-7"
        />
      </div>
    </div>
  );
};

export default SearchBar;