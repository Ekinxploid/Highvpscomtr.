"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Paketler() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="bg-[#080a1a] py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">PAKETLER</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            İhtiyacınıza uygun hosting paketlerimizden birini seçin. Tüm paketler ücretsiz SSL, 7/24 destek ve 30 gün
            para iade garantisi içerir.
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="flex items-center bg-[#131638] p-1 rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? "bg-[#ff9800] text-black" : "text-white"
              }`}
            >
              Aylık
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly ? "bg-[#ff9800] text-black" : "text-white"
              }`}
            >
              Yıllık (20% İndirim)
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-[#1e2142] bg-[#0f1128]/80 rounded-2xl overflow-hidden h-full flex flex-col">
              <CardHeader>
                <CardTitle>Başlangıç</CardTitle>
                <CardDescription className="text-slate-400">Kişisel web siteleri için</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₺{isYearly ? "79" : "99"}</span>
                  <span className="text-slate-400">/ay</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>1 Web Sitesi</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>10 GB SSD Depolama</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>Sınırsız Trafik</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>Ücretsiz SSL Sertifikası</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>7/24 Destek</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-[#ff9800] text-black hover:bg-[#ff7b00] font-medium rounded-full">Satın Al</Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="relative border-[#ff9800] bg-[#0f1128]/80 rounded-2xl overflow-hidden h-full transform scale-105 flex flex-col">
              <div className="absolute -top-1 left-0 right-0 mx-auto w-fit rounded-full bg-[#ff9800] px-4 py-1 text-xs font-bold text-black z-10">
                En Popüler
              </div>
              <CardHeader className="pt-6">
                <CardTitle>Premium</CardTitle>
                <CardDescription className="text-slate-400">Büyüyen işletmeler için</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₺{isYearly ? "159" : "199"}</span>
                  <span className="text-slate-400">/ay</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>Sınırsız Web Sitesi</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>50 GB SSD Depolama</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>Sınırsız Trafik</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>Ücretsiz SSL Sertifikası</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>1 Yıl Ücretsiz Domain</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>Öncelikli Destek</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-[#ff9800] text-black hover:bg-[#ff7b00] font-medium rounded-full">Satın Al</Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="border-[#1e2142] bg-[#0f1128]/80 rounded-2xl overflow-hidden h-full flex flex-col">
              <CardHeader>
                <CardTitle>Kurumsal</CardTitle>
                <CardDescription className="text-slate-400">Yüksek trafikli siteler için</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">₺{isYearly ? "319" : "399"}</span>
                  <span className="text-slate-400">/ay</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>Sınırsız Web Sitesi</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>100 GB SSD Depolama</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>Sınırsız Trafik</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>Ücretsiz SSL Sertifikası</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>1 Yıl Ücretsiz Domain</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>Ayrılmış Kaynaklar</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                    <span>Premium Destek</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full bg-[#ff9800] text-black hover:bg-[#ff7b00] font-medium rounded-full">Satın Al</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
