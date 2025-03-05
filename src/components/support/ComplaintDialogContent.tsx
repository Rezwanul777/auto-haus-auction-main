
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { ComplaintFormValues, Step } from "./types";
import { ComplaintTypeSelector, ComplaintType } from "./ComplaintTypeSelector";
import { RegistrationStep } from "./steps/RegistrationStep";
import { DetailsStep } from "./steps/DetailsStep";
import { IncorrectDetailsSection } from "./steps/IncorrectDetailsSection";

interface ComplaintDialogContentProps {
  form: UseFormReturn<ComplaintFormValues>;
  step: Step;
  selectedType: ComplaintType | null;
  onStepChange: (step: Step) => void;
  onTypeSelect: (type: ComplaintType) => void;
  onSubmit: (data: ComplaintFormValues) => Promise<void>;
  handleNext: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ComplaintDialogContent = ({
  form,
  step,
  selectedType,
  onStepChange,
  onTypeSelect,
  onSubmit,
  handleNext,
  handleFileChange,
}: ComplaintDialogContentProps) => {
  const renderStepContent = () => {
    switch (step) {
      case 'registration':
        return <RegistrationStep form={form} />;
      case 'type':
        return <ComplaintTypeSelector onSelect={onTypeSelect} />;
      case 'details':
        if (selectedType?.id === 'incorrect_details') {
          return <IncorrectDetailsSection 
            form={form}
            handleFileChange={handleFileChange}
          />;
        }
        return (
          <DetailsStep 
            form={form}
            selectedType={selectedType}
            handleFileChange={handleFileChange}
          />
        );
    }
  };

  return (
    <DialogContent className="sm:max-w-[800px] glass-card border-white/20">
      <DialogHeader>
        <DialogTitle className="text-white">Ny reklamation</DialogTitle>
        <DialogDescription className="text-gray-300">
          {step === 'registration' && "Ange registreringsnummer för bilen"}
          {step === 'type' && "Välj typ av problem"}
          {step === 'details' && "Fyll i information om problemet"}
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {renderStepContent()}
          <div className="flex justify-end space-x-2">
            {step !== 'registration' && (
              <Button 
                type="button" 
                variant="outline"
                className="bg-black/20 border-white/20 text-white hover:bg-black/30
                  transition-all duration-300"
                onClick={() => onStepChange(step === 'details' ? 'type' : 'registration')}
              >
                Tillbaka
              </Button>
            )}
            {step === 'registration' && (
              <Button 
                type="button"
                className="bg-accent hover:bg-accent/80 text-white
                  transition-all duration-300"
                onClick={handleNext}
              >
                Nästa
              </Button>
            )}
            {step === 'details' && (
              <Button 
                type="submit"
                className="bg-accent hover:bg-accent/80 text-white
                  transition-all duration-300"
              >
                Skicka reklamation
              </Button>
            )}
          </div>
        </form>
      </Form>
    </DialogContent>
  );
};
