import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoSuds - Smart Refill Solutions',
  description: 'Eco-friendly vending solutions for a sustainable future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  )
}

