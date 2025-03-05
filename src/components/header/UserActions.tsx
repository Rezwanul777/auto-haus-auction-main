
// import { Home, UserPlus } from "lucide-react";
// import { Button } from "../ui/button";
// import { useNavigate } from "react-router-dom";

// const UserActions = () => {
//   const navigate = useNavigate();
  
//   return (
//     <div className="flex items-center space-x-4">
//       <Button 
//         variant="outline" 
//         className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white text-xs py-0 h-7"
//         onClick={() => navigate('/auth')}
//       >
//         <UserPlus className="mr-1 h-3 w-3" />
//         Sign Up
//       </Button>
//       <Button
//         variant="ghost"
//         size="icon"
//         className="h-7 w-7 p-0 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white/80 "
//         onClick={() => navigate('/dashboard')}
//       >
//         <Home  className="h-4 w-4 text-[#D4AF37] " />
//       </Button>
//     </div>
//   );
// };

// export default UserActions;
import { Home, UserPlus } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const UserActions = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center space-x-4">
      <Button 
        variant="outline" 
        className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white text-xs py-0 h-7"
        onClick={() => navigate('/auth')}
      >
        <UserPlus className="mr-1 h-3 w-3" />
        Sign Up
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 p-0 border-[#D4AF37] hover:bg-[#D4AF37] group"
        onClick={() => navigate('/dashboard')}
      >
        <Home className="h-4 w-4 text-[#D4AF37] group-hover:text-white" />
      </Button>
    </div>
  );
};

export default UserActions;

