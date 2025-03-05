import InfoBox from "./InfoBox";

interface InfoItem {
  label: string;
  value: string | number;
}

interface InfoSectionProps {
  title: string;
  items: InfoItem[];
}

const InfoSection = ({ title, items }: InfoSectionProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item, index) => (
          <InfoBox key={index} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export default InfoSection;