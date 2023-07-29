import './globals.css'
import type { Metadata } from 'next'
import { Varela_Round } from 'next/font/google'

const varela = Varela_Round({
  display: 'swap',
  weight: '400',
  style: 'normal',
  subsets: ['latin-ext'],
  
})

export const metadata: Metadata = {
  title: 'LUUQAD',
  description: 'Next Generation Language Learning Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={varela.className}>{children}</body>
    </html>
  )
}
