"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Server, HelpCircle } from "lucide-react"

export default function Custom404() {
  return (
    <div className="min-h-screen bg-[#080a1a] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative mx-auto w-48 h-48">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t-4 border-[#ff9800] opacity-20"
            ></motion.div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border-t-4 border-[#ff9800] opacity-40"
            ></motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Server size={64} className="text-[#ff9800]" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff9800] to-[#ff5500]"
        >
          404
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-4 text-white"
        >
          Sayfa Bulunamadı
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-slate-300 mb-8 max-w-lg mx-auto"
        >
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. 
          Endişelenmeyin, sunucularımız hala çalışıyor!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            asChild
            className="bg-[#ff9800] text-black hover:bg-[#ff7b00] font-medium rounded-full"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Ana Sayfaya Dön
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            className="border-[#1e2142] text-white hover:bg-[#1a1d3a] hover:text-white rounded-full"
          >
            <Link href="/service/cpanel-webhosting">
              <Server className="mr-2 h-4 w-4" />
              Hosting Paketleri
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="ghost" 
            className="text-white hover:bg-[#1a1d3a] hover:text-white rounded-full"
          >
            <Link href="/">
              <HelpCircle className="mr-2 h-4 w-4" />
              Destek
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <div className="h-20 bg-gradient-to-t from-[#0a0c1d] to-transparent"></div>
      </motion.div>
    </div>
  )
}