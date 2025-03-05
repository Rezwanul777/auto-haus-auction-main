import { useState } from "react";
import { Camera, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

export const ProfileImageSection = () => {
  const { toast } = useToast();
  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1649972904349-6e44c42644a7");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        toast({
          title: "Bild uppladdad",
          description: "Din profilbild har uppdaterats.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <Avatar className="h-20 w-20 cursor-pointer relative group">
        <AvatarImage src={profileImage} />
        <AvatarFallback><User /></AvatarFallback>
        <label className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 rounded-full cursor-pointer transition-opacity">
          <Camera className="h-5 w-5" />
          <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
        </label>
      </Avatar>
    </div>
  );
};