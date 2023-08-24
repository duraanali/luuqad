import { FireSvg, PowerButtonSvg } from "@/components/SVGs"
import Link from "next-intl/link"
import type { ComponentProps } from "react"
import React from "react"
import { useGetPointsQuery } from "@/store/slices/PointSlice"
import { signOut } from "next-auth/react"
import { useParams } from "next/navigation"

const EmptyFireTopBarSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width='25' height='30' viewBox='0 0 25 30' fill='none' {...props}>
      <g opacity='0.2'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13.9697 2.91035C13.2187 1.96348 11.7813 1.96348 11.0303 2.91035L7.26148 7.66176L4.83362 6.36218C4.61346 6.24433 4.1221 6.09629 3.88966 6.05712C2.72329 5.86056 2.04098 6.78497 2.04447 8.03807L2.06814 16.5554C2.02313 16.9355 2 17.322 2 17.7137C2 23.2979 6.70101 27.8248 12.5 27.8248C18.299 27.8248 23 23.2979 23 17.7137C23 15.3518 22.1591 13.1791 20.7498 11.4581L13.9697 2.91035ZM11.7198 13.1888C12.0889 12.6861 12.8399 12.6861 13.209 13.1888L15.7324 16.6249C16.5171 17.4048 17 18.4679 17 19.6396C17 22.0329 14.9853 23.973 12.5 23.973C10.0147 23.973 8 22.0329 8 19.6396C8 18.6017 8.37893 17.649 9.01085 16.9029C9.0252 16.8668 9.04457 16.8315 9.06935 16.7978L11.7198 13.1888Z'
          fill='black'
        />
      </g>
    </svg>
  )
}

export const TopBar = ({
  backgroundColor = "bg-[#58cc02]",
  borderColor = "border-[#46a302]",
}: {
  backgroundColor?: `bg-${string}`
  borderColor?: `border-${string}`
}) => {
  const { data: points } = useGetPointsQuery<any>()
  const totalPoints = points?.points.reduce(
    (accumulator: any, currentValue: any) => {
      return accumulator + currentValue.points
    },
    0,
  )
  const streak = totalPoints || 0
  const params = useParams()

  return (
    <header className='fixed z-20 h-[58px] w-full sm:z-0'>
      <div
        className={`relative flex h-full w-full items-center justify-between border-b-2 px-[10px] transition duration-500 md:hidden ${borderColor} ${backgroundColor}`}>
        {params.locale == "so" ? (
          <Link
            href='/learn'
            locale='en'
            className='relative flex cursor-pointer bg-blue-400 items-center gap-2 rounded-xl px-6 py-2 font-bold uppercase text-white hover:bg-blue-600'>
            {/* <Flag language={language} width={45} /> */}
            <div>EN</div>
          </Link>
        ) : (
          <Link
            href='/learn'
            locale='so'
            className='relative flex cursor-pointer bg-blue-500 items-center gap-2 rounded-xl px-6 py-2 font-bold uppercase text-white hover:bg-blue-400'>
            {/* <Flag language={language} width={45} /> */}
            <div>SO</div>
          </Link>
        )}
        <button
          className='flex items-center gap-2 font-bold text-white'
          aria-label='Toggle streak menu'>
          {streak > 0 ? <FireSvg /> : <EmptyFireTopBarSvg />}{" "}
          <span className={streak > 0 ? "text-white" : "text-black opacity-20"}>
            {streak}
          </span>
        </button>
        <button
          className='cursor-pointer'
          onClick={() => signOut({ callbackUrl: "/login" })}>
          <PowerButtonSvg
            role='button'
            tabIndex={0}
            aria-label='Toggle more menu'
          />
        </button>
      </div>
    </header>
  )
}
