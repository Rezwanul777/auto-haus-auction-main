
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate('/dashboard')} 
      className="flex-shrink-0 cursor-pointer"
    >
      <span className="text-lg font-bold text-[#D4AF37]">BEA</span>
    </div>
  );
};

export default Logo;
