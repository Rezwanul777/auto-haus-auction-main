import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SettingsTabs } from "@/components/settings/SettingsTabs";
import { GradientBackground } from "@/components/settings/GradientBackground";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <GradientBackground />
      <Button 
        variant="ghost" 
        onClick={() => navigate('/dashboard')}
        className="mb-4 flex items-center gap-2 text-white/80 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Tillbaka till dashboard
      </Button>
      
      <h1 className="text-2xl font-bold mb-6 text-white">Inställningar</h1>
      <SettingsTabs />
    </div>
  );
};

export default Settings;