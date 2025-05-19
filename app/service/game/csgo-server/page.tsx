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

export default function CSGOServer() {
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">CS:GO Sunucu Paketleri</h1>
            <p className="text-xl text-slate-300 mb-8">
              Yüksek performanslı ve özelleştirilebilir CS:GO sunucuları
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
              İhtiyacınıza uygun CS:GO sunucu paketlerimizden birini seçin. Tüm paketler 7/24 destek ve 30 gün
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
                  <CardDescription className="text-slate-400">Küçük sunucular için ideal</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₺{isYearly ? "119" : "149"}</span>
                    <span className="text-slate-400">/{isYearly ? "ay" : "ay"}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>12 Oyuncu Kapasitesi</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>128 Tick Rate</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>2 GB RAM</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>DDoS Koruması</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Temel Eklentiler</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-red-500" />
                      <span className="text-slate-400">Özel Modlar</span>
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
                  <CardDescription className="text-slate-400">Orta ölçekli sunucular için ideal</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₺{isYearly ? "199" : "249"}</span>
                    <span className="text-slate-400">/{isYearly ? "ay" : "ay"}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>24 Oyuncu Kapasitesi</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>128 Tick Rate</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>4 GB RAM</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>DDoS Koruması</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Gelişmiş Eklentiler</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Özel Modlar</span>
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
                  <CardTitle>Turnuva Paketi</CardTitle>
                  <CardDescription className="text-slate-400">Turnuvalar ve büyük sunucular için ideal</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₺{isYearly ? "319" : "399"}</span>
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
                      <span>128 Tick Rate</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>8 GB RAM</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Gelişmiş DDoS Koruması</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Premium Eklentiler</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Özel Modlar</span>
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
                      <span>Turnuva Modu</span>
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
              CS:GO Sunucusu Kurmanız İçin Birkaç Neden
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-300">
              Yüksek performanslı donanım ve özelleştirilebilir yapısıyla CS:GO sunucularımız size birçok avantaj sunar.
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
                  <CardTitle>128 Tick Rate</CardTitle>
                  <CardDescription className="text-slate-400">
                    Tüm sunucularımız 128 tick rate ile çalışır, bu da oyuncularınıza daha akıcı ve hassas bir oyun deneyimi sunar.
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
                  <CardTitle>Düşük Ping</CardTitle>
                  <CardDescription className="text-slate-400">
                    Türkiye'de bulunan sunucularımız sayesinde oyuncularınız düşük ping ile lag yaşamadan oyun oynayabilir.
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
                  <CardTitle>Özel Eklentiler</CardTitle>
                  <CardDescription className="text-slate-400">
                    Knife, Retakes, Executes, Surf, KZ, Bhop gibi popüler modları ve eklentileri tek tıkla kurabilirsiniz.
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
                  <CardTitle>Kolay Yönetim</CardTitle>
                  <CardDescription className="text-slate-400">
                    Özel kontrol panelimiz ile sunucunuzu kolayca yönetin, haritaları ve eklentileri tek tıkla değiştirin.
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
              CS:GO sunucuları hakkında merak ettiğiniz soruların cevapları
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
                  <AccordionTrigger className="text-left">CS:GO sunucuma nasıl özel modlar ekleyebilirim?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Kontrol panelimiz üzerinden sunucunuza kolayca özel modlar ekleyebilirsiniz. Popüler modlar için tek tıkla kurulum seçeneğimiz bulunmaktadır. Ayrıca, FTP erişimi ile kendi özel modlarınızı da yükleyebilirsiniz. Teknik destek ekibimiz, özel modların kurulumunda size yardımcı olabilir.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <AccordionItem value="item-2" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">128 tick rate nedir ve neden önemlidir?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Tick rate, sunucunun saniyede kaç kez oyun durumunu güncellediğini belirtir. 128 tick rate, sunucunun saniyede 128 kez güncelleme yapması anlamına gelir. Bu, oyuncuların hareketlerinin ve atışlarının daha doğru bir şekilde kaydedilmesini sağlar. Valve'ın resmi sunucuları 64 tick rate ile çalışırken, bizim sunucularımız 128 tick rate ile çalışır, bu da daha akıcı ve hassas bir oyun deneyimi sunar.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <AccordionItem value="item-3" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">Sunucuma kaç kişi bağlanabilir?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Sunucu paketlerimiz, seçtiğiniz plana bağlı olarak 12, 24 veya 32 oyuncuyu destekler. CS:GO'nun standart 5v5 rekabetçi modu için 10 oyuncu yeterlidir, ancak deathmatch veya casual modları için daha fazla oyuncu kapasitesi gerekebilir. İhtiyaçlarınıza göre paketinizi istediğiniz zaman yükseltebilirsiniz.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <AccordionItem value="item-4" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">Sunucuma özel haritalar yükleyebilir miyim?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Evet, kendi oluşturduğunuz veya indirdiğiniz özel haritaları sunucunuza yükleyebilirsiniz. Kontrol panelimiz üzerinden veya FTP erişimi ile haritalarınızı kolayca yükleyebilirsiniz. Ayrıca, Workshop haritalarını da sunucunuza ekleyebilirsiniz. Teknik destek ekibimiz, harita yükleme konusunda size yardımcı olabilir.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <AccordionItem value="item-5" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">Turnuva düzenlemek için sunucunuzu kullanabilir miyim?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Evet, sunucularımız turnuva düzenlemek için idealdir. Turnuva Paketi, özellikle turnuvalar için optimize edilmiştir ve GOTV, demo kaydetme, eşleşme istatistikleri gibi özellikler içerir. Ayrıca, ESL, FACEIT veya ESEA gibi platformlarla entegrasyon için gerekli eklentileri de sunuyoruz. Turnuva düzenlemek için teknik destek ekibimizden yardım alabilirsiniz.
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