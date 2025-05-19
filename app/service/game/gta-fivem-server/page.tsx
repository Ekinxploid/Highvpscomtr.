"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/navbar"

export default function GtaFivemServer() {
  const [isYearly, setIsYearly] = useState(false)
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#080a1a]">
      <Navbar />
      
      <section className="py-16 md:py-24 bg-[#0a0c1d]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">GTA V FiveM Sunucu Paketleri</h1>
            <p className="text-xl text-slate-300 mb-8">
              Yüksek performanslı ve özelleştirilebilir GTA V FiveM sunucuları
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#080a1a]">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">PAKETLER</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              İhtiyacınıza uygun GTA V FiveM sunucu paketlerimizden birini seçin. Tüm paketler 7/24 destek ve 30 gün
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
                  <CardTitle>Başlangıç Paketi</CardTitle>
                  <CardDescription className="text-slate-400">Küçük topluluklar için ideal</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₺{isYearly ? "159" : "199"}</span>
                    <span className="text-slate-400">/{isYearly ? "ay" : "ay"}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>32 Oyuncu Kapasitesi</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>4 GB RAM</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>50 GB SSD Disk</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>DDoS Koruması</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Kolay Mod Yükleme</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-red-500" />
                      <span className="text-slate-400">MySQL Veritabanı</span>
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
                  <CardTitle>Profesyonel Paket</CardTitle>
                  <CardDescription className="text-slate-400">Orta ölçekli topluluklar için ideal</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₺{isYearly ? "239" : "299"}</span>
                    <span className="text-slate-400">/{isYearly ? "ay" : "ay"}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>64 Oyuncu Kapasitesi</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>8 GB RAM</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>100 GB SSD Disk</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>DDoS Koruması</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Kolay Mod Yükleme</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>MySQL Veritabanı</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Özel Kontrol Paneli</span>
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
                  <CardTitle>Kurumsal Paket</CardTitle>
                  <CardDescription className="text-slate-400">Büyük topluluklar için ideal</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₺{isYearly ? "399" : "499"}</span>
                    <span className="text-slate-400">/{isYearly ? "ay" : "ay"}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>128 Oyuncu Kapasitesi</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>16 GB RAM</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>200 GB SSD Disk</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Gelişmiş DDoS Koruması</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Kolay Mod Yükleme</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>MySQL Veritabanı</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Özel Kontrol Paneli</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Öncelikli Teknik Destek</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Özel Script Desteği</span>
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

      <section className="py-16 md:py-24 bg-[#080a1a]">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="relative mb-4 inline-block text-3xl font-bold md:text-4xl">
              GTA V FiveM Sunucusu Kurmanız İçin Birkaç Neden
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-300">
              Yüksek performanslı donanım ve özelleştirilebilir yapısıyla FiveM sunucularımız size birçok avantaj sunar.
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
                  <CardTitle>Yüksek Performans</CardTitle>
                  <CardDescription className="text-slate-400">
                    NVMe SSD diskler ve yüksek frekans işlemciler ile sunucunuz maksimum performans ile çalışır, oyuncularınız lag yaşamaz.
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
                  <CardTitle>Kolay Yönetim</CardTitle>
                  <CardDescription className="text-slate-400">
                    Özel kontrol panelimiz ile sunucunuzu kolayca yönetin, modları tek tıkla yükleyin ve yapılandırın.
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
                  <CardTitle>DDoS Koruması</CardTitle>
                  <CardDescription className="text-slate-400">
                    Gelişmiş DDoS koruma sistemimiz ile sunucunuz her türlü saldırıya karşı güvende kalır, kesintisiz oyun deneyimi sunar.
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
                  <CardTitle>Özel Script Desteği</CardTitle>
                  <CardDescription className="text-slate-400">
                    Uzman ekibimiz, özel scriptlerinizin kurulumu ve yapılandırılması konusunda size destek olur, sunucunuzu benzersiz kılar.
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
                  <CardTitle>Yedekleme Sistemi</CardTitle>
                  <CardDescription className="text-slate-400">
                    Otomatik yedekleme sistemimiz ile verileriniz güvende kalır, herhangi bir sorun durumunda hızlıca geri yükleme yapabilirsiniz.
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
                  <CardTitle>7/24 Teknik Destek</CardTitle>
                  <CardDescription className="text-slate-400">
                    Uzman teknik destek ekibimiz, 7/24 yanınızda olup sunucunuzla ilgili her türlü sorununuzu çözer.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#080a1a]">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="relative mb-4 inline-block text-3xl font-bold md:text-4xl">
              SIKÇA SORULAN SORULAR
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-300">
              GTA V FiveM sunucuları hakkında merak ettiğiniz soruların cevapları
            </p>
          </motion.div>
          
          <motion.div 
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AccordionItem value="item-1" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">FiveM nedir ve nasıl çalışır?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    FiveM, GTA V için geliştirilmiş bir çok oyunculu mod platformudur. Rockstar Games'in resmi GTA Online sunucularından bağımsız olarak çalışır ve oyunculara özelleştirilmiş sunucularda oynama imkanı sunar. FiveM, oyun içi deneyimi geliştirmek için özel scriptler, modlar ve haritalar kullanmanıza olanak tanır.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <AccordionItem value="item-2" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">Sunucuma nasıl mod ve script ekleyebilirim?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Kontrol panelimiz üzerinden sunucunuza kolayca mod ve script ekleyebilirsiniz. Dosya yöneticisi aracılığıyla dosyalarınızı yükleyebilir veya FTP erişimi ile doğrudan sunucunuza bağlanabilirsiniz. Ayrıca, popüler modlar için tek tıkla kurulum seçeneğimiz de bulunmaktadır. Teknik destek ekibimiz, özel scriptlerinizin kurulumunda size yardımcı olabilir.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <AccordionItem value="item-3" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">Sunucum kaç oyuncuyu destekleyebilir?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Sunucu paketlerimiz, seçtiğiniz plana bağlı olarak 32, 64 veya 128 oyuncuyu destekler. Ancak, sunucunuzun gerçek performansı, kullandığınız modların ve scriptlerin kaynak tüketimine bağlı olarak değişebilir. Yüksek kaynak tüketen scriptler kullanıyorsanız, daha yüksek bir paket seçmenizi öneririz. İhtiyaçlarınıza göre paketinizi istediğiniz zaman yükseltebilirsiniz.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <AccordionItem value="item-4" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">Sunucum için MySQL veritabanı gerekli mi?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Birçok FiveM scripti ve modu, verileri saklamak için MySQL veritabanı kullanır. Özellikle roleplay sunucuları için MySQL veritabanı neredeyse zorunludur. Profesyonel ve Kurumsal paketlerimiz, MySQL veritabanı içerir. Başlangıç paketinde veritabanı bulunmaz, ancak ihtiyaç duyarsanız ek ücret karşılığında ekleyebilirsiniz.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <AccordionItem value="item-5" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">DDoS saldırılarına karşı nasıl korunuyorsunuz?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Tüm sunucularımız, gelişmiş DDoS koruma sistemleri ile korunmaktadır. Layer 3, 4 ve 7 seviyelerinde koruma sağlayan sistemimiz, saldırıları gerçek zamanlı olarak tespit eder ve engeller. Kurumsal paketimizde bulunan gelişmiş DDoS koruması, daha büyük ve karmaşık saldırılara karşı bile sunucunuzu güvende tutar. Koruma sistemimiz, oyun deneyimini etkilemeden arka planda çalışır.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <AccordionItem value="item-6" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">Sunucumu nasıl yönetebilirim?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Özel kontrol panelimiz üzerinden sunucunuzu kolayca yönetebilirsiniz. Kontrol paneli üzerinden sunucunuzu başlatabilir, durdurabilir, yeniden başlatabilir, dosyalarınızı yönetebilir, yedeklemelerinizi görüntüleyebilir ve geri yükleyebilirsiniz. Ayrıca, sunucu kaynaklarınızı gerçek zamanlı olarak izleyebilir ve performans istatistiklerini görüntüleyebilirsiniz. Txadmin entegrasyonu ile FiveM sunucunuzu doğrudan kontrol paneli üzerinden yönetebilirsiniz.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}