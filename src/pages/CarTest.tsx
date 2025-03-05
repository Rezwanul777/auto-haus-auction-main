import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TestProtocol from "@/components/car-listing/TestProtocol";
import { Plus, MoreVertical, Download, Send, FileEdit } from "lucide-react";
import TestBackground from "@/components/car-listing/TestBackground";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Navigate, useNavigate } from "react-router-dom";

const CarTest = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 space-y-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-semibold text-white">Fordonstester</h1>
          <Button 
            className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white w-full sm:w-auto"
            onClick={() => navigate('/car-valuation')}
          >
            <Plus className="h-4 w-4 mr-2" />
            Skapa Test
          </Button>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          {/* Active Test */}
          <Card className="glass-card p-4 sm:p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Aktivt Test</h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-black/20 rounded-lg gap-2 sm:gap-0">
                <div>
                  <h3 className="text-white font-medium">Volvo XC60</h3>
                  <p className="text-sm text-gray-400">Påbörjat: 2024-03-20</p>
                </div>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm self-start sm:self-center">
                  Pågående
                </span>
              </div>
              <TestProtocol />
            </div>
          </Card>

          {/* Completed Tests */}
          <Card className="glass-card p-4 sm:p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Genomförda Tester</h2>
            <div className="space-y-3">
              {[
                { car: "BMW X5", date: "2024-03-15", status: "Godkänd" },
                { car: "Audi Q5", date: "2024-03-10", status: "Underkänd" },
                { car: "Tesla Model 3", date: "2024-03-05", status: "Godkänd" },
              ].map((test, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors gap-2 sm:gap-0"
                >
                  <div>
                    <h3 className="text-white font-medium">{test.car}</h3>
                    <p className="text-sm text-gray-400">Genomfört: {test.date}</p>
                  </div>
                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      test.status === "Godkänd" 
                        ? "bg-green-500/20 text-green-500" 
                        : "bg-red-500/20 text-red-500"
                    }`}>
                      {test.status}
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:bg-white/10">
                          <MoreVertical className="h-4 w-4 text-white" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48 bg-black/90 border-white/10">
                        <DropdownMenuItem className="text-white hover:bg-white/10 cursor-pointer">
                          <Download className="mr-2 h-4 w-4" />
                          <span>Ladda ner PDF</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-white hover:bg-white/10 cursor-pointer">
                          <Send className="mr-2 h-4 w-4" />
                          <span>Skicka rapport</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-white hover:bg-white/10 cursor-pointer">
                          <FileEdit className="mr-2 h-4 w-4" />
                          <span onClick={() => navigate('/car-valuation')}>Redigera</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <TestBackground />
    </div>
  );
};

export default CarTest;