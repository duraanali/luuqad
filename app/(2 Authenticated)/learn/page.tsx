"use client"
import { BottomBar } from "@/components/learn/BottomBar"
import { LeftBar } from "@/components/learn/LeftBar"
import { RightBar } from "@/components/learn/RightBar"
import { TopBar } from "@/components/learn/TopBar"
import UnitSection from "@/components/learn/home/UnitSection"
import { type NextPage } from "next"
import React, { useEffect, useState } from "react"
import { useGetUnitsQuery } from "@/store/slices/UnitSlice"
import { useGetSectionsQuery } from "@/store/slices/SectionSlice"

// This component displays the units and sections for the user to learn
const Learn: NextPage = () => {
  const { data: unitz } = useGetUnitsQuery<any>()
  const { data: sections } = useGetSectionsQuery<any>()

  // TODO: Send "sectionCompletedStatus" to unitSection component, it could be "LOCKED" or "COMPLETE". Show "ACTIVE" only when the user hasn't started anything, only on the first one

  const [formattedData, setFormattedData] = useState<any>([])

  useEffect(() => {
    if (
      unitz?.units &&
      unitz.units.length > 0 &&
      sections?.sections &&
      sections.sections.length > 0
    ) {
      let unitNumber = 0
      const formattedUnits = unitz?.units.map((unit: any) => {
        const formattedSections = sections?.sections
          .filter((section: any) => section.unit_id === unit.id) // Assuming you have a way to link sections to units using an id
          .map((section: any) => ({
            id: section.id,
            type: "star",
            title: section.title,
          }))

        return {
          // there is no unitNumber, just create incrementing number
          unitNumber: (unitNumber += 1),
          description: unit.description,
          backgroundColor: "bg-[#58cc02]",
          textColor: "text-[#58cc02]",
          borderColor: "border-[#46a302]",
          sections: formattedSections,
        }
      })
      setFormattedData(formattedUnits)
    }
  }, [unitz, sections])

  return (
    <>
      <TopBar backgroundColor='bg-[#58cc02]' borderColor='border-[#46a302]' />
      <LeftBar selectedTab='Learn' />

      <div className='main-right flex justify-center gap-3 pt-14 sm:p-6 sm:pt-6 md:ml-24 c-max-tm:w-[100%] c-max-td:w-[812px]   c-min-lg:ml-64 c-min-lg:gap-12'>
        <div className='flex max-w-[592px] grow flex-col'>
          {formattedData && formattedData.length > 0 ? (
            formattedData.map((unit: any) => (
              <UnitSection unit={unit} key={unit.unitNumber} />
            ))
          ) : (
            <div className='flex justify-center items-center'>
              <div className='animate-pulse flex flex-col items-center w-full'>
                <div className='bg-gray-200 h-4 w-full py-12 rounded-lg mb-2'></div>
                <div className='bg-gray-200 h-4 w-full py-12 rounded-lg mb-2'></div>
                <div className='bg-gray-200 h-4 w-full py-12 rounded-lg mb-2'></div>
                <div className='bg-gray-200 h-4 w-full py-12 rounded-lg mb-2'></div>
              </div>
            </div>
          )}
        </div>
        <RightBar />
      </div>

      <div className='pt-[90px]'></div>
      <BottomBar selectedTab='Learn' />
    </>
  )
}

export default Learn
