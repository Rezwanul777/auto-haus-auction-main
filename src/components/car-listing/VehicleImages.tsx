import { Card } from "@/components/ui/card";
import { Image } from "lucide-react";

interface VehicleImagesProps {
  make: string;
  model: string;
  images: string[];
}

const VehicleImages = ({ make, model, images }: VehicleImagesProps) => {
  return (
    <div className="space-y-4">
      <div className="relative aspect-video rounded-lg overflow-hidden group">
        <img
          src={images[0] || "https://images.unsplash.com/photo-1503376780353-7e6692767b70"}
          alt={`${make} ${model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};

export default VehicleImages;