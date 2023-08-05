"use client"
import { Users } from "@/components/admin"
import React from "react"
import axios from "axios"
import baseUrl from "@/utils/baseUrl"

const AllUsers = () => {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`${baseUrl}/api/users`)
      .then((res) => {
        setUsers(res.data.users)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="flex-grow pl-5">
      <Users users={users} />
    </div>
  )
}

export default AllUsers
