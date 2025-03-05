
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ComplaintFormValues } from "../types";
import { brakePositions, BrakePosition, brakeDamageTypesByPosition } from "../constants/brakeTypes";

interface BrakeSectionProps {
  form: UseFormReturn<ComplaintFormValues>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BrakeSection = ({ form, handleFileChange }: BrakeSectionProps) => {
  const selectedPosition = form.watch("damageLocation") as BrakePosition;
  const availableDamageTypes = selectedPosition ? brakeDamageTypesByPosition[selectedPosition] || [] : [];

  return (
    <>
      <FormField
        control={form.control}
        name="damageLocation"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Vilken broms gäller det?</FormLabel>
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
                {brakePositions.map((position) => (
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
