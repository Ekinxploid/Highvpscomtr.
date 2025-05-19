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

export default function PleskWebHosting() {
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Plesk Web Hosting Paketleri</h1>
            <p className="text-xl text-slate-300 mb-8">
              Kullanıcı dostu Plesk kontrol paneli ile web sitenizi kolayca yönetin
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
              İhtiyacınıza uygun Plesk hosting paketlerimizden birini seçin. Tüm paketler 7/24 destek ve 30 gün
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
                  <CardDescription className="text-slate-400">Kişisel web siteleri için ideal</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₺{isYearly ? "45" : "55"}</span>
                    <span className="text-slate-400">/{isYearly ? "ay" : "ay"}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>5 GB SSD Disk Alanı</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Sınırsız Trafik</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>5 E-posta Hesabı</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>1 Veritabanı</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Plesk Obsidian Kontrol Paneli</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-red-500" />
                      <span className="text-slate-400">Ücretsiz SSL</span>
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
                  <CardDescription className="text-slate-400">Kurumsal web siteleri için ideal</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₺{isYearly ? "79" : "99"}</span>
                    <span className="text-slate-400">/{isYearly ? "ay" : "ay"}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>20 GB SSD Disk Alanı</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Sınırsız Trafik</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Sınırsız E-posta Hesabı</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>10 Veritabanı</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Plesk Obsidian Kontrol Paneli</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Ücretsiz SSL</span>
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
                  <CardDescription className="text-slate-400">Yüksek trafikli siteler için ideal</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₺{isYearly ? "127" : "159"}</span>
                    <span className="text-slate-400">/{isYearly ? "ay" : "ay"}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>50 GB SSD Disk Alanı</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Sınırsız Trafik</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Sınırsız E-posta Hesabı</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Sınırsız Veritabanı</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Plesk Obsidian Kontrol Paneli</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#ff9800]" />
                      <span>Ücretsiz SSL</span>
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
              Plesk Web Hosting Sahibi Olmanız İçin Birkaç Neden
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-300">
              Kullanıcı dostu arayüzü ve güçlü özellikleriyle Plesk web hosting çözümlerimiz size birçok avantaj sunar.
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
                  <CardTitle>Modern Arayüz</CardTitle>
                  <CardDescription className="text-slate-400">
                    Plesk Obsidian'ın modern ve sezgisel arayüzü ile web sitenizi kolayca yönetin, dosya yükleyin ve e-posta hesaplarınızı oluşturun.
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
                  <CardTitle>WordPress Toolkit</CardTitle>
                  <CardDescription className="text-slate-400">
                    Plesk'in WordPress Toolkit özelliği ile WordPress sitelerinizi kolayca kurun, güncelleyin ve yönetin.
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
                  <CardTitle>Docker Desteği</CardTitle>
                  <CardDescription className="text-slate-400">
                    Plesk'in Docker entegrasyonu ile konteyner tabanlı uygulamaları kolayca çalıştırın ve yönetin.
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
                  <CardTitle>Git Entegrasyonu</CardTitle>
                  <CardDescription className="text-slate-400">
                    Plesk'in Git entegrasyonu ile kod değişikliklerinizi doğrudan sunucunuza dağıtın ve yönetin.
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
                  <CardTitle>SSL Sertifikası Yönetimi</CardTitle>
                  <CardDescription className="text-slate-400">
                    Let's Encrypt ile ücretsiz SSL sertifikalarını kolayca kurun ve yönetin, sitenizi güvenli hale getirin.
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
                  <CardTitle>Güvenlik Koruması</CardTitle>
                  <CardDescription className="text-slate-400">
                    Plesk'in Advisor ve güvenlik taraması özellikleri ile web sitenizi güvende tutun ve potansiyel tehditleri önceden tespit edin.
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
              Plesk hosting hizmetlerimiz hakkında en çok sorulan soruların cevaplarını burada bulabilirsiniz.
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
                  <AccordionTrigger className="text-left">Plesk nedir ve neden tercih etmeliyim?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Plesk, web hosting yönetimi için kullanılan modern bir kontrol panelidir. Kullanıcı dostu arayüzü sayesinde
                    teknik bilgi gerektirmeden web sitenizi, e-posta hesaplarınızı, veritabanlarınızı ve dosyalarınızı kolayca
                    yönetmenizi sağlar. WordPress Toolkit, Git entegrasyonu ve Docker desteği gibi gelişmiş özellikleri ile
                    web sitenizin yönetimini basitleştirir ve geliştirici dostu bir ortam sunar.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <AccordionItem value="item-2" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">Plesk ile WordPress kurulumu nasıl yapılır?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Plesk'te WordPress kurulumu oldukça basittir. Plesk hesabınıza giriş yapın, WordPress Toolkit'i açın
                    ve "Install" düğmesine tıklayın. Gerekli bilgileri (site adı, kullanıcı adı, şifre vb.) girdikten sonra
                    kurulumu başlatın. İşlem birkaç dakika içinde tamamlanacak ve WordPress siteniz kullanıma hazır olacaktır.
                    WordPress Toolkit ayrıca otomatik güncelleme, güvenlik taraması ve yedekleme gibi özellikler de sunar.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <AccordionItem value="item-3" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">Plesk'in cPanel'den farkı nedir?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Plesk ve cPanel, her ikisi de popüler web hosting kontrol panelleridir, ancak bazı önemli farklılıkları vardır.
                    Plesk, daha modern bir arayüze sahiptir ve Windows ve Linux sunucularında çalışabilir. cPanel ise sadece Linux
                    sunucularında çalışır. Plesk, WordPress Toolkit, Git entegrasyonu ve Docker desteği gibi gelişmiş özellikler sunar
                    ve geliştirici odaklı bir yaklaşıma sahiptir. Ayrıca Plesk, tek bir ekrandan hem sunucu hem de web sitesi yönetimi
                    sağlarken, cPanel bu işlevleri WHM ve cPanel olarak ayırır.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <AccordionItem value="item-4" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">Paketler arasında nasıl geçiş yapabilirim?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Hosting paketleri arasında geçiş yapmak için müşteri panelinize giriş yapın ve "Hizmetlerim" bölümünden
                    ilgili hosting paketini seçin. "Yükselt/Düşür" seçeneğine tıklayarak yeni paketinizi seçebilirsiniz.
                    Yükseltme işlemi genellikle anında gerçekleşir ve ek ücret mevcut paketinizin kalan süresi oranında
                    hesaplanır. Paket düşürme işlemleri ise genellikle mevcut dönem sonunda gerçekleşir.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <AccordionItem value="item-5" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">Plesk'in Git entegrasyonu nasıl kullanılır?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Plesk'in Git entegrasyonunu kullanmak için öncelikle Plesk kontrol panelinize giriş yapın ve "Git" uzantısını
                    etkinleştirin. Ardından, web sitenizin yönetim sayfasına gidin ve "Git" sekmesini seçin. Burada yeni bir
                    repository oluşturabilir veya mevcut bir repository'yi klonlayabilirsiniz. Repository'nizi bağladıktan sonra,
                    kod değişikliklerinizi doğrudan Plesk üzerinden çekebilir (pull) ve web sitenize dağıtabilirsiniz (deploy).
                    Bu özellik, geliştirme sürecinizi hızlandırır ve versiyon kontrolü sağlar.
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