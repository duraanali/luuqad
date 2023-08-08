import Providers from "@/components/Providers"
import ToastContainerBar from "@/components/ToastContainerBar"
import SideBar from "@/components/sidebar/SideBar"
import type { Metadata } from "next"
import { Dosis } from "next/font/google"
import { redirect } from "next/navigation"
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
        <body className={"flex flex-col justify-between"}>
          <ToastContainerBar />
          <section className='dashboard-container c-max-lg:flex c-max-md:min-w-max c-max-lg:flex-col  '>
            <SideBar />
            <div className='c-max-md:pl-[0px] c-max-md:gap-0 c-min-lg:pl-[256px] c-max-lg:pl-[88px] '>
              {children}
            </div>
          </section>
        </body>
      </Providers>
    </html>
  )
}
