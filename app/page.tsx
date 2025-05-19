import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Partnerler from "@/components/partnerler"
import Paketler from "@/components/paketler"
import NedenBiz from "@/components/neden-biz"
import KolayAdimlar from "@/components/kolay-adimlar"
import SSS from "@/components/sss"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0c1d] text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partnerler />
        <Paketler />
        <NedenBiz />
        <KolayAdimlar />
        <SSS />
      </main>
      <Footer />
    </div>
  )
}
