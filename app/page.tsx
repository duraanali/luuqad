"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
export default function Home() {
  return (
    <div>
      {/* Hero start */}
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="mb-12 sm:mb-0 sm:mr-8">
          <Image
            src="/images/home.png"
            alt="Hero area image"
            width={450}
            height={300}
          />
        </div>
        <div className="text-center sm:w-1/2">
          <h3 className="text-4xl font-bold text-gray-600">
            The free, fun, and effective way to learn a language!
          </h3>
          <div className="flex flex-col items-center justify-center mt-8 space-y-4">
            <Link
              href="/signup"
              className="w-4/5 h-12 px-2 py-3 text-base tracking-widest rounded-xl bg-[#58CC02] text-white font-bold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#38a169]">
              GET STARTED
            </Link>
            <Link
              href="/login"
              className="w-4/5 h-12 px-4 py-2 text-blue-400 text-base tracking-widest rounded-xl bg-white font-bold border-2 border-[#e2e8f0] hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#e2e8f0]">
              I ALREADY HAVE AN ACCOUNT
            </Link>
          </div>
        </div>
      </div>
      {/* Hero End */}
    </div>
  )
}
