import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: '김동열 | 자율주행 / AI / 임베디드 엔지니어',
  description: 'Skyautonet 자율주행 인턴 출신. ROS/ROS2 기반 인지-판단-제어 파이프라인과 HILS/실주행 검증 경험. AI(CV)부터 임베디드, 백엔드까지 시스템 단위로 통합 가능한 엔지니어.',
  keywords: ['자율주행', 'ROS', 'ROS2', 'AI', '컴퓨터비전', '임베디드', 'FPGA', '포트폴리오', 'Autoware'],
  authors: [{ name: '김동열', url: 'https://github.com/kngyeol' }],
  openGraph: {
    title: '김동열 | 자율주행 / AI / 임베디드 엔지니어',
    description: 'Skyautonet 인턴 출신. ROS2 기반 자율주행, AI 컴퓨터비전, FPGA 임베디드까지 아우르는 풀스택 엔지니어',
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
