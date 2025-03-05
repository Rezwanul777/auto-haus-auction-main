
import { motion } from "framer-motion";
import { Car } from "lucide-react";

interface ScrollingCarProps {
  scrollProgress: number;
}

export const ScrollingCar = ({ scrollProgress }: ScrollingCarProps) => {
  const yPosition = Math.min(Math.max(scrollProgress, 0), 100);
  const xPosition = scrollProgress > 20 && scrollProgress < 40 ? 80 - (scrollProgress - 20) * 2 : 
                   scrollProgress > 60 && scrollProgress < 80 ? 60 + (scrollProgress - 60) * 2 : 80;
                   
  const rotation = scrollProgress > 20 && scrollProgress < 40 ? -90 :
                  scrollProgress > 60 && scrollProgress < 80 ? 90 : 0;

  return (
    <motion.div
      className="fixed"
      style={{
        top: `${yPosition}%`,
        left: `${xPosition}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        zIndex: 100,
        willChange: "transform"
      }}
      initial={false}
    >
      <motion.div
        animate={{ 
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse"
        }}
      >
        <Car className="text-white w-12 h-12" />
      </motion.div>
    </motion.div>
  );
};
