import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " text-black"}>
        <header>
          <Header />
        </header>
        <main className='pt-24'>
          {children}
        </main>
      </body>
    </html>
  )
}
