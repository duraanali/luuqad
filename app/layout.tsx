import { Navbar } from "@/components"
import Footer from "@/components/footer/Footer"
import AuthProvider from "@components/provider/AuthProvider"
import type { Metadata } from "next"
import { Dosis } from "next/font/google"
import React from "react"
import "./globals.css"

const dosis = Dosis({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin-ext"],
})

export const metadata: Metadata = {
  title: "LUUQAD",
  description: "Next Generation Language Learning Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dosis.className}>
      <AuthProvider>
        <body className={"flex flex-col justify-between min-h-screen gap-10"}>
          <Navbar />
          {children}
          <Footer/>
        </body>
      </AuthProvider>
    </html>
  )
}
