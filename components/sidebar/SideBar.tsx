"use client"

import { usePathname } from "next/navigation"

import Link from "next/link"
import LuuqadIconChest from "../icons/LuuqadIconChest"
import LuuqadIconHome from "../icons/LuuqadIconHome"
import LuuqadIconMore from "../icons/LuuqadIconMore"
import LuuqadIconProfile from "../icons/LuuqadIconProfile"
import LuuqadIconShield from "../icons/LuuqadIconShield"
import LuuqadIconShop from "../icons/LuuqadIconShop"
import LuuqadIconTaH from "../icons/LuuqadIconTaH"

type Props = {}

const SideBar = (props: Props) => {
  {
    /* Get the current route */
  }
  const currentRoute = usePathname()

  return (
    <aside className=' c-max-lg:w-[88px] c-max-md:min-h-0 c-max-md:w-[100%] c-max-md:overflow-hidden c-max-md:min-w-full c-max-md:border-t-2  c-max-lg:min-h-full  max-w-[256px] min-h-full fixed bottom-0 w-full overflow-y-auto left-0 z-10 bg-white  px-4 border-gray-200  border-r-2  '>
      <div className=' aside-logo c-max-md:hidden c-max-lg:text-center text-4xl font-semibold  mx-1 text-green-600 py-6  '>
        <p className='c-max-lg:hidden'>Luuqad</p>
        <p className='c-min-lg:hidden  '>L</p>
      </div>
      <div className=' aside-icons-container c-max-md:flex c-max-md:justify-around c-max-md:gap-7 c-max-md:mx-0 mx-4  '>
        {/* Start Home-Each-Icon */}
        <div
          className={
            currentRoute === "/" || currentRoute === "/learner"
              ? "aside-icon-home bg-yellow-100 shadow-primary-green-1 shadow-border_2 -mx-4  rounded-xl my-2"
              : '"aside-icon-home  hover:bg-zinc-100    -mx-4  rounded-xl my-2 "'
          }>
          <Link href={"/learner"}>
            <span className='aside-icon_text flex c-max-lg:flex-col items-center gap-4 px-3 py-2'>
              <LuuqadIconHome width={30} />
              <span className=' c-max-lg:hidden  text-sm text-gray-500 font-bold  tracking-widest  '>
                LEARN
              </span>
            </span>
          </Link>
        </div>
        {/* End Home-Each-Icon */}
        {/* Start Letters-Each-Icon */}
        <div
          className={
            currentRoute === "/characters/"
              ? "aside-icon-home bg-yellow-100 shadow-primary-green-1 shadow-border_2 -mx-4  rounded-xl my-2"
              : '"aside-icon-home  hover:bg-zinc-100    -mx-4  rounded-xl my-2 "'
          }>
          <Link href={"/characters"}>
            <span className='aside-icon_text flex c-max-lg:flex-col items-center gap-4 px-3 py-2'>
              <LuuqadIconTaH className=' text-sky-400 ' width={30} />
              <span className=' c-max-lg:hidden  text-sm text-gray-500 font-bold  tracking-widest  '>
                LETTERS
              </span>
            </span>
          </Link>
        </div>
        {/* End Letters-Each-Icon */}
        {/* Start LeaderBoard-Each-Icon */}
        <div className='aside-icon-home hover:bg-zinc-100  -mx-4  rounded-xl my-2 '>
          <Link href={"#"}>
            <span className='aside-icon_text flex c-max-lg:flex-col items-center gap-4 px-3 py-2'>
              <LuuqadIconShield width={30} />
              <span className=' c-max-lg:hidden  text-sm text-gray-500 font-bold  tracking-widest  '>
                LEADERBOARDS
              </span>
            </span>
          </Link>
        </div>
        {/* End LeaderBoard-Each-Icon */}
        {/* Start Quests-Each-Icon */}
        <div className='aside-icon-home hover:bg-zinc-100  -mx-4  rounded-xl my-2 '>
          <Link href={"#"}>
            <span className='aside-icon_text flex c-max-lg:flex-col items-center gap-4 px-3 py-2'>
              <LuuqadIconChest width={30} />
              <span className=' c-max-lg:hidden  text-sm text-gray-500 font-bold  tracking-widest  '>
                QUESTS
              </span>
            </span>
          </Link>
        </div>
        {/* End Quests-Each-Icon */}
        {/* Start Shop-Each-Icon */}
        <div className='aside-icon-home hover:bg-zinc-100  -mx-4  rounded-xl my-2 '>
          <Link href={"#"}>
            <span className='aside-icon_text flex c-max-lg:flex-col items-center gap-4 px-3 py-2'>
              <LuuqadIconShop width={30} />
              <span className=' c-max-lg:hidden  text-sm text-gray-500 font-bold  tracking-widest  '>
                SHOP
              </span>
            </span>
          </Link>
        </div>
        {/* End Shop-Each-Icon */}
        {/* Start Profile-Each-Icon */}
        <div className='aside-icon-home hover:bg-zinc-100  -mx-4  rounded-xl my-2 '>
          <Link href={"#"}>
            <span className='aside-icon_text flex c-max-lg:flex-col items-center gap-4 px-3 py-2'>
              <LuuqadIconProfile width={30} />
              <span className=' c-max-lg:hidden  text-sm text-gray-500 font-bold  tracking-widest  '>
                PROFILE
              </span>
            </span>
          </Link>
        </div>
        {/* End Profile-Each-Icon */}
        {/* Start More-Each-Icon */}
        <div className='aside-icon-home c-max-md:hidden hover:bg-zinc-100  -mx-4  rounded-xl my-2 '>
          <Link href={"#"}>
            <span className='aside-icon_text flex c-max-lg:flex-col items-center gap-4 px-3 py-2'>
              <LuuqadIconMore width={30} />
              <span className=' c-max-lg:hidden  text-sm text-gray-500 font-bold  tracking-widest  '>
                MORE
              </span>
            </span>
          </Link>
        </div>
        {/* End More-Each-Icon */}
      </div>
    </aside>
  )
}

export default SideBar
