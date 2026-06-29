import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

import { Sidebar } from "@/components/ui/Sidebar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { GlobalTelemetry } from "@/components/ui/GlobalTelemetry";

export const metadata: Metadata = {
  title: 'iJournel System',
  description: 'Brutalist interactive experience',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased cursor-default`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col relative" suppressHydrationWarning>
        <CustomCursor />
        <Sidebar />
        <GlobalTelemetry />
        {children}
      </body>
    </html>
  )
}
