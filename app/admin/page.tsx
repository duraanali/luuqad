"use client"
import { Units } from "@/components/admin"
import baseUrl from "@/utils/baseUrl"
import React from "react"
import axios from "axios"

const Learn = () => {
  const [units, setUnits] = React.useState<any[]>([])

  React.useEffect(() => {
    axios
      .get(`${baseUrl}/api/units`)
      .then((res) => {
        setUnits(res.data.units)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const deleteUnit = async (id: number) => {
    try {
      const res = await axios.delete(`${baseUrl}/api/units/delete/${id}`)
      console.log(res)
      if (res.status == 200) {
        const newUnit = units.filter((unit) => unit.id !== id)
        setUnits(newUnit)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex-grow pl-5">
      <Units units={units} deleteUnit={deleteUnit} />
    </div>
  )
}

export default Learn
