import { Navbar } from "@/components"
import type { Metadata } from "next"
import { Dosis } from "next/font/google"
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
      <body className={"flex flex-col justify-between min-h-screen gap-10"}>
        <Navbar />
        {/*<div className="">
          <div className="container mx-auto">
            * Header start *
            <div className="flex flex-row items-center justify-between w-600 p-7">
              <Link href="/">
                {" "}
                <h2 className="text-3xl text-[#58CC02] tracking-widest font-black">
                  LUUQAD
                </h2>
              </Link>
              <Link
                href="/signup"
                className="w-90 h-10 px-4 py-3 text-sm tracking-widest rounded-xl bg-[#58CC02] text-white font-bold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#38a169]">
                GET STARTED
              </Link>
            </div>
            * Header end  *
      </div>
    </div>*/}
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
    </html>
  )
}
