
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { NotificationTypeItem } from "./notifications/NotificationTypeItem";

export const NotificationSection = () => {
  const { toast } = useToast();
  
  // Notification states
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [auctionUpdates, setAuctionUpdates] = useState(true);
  const [newMessages, setNewMessages] = useState(true);
  
  // Frequency states
  const [auctionNotificationFreq, setAuctionNotificationFreq] = useState("instant");
  const [emailNotificationFreq, setEmailNotificationFreq] = useState("daily");
  
  // Expanded state
  const [expandedType, setExpandedType] = useState<string | null>(null);

  const notificationTypes = [
    {
      id: "emailNotifications",
      label: "Email-notifikationer",
      checked: emailNotifications,
      onCheckedChange: setEmailNotifications,
      frequencySettings: {
        title: "E-postnotiser frekvens",
        description: "Hur ofta vill du få sammanfattningar via e-post?",
        value: emailNotificationFreq,
        options: [
          { value: "instant", label: "Direkt" },
          { value: "daily", label: "Dagligen" },
          { value: "weekly", label: "Veckovis" },
          { value: "never", label: "Aldrig" }
        ],
        onValueChange: setEmailNotificationFreq
      }
    },
    {
      id: "auctionUpdates",
      label: "Auktionsuppdateringar",
      checked: auctionUpdates,
      onCheckedChange: setAuctionUpdates,
      frequencySettings: {
        title: "Auktionsnotiser frekvens",
        description: "Hur ofta vill du få notiser om auktioner?",
        value: auctionNotificationFreq,
        options: [
          { value: "instant", label: "Direkt" },
          { value: "hourly", label: "Varje timme" },
          { value: "daily", label: "Dagligen" },
          { value: "weekly", label: "Veckovis" }
        ],
        onValueChange: setAuctionNotificationFreq
      }
    },
    {
      id: "newMessages",
      label: "Nya meddelanden",
      checked: newMessages,
      onCheckedChange: setNewMessages,
    }
  ];

  const handleSave = () => {
    toast({
      title: "Notifikationer uppdaterade",
      description: "Dina notifikationsinställningar har sparats.",
    });
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg text-white">Notifikationsinställningar</CardTitle>
        <CardDescription className="text-white/60">
          Hantera dina notifikationer och uppdateringar
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Välj vilka notifikationer du vill ta emot</h3>
            {notificationTypes.map((type) => (
              <NotificationTypeItem
                key={type.id}
                id={type.id}
                label={type.label}
                checked={type.checked}
                onCheckedChange={(checked) => {
                  type.onCheckedChange(checked);
                  if (!checked) setExpandedType(null);
                }}
                isExpanded={expandedType === type.id}
                onToggleExpand={() => setExpandedType(expandedType === type.id ? null : type.id)}
                frequencySettings={type.frequencySettings}
              />
            ))}
          </div>

          <Separator className="bg-white/10" />

          <Button onClick={handleSave} className="w-full md:w-auto">
            Spara notifikationsinställningar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
