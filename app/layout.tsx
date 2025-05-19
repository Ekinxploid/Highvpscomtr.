import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Host",
  description: "Host",
  icons: {
    icon: [
      { url: "/server-5.png", sizes: "32x32" },
      { url: "/server-5.png", sizes: "16x16" }
    ],
    shortcut: [{ url: "/server-5.png" }],
    apple: [{ url: "/server-5.png" }],
    other: [
      {
        rel: "icon",
        type: "image/png",
        url: "/server-5.png",
      },
    ],
  },
};


export const viewport: Viewport = {
  themeColor: "#0a0c1d",
  width: "device-width",
  initialScale: 1,
}

import Loader from "@/components/loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/server-5.png" type="image/png" />
        <link rel="shortcut icon" href="/server-5.png" type="image/png" />
      </head>
      <body>
        <Loader />
        {children}
      </body>
    </html>
  );
}
