import React from "react"
import UnitSection_1 from "../../../components/Unit_1/UnitSection_1"

type Props = {}

const TimeLine = (props: Props) => {
  return (
    <div className=' unit-timeline-container c-max-md:max-w-full c-max-md:mt-0 c-max-md:mx-0 c-max-md:w-auto max-w-[592px]  w-3/4  mt-6 mx-5 mb-[84px] '>
      <UnitSection_1 />
      <UnitSection_1 />
      <UnitSection_1 />
      <UnitSection_1 />
    </div>
  )
}

export default TimeLine
