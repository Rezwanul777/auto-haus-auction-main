import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ImageUploadProps {
  images: {
    carImages: File[];
    damageImages: File[];
  };
  onImagesChange: (images: any) => void;
}

const ImageUpload = ({ images, onImagesChange }: ImageUploadProps) => {
  const handleCarImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onImagesChange({
        ...images,
        carImages: [...images.carImages, ...Array.from(e.target.files)],
      });
    }
  };

  const handleDamageImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onImagesChange({
        ...images,
        damageImages: [...images.damageImages, ...Array.from(e.target.files)],
      });
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Bilder</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="car-images">Bilder på bilen</Label>
          <Input
            id="car-images"
            type="file"
            multiple
            accept="image/*"
            onChange={handleCarImagesChange}
            className="cursor-pointer"
          />
          {images.carImages.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {images.carImages.map((image, index) => (
                <div key={index} className="relative aspect-square">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Car image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-3">
          <Label htmlFor="damage-images">Bilder på eventuella skador</Label>
          <Input
            id="damage-images"
            type="file"
            multiple
            accept="image/*"
            onChange={handleDamageImagesChange}
            className="cursor-pointer"
          />
          {images.damageImages.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {images.damageImages.map((image, index) => (
                <div key={index} className="relative aspect-square">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Damage image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageUpload;