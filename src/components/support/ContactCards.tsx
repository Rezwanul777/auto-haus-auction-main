
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ContactCards = () => {
  const navigate = useNavigate();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <Card className="glass-card hover:shadow-lg transition-shadow border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Phone className="h-5 w-5 text-accent" />
            Ring oss
          </CardTitle>
          <CardDescription className="text-gray-300">Tillgängliga vardagar 9-17</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold text-white">08-66 90 500</p>
        </CardContent>
      </Card>

      <Card className="glass-card hover:shadow-lg transition-shadow border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Mail className="h-5 w-5 text-accent" />
            Maila oss
          </CardTitle>
          <CardDescription className="text-gray-300">Svar inom 24 timmar</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold text-white">kundservice@bilenia.se</p>
        </CardContent>
      </Card>

      <Card className="glass-card hover:shadow-lg transition-shadow border-white/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <MessageCircle className="h-5 w-5 text-accent" />
            Chatta
          </CardTitle>
          <CardDescription className="text-gray-300">Direktkontakt med support</CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            variant="outline" 
            className="w-full bg-black/20 border-white/20 text-white hover:bg-white/10"
            onClick={() => navigate('/messages')}
          >
            Starta chat
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
