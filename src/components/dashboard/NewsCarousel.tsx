
import { Newspaper } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NewsCard from "./news/NewsCard";
import { newsItems } from "./news/newsData";

const NewsCarousel = () => {
  return (
    <div className="w-full">
      <div className="flex items-center mb-6">
        <div className="flex items-center gap-2">
          <Newspaper className="h-5 w-5 text-white" />
          <h2 className="text-xl font-semibold text-white">Senaste nytt</h2>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {newsItems.map((news, index) => (
            <CarouselItem key={news.id} className="pl-4 basis-full md:basis-1/2">
              <NewsCard news={news} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 text-white border-white/20 bg-black/40 hover:bg-black/60" />
        <CarouselNext className="hidden md:flex -right-4 text-white border-white/20 bg-black/40 hover:bg-black/60" />
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
