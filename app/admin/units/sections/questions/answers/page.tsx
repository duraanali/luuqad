"use client"
import { Answers } from "@/components/admin"
import React from "react"
import axios from "axios"
import baseUrl from "@/utils/baseUrl"

const AllAnswers = () => {
  const [answers, setAnswers] = React.useState([])
  const [questions, setQuestions] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`${baseUrl}/api/units/questions/answers`)
      .then((res) => {
        setAnswers(res.data.answers)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get(`${baseUrl}/api/units/questions`)
      .then((res) => {
        setQuestions(res.data.questions)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const deleteAnswer = async (id: number) => {
    try {
      const res = await axios.delete(
        `${baseUrl}/api/units/questions/answers/delete/${id}`,
      )
      console.log(res)
      if (res.status == 200) {
        const newAnswers = answers.filter((answer : any) => answer.id !== id)
        setAnswers(newAnswers)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex-grow pl-5">
      <Answers
        answers={answers}
        deleteAnswer={deleteAnswer}
        questions={questions}
      />
    </div>
  )
}

export default AllAnswers
