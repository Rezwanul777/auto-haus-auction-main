import { Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

export const SearchSection = ({ searchQuery, setSearchQuery, handleSearch }: SearchSectionProps) => {
  return (
    <Card className="mb-8 glass-card">
      <CardHeader>
        <CardTitle className="text-white">Sök i vår kunskapsbas</CardTitle>
        <CardDescription className="text-gray-300">
          Använd vår AI-assisterade sökning för att hitta svar på dina frågor
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            placeholder="Skriv din fråga här..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-black/20 border-white/20 text-white placeholder:text-gray-400"
          />
          <Button type="submit" className="bg-accent hover:bg-accent/80 text-white">
            <Search className="mr-2 h-4 w-4" />
            Sök
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};