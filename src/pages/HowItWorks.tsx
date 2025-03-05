
import { motion } from "framer-motion";
import { HeroSection } from "@/components/how-it-works/HeroSection";
import { ProcessSection } from "@/components/how-it-works/ProcessSection";
import { BenefitsSection } from "@/components/how-it-works/BenefitsSection";
import { CTASection } from "@/components/how-it-works/CTASection";
import { GridBackground } from "@/components/how-it-works/background/GridBackground";
import { AnimatedCars } from "@/components/how-it-works/animations/AnimatedCars";
import { useIsMobile } from "@/hooks/use-mobile";

const HowItWorks = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background layer */}
      <div className="fixed inset-0 z-0">
        <GridBackground />
      </div>

      {/* Animation layer */}
      {!isMobile && (
        <div className="fixed inset-0 z-10">
          <AnimatedCars />
        </div>
      )}

      {/* Content layer */}
      <div className="relative z-20 max-w-[calc(100%-2rem)] md:max-w-[calc(100%-6rem)] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3, margin: "0px" }}
          transition={{ duration: 0.6 }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px", amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <ProcessSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px", amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <BenefitsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px", amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <CTASection />
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
