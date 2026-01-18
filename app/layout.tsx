import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import Script from 'next/script'
import { siteConfig } from '@/app/consts'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name}`,
  },
  description: `${siteConfig.description}`,
  keywords: ["AI Research", "Machine Learning", "Deep Learning", "Data Science", "Portfolio"],
  openGraph: {
    title: `${siteConfig.name}`,
    description: `${siteConfig.description}`,
    url: `${siteConfig.BASE_URL}`,
    siteName: "Eneotu",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Eneotu share image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}`,
    description: `${siteConfig.description}`,
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>

        <Header />
        
        {children}

        <Script
          defer
          src="https://umamiweb.vercel.app/script.js"
          data-website-id="10903b7f-751d-4e38-900a-a561a73b47d6"
          strategy="beforeInteractive"
        />

        <Footer />
      </body>
    </html>
  )
}
