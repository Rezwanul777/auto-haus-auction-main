import { Heart, Car, Calendar, Timer, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CarCardProps {
  car: {
    id: number;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    image: string;
  };
  isFavorite: boolean;
  onFavoriteToggle: (id: number) => void;
  onCardClick: (id: number) => void;
}

// // const CarCard = ({ car, isFavorite, onFavoriteToggle, onCardClick }: CarCardProps) => {
// //   return (
// //     <Card
// //       className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group animate-fade-in"
// //       onClick={() => onCardClick(car.id)}
// //     >
// //       <div className="flex flex-row h-full">
// //         {/* Vänster sida med bild */}
// //         <div className="relative w-1/3">
// //           <div className="w-full h-full" style={{ height: '240px' }}>
// //             <img
// //               src={car.image}
// //               alt={`${car.make} ${car.model}`}
// //               className="w-full h-full object-cover"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80" />
// //           </div>
// //           {/* modified */}
// //           <Badge className="absolute lg:top-6 lg:right-5 top-3 right-3 bg-accent text-white">
// //             {car?.year}
// //           </Badge>
// //         </div>

// //         {/* Höger sida med information och knappar */}
// //         <div className="flex-1 p-6 bg-black/40 backdrop-blur-sm flex flex-col justify-between">
// //           <div className="space-y-4">
// //             {/* Övre rad med titel och pris */}
// //             <div className="flex justify-between items-start">
// //               <div>
// //                 <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors flex items-center gap-2">
// //                   {car.make} {car.model}
// //                   <Star className="w-4 h-4 text-accent" />
// //                 </h3>
// //                 <div className="grid grid-cols-2 gap-4 mt-3">
// //                   <div className="flex items-center gap-2 text-white/80">
// //                     <Car className="w-4 h-4" />
// //                     <span>{car.mileage.toLocaleString()} km</span>
// //                   </div>
// //                   <div className="flex items-center gap-2 text-white/80">
// //                     <Calendar className="w-4 h-4" />
// //                     <span>Årsmodell {car.year}</span>
// //                   </div>
// //                   <div className="flex items-center gap-2 text-white/80">
// //                     <Timer className="w-4 h-4" />
// //                     <span>2 dagar kvar</span>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div >
// //                 {/* modified text and font size */}
// //                 <p className="text-xl font-semibold text-accent">
// //                   {car.price.toLocaleString()} kr
// //                 </p>
// //                 <p className="text-sm text-white/60 mt-1">
// //                   Aktuellt bud
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Nedre rad med knappar */}
// //           <div className="flex gap-4 mt-6">
// //             <Button
// //               className="flex-1 bg-accent hover:bg-accent/90 text-white"
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 onCardClick(car.id);
// //               }}
// //             >
// //               Se detaljer
// //             </Button>
// //             <Button
// //               variant="ghost"
// //               className={`flex-1 ${
// //                 isFavorite
// //                   ? "bg-red-500 text-white hover:bg-red-600"
// //                   : "bg-white/10 hover:bg-white/20 text-white"
// //               }`}
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 onFavoriteToggle(car.id);
// //               }}
// //             >
// //               <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-current" : ""}`} />
// //               {isFavorite ? "Ta bort favorit" : "Lägg till favorit"}
// //             </Button>
// //           </div>
// //         </div>
// //       </div>
// //     </Card>
// //   );
// // };

// // export default CarCard;
// const CarCard = ({ car, isFavorite, onFavoriteToggle, onCardClick }) => {
//   return (
//     <Card
//       className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group animate-fade-in"
//       onClick={() => onCardClick(car.id)}
//     >
//       <div className="flex flex-col md:flex-row h-full">
//         {/* Left side with image */}
//         <div className="relative w-full md:w-1/3">
//           <div className="w-full h-56 md:h-60 lg:h-64 xl:h-72">
//             <img
//               src={car.image}
//               alt={`${car.make} ${car.model}`}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80" />
//           </div>
//           <Badge className="absolute top-2 right-2 md:top-3 md:right-3 lg:top-5 lg:right-5 bg-accent text-white text-xs md:text-sm  px-1 py-1 md:px-2 md:py-1.5">
//             {car?.year}
//           </Badge>
//         </div>

