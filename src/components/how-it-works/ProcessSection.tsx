import { motion } from "framer-motion";
import { Car, Upload, Clock, CreditCard, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

interface IconWrapperProps {
  children: React.ReactNode;
}

const IconWrapper = ({ children }: IconWrapperProps) => (
  <div className="p-3 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20">
    {children}
  </div>
);

const sections = [
  {
    title: "Värdering & Inspektion",
    icon: <Car className="w-12 h-12 text-purple-500" />,
    content: "Vår process börjar med en noggrann värdering av din bil. Genom att använda vår värderingsmodell får du en rättvis och marknadsmässig uppskattning av din bils värde.",
    details: [
      "Bilens märke, modell och årsmodell",
      "Körsträcka och skick",
      "Utrustningsnivå och tillval",
      "Aktuella marknadstrender"
    ],
    gradient: "from-purple-900/20 via-pink-900/10 to-transparent",
    decorations: [
      <motion.div
        key="star1"
        className="absolute -top-10 -right-10 text-purple-400"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Star size={32} />
      </motion.div>,
      <motion.div
        key="sparkles1"
        className="absolute -bottom-10 -left-10 text-pink-400"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Sparkles size={32} />
      </motion.div>
    ]
  },
  {
    title: "Auktionsförberedelse",
    icon: <Upload className="w-12 h-12 text-orange-500" />,
    content: "När din bil har genomgått vår grundliga inspektion, förbereder vi den för auktion med professionell presentation.",
    details: [
      "Professionell fotografering",
      "Detaljerad beskrivning",
      "Transparent redovisning",
      "Dokumentationshantering"
    ],
    gradient: "from-orange-900/20 via-yellow-900/10 to-transparent",
    decorations: [
      <motion.div
        key="star3"
        className="absolute top-5 -right-8 text-orange-500"
        animate={{
          y: [-10, 10],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Star size={32} />
      </motion.div>
    ]
  },
  {
    title: "Auktionsprocessen",
    icon: <Clock className="w-12 h-12 text-blue-500" />,
    content: "Vår auktionsprocess är utformad för att maximera värdet på din bil samtidigt som vi säkerställer en rättvis och transparent budgivning.",
    details: [
      "3-7 dagars auktionstid",
      "Verifierade budgivare",
      "Realtidsuppdateringar",
      "Anti-sniping system"
    ],
    gradient: "from-blue-900/20 via-cyan-900/10 to-transparent",
    decorations: [
      <motion.div
        key="star4"
        className="absolute -bottom-8 right-10 text-cyan-500"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Star size={32} />
      </motion.div>
    ]
  },
  {
    title: "Betalning & Överlämning",
    icon: <CreditCard className="w-12 h-12 text-emerald-500" />,
    content: "När auktionen är avslutad hanterar vi hela betalnings- och överlämningsprocessen säkert och effektivt.",
    details: [
      "Säker betalningshantering",
      "Verifierad köpare",
      "Smidig överlämning",
      "Komplett dokumentation"
    ],
    gradient: "from-emerald-900/20 via-green-900/10 to-transparent",
    decorations: [
      <motion.div
        key="star5"
        className="absolute -top-8 left-10 text-emerald-500"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Sparkles size={32} />
      </motion.div>
    ]
  }
];

export const ProcessSection = () => {
  const SectionRef = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
    return (
      <div ref={ref} className="transform transition-all duration-500">
        {children}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 space-y-16 md:space-y-32">
      {sections.map((section, index) => (
        <SectionRef key={index}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${section.gradient} backdrop-blur-sm border border-white/20`}>
              <CardContent className="p-4 md:p-8 relative">
                {section.decorations}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
                  <motion.div
                    className="space-y-4 md:space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          duration: 0.8,
                          ease: "easeOut"
                        }
                      }
                    }}
                  >
                    <motion.div 
                      className="flex items-center gap-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="p-2 md:p-3 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20">
                        {section.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                        {section.title}
                      </h2>
                    </motion.div>
                    <p className="text-base md:text-lg text-gray-300">
                      {section.content}
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      {section.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-2 text-sm md:text-base text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <Star className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { 
                        opacity: 1, 
                        scale: 1,
                        transition: {
                          duration: 0.8,
                          ease: "easeOut"
                        }
                      }
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                        y: [-10, 10, -10]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      {section.icon}
                    </motion.div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </SectionRef>
      ))}
    </div>
  );
};
