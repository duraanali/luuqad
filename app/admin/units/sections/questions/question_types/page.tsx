"use client"
import { QuestionTypes } from "@/components/admin"
import React from "react"
import axios from "axios"
import baseUrl from "@/utils/baseUrl"

const AllQuestionTypes = () => {
  const [question_types, setQuestionTypes] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`${baseUrl}/api/units/sections/questions/question_types`)
      .then((res) => {
        console.log(res.data)
        setQuestionTypes(res.data.questiontypes)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const deleteQuestionTypes = async (id: number) => {
    try {
      const res = await axios.delete(
        `${baseUrl}/api/units/sections/questions/question_types/delete/${id}`,
      )
      if (res.status == 200) {
        const newQuestion = question_types.filter(
          (question: any) => question.id !== id,
        )
        setQuestionTypes(newQuestion)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex-grow pl-5'>
      <QuestionTypes
        question_types={question_types}
        deleteQuestionTypes={deleteQuestionTypes}
      />
    </div>
  )
}

export default AllQuestionTypes
