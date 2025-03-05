
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ComplaintType } from "./ComplaintTypeSelector";
import { supabase } from "@/integrations/supabase/client";
import { ComplaintFormValues, Step } from "./types";
import { ComplaintDialogContent } from "./ComplaintDialogContent";
import { ProcessSteps } from "./ProcessSteps";

export const ComplaintForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<Step>('registration');
  const [selectedType, setSelectedType] = useState<ComplaintType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const form = useForm<ComplaintFormValues>({
    defaultValues: {
      registrationNumber: "",
      description: "",
      damageLocation: undefined,
      damageType: undefined,
      engineComponent: undefined,
      interiorSection: undefined,
      wheelType: undefined,
      images: null,
    },
  });

  const onSubmit = async (data: ComplaintFormValues) => {
    if (!selectedType) return;

    try {
      const { error } = await supabase.from('complaints').insert({
        registration_number: data.registrationNumber,
        complaint_type: selectedType.id,
        description: data.description,
        damage_location: data.damageLocation,
        brake_position: data.damageLocation,
        brake_damage_type: data.damageType,
      });

      if (error) throw error;

      toast({
        title: "Reklamation skickad",
        description: "Vi kommer att kontakta dig inom kort angående din reklamation.",
      });
      
      form.reset();
      setSelectedType(null);
      setStep('registration');
      setIsDialogOpen(false);
    } catch (error) {
      toast({
        title: "Ett fel uppstod",
        description: "Det gick inte att skicka reklamationen. Försök igen senare.",
        variant: "destructive",
      });
    }
  };

  const handleNext = async () => {
    if (step === 'registration') {
      const regNumber = form.getValues('registrationNumber');
      if (!regNumber) {
        form.setError('registrationNumber', { message: 'Registreringsnummer krävs' });
        return;
      }
      setStep('type');
    }
  };

  const handleComplaintTypeSelect = (type: ComplaintType) => {
    setSelectedType(type);
    setStep('details');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      form.setValue('images', e.target.files);
    }
  };

  return (
    <div className="flex flex-col gap-8 mb-8 animate-fade-in">
      <div className="grid gap-8">
        <Card className="glass-card hover-scale">
          <CardHeader className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl text-white">Reklamation</CardTitle>
                <CardDescription className="text-gray-300 text-base">
                  Har du problem med en bil du köpt? Skicka in en reklamation här så hjälper vi dig.
                </CardDescription>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    className="bg-accent hover:bg-accent/80 text-white
                      transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Skapa reklamation
                  </Button>
                </DialogTrigger>
                <ComplaintDialogContent 
                  form={form}
                  step={step}
                  selectedType={selectedType}
                  onStepChange={setStep}
                  onTypeSelect={handleComplaintTypeSelect}
                  onSubmit={onSubmit}
                  handleNext={handleNext}
                  handleFileChange={handleFileChange}
                />
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <ProcessSteps />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
