/* eslint-disable react-hooks/exhaustive-deps */
import { VehicleDetailStep, VehicleFormData } from "@/types/vehicle";
import { useState, useEffect } from "react";
// import { VehicleFormData, VehicleDetailStep } from "@/types/vehicle";
import { toast } from "sonner";

const getNextStep = (currentStep: VehicleDetailStep, formData: VehicleFormData, hasExtraWheels?: boolean): VehicleDetailStep | null => {
  const stepSequence: { [key in VehicleDetailStep]?: VehicleDetailStep } = {
    make: 'model',
    model: 'year',
    year: 'engine',
    engine: 'bodyType',
    bodyType: 'fuelType',
    fuelType: 'transmission',
    transmission: 'color',
    color: 'equipment',
    equipment: 'keys',
    keys: 'rims',
    rims: 'tires',
    tires: 'extraWheels',
    extraWheels: hasExtraWheels ? 'extraRims' : 'mileage',
    extraRims: 'extraTires',
    extraTires: 'mileage',
  };

  return stepSequence[currentStep] || null;
};

const validateStepCompletion = (step: VehicleDetailStep, formData: VehicleFormData): boolean => {
  switch (step) {
    case 'equipment':
      return formData.equipment && formData.equipment.length > 0;
    case 'extraWheels':
      return formData.hasExtraWheels !== undefined;
    default:
      return !!formData[step];
  }
};

export const useVehicleDetailForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentDetailStep, setCurrentDetailStep] = useState<VehicleDetailStep>('make');
  const [formData, setFormData] = useState<VehicleFormData>({ equipment: [] });

  const handleRegNumberSubmit = (regNumber: string) => {
    setFormData(prev => ({ ...prev, regNumber }));
    toast.success("Registreringsnummer mottaget!");
    setCurrentStep(2);
  };

  const handleOptionSelect = (value: string) => {
    // Handle equipment selection (array type)
    if (currentDetailStep === 'equipment') {
      const newEquipment = formData.equipment?.includes(value)
        ? formData.equipment.filter(item => item !== value)
        : [...(formData.equipment || []), value];
      
      setFormData(prev => ({ ...prev, equipment: newEquipment }));
      return;
    }

    // Handle extra wheels selection (boolean type)
    if (currentDetailStep === 'extraWheels') {
      const hasExtraWheels = value === 'yes';
      setFormData(prev => ({ ...prev, hasExtraWheels }));
      return;
    }

    // Handle all other fields (string type)
    setFormData(prev => ({ ...prev, [currentDetailStep]: value }));
  };

  // Progress to next step after form updates
  const progressToNextStep = () => {
    if (!validateStepCompletion(currentDetailStep, formData)) {
      return;
    }

    const nextStep = getNextStep(currentDetailStep, formData, formData.hasExtraWheels);
    
    if (nextStep) {
      setCurrentDetailStep(nextStep);
    } else if (currentDetailStep === 'mileage') {
      setCurrentStep(3);
      toast.success("Fordonsdetaljer sparade!");
    }
  };

  // Watch for form data changes and progress automatically
  useEffect(() => {
    progressToNextStep();
  }, [formData]);

  const handleEditSection = (section: VehicleDetailStep) => {
    setCurrentDetailStep(section);
  };

  return {
    currentStep,
    currentDetailStep,
    formData,
    handleRegNumberSubmit,
    handleOptionSelect,
    handleEditSection
  };
};

