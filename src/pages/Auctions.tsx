import { useNavigate } from "react-router-dom";
import AuctionCard from "@/components/auctions/AuctionCard";
import AuctionHeader from "@/components/auctions/AuctionHeader";
import AuctionBackground from "@/components/auctions/AuctionBackground";

const auctionTypes = [
  {
    id: 1,
    title: "Måndagsauktion - Nya bilar",
    description: "Auktion med endast nya bilar från ledande återförsäljare",
    startTime: "10:00",
    date: "2024-03-18",
    totalCars: 25,
    type: "monday-new",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    status: "active",
    bgColor: "from-blue-500/10 to-blue-600/10"
  },
  {
    id: 2,
    title: "Onsdagsauktion - Begagnade bilar",
    description: "Stort utbud av kvalitetssäkrade begagnade bilar",
    startTime: "11:00",
    date: "2024-03-20",
    totalCars: 70,
    type: "wednesday-used",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd",
    status: "upcoming",
    bgColor: "from-orange-500/10 to-orange-600/10"
  },
  {
    id: 3,
    title: "Fredagsauktion - Premium bilar",
    description: "Exklusiva och lyxbilar från premium märken",
    startTime: "14:00",
    date: "2024-03-22",
    totalCars: 15,
    type: "friday-premium",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    status: "upcoming",
    bgColor: "from-purple-500/10 to-purple-600/10"
  }
];

const Auctions = () => {
  const navigate = useNavigate();

  const handleAuctionClick = (auctionType: string) => {
    console.log(`Navigating to auction: ${auctionType}`);
    navigate(`/auctions/${auctionType}`);
  };

  return (
    <div className="min-h-screen bg-black relative animate-fade-in">
      <AuctionBackground />
      <div className="container max-w-6xl py-8 px-4 relative z-10">
        <AuctionHeader onBackClick={() => navigate('/dashboard')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctionTypes.map((auction) => (
            <AuctionCard
              key={auction.id}
              auction={auction}
              onAuctionClick={handleAuctionClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auctions;