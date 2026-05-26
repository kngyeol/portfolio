import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { siteConfig } from '@/lib/portfolio-data'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: '김동열 | Robotics & Autonomous Driving Portfolio',
  description: siteConfig.description,
  keywords: ['로보틱스', '자율주행', 'ROS2', 'Nav2', 'Autoware', 'AI', '컴퓨터비전', '임베디드', 'FPGA', '포트폴리오'],
  authors: [{ name: '김동열', url: 'https://github.com/kngyeol' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'Kim Dongyeol Portfolio',
    type: 'website',
    locale: 'ko_KR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`scroll-smooth ${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
