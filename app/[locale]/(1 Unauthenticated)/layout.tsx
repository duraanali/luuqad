import { Navbar } from "@/components"
import Providers from "@/components/Providers"
import ToastContainerBar from "@/components/ToastContainerBar"
import Footer from "@/components/footer/Footer"
import type { Metadata } from "next"
import { Dosis } from "next/font/google"
import React from "react"
import "./globals.css"
import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"

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

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "so" }]
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  return (
    <html lang={locale} className={dosis.className}>
      <Providers>
        <body className={"flex flex-col justify-between min-h-screen"}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ToastContainerBar />
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </body>
      </Providers>
    </html>
  )
}
