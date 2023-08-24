"use client"
import React from "react"
import Link from "next/link"
import { usePathname, useRouter, useParams } from "next/navigation"

const Navbar = () => {
  const path = usePathname()
  const router = useRouter()

  const handleButtonClick = () => {
    if (path === "/login") {
      router.push("/signup")
    } else if (path === "/signup") {
      router.push("/login")
    } else {
      router.push("/login")
    }
  }

  return (
    <header>
      <div className='container flex flex-row items-center justify-between px-12 mb-12 mx-auto py-6'>
        <Logo />
        {/* Btn */}
        <Button
          text={path === "/login" ? "Sign Up" : "Login"}
          onClick={handleButtonClick}
        />
      </div>
    </header>
  )
}

export default Navbar

const Logo = () => {
  const { locale } = useParams()

  return (
    <>
      {/* logo icon .....*/}
      <Link
        href={`/${locale}`}
        className='text-2xl font-bold tracking-wider lowercase sm:text-3xl md:text-4xl text-primary-green-1'>
        Luuqad
      </Link>
    </>
  )
}

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className='px-4 pt-3 pb-2 font-bold tracking-widest uppercase cursor-pointer text-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-2 hover:bg-green-500 bg-primary-green-1 text-primary-white-1 rounded-xl'>
      <span>{text}</span>
    </button>
  )
}
