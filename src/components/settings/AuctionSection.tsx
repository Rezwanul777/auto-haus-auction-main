
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { BankPaymentSettings } from "./economy/BankPaymentSettings";
import { AuctionSwitchSettings } from "./auction/AuctionSwitchSettings";
import { AuctionPreferences } from "./auction/AuctionPreferences";

export const AuctionSection = () => {
  const { toast } = useToast();
  const [defaultBidIncrement, setDefaultBidIncrement] = useState("1000");
  const [preferredAuctionType, setPreferredAuctionType] = useState("all");
  const [notifyThreshold, setNotifyThreshold] = useState("10000");
  
  const [autoBidding, setAutoBidding] = useState(false);
  const [bidNotifications, setBidNotifications] = useState(false);
  const [showEndingSoon, setShowEndingSoon] = useState(false);
  const [hideCompletedAuctions, setHideCompletedAuctions] = useState(false);
  const [showReservePrice, setShowReservePrice] = useState(false);

  const switchSettings = [
    {
      title: "Automatiskt budgivning",
      description: "Tillåt automatisk budgivning upp till max belopp",
      checked: autoBidding,
      onCheckedChange: setAutoBidding,
    },
    {
      title: "Budnotiser",
      description: "Få notiser när någon lägger bud på dina bevakade auktioner",
      checked: bidNotifications,
      onCheckedChange: setBidNotifications,
    },
    {
      title: "Visa \"Slutar snart\"",
      description: "Markera auktioner som slutar inom 24 timmar",
      checked: showEndingSoon,
      onCheckedChange: setShowEndingSoon,
    },
    {
      title: "Dölj avslutade auktioner",
      description: "Dölj auktioner som har avslutats",
      checked: hideCompletedAuctions,
      onCheckedChange: setHideCompletedAuctions,
    },
    {
      title: "Visa reservationspris",
      description: "Visa reservationspris på auktioner",
      checked: showReservePrice,
      onCheckedChange: setShowReservePrice,
    },
  ];

  const handleSave = () => {
    toast({
      title: "Auktionsinställningar uppdaterade",
      description: "Dina auktionsinställningar har sparats.",
    });
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg text-white">Auktionsinställningar</CardTitle>
        <CardDescription className="text-white/60">
          Anpassa dina inställningar för auktioner och budgivning
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <AuctionSwitchSettings settings={switchSettings} />

        <Separator className="bg-white/10" />

        <AuctionPreferences
          defaultBidIncrement={defaultBidIncrement}
          preferredAuctionType={preferredAuctionType}
          onBidIncrementChange={setDefaultBidIncrement}
          onAuctionTypeChange={setPreferredAuctionType}
        />

        <Separator className="bg-white/10" />

        <BankPaymentSettings
          notifyThreshold={notifyThreshold}
          onNotifyThresholdChange={setNotifyThreshold}
        />

        <Button onClick={handleSave} className="w-full md:w-auto">
          Spara auktionsinställningar
        </Button>
      </CardContent>
    </Card>
  );
};
