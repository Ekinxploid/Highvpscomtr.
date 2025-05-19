"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function SSS() {
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
            SIKÇA SORULAN SORULAR
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            Hosting hizmetlerimiz hakkında en çok sorulan soruların cevaplarını burada bulabilirsiniz.
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
                <AccordionTrigger className="text-left">host ile nasıl başlarım?</AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  host ile başlamak çok kolay. İhtiyacınıza uygun bir hosting paketi seçin, ödemenizi yapın ve hemen
                  hesabınız aktif olsun. Yeni başlayanlar için kurulum rehberimiz ve 7/24 destek ekibimiz size yardımcı
                  olacaktır.
                </AccordionContent>
              </AccordionItem>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <AccordionItem value="item-2" className="border-[#1e2142]">
                <AccordionTrigger className="text-left">Mevcut web sitemi taşıyabilir miyim?</AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Evet, mevcut web sitenizi host'a ücretsiz olarak taşıyabilirsiniz. Teknik ekibimiz, sitenizin
                  sorunsuz bir şekilde taşınmasını sağlayacaktır. Sadece destek ekibimizle iletişime geçmeniz yeterli.
                </AccordionContent>
              </AccordionItem>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <AccordionItem value="item-3" className="border-[#1e2142]">
                <AccordionTrigger className="text-left">Hangi ödeme yöntemlerini kabul ediyorsunuz?</AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Kredi kartı, banka havalesi, EFT ve online ödeme sistemleri dahil olmak üzere çeşitli ödeme yöntemlerini
                  kabul ediyoruz. Ödemelerinizi güvenli bir şekilde yapabilirsiniz.
                </AccordionContent>
              </AccordionItem>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <AccordionItem value="item-4" className="border-[#1e2142]">
                <AccordionTrigger className="text-left">İade politikanız nedir?</AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Tüm hosting paketlerimizde 30 gün para iade garantisi sunuyoruz. Hizmetimizden memnun kalmazsanız, ilk
                  30 gün içinde iade talep edebilirsiniz. Domain kayıtları iade kapsamına girmemektedir.
                </AccordionContent>
              </AccordionItem>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <AccordionItem value="item-5" className="border-[#1e2142]">
                <AccordionTrigger className="text-left">Destek ekibinizle nasıl iletişime geçebilirim?</AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  Destek ekibimize 7/24 canlı sohbet, e-posta veya telefon yoluyla ulaşabilirsiniz. Müşteri panelinizden
                  de destek talebi oluşturabilirsiniz. Uzman ekibimiz en kısa sürede size yardımcı olacaktır.
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
