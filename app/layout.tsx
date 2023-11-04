import './globals.css'
import './components/styles/Utility.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'SAITAMA CLONE: BY IBN',
  description: 'Powered By NextJS 13 App Router.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar component */}
        <Navbar />
        <main>
          {children}
        </main>

        {/* Footer Component */}

      </body>
    </html>
  )
}
