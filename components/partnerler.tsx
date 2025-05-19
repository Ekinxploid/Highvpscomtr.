"use client"

import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Partnerler() {
  const containerRef = useRef<HTMLElement | null>(null);
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);
  
  const partners = [
    { name: "Plesk", logo: "/1.png" },
    { name: "cPanel", logo: "/3.png" },
    { name: "VMware", logo: "/4.png" },
    { name: "Interserver", logo: "/5.png" },
    { name: "AMD Ryzen", logo: "/6.png" },
    { name: "Microsoft", logo: "/7.png" },
    { name: "Plesk", logo: "/1.png" },
    { name: "cPanel", logo: "/3.png" },
    { name: "VMware", logo: "/4.png" },
    { name: "Interserver", logo: "/5.png" },
    { name: "AMD Ryzen", logo: "/6.png" },
    { name: "Microsoft", logo: "/7.png" }
  ];

  const [width, setWidth] = useState(0);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (marqueeRef.current) {
        const updateWidth = () => {
          if (marqueeRef.current) {
            const firstGroupWidth = marqueeRef.current.getBoundingClientRect().width / 2;
            setWidth(-firstGroupWidth);
          }
        };
        
        updateWidth();
        
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (width !== 0) {
      controls.start({
        x: width,
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }
      });
    }
  }, [controls, width]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    if (width !== 0) {
      controls.start({
        x: width,
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }
      });
    }
  };

  return (
    <section className="bg-[#080a1a] py-12 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">İş Ortaklarımız</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Sektörün önde gelen teknoloji sağlayıcılarıyla çalışarak en iyi hizmeti sunuyoruz.</p>
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.div 
            ref={marqueeRef}
            className="flex items-center gap-16 py-4"
            animate={controls}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ x: 0 }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                whileHover={{ 
                  scale: 1.1, 
                  filter: "grayscale(0)",
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="w-[120px] h-[40px] flex items-center justify-center">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    width={120} 
                    height={40} 
                    className="object-contain h-10 md:h-12"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}