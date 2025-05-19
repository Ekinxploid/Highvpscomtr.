"use client"

import { Server, Shield, Globe, Database, Clock, Headset } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function NedenBiz() {
  return (
    <section className="py-16 md:py-24 bg-[#080a1a]">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="relative mb-4 inline-block text-3xl font-bold md:text-4xl">
            NEDEN host?
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            Güvenilirlik ve performans odaklı web hosting çözümlerimizle çevrimiçi varlığınızı güçlendirin.
          </p>
        </motion.div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-[#1e2142] bg-[#0f1128]/80 h-full hover:border-[#ff9800] transition-all duration-300">
              <CardHeader>
                <Server className="mb-2 h-10 w-10 text-[#ff9800]" />
                <CardTitle>Yüksek Performanslı Sunucular</CardTitle>
                <CardDescription className="text-slate-400">
                  En son nesil donanım ve SSD depolama ile desteklenen yıldırım hızında yükleme süreleri.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="border-[#1e2142] bg-[#0f1128]/80 h-full hover:border-[#ff9800] transition-all duration-300">
              <CardHeader>
                <Shield className="mb-2 h-10 w-10 text-[#ff9800]" />
                <CardTitle>Gelişmiş Güvenlik</CardTitle>
                <CardDescription className="text-slate-400">
                  DDoS koruması, kötü amaçlı yazılım taraması ve otomatik yedeklemeler ile sitenizi güvende tutun.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="border-[#1e2142] bg-[#0f1128]/80 h-full hover:border-[#ff9800] transition-all duration-300">
              <CardHeader>
                <Globe className="mb-2 h-10 w-10 text-[#ff9800]" />
                <CardTitle>Global CDN</CardTitle>
                <CardDescription className="text-slate-400">
                  Dünya çapında sunucularla içerik dağıtım ağı sayesinde daha hızlı içerik sunumu.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Card className="border-[#1e2142] bg-[#0f1128]/80 h-full hover:border-[#ff9800] transition-all duration-300">
              <CardHeader>
                <Database className="mb-2 h-10 w-10 text-[#ff9800]" />
                <CardTitle>Ölçeklenebilir Kaynaklar</CardTitle>
                <CardDescription className="text-slate-400">
                  Web siteniz büyüdükçe esnek kaynak tahsisi ile planınızı kolayca yükseltin.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Card className="border-[#1e2142] bg-[#0f1128]/80 h-full hover:border-[#ff9800] transition-all duration-300">
              <CardHeader>
                <Clock className="mb-2 h-10 w-10 text-[#ff9800]" />
                <CardTitle>%99.9 Çalışma Süresi</CardTitle>
                <CardDescription className="text-slate-400">
                  Sitenizin her zaman erişilebilir olmasını sağlayan yüksek çalışma süresi garantisi.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Card className="border-[#1e2142] bg-[#0f1128]/80 h-full hover:border-[#ff9800] transition-all duration-300">
              <CardHeader>
                <Headset className="mb-2 h-10 w-10 text-[#ff9800]" />
                <CardTitle>7/24 Teknik Destek</CardTitle>
                <CardDescription className="text-slate-400">
                  Uzman destek ekibimiz her zaman yardıma hazır, sorularınızı hızlıca yanıtlar.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
