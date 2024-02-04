import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import './globals.css'

const mons = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aditya Raj',
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
        <main className='font-mons antialiased max-w-2xl mx-4 mt-4 sm:mx-auto'>
          <div className='flex-auto min-w-0 mt-6 flex flex-col px-2'>
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html >
  )
}
