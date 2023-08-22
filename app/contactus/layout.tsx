import { Navbar } from "@/components"
import Providers from "@/components/Providers"
import ToastContainerBar from "@/components/ToastContainerBar"
import Footer from "@/components/footer/Footer"
import type { Metadata } from "next"
import { Dosis } from "next/font/google"
import React from "react"
import "../../globals.css"


const dosis = Dosis({
  display: "swap",
  weight: ["500", "500", "600", "700"],
  style: "normal",
  subsets: ["latin-ext"],
})

export const metadata: Metadata = {
  title: "contact us",
  description: "Next Generation Language Learning Platform",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' >
      <Providers>
        <body className={"flex flex-col justify-between max-h-screen"}>
          <ToastContainerBar />
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
