import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

import { siteConfig } from "@/config/site"
import { Header } from "@/components/header"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })
const neoGram = localFont({
  src: [
    {
      path: "../../public/fonts/NeoGram-Black.ttf",
      weight: "700",
      style: "normal"
    },
  ],
  display: "swap",
  variable: "--font-neogram"
})

const appUrl = process.env.NODE_ENV === "production" ? siteConfig.links.website : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: `Jay Eazy's Cold Shouldah Clash - ${siteConfig.title}`,
    template:`%s - ${siteConfig.shortTitle}`,
  },
  description: siteConfig.description,
  twitter: {
    title: siteConfig.title,
    card: "summary_large_image",
    creator: "@paragonfgc",
    site: "@paragonfgc",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    url: siteConfig.links.website,
    siteName: siteConfig.title,
    images: [
      {
        url: new URL("/images/og-image.png", appUrl).toString(),
        width: 1200,
        height: 630,
        alt: `Jay Eazy's Cold Shouldah Clash - ${siteConfig.title}`,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={cn("min-h-screen overflow-x-hidden", inter.className, neoGram.variable)}>
        <Header />
        <main className='flex flex-col min-h-screen flex-1 w-full mx-auto container max-w-[1600px] px-0'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
