
import { useState, useEffect } from "react";
interface NewsItem {
  title: string;
  image: string;
  text: string;
}
const newsItems = [{
  title: "Ny auktionsrekord",
  image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
  text: "En klassisk Volvo P1800 såldes för rekordsumma på vår senaste auktion"
}, {
  title: "Miljövänliga val",
  image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
  text: "Allt fler väljer elbilar på våra auktioner, en ökning med 150% från föregående år"
}, {
  title: "Digital transformation",
  image: "https://images.unsplash.com/photo-1618851214067-ae9df7c29b7f",
  text: "Vår nya app gör det enklare än någonsin att delta i bilauktioner"
}];
const NewsSection = () => {
  const [currentNews, setCurrentNews] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews(prev => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <div className="w-1/2 bg-black relative overflow-hidden h-[400px]">
      <div className="absolute inset-0 animate-fade-in" key={currentNews}>
        <img src={newsItems[currentNews].image} alt={newsItems[currentNews].title} className="w-full h-full object-cover opacity-50 rounded-md" />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent">
          <h2 className="text-xl font-bold text-white mb-2">{newsItems[currentNews].title}</h2>
          <p className="text-gray-300">{newsItems[currentNews].text}</p>
        </div>
      </div>
      <div className="absolute top-6 left-6 text-white">
        <h1 className="text-3xl font-bold mb-3">Välkommen till<br />BILENIA AUKTIONER</h1>
        <p className="text-lg text-gray-300 max-w-md">
          Din destination för exklusiva bilauktioner. Upptäck ett brett utbud av fordon och börja din resa med oss idag.
        </p>
      </div>
    </div>;
};
export default NewsSection;
