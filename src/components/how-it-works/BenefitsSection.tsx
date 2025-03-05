import { motion } from "framer-motion";
import { Star, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Maximalt Värde",
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    description: "Genom vår konkurrensutsatta auktionsprocess får du bästa möjliga pris för din bil."
  },
  {
    title: "Säker Handel",
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    description: "Vi verifierar alla köpare och säljare samt hanterar betalningen säkert."
  },
  {
    title: "Stort Nätverk",
    icon: <Users className="w-8 h-8 text-purple-500" />,
    description: "Tillgång till tusentals verifierade bilhandlare och privata köpare."
  }
];

export const BenefitsSection = () => {
  return (
    <motion.section 
      className="py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          Fördelar med vår plattform
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-500 hover:-translate-y-2 bg-black/40 backdrop-blur-sm border border-white/10">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="mb-4 flex justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};