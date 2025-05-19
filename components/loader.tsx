"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  if (!loading) return null;
  
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0c1d]"
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 mb-4">
          <Image 
            src="/server-5.png" 
            alt="Logo" 
            fill 
            className="object-contain"
          />
        </div>
      </div>
      
      <div className="absolute bottom-10 flex flex-col items-center">
        <div className="w-8 h-8 flex items-center justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full absolute"
            initial={{ x: 0, y: -10 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full absolute"
            initial={{ x: 7, y: -7 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.1 }}
          />
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full absolute"
            initial={{ x: 10, y: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full absolute"
            initial={{ x: 7, y: 7 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full absolute"
            initial={{ x: 0, y: 10 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          />
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full absolute"
            initial={{ x: -7, y: 7 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full absolute"
            initial={{ x: -10, y: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
          />
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full absolute"
            initial={{ x: -7, y: -7 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.7 }}
          />
        </div>
      </div>
    </motion.div>
  );
}