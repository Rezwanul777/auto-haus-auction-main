interface VehicleLocationProps {
  location: string;
}

const VehicleLocation = ({ location }: VehicleLocationProps) => {
  return (
    <div className="flex items-center gap-2 text-gray-400 bg-black/20 p-3 rounded-lg">
      <span>Fordonets plats:</span>
      <span className="font-medium text-white">{location}</span>
    </div>
  );
};

export default VehicleLocation;