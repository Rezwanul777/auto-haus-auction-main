
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ComplaintFormValues } from "../types";
import { underbodyComponents, underbodyDamageTypes, UnderbodyComponent } from "../constants/underbodyDamageTypes";

interface UnderbodyDamageSectionProps {
  form: UseFormReturn<ComplaintFormValues>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UnderbodyDamageSection = ({ form, handleFileChange }: UnderbodyDamageSectionProps) => {
  const selectedComponent = form.watch("damageLocation") as UnderbodyComponent;
  const availableDamageTypes = selectedComponent ? underbodyDamageTypes[selectedComponent] || [] : [];

  return (
    <>
      <FormField
        control={form.control}
        name="damageLocation"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Vilken del av underredet gäller det?</FormLabel>
            <Select 
              onValueChange={(value) => {
                field.onChange(value);
                form.setValue("damageType", ""); // Reset damage type when component changes
              }} 
              value={field.value || ""}
            >
              <FormControl>
                <SelectTrigger className="bg-black/20 border-white/20 text-white">
                  <SelectValue placeholder="Välj komponent" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-zinc-900 border border-white/20">
                {underbodyComponents.map((component) => (
                  <SelectItem 
                    key={component} 
                    value={component}
                    className="text-white hover:bg-zinc-800 focus:bg-zinc-800"
                  >
                    {component}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      
      {selectedComponent && (
        <FormField
          control={form.control}
          name="damageType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Vilken typ av skada är det?</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <FormControl>
                  <SelectTrigger className="bg-black/20 border-white/20 text-white">
                    <SelectValue placeholder="Välj skadetyp" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-zinc-900 border border-white/20">
                  {availableDamageTypes.map((type) => (
                    <SelectItem 
                      key={type} 
                      value={type}
                      className="text-white hover:bg-zinc-800 focus:bg-zinc-800"
                    >
                      {type}
                    </SelectItem>
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
