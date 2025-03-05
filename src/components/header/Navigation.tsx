
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link 
        to="/" 
        className="text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors text-xs"
      >
        Auktioner
      </Link>
      <Link 
        to="/how-it-works" 
        className="text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors text-xs"
      >
        Hur det fungerar
      </Link>
    </div>
  );
};

export default Navigation;
