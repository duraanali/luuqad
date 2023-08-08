"use client"
import React from "react"
import Link from "next/link"

interface UnitProps {
  id: number
  title: string
  description: string
  status: number
  created_at: string
  updated_at: string
}

const UnitCard = ({ title, description }: UnitProps) => {
  return (
    <Link href='/learn/quiz'>
      <div
        className={`bg-[#86cc05] p-4 rounded-lg shadow-[0px_4px_0px_0px_#38a169] cursor-pointer hover:bg-[#86cc05b3] transition-colors duration-200`}>
        <h3 className={`text-2xl font-black text-white`}>{title}</h3>
        <p className='text-white'>{description}</p>
        <div className={`bg-yellow-600 mt-4 rounded-full`}>
          <div
            className={`h-2 bg-yellow-200 rounded-full`}
            style={{ width: `${60}%` }}></div>
        </div>
      </div>
    </Link>
  )
}

type unitsProps = {
  units: any
}

const Units = ({ units }: unitsProps) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2'>
      {units?.units.map((lesson: any, index: number) => (
        <UnitCard key={index} {...lesson} />
      ))}
    </div>
  )
}

export default Units
