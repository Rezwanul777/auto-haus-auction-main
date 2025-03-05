import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProfileImageSection } from "./ProfileImageSection";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { CompanyInfoForm } from "./CompanyInfoForm";
import { PasswordSection } from "./PasswordSection";
import { UserPermissionsSection } from "./UserPermissionsSection";

export const ProfileSection = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg text-white">Profil & Kontaktuppgifter</CardTitle>
        <CardDescription className="text-white/60">
          Hantera din profil, företagsinformation och användarinställningar
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-6">
          <ProfileImageSection />
          <div className="w-full space-y-4 mt-4 md:mt-0">
            <h3 className="text-lg font-medium text-white">Personlig information</h3>
            <PersonalInfoForm />
          </div>
        </div>

        <Separator className="bg-white/10" />
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white">Företagsinformation</h3>
          <CompanyInfoForm />
        </div>

        <Separator className="bg-white/10" />
        
        <PasswordSection />

        <Separator className="bg-white/10" />
        
        <UserPermissionsSection />
      </CardContent>
    </Card>
  );
};