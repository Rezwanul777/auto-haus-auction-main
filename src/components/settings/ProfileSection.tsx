import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProfileImageSection } from "./profile/ProfileImageSection";
import { PersonalInfoForm } from "./profile/PersonalInfoForm";
import { CompanyInfoForm } from "./profile/CompanyInfoForm";
import { PasswordSection } from "./profile/PasswordSection";
import { UserPermissionsSection } from "./profile/UserPermissionsSection";

export const ProfileSection = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg text-white">Profil & Kontaktuppgifter</CardTitle>
        <CardDescription className="text-white/60">
          Hantera din profil, företagsinformation och användarinställningar
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ProfileImageSection />
        
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-white">Personlig information</h3>
          <PersonalInfoForm />
        </div>

        <Separator className="my-6 bg-white/10" />
        
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-white">Företagsinformation</h3>
          <CompanyInfoForm />
        </div>

        <Separator className="my-6 bg-white/10" />
        
        <PasswordSection />

        <Separator className="my-6 bg-white/10" />
        
        <UserPermissionsSection />
      </CardContent>
    </Card>
  );
};