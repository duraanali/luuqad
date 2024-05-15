"use client"
import { Sections } from "@/components/admin"
import React from "react"
import baseUrl from "@/utils/baseUrl"
import axios from "axios"

const AllSections = () => {
  const [sections, setSections] = React.useState([])
  const [units, setUnits] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`${baseUrl}/api/units/sections`)
      .then((res) => {
        setSections(res.data.sections)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get(`${baseUrl}//api/units`)
      .then((res) => {
        setUnits(res.data.units)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const deleteSection = async (id: number) => {
    try {
      const res = await axios.delete(
        `${baseUrl}/api/units/sections/delete/${id}`,
      )
      if (res.status == 200) {
        const newSection = sections.filter((section: any) => section.id !== id)
        setSections(newSection)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex-grow pl-5'>
      <Sections
        sections={sections}
        deleteSection={deleteSection}
        units={units}
      />
    </div>
  )
}

export default AllSections
