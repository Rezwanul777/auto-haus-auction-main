import { Clock } from "lucide-react";

interface TimeRemainingProps {
  timeLeft: string;
}

const TimeRemaining = ({ timeLeft }: TimeRemainingProps) => {
  return (
    <div className="flex items-center gap-2 text-gray-400 bg-black/20 p-3 rounded-lg">
      <Clock className="w-5 h-5 text-accent animate-pulse" />
      <span className="font-medium">{timeLeft} kvar</span>
    </div>
  );
};

export default TimeRemaining;