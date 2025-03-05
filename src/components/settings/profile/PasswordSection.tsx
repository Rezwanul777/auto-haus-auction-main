
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export const PasswordSection = () => {
  const { toast } = useToast();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast({
        title: "Fel",
        description: "De nya lösenorden matchar inte.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Lösenord ändrat",
      description: "Ditt lösenord har uppdaterats.",
    });
  };

  return (
    <div className="border-t border-white/10 pt-4">
      <h3 className="text-lg font-medium mb-3 text-white">Byt lösenord</h3>
      <form onSubmit={handlePasswordChange} className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="currentPassword" className="text-white/80">Nuvarande lösenord</Label>
          <Input
            id="currentPassword"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="bg-black/20 border-white/10 text-white w-full md:w-1/3"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="newPassword" className="text-white/80">Nytt lösenord</Label>
            <Input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="bg-black/20 border-white/10 text-white w-full md:w-2/3"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="confirmPassword" className="text-white/80">Bekräfta nytt lösenord</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-black/20 border-white/10 text-white w-full md:w-2/3"
            />
          </div>
        </div>
        <Button type="submit" variant="secondary" className="w-full md:w-auto">Uppdatera lösenord</Button>
      </form>
    </div>
  );
};
