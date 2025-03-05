import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <motion.section 
      className="py-20 text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto px-4 relative">
        <motion.h2 
          className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
          whileHover={{ scale: 1.05 }}
        >
          Redo att sälja din bil?
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Starta processen idag och få ett konkurrenskraftigt pris för din bil genom vår auktionsplattform.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-block"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 text-lg relative z-10"
          >
            Starta din bilauktion nu
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-10 left-10 text-purple-400"
        animate={{
          y: [-20, 20],
          rotate: [0, 360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Star size={32} />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-pink-400"
        animate={{
          y: [20, -20],
          rotate: [360, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Sparkles size={32} />
      </motion.div>
    </motion.section>
  );
};