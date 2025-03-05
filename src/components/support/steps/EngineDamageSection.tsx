
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ComplaintFormValues } from "../types";
import { engineComponents, componentDamageTypes } from "../constants/engineDamageTypes";

interface EngineDamageSectionProps {
  form: UseFormReturn<ComplaintFormValues>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EngineDamageSection = ({ form, handleFileChange }: EngineDamageSectionProps) => {
  const currentEngineComponent = form.watch('engineComponent');

  return (
    <>
      <FormField
        control={form.control}
        name="engineComponent"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Vilken motorkomponent gäller det?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-black/20 border-white/20 text-white">
                  <SelectValue placeholder="Välj komponent" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {engineComponents.map((component) => (
                  <SelectItem key={component} value={component}>{component}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="damageType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Vilken typ av problem är det?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-black/20 border-white/20 text-white">
                  <SelectValue placeholder="Välj problemtyp" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {currentEngineComponent && componentDamageTypes[currentEngineComponent]?.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      <FormItem>
        <FormLabel className="text-white">Bilder på problemet</FormLabel>
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
