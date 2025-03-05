
interface InfoBoxProps {
  label: string;
  value: string | number;
}

const InfoBox = ({ label, value }: InfoBoxProps) => {
  return (
    <div className="bg-black/20 p-3 rounded-md h-[50px] flex items-center border border-white/10">
      <div className="flex justify-between w-full">
        <span className="text-gray-400 text-sm">{label}:</span>
        <span className="text-white text-sm">{value}</span>
      </div>
    </div>
  );
};

export default InfoBox;
