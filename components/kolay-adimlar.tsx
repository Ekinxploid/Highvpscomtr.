"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function KolayAdimlar() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="relative mb-4 inline-block text-3xl font-bold md:text-4xl">
            HERKES İÇİN KOLAY ADIMLAR
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            Web sitenizi kurmak hiç bu kadar kolay olmamıştı. Sadece birkaç basit adımda online olun.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          <motion.div 
            className="relative flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff9800] text-2xl font-bold text-black">
              1
            </div>
            <h3 className="mb-2 text-xl font-bold">Planınızı Seçin</h3>
            <p className="text-slate-300">İhtiyaçlarınıza uygun hosting paketini seçin.</p>
            <motion.div 
              className="absolute -right-6 top-8 hidden h-0.5 w-12 bg-[#ff9800] lg:block"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 48, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="relative flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff9800] text-2xl font-bold text-black">
              2
            </div>
            <h3 className="mb-2 text-xl font-bold">Domain Alın</h3>
            <p className="text-slate-300">Yeni bir domain alın veya mevcut domaininizi transfer edin.</p>
            <motion.div 
              className="absolute -right-6 top-8 hidden h-0.5 w-12 bg-[#ff9800] lg:block"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 48, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="relative flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff9800] text-2xl font-bold text-black">
              3
            </div>
            <h3 className="mb-2 text-xl font-bold">Sitenizi Kurun</h3>
            <p className="text-slate-300">Site kurucumuzu kullanarak veya uygulamalarımızı yükleyerek başlayın.</p>
            <motion.div 
              className="absolute -right-6 top-8 hidden h-0.5 w-12 bg-[#ff9800] lg:block"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 48, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff9800] text-2xl font-bold text-black">
              4
            </div>
            <h3 className="mb-2 text-xl font-bold">Yayına Alın</h3>
            <p className="text-slate-300">Sitenizi yayınlayın ve online dünyada yerinizi alın.</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button size="lg" className="bg-[#ff9800] text-black hover:bg-[#ff7b00] font-medium rounded-full">
            Hemen Başlayın
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
