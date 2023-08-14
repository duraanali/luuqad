import React from "react"
import Link from "next/link"
import languages from "@/utils/languages"
import { GuidebookSvg } from "@/components/SVGs"

const UnitHeader = ({
  unitNumber,
  description,
  backgroundColor,
  borderColor,
}: {
  unitNumber: number
  description: string
  backgroundColor: `bg-${string}`
  borderColor: `border-${string}`
}) => {
  const language = languages.filter((lang) => lang.code === "en")[0]
  return (
    <article
      className={[
        "max-w-2xl text-white py-2 sm:rounded-xl",
        backgroundColor,
      ].join(" ")}>
      <header className='flex items-center justify-between gap-4 p-4'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl font-bold'>Unit {unitNumber}</h2>
          <p className='text-lg'>{description}</p>
        </div>
        <Link
          href={`learn/guidebook/${language.code}/${unitNumber}`}
          className={[
            "flex items-center gap-3 rounded-2xl border-2 border-b-4 p-3 transition hover:text-gray-100",
            borderColor,
          ].join(" ")}>
          <GuidebookSvg />
          <span className='sr-only font-bold uppercase lg:not-sr-only'>
            Guidebook
          </span>
        </Link>
      </header>
    </article>
  )
}

export default UnitHeader
