
import { Separator } from "@/components/ui/separator";

interface DashboardSeparatorProps {
  spacing?: string;
}

const DashboardSeparator = ({ spacing = "py-6" }: DashboardSeparatorProps) => {
  return (
    <div className={spacing}>
      <Separator className="bg-gray-700" />
    </div>
  );
};

export default DashboardSeparator;
