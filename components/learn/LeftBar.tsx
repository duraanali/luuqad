import { signOut } from "next-auth/react"
import Link from "next/link"
import type { ComponentProps } from "react"
import type { Tab } from "./BottomBar"
import { useBottomBarItems } from "./BottomBar"

const LeftBarMoreMenuSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width='46' height='46' viewBox='0 0 46 46' fill='none' {...props}>
      <circle
        cx='23'
        cy='23'
        r='19'
        fill='#CE82FF'
        stroke='#CE82FF'
        strokeWidth='2'
      />
      <circle cx='15' cy='23' r='2' fill='white' />
      <circle cx='23' cy='23' r='2' fill='white' />
      <circle cx='31' cy='23' r='2' fill='white' />
    </svg>
  )
}

export const LeftBar = ({ selectedTab }: { selectedTab: Tab | null }) => {
  const bottomBarItems = useBottomBarItems()

  return (
    <>
      <nav className=' left-bar fixed left-0 top-0 bottom-0 hidden flex-col gap-5 border-r-2 border-[#e5e5e5] bg-white p-3 md:flex c-min-lg:w-64 c-min-lg:p-5'>
        <Link
          href='/learn'
          className='ml-5 mb-5 mt-5 hidden text-4xl font-bold text-[#58CC02] c-min-lg:block'>
          luuqad
        </Link>
        <ul className='flex flex-col items-stretch gap-3'>
          {bottomBarItems.map((item) => {
            return (
              <li key={item.href} className='flex flex-1'>
                {item.name === selectedTab ? (
                  <Link
                    href={item.href}
                    className='flex grow items-center gap-3 rounded-xl border-2 border-[#84d8ff] bg-[#ddf4ff] py-1 px-2 text-sm tracking-widest font-bold uppercase text-blue-400'>
                    {item.icon}{" "}
                    <span className='sr-only c-min-lg:not-sr-only'>
                      {item.name}
                    </span>
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className='flex grow items-center gap-3 rounded-xl py-1 px-2 text-sm font-bold uppercase text-gray-500 tracking-widest hover:bg-gray-100'>
                    {item.icon}{" "}
                    <span className='sr-only c-min-lg:not-sr-only'>
                      {item.name}
                    </span>
                  </Link>
                )}
              </li>
            )
          })}
          <div
            className='relative flex grow cursor-default items-center gap-3 rounded-xl py-1 px-2 font-bold uppercase text-gray-400 hover:bg-gray-100'
            onClick={() => signOut()}
            role='button'
            tabIndex={0}>
            <LeftBarMoreMenuSvg />{" "}
            <button className=' hidden c-min-lg:inline text-left uppercase hover:bg-gray-100'>
              Logout
            </button>
          </div>
        </ul>
      </nav>
    </>
  )
}
