
import { useScroll, useTransform } from "framer-motion";
import { ScrollingCar } from "./ScrollingCar";
import { useRef } from "react";

export const AnimatedCars = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none hidden md:block"
      style={{ zIndex: 50, minHeight: "100vh", willChange: "transform" }}
    >
      <ScrollingCar scrollProgress={progress as any} />
    </div>
  );
};
