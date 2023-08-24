"use client"
import {
  MoonIcon,
  SunIcon
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const Navbar = () => {
  const path = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme();

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

        <div className="flex items-center space-x-3">
          <div
            className={`w-7 cursor-pointer transform transition-transform duration-300 ${theme === "dark" ? "rotate-0" : "rotate-180"
              }`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <MoonIcon className="w-7" />
            ) : (
              <SunIcon className="w-7" />
            )}
          </div> <Button
            text={path === "/login" ? "Sign Up" : "Login"}
            onClick={handleButtonClick}
          />
        </div>

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
        href='/'
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
