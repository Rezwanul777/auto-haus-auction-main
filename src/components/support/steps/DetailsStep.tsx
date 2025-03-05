
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ComplaintFormValues } from "../types";
import { ComplaintType } from "../ComplaintTypeSelector";
import { BodyDamageSection } from "./BodyDamageSection";
import { EngineDamageSection } from "./EngineDamageSection";
import { InteriorDamageSection } from "./InteriorDamageSection";
import { UnderbodyDamageSection } from "./UnderbodyDamageSection";
import { TireAndRimSection } from "./TireAndRimSection";
import { BrakeSection } from "./BrakeSection";

interface DetailsStepProps {
  form: UseFormReturn<ComplaintFormValues>;
  selectedType: ComplaintType | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DetailsStep = ({ form, selectedType, handleFileChange }: DetailsStepProps) => {
  const showFileUpload = selectedType?.id === 'missing_documents' || 
                        selectedType?.id === 'mileage' || 
                        selectedType?.id === 'delivery_delay' || 
                        selectedType?.id === 'other';

  return (
    <div className="space-y-4">
      {selectedType?.id === 'body' && (
        <BodyDamageSection form={form} handleFileChange={handleFileChange} />
      )}
      {selectedType?.id === 'engine' && (
        <EngineDamageSection form={form} handleFileChange={handleFileChange} />
      )}
      {selectedType?.id === 'interior' && (
        <InteriorDamageSection form={form} handleFileChange={handleFileChange} />
      )}
      {selectedType?.id === 'underbody' && (
        <UnderbodyDamageSection form={form} handleFileChange={handleFileChange} />
      )}
      {selectedType?.id === 'tires' && (
        <TireAndRimSection form={form} handleFileChange={handleFileChange} />
      )}
      {selectedType?.id === 'brakes' && (
        <BrakeSection form={form} handleFileChange={handleFileChange} />
      )}
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Beskrivning av problemet</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Beskriv problemet så detaljerat som möjligt..."
                className="min-h-[100px] bg-black/20 border-white/20 text-white placeholder:text-gray-400"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      
      {showFileUpload && (
        <FormItem>
          <FormLabel className="text-white">
            {selectedType?.id === 'missing_documents' && 'Ladda upp relevanta dokument'}
            {selectedType?.id === 'mileage' && 'Ladda upp bevis på manipulation'}
            {selectedType?.id === 'delivery_delay' && 'Ladda upp relevant dokumentation'}
            {selectedType?.id === 'other' && 'Ladda upp relevant dokumentation'}
          </FormLabel>
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
      )}
    </div>
  );
};
