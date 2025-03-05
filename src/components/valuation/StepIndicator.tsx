import { Car, Wrench, Camera, Calculator } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  {
    title: "Grundläggande information",
    description: "Fyll i grundläggande information om din bil",
    icon: Car,
    bgColor: "bg-blue-100/10",
    textColor: "text-blue-400",
  },
  {
    title: "Utrustning & Service",
    description: "Välj utrustning och ange serviceinformation",
    icon: Wrench,
    bgColor: "bg-green-100/10",
    textColor: "text-green-400",
  },
  {
    title: "Skick & Bilder",
    description: "Beskriv bilens skick och ladda upp bilder",
    icon: Camera,
    bgColor: "bg-purple-100/10",
    textColor: "text-purple-400",
  },
  {
    title: "Värdering",
    description: "Se din bils uppskattade värde",
    icon: Calculator,
    bgColor: "bg-amber-100/10",
    textColor: "text-amber-400",
  },
];

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = currentStep === index + 1;
        return (
          <div
            key={index}
            className={`glass-card p-4 rounded-lg ${
              isActive ? "ring-2 ring-accent" : ""
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-2 rounded-full ${step.bgColor} ${step.textColor}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-200">{step.title}</h3>
                <p className="text-xs text-gray-400">{step.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;