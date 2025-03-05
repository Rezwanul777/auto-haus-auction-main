
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileSection } from "./ProfileSection";
import { NotificationSection } from "./NotificationSection";
import { AuctionSection } from "./AuctionSection";
import { EconomySection } from "./EconomySection";
import { DeliverySection } from "./DeliverySection";
import { GeneralSection } from "./GeneralSection";

export const SettingsTabs = () => {
  return (
    <Tabs defaultValue="general" className="space-y-4">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 bg-black/20 p-1">
        <TabsTrigger value="general" className="text-sm">Allmänt</TabsTrigger>
        <TabsTrigger value="profile" className="text-sm">Profil & Kontakt</TabsTrigger>
        <TabsTrigger value="notifications" className="text-sm">Notifikationer</TabsTrigger>
        <TabsTrigger value="auction" className="text-sm">Auktioner</TabsTrigger>
        <TabsTrigger value="economy" className="text-sm">Ekonomi</TabsTrigger>
        <TabsTrigger value="delivery" className="text-sm">Leverans</TabsTrigger>
      </TabsList>

      <TabsContent value="general">
        <GeneralSection />
      </TabsContent>

      <TabsContent value="profile">
        <ProfileSection />
      </TabsContent>

      <TabsContent value="notifications">
        <NotificationSection />
      </TabsContent>

      <TabsContent value="auction">
        <AuctionSection />
      </TabsContent>

      <TabsContent value="economy">
        <EconomySection />
      </TabsContent>

      <TabsContent value="delivery">
        <DeliverySection />
      </TabsContent>
    </Tabs>
  );
};
