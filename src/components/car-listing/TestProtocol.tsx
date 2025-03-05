import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface TestItem {
  name: string;
  status: "ok" | "error";
}

const TestProtocol = () => {
  const { toast } = useToast();

  const testItems: TestItem[] = [
    { name: "Motor", status: "ok" },
    { name: "Bromsar", status: "ok" },
    { name: "Växellåda", status: "error" },
    { name: "AC", status: "ok" },
    { name: "Instrumentpanel", status: "ok" },
    { name: "Vindruta", status: "error" },
  ];

  return (
    <Card className="glass-card animate-fade-in">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="test-protocol" className="border-none">
          <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline">
            <span className="text-lg sm:text-xl font-semibold text-white">Testprotokoll</span>
          </AccordionTrigger>
          <AccordionContent className="px-4 sm:px-6 pb-4">
            <div id="test-protocol" className="space-y-2 sm:space-y-3">
              {testItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 sm:p-2.5 bg-black/20 rounded-lg"
                >
                  <span className="text-white text-sm sm:text-base">{item.name}</span>
                  {item.status === "ok" ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  ) : (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  )}
                </div>
              ))}
              <div className="mt-4 p-2 sm:p-3 bg-black/20 rounded-lg">
                <h3 className="text-white text-sm sm:text-base mb-2">Övriga kommentarer</h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Växellådan har ett mindre läckage som behöver åtgärdas. Vindrutan har en spricka i nedre högra hörnet. I övrigt fungerar alla testade komponenter som de ska.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default TestProtocol;