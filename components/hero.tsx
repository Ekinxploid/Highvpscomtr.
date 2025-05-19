"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Hero() {
    return(
        <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#131638]/20 via-transparent to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.h1 
                className="mb-6 text-4xl font-bold tracking-tight md:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Herkes için, <span className="text-[#ff9800]">ekonomik</span> ve{" "}
                <span className="text-[#ff9800]">performanslı</span> sunucular.
              </motion.h1>
              <motion.p 
                className="mb-8 text-lg text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Projelerinizin ihtiyacı olan performans yalnızca birkaç tık ötenizde. Külüstür sunuculardan kurtulma
                vakti!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button size="lg" className="bg-[#ff9800] text-black hover:bg-[#ff7b00] font-medium">
                  İncele
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/server-5.png"
                  alt="Sunucu Hizmetleri"
                  width={500}
                  height={400}
                  className="rounded-lg"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    )
}