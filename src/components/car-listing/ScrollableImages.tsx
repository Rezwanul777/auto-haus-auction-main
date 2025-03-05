import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImageGallery from "./tire-info/ImageGallery";
import TireInfoSection from "./tire-info/TireInfoSection";

interface ScrollableImagesProps {
  title: string;
  images: string[];
  tireInfo?: {
    current?: {
      front?: {
        tireDepth?: string;
        brakeCondition?: string;
      };
      back?: {
        tireDepth?: string;
        brakeCondition?: string;
      };
    };
    extra?: {
      front?: {
        tireDepth?: string;
      };
      back?: {
        tireDepth?: string;
      };
    };
  };
}

const ScrollableImages = ({ title, images, tireInfo }: ScrollableImagesProps) => {
  return (
    <Card className="glass-card animate-fade-in">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="images" className="border-none">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <span className="text-xl font-semibold text-white">{title}</span>
            <ChevronDown className="h-5 w-5 text-white shrink-0 transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4">
            <ImageGallery images={images} title={title} />
            
            {tireInfo && (
              <div className="mt-6 space-y-6">
                {tireInfo.current && (
                  <TireInfoSection 
                    title="Nuvarande hjul"
                    tireInfo={tireInfo.current}
                    showBrakeCondition={true}
                  />
                )}
                {tireInfo.extra && (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="extra-wheels" className="border-none">
                      <AccordionTrigger className="px-4 py-2 bg-black/20 rounded-lg hover:no-underline">
                        <span className="font-medium text-white">Extra hjul</span>
                        <ChevronDown className="h-4 w-4 text-white shrink-0 transition-transform duration-200" />
                      </AccordionTrigger>
                      <AccordionContent className="pt-4">
                        <TireInfoSection 
                          title=""
                          tireInfo={tireInfo.extra}
                          showBrakeCondition={false}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default ScrollableImages;