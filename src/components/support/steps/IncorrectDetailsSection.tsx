
import { UseFormReturn } from "react-hook-form";
import { ComplaintFormValues } from "../types";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface IncorrectDetailsSectionProps {
  form: UseFormReturn<ComplaintFormValues>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const IncorrectDetailsSection = ({
  form,
  handleFileChange,
}: IncorrectDetailsSectionProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Beskriv vilka uppgifter som är felaktiga</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Beskriv detaljerat vilka uppgifter som är felaktiga och vad de borde vara..."
                className="min-h-[100px] bg-black/20 border-white/20 text-white placeholder:text-gray-400"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormItem>
        <FormLabel className="text-white">Ladda upp stödjande dokument</FormLabel>
        <FormControl>
          <Input
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="bg-black/20 border-white/20 text-white cursor-pointer file:bg-accent file:text-white file:border-0"
          />
        </FormControl>
      </FormItem>
    </div>
  );
};
