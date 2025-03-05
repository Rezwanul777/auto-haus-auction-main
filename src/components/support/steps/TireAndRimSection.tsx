
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ComplaintFormValues } from "../types";
import { tirePositions, tireAndRimDamageTypes, TirePosition } from "../constants/tireAndRimTypes";

interface TireAndRimSectionProps {
  form: UseFormReturn<ComplaintFormValues>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TireAndRimSection = ({ form, handleFileChange }: TireAndRimSectionProps) => {
  const selectedWheelType = form.watch("wheelType");
  const selectedPosition = form.watch("damageLocation") as TirePosition;
  const availableDamageTypes = selectedPosition ? tireAndRimDamageTypes[selectedPosition] || [] : [];

  return (
    <>
      <FormField
        control={form.control}
        name="wheelType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Vilken typ av hjul gäller det?</FormLabel>
            <Select 
              onValueChange={(value) => {
                field.onChange(value);
                form.setValue("damageLocation", "");
                form.setValue("damageType", "");
              }} 
              value={field.value || ""}
            >
              <FormControl>
                <SelectTrigger className="bg-black/20 border-white/20 text-white">
                  <SelectValue placeholder="Välj hjultyp" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-zinc-900 border border-white/20">
                <SelectItem 
                  value="car"
                  className="text-white hover:bg-zinc-800 focus:bg-zinc-800"
                >
                  Bilens hjul
                </SelectItem>
                <SelectItem 
                  value="spare"
                  className="text-white hover:bg-zinc-800 focus:bg-zinc-800"
                >
                  Extrahjul
                </SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      
      {selectedWheelType && (
        <FormField
          control={form.control}
          name="damageLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Vilket hjul gäller det?</FormLabel>
              <Select 
                onValueChange={(value) => {
                  field.onChange(value);
                  form.setValue("damageType", "");
                }} 
                value={field.value || ""}
              >
                <FormControl>
                  <SelectTrigger className="bg-black/20 border-white/20 text-white">
                    <SelectValue placeholder="Välj position" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-zinc-900 border border-white/20 max-h-[200px] overflow-y-auto">
                  {tirePositions.map((position) => (
                    <SelectItem 
                      key={position} 
                      value={position}
                      className="text-white hover:bg-zinc-800 focus:bg-zinc-800"
                    >
                      {position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      )}
      
      {selectedPosition && (
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
                <SelectContent className="bg-zinc-900 border border-white/20 max-h-[200px] overflow-y-auto">
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

