import Link from "next/link"
import React from "react"
export default function Forget() {
  return (
    <div className="min-h-full flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm">
        <div>
          <h1 className="mt-20 text-center text-3xl font-extrabold">
            Forget password
          </h1>
          <p className="text-center mt-3 font-medium text-xl">
            We Will send you instructions on how to reset your password by email
          </p>
        </div>
        <div className="items-center flex flex-col justify-center gap-3 mt-8">
          <input
            type="email"
            autoComplete="none"
            required
            className="px-4 py-3 justify-center items-center appearance-none rounded-xl relative block w-96 px-3 py-2 border border-black-299 bg-gray-100 focus:outline-none ring-2 ring-gray-300"
            placeholder="Email Or Username"
          />
        </div>

        <div className="w-full flex flex-col items-center text-center justify-center mt-4 space-y-4">
          <Link
            href="/"
            className="w-96 h-12 px-4 pt-2 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]">
            SUBMIT
          </Link>
        </div>
      </div>
    </div>
  )
}
