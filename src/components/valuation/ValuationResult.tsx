import { Card } from "@/components/ui/card";

const ValuationResult = () => {
  return (
    <Card className="p-6 glass-card">
      <h2 className="text-2xl font-bold mb-4 text-gray-200">Din bils värde</h2>
      <p className="text-lg mb-4 text-gray-300">
        Baserat på den information du har angett uppskattar vi värdet på din bil till:
      </p>
      <div className="text-3xl font-bold text-accent mb-6 animate-pulse">
        150 000 - 175 000 kr
      </div>
      <p className="text-sm text-gray-400">
        Detta är en preliminär värdering. Det slutgiltiga priset kan variera beroende på marknadens efterfrågan och ytterligare faktorer.
      </p>
    </Card>
  );
};

export default ValuationResult;