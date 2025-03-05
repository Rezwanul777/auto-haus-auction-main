
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { MoonIcon, SunIcon, GlobeIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const GeneralSection = () => {
  const { toast } = useToast();
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("sv");

  const handleSave = () => {
    toast({
      title: "Inställningar uppdaterade",
      description: "Dina allmänna inställningar har sparats.",
    });
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg text-white">Allmänna inställningar</CardTitle>
        <CardDescription className="text-white/60">
          Hantera applikationens utseende och grundläggande funktioner
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-black/20 transition-colors">
              <div className="flex items-center space-x-3">
                {darkMode ? <MoonIcon className="w-4 h-4 text-white" /> : <SunIcon className="w-4 h-4 text-white" />}
                <Label htmlFor="dark-mode" className="text-white">Ljus / mörkt läge</Label>
              </div>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="bg-black/40 data-[state=checked]:bg-accent"
              />
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-black/20 transition-colors">
              <div className="flex items-center space-x-3">
                <GlobeIcon className="w-4 h-4 text-white" />
                <Label className="text-white">Språk</Label>
              </div>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[180px] bg-black/20 border-white/10 text-white">
                  <SelectValue placeholder="Välj språk" />
                </SelectTrigger>
                <SelectContent className="bg-black border-white/10">
                  <SelectItem value="sv">Svenska</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="no">Norsk</SelectItem>
                  <SelectItem value="da">Dansk</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator className="bg-white/10" />

          <Button onClick={handleSave} className="w-full md:w-auto">
            Spara inställningar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
