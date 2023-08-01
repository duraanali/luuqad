"use client"
import Link from "next/link"

const Navbar = () => {
  return (
    <header>
      <div className="container flex items-center justify-between px-4 py-4 mx-auto md:py-6 ">
        <Logo />
        {/* Btn */}
        <Button text="Get Started" />
      </div>
    </header>
  )
}

export default Navbar

const Logo = () => {
  return (
    <>
      {/* logo icon .....*/}
      <Link
        href="/"
        className="text-2xl font-bold tracking-wider lowercase sm:text-3xl md:text-4xl text-primary-green-1">
        Luuqad
      </Link>
    </>
  )
}

const Button = ({ text }: { text: string }) => {
  return (
    <button
      onClick={() => (window.location.href = "/signup  ")}
      className="px-4 pt-3 pb-2 font-bold tracking-widest uppercase cursor-pointer text-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-2 hover:bg-green-500 bg-primary-green-1 text-primary-white-1 rounded-xl">
      <span>{text}</span>
    </button>
  )
}
