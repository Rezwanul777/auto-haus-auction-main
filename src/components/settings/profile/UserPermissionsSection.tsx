import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { UserPlus, Users } from "lucide-react";

export const UserPermissionsSection = () => {
  const { toast } = useToast();
  const [newUserEmail, setNewUserEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Användare tillagd",
      description: "En ny användare har lagts till med valda behörigheter.",
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white flex items-center gap-2">
        <Users className="h-5 w-5" />
        Hantera användare och behörigheter
      </h3>
      
      <form onSubmit={handleAddUser} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="newUserEmail" className="text-white/80 flex items-center gap-2">
              <UserPlus className="h-4 w-4" /> Email för ny användare
            </Label>
            <Input
              id="newUserEmail"
              type="email"
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
              className="bg-black/20 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role" className="text-white/80">Behörighetsnivå</Label>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="bg-black/20 border-white/10 text-white">
                <SelectValue placeholder="Välj behörighet" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Administratör</SelectItem>
                <SelectItem value="user">Användare</SelectItem>
                <SelectItem value="viewer">Läsare</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit" className="w-full md:w-auto">Lägg till användare</Button>
      </form>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-white/80 mb-2">Aktiva användare</h4>
        <div className="bg-black/20 rounded-lg p-4">
          <p className="text-white/60 text-sm">Inga användare tillagda än</p>
        </div>
      </div>
    </div>
  );
};