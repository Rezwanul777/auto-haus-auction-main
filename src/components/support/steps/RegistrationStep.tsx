
import { FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ComplaintFormValues } from "../types";

interface RegistrationStepProps {
  form: UseFormReturn<ComplaintFormValues>;
}

export const RegistrationStep = ({ form }: RegistrationStepProps) => {
  return (
    <FormField
      control={form.control}
      name="registrationNumber"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">Registreringsnummer</FormLabel>
          <FormControl>
            <Input 
              placeholder="ABC123" 
              className="bg-black/20 border-white/20 text-white placeholder:text-gray-400"
              {...field} 
            />
          </FormControl>
          <FormDescription className="text-gray-300">
            Ange registreringsnumret på bilen som reklamationen gäller
          </FormDescription>
        </FormItem>
      )}
    />
  );
};
