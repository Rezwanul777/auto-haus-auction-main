import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqItems: FAQItem[];
}

export const FAQSection = ({ faqItems }: FAQSectionProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-white">Vanliga frågor</h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {faqItems.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="glass-card border border-white/20 rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="px-4 text-white hover:no-underline hover:bg-white/5">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-gray-300">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};