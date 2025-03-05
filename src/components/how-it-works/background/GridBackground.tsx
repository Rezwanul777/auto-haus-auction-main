
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export const GridBackground = () => {
  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 bg-black">
      {/* Vertical road */}
      <div className={`absolute ${isMobile ? 'left-[90%]' : 'left-[80%]'} top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white/30 via-white/40 to-white/30`} />
      
      {/* Curved road sections */}
      {[20, 40, 60, 80].map((position) => (
        <div 
          key={`curve-${position}`} 
          className="absolute w-16 md:w-32 h-16 md:h-32"
          style={{ 
            top: `${position}%`,
            right: isMobile ? '10%' : '20%',
            background: 'radial-gradient(circle at 100% 0%, transparent 70%, rgba(255,255,255,0.4) 71%, rgba(255,255,255,0.3) 100%)',
            transform: position % 40 === 0 ? 'scaleY(-1)' : '',
          }}
        />
      ))}

      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none" />
    </div>
  );
};
