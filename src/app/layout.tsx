import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// q: how to import Montserrat
import { Montserrat } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const  mons = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'adistrim',
  description: `Aditya Raj's personal website`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mons.className}>{children}</body>
    </html>
  )
}
