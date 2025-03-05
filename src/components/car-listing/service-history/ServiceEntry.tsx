
import ImageGallery from "../tire-info/ImageGallery";

interface ServiceEntryProps {
  date: string;
  mileage: string;
  description: string;
  images?: string[];
}

const ServiceEntry = ({ date, mileage, description, images }: ServiceEntryProps) => {
  return (
    <div className="bg-black/20 rounded-lg">
      <div className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Datum:</span>
            <span className="text-white">{date}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Miltal:</span>
            <span className="text-white">{mileage} km</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Utfört:</span>
            <span className="text-white">{description}</span>
          </div>
        </div>
      </div>
      {images && images.length > 0 && (
        <div className="px-4 pb-4">
          <ImageGallery 
            images={images}
            title={`Servicedokumentation ${date}`}
          />
        </div>
      )}
    </div>
  );
};

export default ServiceEntry;
