import type { Metadata } from 'next'
import Header from './components/header'
import Footer from './components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aditya Raj',
  description: `I am a 3rd-year BTech Computer Science & Engineering Student at JKLU, Jaipur, and also an associate-alumni of IIT Gandhinagar, on a journey to becoming a Software Engineer. I have a keen interest in aviation and tech.`,
  keywords:
    "Aditya Raj, aditya raj, aditya, raj, adistrim, Adistrim, ADISTRIM, portfolio, aditya portfolio, adistrim portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/me.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
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
