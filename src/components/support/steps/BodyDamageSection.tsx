
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ComplaintFormValues } from "../types";
import { bodyParts, bodyPartToDamageTypes } from "../constants/bodyDamageTypes";
import { useState } from "react";

interface BodyDamageSectionProps {
  form: UseFormReturn<ComplaintFormValues>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BodyDamageSection = ({ form, handleFileChange }: BodyDamageSectionProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>();
  const availableDamageTypes = selectedLocation ? bodyPartToDamageTypes[selectedLocation] : [];

  return (
    <>
      <FormField
        control={form.control}
        name="damageLocation"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Var på karossen finns skadan?</FormLabel>
            <Select 
              onValueChange={(value) => {
                field.onChange(value);
                setSelectedLocation(value);
                // Reset damage type when location changes
                form.setValue('damageType', undefined);
              }} 
              value={field.value}
            >
              <FormControl>
                <SelectTrigger className="bg-black/20 border-white/20 text-white">
                  <SelectValue placeholder="Välj placering" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {bodyParts.map((part) => (
                  <SelectItem key={part} value={part}>{part}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      
      {selectedLocation && (
        <FormField
          control={form.control}
          name="damageType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Vilken typ av skada är det?</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-black/20 border-white/20 text-white">
                    <SelectValue placeholder="Välj skadetyp" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {availableDamageTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      )}

      <FormItem>
        <FormLabel className="text-white">Bilder på skadan</FormLabel>
        <FormControl>
          <Input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="bg-black/20 border-white/20 text-white cursor-pointer file:bg-accent file:text-white file:border-0"
          />
        </FormControl>
      </FormItem>
    </>
  );
};
