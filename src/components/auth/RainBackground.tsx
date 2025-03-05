
import { useEffect, useRef } from "react";

const RainBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Sätt canvas storlek till fönstrets storlek
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Skapa regndroppar
    const drops: { x: number; y: number; speed: number; symbol: string }[] = [];
    const symbols = ["🚗", "🚙", "🔧", "🔑", "⚡"];
    
    for (let i = 0; i < 50; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 1 + Math.random() * 3,
        symbol: symbols[Math.floor(Math.random() * symbols.length)]
      });
    }

    // Animera regnet
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      drops.forEach(drop => {
        // Skapa glödeffekt
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
        
        // Öka storleken och synligheten
        ctx.font = "24px Arial";
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        
        // Rita symbolen med glödeffekt
        ctx.fillText(drop.symbol, drop.x, drop.y);
        
        // Återställ shadow för nästa iteration
        ctx.shadowBlur = 0;
        
        drop.y += drop.speed;
        
        if (drop.y > canvas.height) {
          drop.y = -20;
          drop.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40"
      style={{ zIndex: -1 }}
    />
  );
};

export default RainBackground;
