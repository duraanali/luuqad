"use client"
import { Units, SideBar } from "@/components"
import React from "react"
import { signOut } from "next-auth/react"
import { useGetUnitsQuery } from "@/store/slices/UnitSlice"

const Learn = () => {
  const { data: units } = useGetUnitsQuery()
  const callbackUrl = "/login"
  return (
    <div className=' flex flex-row'>
      <div className='pr-1 border-r-2 border-blue-100'>
        <SideBar signOut={signOut} callbackUrl={callbackUrl} />
      </div>
      <div className='flex-grow pl-5'>
        <Units units={units} />
      </div>
    </div>
  )
}

export default Learn
