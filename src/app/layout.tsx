import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// q: how to import Montserrat
import { Montserrat } from 'next/font/google'
import Header from './components/header'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const mons = Montserrat({ subsets: ['latin'] })

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
      <body className={mons.className}>
        <main className='font-mons antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
          <div className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html >
  )
}
