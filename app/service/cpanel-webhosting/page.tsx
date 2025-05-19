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

export default function CpanelWebHosting() {
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">cPanel Web Hosting Paketleri</h1>
            <p className="text-xl text-slate-300 mb-8">
              Kullanıcı dostu cPanel kontrol paneli ile web sitenizi kolayca yönetin
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
              İhtiyacınıza uygun cPanel hosting paketlerimizden birini seçin. Tüm paketler 7/24 destek ve 30 gün
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
                    <span className="text-3xl font-bold">₺{isYearly ? "39" : "49"}</span>
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
                      <span>cPanel Kontrol Paneli</span>
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
                    <span className="text-3xl font-bold">₺{isYearly ? "71" : "89"}</span>
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
                      <span>cPanel Kontrol Paneli</span>
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
                    <span className="text-3xl font-bold">₺{isYearly ? "119" : "149"}</span>
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
                      <span>cPanel Kontrol Paneli</span>
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
              cPanel Web Hosting Sahibi Olmanız İçin Birkaç Neden
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-300">
              Kullanıcı dostu arayüzü ve güçlü özellikleriyle cPanel web hosting çözümlerimiz size birçok avantaj sunar.
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
                  <CardTitle>Kullanıcı Dostu Arayüz</CardTitle>
                  <CardDescription className="text-slate-400">
                    cPanel'in sezgisel arayüzü ile web sitenizi kolayca yönetin, dosya yükleyin ve e-posta hesaplarınızı oluşturun.
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
                  <CardTitle>Tek Tıkla Uygulama Kurulumu</CardTitle>
                  <CardDescription className="text-slate-400">
                    WordPress, Joomla, Drupal gibi popüler CMS'leri Softaculous ile tek tıkla kurun ve yönetin.
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
                  <CardTitle>Gelişmiş E-posta Özellikleri</CardTitle>
                  <CardDescription className="text-slate-400">
                    Profesyonel e-posta hesapları oluşturun, yönlendirme ayarlarını yapın ve spam koruması ile güvende kalın.
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
                  <CardTitle>Otomatik Yedekleme</CardTitle>
                  <CardDescription className="text-slate-400">
                    Düzenli otomatik yedeklemeler ile verilerinizi güvende tutun ve gerektiğinde kolayca geri yükleyin.
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
                  <CardTitle>Detaylı İstatistikler</CardTitle>
                  <CardDescription className="text-slate-400">
                    Awstats ve Webalizer ile web sitenizin performansını izleyin, ziyaretçi davranışlarını analiz edin.
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
              cPanel hosting hizmetlerimiz hakkında en çok sorulan soruların cevaplarını burada bulabilirsiniz.
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
                  <AccordionTrigger className="text-left">cPanel nedir ve neden tercih etmeliyim?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    cPanel, web hosting yönetimi için kullanılan popüler bir kontrol panelidir. Kullanıcı dostu arayüzü sayesinde
                    teknik bilgi gerektirmeden web sitenizi, e-posta hesaplarınızı, veritabanlarınızı ve dosyalarınızı kolayca
                    yönetmenizi sağlar. Sezgisel tasarımı ve kapsamlı özellikleri ile web sitenizin yönetimini basitleştirir.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <AccordionItem value="item-2" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">cPanel ile WordPress kurulumu nasıl yapılır?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    cPanel'de WordPress kurulumu oldukça basittir. cPanel hesabınıza giriş yapın, Softaculous uygulamasını bulun
                    ve WordPress'i seçin. Gerekli bilgileri (site adı, kullanıcı adı, şifre vb.) girdikten sonra "Kur" düğmesine
                    tıklayın. İşlem birkaç dakika içinde tamamlanacak ve WordPress siteniz kullanıma hazır olacaktır.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <AccordionItem value="item-3" className="border-[#1e2142]">
                  <AccordionTrigger className="text-left">E-posta hesaplarımı nasıl yönetebilirim?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    cPanel'de e-posta hesaplarınızı "E-posta Hesapları" bölümünden yönetebilirsiniz. Buradan yeni hesaplar
                    oluşturabilir, mevcut hesapları düzenleyebilir, şifreleri değiştirebilir ve e-posta yönlendirme ayarlarını
                    yapabilirsiniz. Ayrıca webmail üzerinden doğrudan e-postalarınıza erişebilir veya hesaplarınızı harici
                    e-posta istemcilerine (Outlook, Thunderbird vb.) bağlayabilirsiniz.
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
                  <AccordionTrigger className="text-left">Web sitemi başka bir hosting sağlayıcısından nasıl taşırım?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Web sitenizi başka bir hosting sağlayıcısından taşımak için destek ekibimizle iletişime geçebilirsiniz.
                    Teknik ekibimiz, sitenizi ücretsiz olarak taşıyacaktır. Alternatif olarak, mevcut hosting hesabınızdan
                    bir yedek alabilir ve cPanel'in "Yedek Sihirbazı" veya "Site Yayıncısı" aracını kullanarak dosyalarınızı
                    ve veritabanlarınızı kendiniz de aktarabilirsiniz. Taşıma işlemi sırasında herhangi bir sorun yaşarsanız,
                    7/24 destek ekibimiz size yardımcı olmaktan memnuniyet duyacaktır.
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