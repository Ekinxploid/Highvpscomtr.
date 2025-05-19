# Host

Web sitesi barındırma ve oyun sunucusu çözümleri sunan modern, responsive bir web hosting platformu.

## 🚀 Özellikler

- **Modern Arayüz**: Şık karanlık tema ve akıcı animasyonlar
- **Responsive Tasarım**: Tüm cihaz boyutlarına tam uyumlu
- **Çoklu Hosting Hizmetleri**:
  - Web Hosting (cPanel, Plesk)
  - Oyun Sunucuları (Minecraft, CS:GO, GTA V FiveM, ARK)
- **İnteraktif Bileşenler**: Dinamik navigasyon, fiyatlandırma geçişleri ve daha fazlası
- **Performans Odaklı**: Optimal performans için Next.js ile geliştirilmiş

## 💻 Teknoloji Altyapısı

- **Framework**: [Next.js](https://nextjs.org/)
- **Stil**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Bileşenleri**: [shadcn/ui](https://ui.shadcn.com/)
- **Animasyonlar**: [Framer Motion](https://www.framer.com/motion/)
- **İkonlar**: [Lucide Icons](https://lucide.dev/)

## 🛠️ Kurulum & Başlangıç

1. Repoyu klonlayın
   ```bash
   git clone https://github.com/erslly/hosting-site.git
   ```

2. Proje dizinine gidin
   ```bash
   cd hosting-site
   ```

3. Bağımlılıkları yükleyin
   ```bash
   npm install
   # veya
   yarn install
   ```

4. Geliştirme sunucusunu çalıştırın
   ```bash
   npm run dev
   # veya
   yarn dev
   ```

5. Sonucu görmek için tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın

## 🏗️ Proje Yapısı

```
hosting-site/
├── app/                     # Next.js App Router
│   ├── layout.tsx           # Ana düzen
│   ├── page.tsx             # Ana sayfa
│   ├── service/             # Hizmet sayfaları
│   │   ├── cpanel-webhosting/
│   │   ├── game/
│   │   │   ├── ark-server/
│   │   │   ├── csgo-server/
│   │   │   ├── gta-fivem-server/
│   │   │   └── minecraft-server/
│   │   └── plesk-webhosting/
│   └── support/             # Destek sayfaları
├── components/              # Yeniden kullanılabilir bileşenler
│   ├── ui/                  # shadcn/ui'den UI bileşenleri
│   ├── footer.tsx           # Alt bilgi bileşeni
│   ├── hero.tsx             # Hero bölümü
│   ├── kolay-adimlar.tsx    # Kolay adımlar bölümü
│   ├── mobile-menu.tsx      # Mobil navigasyon
│   ├── navbar.tsx           # Navigasyon çubuğu
│   ├── neden-biz.tsx        # Neden biz bölümü
│   ├── paketler.tsx         # Paketler bölümü
│   ├── partnerler.tsx       # Partnerler bölümü
│   └── sss.tsx              # SSS bölümü
├── lib/                     # Yardımcı fonksiyonlar
├── public/                  # Statik dosyalar
└── styles/                  # Global stiller
```

## 🌐 Dağıtım (Deployment)

Bu proje kolayca [Vercel](https://vercel.com/) veya Next.js uygulamalarını destekleyen diğer hosting platformlarına deploy edilebilir.

```bash
npm run build
# veya
yarn build
```

## 📱 Mobil Uyumluluk

- Tüm ekran boyutlarına responsive tasarım
- Dokunmatik cihazlar için optimize edilmiş kullanıcı arayüzü
- Mobil cihazlarda hızlı yükleme için optimize edilmiş


## 👥 Tarafından Geliştirildi

- [Erslly](https://erslly.xyz)

## 🙏 Teşekkürler

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
