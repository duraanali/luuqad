import Providers from "@/components/Providers"
import ToastContainerBar from "@/components/ToastContainerBar"
import type { Metadata } from "next"
import { Dosis } from "next/font/google"
import React from "react"
import "./globals.css"
import { redirect } from "next/navigation"

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (typeof window !== "undefined" && window.location.pathname === "/") {
    redirect("/learn")
  }
  return (
    <html lang='en' className={dosis.className}>
      <Providers>
        <body className={"flex flex-col justify-between p-6"}>
          <ToastContainerBar />
          {children}
        </body>
      </Providers>
    </html>
  )
}
