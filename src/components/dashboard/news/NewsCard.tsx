
import { Card, CardContent } from "@/components/ui/card";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
}

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

const NewsCard = ({ news, index }: NewsCardProps) => {
  return (
    <Card 
      className="bg-black/20 backdrop-blur-sm border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] animate-fade-in cursor-pointer h-full min-h-[250px]" 
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-10">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <span className="text-sm text-white/80 font-medium">
              {news.category}
            </span>
            <span className="text-sm text-white/60">
              {news.date}
            </span>
          </div>
          <h3 className="font-semibold text-2xl text-white">{news.title}</h3>
          <p className="text-white/70 text-lg">{news.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
