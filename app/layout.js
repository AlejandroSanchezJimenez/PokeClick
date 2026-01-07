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

export const metadata = {
  title: 'PokeClicker',
  description: 'Click and collect!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main
          className='flex flex-col items-center justify-center min-h-screen
      bg-[linear-gradient(10deg,white_50%,#7c3aed_50%,#9d4edd_65%,#c084fc_80%,#7c3aed_100%)] animate-lava-lamp transition-colors duration-500'
        >
          {children}
        </main>
      </body>
    </html>
  )
}
