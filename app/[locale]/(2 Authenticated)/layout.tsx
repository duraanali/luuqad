import Providers from "@/components/Providers"
import ToastContainerBar from "@/components/ToastContainerBar"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Dosis } from "next/font/google"
import { redirect } from "next/navigation"
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
  if (typeof window !== "undefined" && window.location.pathname === "/") {
    redirect(`/${locale}/learn`)
  }
  return (
    <html lang={locale} className={dosis.className}>
      <Providers>
        <body className={"flex flex-col justify-between"}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ToastContainerBar />
            {children}
            <Analytics />
          </NextIntlClientProvider>
        </body>
      </Providers>
    </html>
  )
}