//         {/* Right side with details and buttons */}
//         <div className="flex-1 p-4 md:p-6 bg-black/40 backdrop-blur-sm flex flex-col justify-between">
//           <div className="space-y-4">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-xs md:text-lg font-semibold text-white group-hover:text-accent transition-colors flex items-center gap-2">
//                   {car.make} {car.model}
//                   <Star className="w-4 h-4 text-accent" />
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
//                   <div className="flex items-center gap-2 text-white/80">
//                     <Car className="w-4 h-4" />
//                     <span>{car.mileage.toLocaleString()} km</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-white/80">
//                     <Calendar className="w-4 h-4" />
//                     <span>Årsmodell {car.year}</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-white/80">
//                     <Timer className="w-4 h-4" />
//                     <span>2 dagar kvar</span>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <p className="text-lg md:text-xl font-semibold text-accent">
//                   {car.price.toLocaleString()} kr
//                 </p>
//                 <p className="text-sm text-white/60 mt-1">Aktuellt bud</p>
//               </div>
//             </div>
//           </div>

//           {/* Buttons row */}
//           <div className="flex flex-col sm:flex-row gap-3 mt-6">
//             <Button
//               className="flex-1 bg-accent hover:bg-accent/90 text-white"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onCardClick(car.id);
//               }}
//             >
//               Se detaljer
//             </Button>
//             <Button
//               variant="ghost"
//               className={`flex-1 ${
//                 isFavorite
//                   ? "bg-red-500 text-white hover:bg-red-600"
//                   : "bg-white/10 hover:bg-white/20 text-white"
//               }`}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onFavoriteToggle(car.id);
//               }}
//             >
//               <Heart
//                 className={`w-4 h-4 mr-2 ${isFavorite ? "fill-current" : ""}`}
//               />
//               {isFavorite ? "Ta bort favorit" : "Lägg till favorit"}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// };

const CarCard = ({ car, isFavorite, onFavoriteToggle, onCardClick }) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group animate-fade-in"
      onClick={() => onCardClick(car.id)}
    >
      <div className="flex flex-col-reverse md:flex-row h-full gap-4 md:gap-0">
        {/* Left side with image */}
        <div className="relative w-full md:w-1/3">
          <div className="w-full h-56 md:h-60 lg:h-64 xl:h-72">
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80" />
          </div>
          {/* Adjusted Badge Position */}
          <Badge className="absolute top-3 right-3 md:top-5 md:right-5 bg-accent text-white  px-1 py-0.5  text-sm md:text-base">
            {car?.year}
          </Badge>
        </div>
        
        {/* Right side with details and buttons */}
        <div className="flex-1 p-4 md:p-6 bg-black/40 backdrop-blur-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-accent transition-colors flex items-center gap-2">
                  {car.make} {car.model}
                  <Star className="w-4 h-4 text-accent" />
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <div className="flex items-center gap-2 text-white/80">
                    <Car className="w-4 h-4" />
                    <span>{car.mileage.toLocaleString()} km</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Calendar className="w-4 h-4" />
                    <span>Årsmodell {car.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Timer className="w-4 h-4" />
                    <span>2 dagar kvar</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lg md:text-xl font-semibold text-accent">
                  {car.price.toLocaleString()} kr
                </p>
                <p className="text-sm text-white/60 mt-1">
                  Aktuellt bud
                </p>
              </div>
            </div>
          </div>
          
          {/* Buttons row */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button 
              className="flex-1 bg-accent hover:bg-accent/90 text-white"
              onClick={(e) => {
                e.stopPropagation();
                onCardClick(car.id);
              }}
            >
              Se detaljer
            </Button>
            <Button
              variant="ghost"
              className={`flex-1 ${
                isFavorite
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                onFavoriteToggle(car.id);
              }}
            >
              <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-current" : ""}`} />
              {isFavorite ? "Ta bort favorit" : "Lägg till favorit"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CarCard;




