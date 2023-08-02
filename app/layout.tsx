import React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Dosis } from "next/font/google"
import { Navbar } from "@/components"
import AuthProvider from "@components/provider/AuthProvider"

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
          {/* Footer start */}
          <div className="flex flex-col items-center justify-center p-5 mb-0 bg-blue-200">
            <div className="flex flex-row items-center justify-center space-x-4">
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold">Footer Area</h3>
              </div>
            </div>
          </div>
          {/* Footer End */}
        </body>
      </AuthProvider>
    </html>
  )
}
