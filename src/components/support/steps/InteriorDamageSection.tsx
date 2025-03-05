
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ComplaintFormValues } from "../types";
import { interiorSections, interiorComponents, interiorDamageTypes } from "../constants/interiorDamageTypes";
import { useState } from "react";

interface InteriorDamageSectionProps {
  form: UseFormReturn<ComplaintFormValues>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InteriorDamageSection = ({ form, handleFileChange }: InteriorDamageSectionProps) => {
  const [selectedSection, setSelectedSection] = useState<string | undefined>();
  const [selectedComponent, setSelectedComponent] = useState<string | undefined>();

  return (
    <>
      <FormField
        control={form.control}
        name="interiorSection"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Vilken del av interiören?</FormLabel>
            <Select 
              onValueChange={(value) => {
                field.onChange(value);
                setSelectedSection(value);
                setSelectedComponent(undefined);
                form.setValue('damageLocation', undefined);
                form.setValue('damageType', undefined);
              }} 
              value={field.value}
            >
              <FormControl>
                <SelectTrigger className="bg-black/20 border-white/20 text-white">
                  <SelectValue placeholder="Välj del av interiören" />
                </SelectTrigger>
              </FormControl>
              <SelectContent 
                className="bg-primary border-white/10 max-h-[300px] overflow-y-auto"
              >
                {interiorSections.map((section) => (
                  <SelectItem key={section.id} value={section.id}>{section.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />

      {selectedSection && (
        <FormField
          control={form.control}
          name="damageLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Specificera plats</FormLabel>
              <Select 
                onValueChange={(value) => {
                  field.onChange(value);
                  setSelectedComponent(value);
                  form.setValue('damageType', undefined);
                }} 
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="bg-black/20 border-white/20 text-white">
                    <SelectValue placeholder="Välj specifik plats" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent 
                  className="bg-primary border-white/10 max-h-[300px] overflow-y-auto"
                >
                  {interiorComponents[selectedSection]?.map((component) => (
                    <SelectItem key={component.id} value={component.id}>{component.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      )}

      {selectedComponent && (
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
                <SelectContent 
                  className="bg-primary border-white/10 max-h-[300px] overflow-y-auto"
                >
                  {interiorDamageTypes[selectedComponent]?.map((type) => (
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
