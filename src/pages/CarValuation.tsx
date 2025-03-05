import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import BasicInformation from "@/components/valuation/BasicInformation";
import EquipmentSelection from "@/components/valuation/EquipmentSelection";
import ServiceInformation from "@/components/valuation/ServiceInformation";
import TireInformation from "@/components/valuation/TireInformation";
import DamageAssessment from "@/components/valuation/DamageAssessment";
import ImageUpload from "@/components/valuation/ImageUpload";
import StepIndicator from "@/components/valuation/StepIndicator";
import ValuationResult from "@/components/valuation/ValuationResult";
import ValuationBackground from "@/components/valuation/ValuationBackground";

const CarValuation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [basicInfo, setBasicInfo] = useState({
    registrationNumber: "",
    mileage: "",
    year: "",
    engine: "",
    color: "",
    condition: "",
    transmission: "",
    horsepower: "",
  });
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [serviceInfo, setServiceInfo] = useState({
    lastServiceDate: "",
    lastServiceMileage: "",
    timingBeltChanged: "",
    timingBeltDate: "",
  });
  const [tireInfo, setTireInfo] = useState({
    currentTireDepth: "",
    hasExtraTires: false,
    extraTireDepth: "",
  });
  const [damageInfo, setDamageInfo] = useState({
    hasDamage: "",
    damageDescription: "",
    windshieldDamage: "",
    suspectedAccident: "",
  });
  const [images, setImages] = useState({
    carImages: [] as File[],
    damageImages: [] as File[],
  });

  const handleNext = () => {
    if (step < 4) {
      setStep(prev => prev + 1);
    } else {
      toast({
        title: "Värdering skickad",
        description: "Vi återkommer inom max 60 minuter till dig.",
      });
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }
  };

  // modify the code and link to car test page
  const handleBack = () => {   
    if (step > 1) {
      setStep(prev => prev - 1);
    }else{
      navigate('/car-test');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ValuationBackground />
      <div className="container mx-auto p-6 relative z-10">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/dashboard')}
          className="mb-6 flex items-center gap-2 hover:bg-white/10 text-gray-300 transition-all duration-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till dashboard
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-6"
            >
              <StepIndicator currentStep={step} />

              {step === 1 && (
                <BasicInformation
                  basicInfo={basicInfo}
                  onBasicInfoChange={setBasicInfo}
                />
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <EquipmentSelection
                    selectedEquipment={selectedEquipment}
                    onEquipmentChange={setSelectedEquipment}
                  />
                  <ServiceInformation
                    serviceInfo={serviceInfo}
                    onServiceInfoChange={setServiceInfo}
                  />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <TireInformation
                    tireInfo={tireInfo}
                    onTireInfoChange={setTireInfo}
                  />
                  <DamageAssessment
                    damageInfo={damageInfo}
                    onDamageInfoChange={setDamageInfo}
                  />
                  <ImageUpload
                    images={images}
                    onImagesChange={setImages}
                  />
                </div>
              )}

              {step === 4 && <ValuationResult />}

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  // disabled={step === 1}
                  className="hover:bg-white/10 text-gray-300 border-gray-600 transition-all duration-300"
                >
                  Tillbaka
                </Button>
                <Button 
                  onClick={handleNext}
                  className="bg-accent hover:bg-accent/90 transition-all duration-300"
                >
                  {step === 4 ? 'Skicka värdering' : 'Nästa'}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarValuation;