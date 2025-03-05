import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const equipmentList = [
  { id: "leather", label: "Läderklädsel" },
  { id: "sunroof", label: "Panoramatak" },
  { id: "navigation", label: "Navigation" },
  { id: "parking_sensors", label: "Parkeringssensorer" },
  { id: "heated_seats", label: "Uppvärmda säten" },
  { id: "cruise_control", label: "Farthållare" },
  { id: "climate_control", label: "Klimatanläggning" },
  { id: "bluetooth", label: "Bluetooth" },
];

interface EquipmentSelectionProps {
  selectedEquipment: string[];
  onEquipmentChange: (equipment: string[]) => void;
}

const EquipmentSelection = ({
  selectedEquipment,
  onEquipmentChange,
}: EquipmentSelectionProps) => {
  const handleEquipmentToggle = (id: string) => {
    if (selectedEquipment.includes(id)) {
      onEquipmentChange(selectedEquipment.filter((item) => item !== id));
    } else {
      onEquipmentChange([...selectedEquipment, id]);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Utrustning</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {equipmentList.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <Checkbox
                id={item.id}
                checked={selectedEquipment.includes(item.id)}
                onCheckedChange={() => handleEquipmentToggle(item.id)}
              />
              <label
                htmlFor={item.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EquipmentSelection;