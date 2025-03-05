import { motion } from "framer-motion";
import { ArrowDown, Rocket, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center px-4 space-y-6 md:space-y-8 relative z-10">
        <motion.div 
          className="relative inline-block"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 text-transparent bg-clip-text">
            Så Fungerar Det
          </h1>
          <motion.div
            className="absolute -right-8 md:-right-12 -top-6 md:-top-8"
            animate={{
              rotate: [0, 14, 0],
              y: [-5, 5, -5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Rocket className="text-purple-500/70 w-6 h-6 md:w-8 md:h-8" />
          </motion.div>
          <motion.div
            className="absolute -left-8 md:-left-12 top-0"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Sparkles className="text-purple-400/70 w-4 h-4 md:w-6 md:h-6" />
          </motion.div>
        </motion.div>
        
        <motion.p 
          className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Vi har gjort det enkelt och säkert att sälja din bil genom vår moderna auktionsplattform
          <motion.span
            className="absolute -right-6 md:-right-8 top-0"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Zap className="text-purple-400/70 w-4 h-4 md:w-5 md:h-5" />
          </motion.span>
        </motion.p>
        
        <motion.div 
          className="flex flex-col items-center gap-4 md:gap-6 pt-6 md:pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600/80 to-purple-800/80 hover:from-purple-700/90 hover:to-purple-900/90 text-white/90 font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
            <span className="relative z-10">Börja Sälja Din Bil Nu</span>
          </Button>
          
          <motion.div 
            className="pt-6 md:pt-8"
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-purple-400/70" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
